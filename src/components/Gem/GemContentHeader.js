import styles from "./GemContentHeader.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const GemContentImage = React.forwardRef(({ image, href }, ref) => {
  return (
    <a ref={ref} href={href}>
      <Image
        className={styles.profileImage}
        src={image}
        alt="author's profile image"
        width={60}
        height={60}
      />
    </a>
  );
});

GemContentImage.displayName = "GemContentImage";

const GemContentHeader = ({ author }) => {
  return (
    <header className={styles.header}>
      <Link href={`/gemmer/${author.id}`}>
        <GemContentImage
          image={author.profileImage}
          href={`/gemmer/${author.id}`}
        />
      </Link>
      <Link href={`/gemmer/${author.id}`}>
        <p className={styles.authorName}>{author.username}</p>
      </Link>
    </header>
  );
};

export default GemContentHeader;
