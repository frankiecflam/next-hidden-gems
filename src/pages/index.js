import styles from "./index.module.css";
import HomeHero from "../components/Home/HomeHero";
import Masonry from "../components/Masonry/Masonry";

const Home = () => {
  return (
    <section className={styles.home}>
      <HomeHero />
      {/* <Masonry /> */}
    </section>
  );
};

export default Home;
