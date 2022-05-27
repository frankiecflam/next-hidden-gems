import styles from "./GemmerNotFound.module.css";

const GemmerNotFound = ({ queryId }) => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.heading}>
        Sorry! No gemmers with <span className={styles.queryId}>{queryId}</span>{" "}
        has been found!
      </h1>
    </div>
  );
};

export default GemmerNotFound;
