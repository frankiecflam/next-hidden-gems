import styles from "./GemContentHeader.module.css";

const GemContentHeader = ({ author }) => {
  return (
    <header className={styles.header}>
      <img className={styles.profileImage} src={author.profileImage} />
      <p className={styles.authorName}>{author.username}</p>
    </header>
  );
};

export default GemContentHeader;
