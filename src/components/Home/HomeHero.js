import styles from "./HomeHero.module.css";
import { Hero_Section_Gallery } from "../../assets/images";
import DiscoverBtn from "../Buttons/DiscoverBtn";

const HomeHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.textContent}>
        <h1 className={styles.heading}>
          discover <span className={styles.headingHighlight}>hidden gems</span>
          <br />
          from people all over the world
        </h1>
        <p className={styles.subHeading}>
          <span>To inspire</span>
          <span>Be inspired</span>
        </p>
        <DiscoverBtn />
      </div>
      <img src={Hero_Section_Gallery.src} className={styles.image} />
    </div>
  );
};

export default HomeHero;
