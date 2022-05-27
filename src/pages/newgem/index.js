import styles from "./index.module.css";
import getAuthToken from "../../utils/helpers/getAuthToken";
import getCurrentUserId from "../../utils/helpers/getCurrentUserId";
import NewGemForm from "../../components/NewGem/NewGemForm";
import getUserData from "../../utils/helpers/getUserData";

const NewGem = ({ gemmer }) => {
  return (
    <section className={styles.newgem}>
      <NewGemForm gemmer={gemmer} />
    </section>
  );
};

export default NewGem;

export async function getServerSideProps(context) {
  const authToken = getAuthToken(context);

  const currentUserId = await getCurrentUserId(authToken);
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
  const gemmer = await getUserData(currentUserId);

  return {
    props: {
      gemmer: gemmer,
    },
  };
}
