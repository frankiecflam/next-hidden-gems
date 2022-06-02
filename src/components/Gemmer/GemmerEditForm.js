import styles from "./GemmerEditForm.module.css";
import useFileReader from "../../utils/hooks/useFileReader";

import SubmitBtn from "../Buttons/SubmitBtn";
import { useState, forwardRef } from "react";
import updateGemmerData from "../../utils/helpers/updateGemmerData";
import uploadImageToFirebase from "../../utils/helpers/uploadImageToFirebase";
import { useRouter } from "next/router";
import popoutGemmerDbKey from "../../utils/helpers/popoutGemmerDbKey";
import Image from "next/image";

const NewGemmerProfilePicture = forwardRef(({ fileDataURL }, ref) => {
  return (
    <div ref={ref}>
      <Image
        src={fileDataURL}
        className={styles.profilePicture}
        alt="gemmer's new profile image"
        width={150}
        height={150}
      />
    </div>
  );
});

NewGemmerProfilePicture.displayName = "NewGemmerProfilePicture";

const GemmerEditForm = ({ gemmer, onCloseEdit }) => {
  const { username, bio, gemmerDbKey, profileImage } = gemmer;
  const { file, fileDataURL, handleFileChange } = useFileReader(profileImage);
  const [enteredUsername, setEnteredUsername] = useState(username);
  const [enteredBio, setEnteredBio] = useState(bio);
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Clone the existing object and pop out gemmerDbKey
    const modifiedGemmer = popoutGemmerDbKey(gemmer);

    const data = {
      ...modifiedGemmer,
      profileImage: file
        ? await uploadImageToFirebase(file, "gemmers")
        : profileImage,
      username: enteredUsername,
      bio: enteredBio,
    };

    await updateGemmerData(data, gemmerDbKey);

    // To force a reload of the current page with newly-fetched data from DB
    const { gemmerId } = router.query;
    router.push(`/gemmer/${gemmerId}`);
    onCloseEdit();
  };

  const handleUsernameChange = (e) => {
    setEnteredUsername(e.target.value);
  };

  const handleBioChange = (e) => {
    setEnteredBio(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.pictureFormControl}>
        <NewGemmerProfilePicture fileDataURL={fileDataURL} />
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
          placeholder="username"
          className={styles.textInput}
          onChange={handleUsernameChange}
          value={enteredUsername}
          required
        />
        <textarea
          cols="50"
          rows="10"
          placeholder="bio"
          onChange={handleBioChange}
          value={enteredBio}
          className={styles.textInput}
        />
        <SubmitBtn className={styles.btn} />
      </div>
    </form>
  );
};

export default GemmerEditForm;
