import styles from "./IndexPage.module.css";
import getAuthToken from "../../utils/helpers/getAuthToken";
import getUserIdByToken from "../../utils/helpers/getUserIdByToken";
import NewGemForm from "../../components/NewGem/NewGemForm";
import getUserData from "../../utils/helpers/getUserData";
import getAllCategories from "../../utils/helpers/getCategories";
import Head from "next/head";
import { Fragment } from "react";

const NewGem = ({ gemmer, categories }) => {
  return (
    <Fragment>
      <Head>
        <title>Hidden Gems — New Gem</title>
        <meta
          name="description"
          content="Share a new hidden gem that surprises people."
        />
      </Head>
      <section className={styles.newgem}>
        <NewGemForm gemmer={gemmer} categories={categories} />
      </section>
    </Fragment>
  );
};

export default NewGem;

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
  const gemmer = await getUserData(currentUserId);

  const categories = await getAllCategories();

  return {
    props: {
      gemmer,
      categories,
      currentUserId,
    },
  };
}
