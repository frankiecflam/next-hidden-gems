import styles from "./index.module.css";
import CollectionHeader from "../../components/Collection/CollectionHeader";
import getAuthToken from "../../utils/helpers/getAuthToken";
import getCurrentUserId from "../../utils/helpers/getCurrentUserId";

const Collection = () => {
  return (
    <section className={styles.collection}>
      <CollectionHeader />
    </section>
  );
};

export default Collection;

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

  return {
    props: {},
  };
}
