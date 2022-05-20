import styles from "./GemmerEditForm.module.css";
import { useState, useEffect } from "react";

import SubmitBtn from "../Buttons/SubmitBtn";

const GemmerEditForm = ({ gemmer }) => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(gemmer.image);

  const { username, bio } = gemmer;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <form className={styles.form}>
      <div className={styles.pictureFormControl}>
        <img src={fileDataURL} className={styles.profilePicture} />
        <input
          type="file"
          className={styles.inputPicture}
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className={styles.textFormControl}>
        <input
          type="text"
          defaultValue={username}
          placeholder="username"
          className={styles.textInput}
        />
        <textarea
          cols="50"
          rows="10"
          placeholder="bio"
          defaultValue={bio}
          className={styles.textInput}
        />
        <SubmitBtn className={styles.btn} />
      </div>
    </form>
  );
};

export default GemmerEditForm;
