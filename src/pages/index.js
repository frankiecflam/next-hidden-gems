import styles from "./Index.module.css";
import HomeHero from "../components/Home/HomeHero";

const Home = () => {
  return (
    <section className={styles.home}>
      <HomeHero />
    </section>
  );
};

export default Home;
