import styles from "./index.module.css";
import { useRouter } from "next/router";
import GemmerHeader from "../../../components/Gemmer/GemmerHeader";
import getAuthToken from "../../../utils/helpers/getAuthToken";
import getUserIdByToken from "../../../utils/helpers/getUserIdByToken";
import getUserData from "../../../utils/helpers/getUserData";
import getGemsByUser from "../../../utils/helpers/getGemsByUser";
import Masonry from "../../../components/Masonry/Masonry";
import getAllUsers from "../../../utils/helpers/getAllUsers";
import GemmerNotFound from "../../../components/Gemmer/GemmerNotFound";

const GemmerDetails = ({
  queryIdValid,
  queryId,
  currentUserId,
  gemmer,
  gems,
  users,
}) => {
  if (!queryIdValid) {
    return (
      <section className={styles.gemmer}>
        <GemmerNotFound queryId={queryId} />
      </section>
    );
  }

  const { gemmerId } = useRouter().query;
  const isSameUser = gemmerId === currentUserId;

  return (
    <section className={styles.gemmer}>
      <GemmerHeader gemmer={gemmer} isSameUser={isSameUser} />
      <Masonry gems={gems} users={users} gemmer={gemmer} />
    </section>
  );
};

export default GemmerDetails;

export async function getServerSideProps(context) {
  const authToken = getAuthToken(context);
  const currentUserId = await getUserIdByToken(authToken);

  // Redirect if failed to authenticate
  // If currentUserId is not found, then authToken will be considered as invalid by Firebase
  if (!currentUserId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const { gemmerId } = context.query;
  const gemmer = await getUserData(gemmerId);

  // if gemmer is not found with queryId, then gemmerId is incorrently provided in URL

  if (!gemmer) {
    return {
      props: {
        queryId: gemmerId,
        queryIdValid: false,
      },
    };
  }

  const gems = await getGemsByUser(gemmerId);
  const users = await getAllUsers();

  return {
    props: {
      queryIdValid: true,
      currentUserId,
      gemmer,
      gems,
      users,
    },
  };
}
