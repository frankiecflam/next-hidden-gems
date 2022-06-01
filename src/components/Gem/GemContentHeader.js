import styles from "./GemContentHeader.module.css";
import Link from "next/link";

const GemContentHeader = ({ author }) => {
  return (
    <header className={styles.header}>
      <Link href={`/gemmer/${author.id}`}>
        <img className={styles.profileImage} src={author.profileImage} />
      </Link>
      <Link href={`/gemmer/${author.id}`}>
        <p className={styles.authorName}>{author.username}</p>
      </Link>
    </header>
  );
};

export default GemContentHeader;
