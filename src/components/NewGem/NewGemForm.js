import styles from "./NewGemForm.module.css";
import SubmitBtn from "../Buttons/SubmitBtn";

const NewGemForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <h1 className={styles.heading}>new gem</h1>
      <div className={styles.formBody}>
        <div className={styles.gemmer}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className={styles.gemmerImg}
          />
          <p className={styles.gemmerName}>frankielam</p>
        </div>
        <input type="file" accept="image/*" className={styles.fileInput} />
        <input
          type="text"
          placeholder="Title"
          className={`${styles.fullGrid} ${styles.titleInput}`}
        />
        <textarea
          rows="10"
          cols="50"
          placeholder="Write a description..."
          className={`${styles.fullGrid} ${styles.descriptionInput}`}
        />
        <select
          defaultValue={"default"}
          className={`${styles.fullGrid} ${styles.categoryInput}`}
        >
          <option value={"default"} disabled>
            Please select a category
          </option>
          <option value={"fashion"}>Fashion</option>
          <option value={"sports"}>Sports</option>
          <option value={"travel"}>travel</option>
          <option value={"scenery"}>scenery</option>
        </select>
        <SubmitBtn className={`${styles.btn} ${styles.fullGrid}`} />
      </div>
    </form>
  );
};

export default NewGemForm;
