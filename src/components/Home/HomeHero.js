import styles from "./HomeHero.module.css";
import Hero_Section_Gallery from "../../assets/images/Hero-section-gallery-img.webp";
import DiscoverBtn from "../Buttons/DiscoverBtn";
import { forwardRef } from "react";
import Image from "next/image";

const HeroSectionImage = forwardRef(({ image }, ref) => {
  return (
    <div ref={ref}>
      <Image
        src={image}
        width={2160}
        height={2987}
        className={styles.image}
        alt="hero section's background image"
      />
    </div>
  );
});

HeroSectionImage.displayName = "HeroSectionImage";

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
      <HeroSectionImage image={Hero_Section_Gallery.src} />
    </div>
  );
};

export default HomeHero;
