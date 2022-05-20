import styles from "./index.module.css";

import NewGemForm from "../../components/NewGem/NewGemForm";

const NewGem = () => {
  return (
    <section className={styles.newgem}>
      <NewGemForm />
    </section>
  );
};

export default NewGem;
