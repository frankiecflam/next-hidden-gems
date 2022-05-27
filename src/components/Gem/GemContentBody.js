import styles from "./GemContentBody.module.css";

const GemContentBody = ({ item }) => {
  const { createdOn } = item;
  const date = new Date(createdOn);
  const locale = navigator.language;

  const formattedDate = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);

  return (
    <div className={styles.body}>
      <p className={styles.date}>{formattedDate}</p>
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.description}>{item.description}</p>
    </div>
  );
};

export default GemContentBody;
