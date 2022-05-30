import styles from "./NewGemForm.module.css";
import SubmitBtn from "../Buttons/SubmitBtn";
import useFileReader from "../../utils/hooks/useFileReader";
import uploadImageToFirebase from "../../utils/helpers/uploadImageToFirebase";
import updateGemmerData from "../../utils/helpers/updateGemmerData";
import popoutGemmerDbKey from "../../utils/helpers/popoutGemmerDbKey";
import { useState } from "react";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import categoryIdForAll from "../../utils/constants/categoryIdForAll";

const NewGemForm = ({ gemmer, categories }) => {
  const { file, fileDataURL, handleFileChange } = useFileReader();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("default");

  const { username, profileImage, id, gemmerDbKey } = gemmer;
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if no image has been uploaded
    if (!file) return;
    const image = await uploadImageToFirebase(file, "gems");

    // Create a new gem
    const gemId = id + v4();
    const gem = {
      id: gemId,
      title,
      description,
      category,
      image,
      createdOn: new Date(Date.now()),
      createdBy: id,
    };

    const createGemResponse = await fetch("/api/creategem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gem),
    });

    if (!createGemResponse.ok) return;

    // update gemmer's gems
    const modifiedGemmerObj = popoutGemmerDbKey(gemmer);
    // Parse gems into an array first
    let updatedGems = JSON.parse(gemmer.gems);
    updatedGems.push(gemId);

    const updatedGemmerData = {
      ...modifiedGemmerObj,
      gems: JSON.stringify(updatedGems),
    };

    const updateGemmerDataResponse = await updateGemmerData(
      updatedGemmerData,
      gemmerDbKey
    );

    if (!updateGemmerDataResponse) return;

    router.push("/");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <h1 className={styles.heading}>new gem</h1>
      <div className={styles.formBody}>
        <div className={styles.gemmer}>
          {profileImage && (
            <img className={styles.gemmerImg} src={profileImage} />
          )}
          <p className={styles.gemmerName}>{username}</p>
        </div>
        <div className={styles.fileUpload}>
          <img className={styles.filePreview} src={fileDataURL} />
          <input
            type="file"
            accept="image/*"
            className={styles.fileInput}
            onChange={handleFileChange}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Title"
          className={`${styles.fullGrid} ${styles.titleInput}`}
          value={title}
          onChange={handleTitleChange}
          required
        />
        <textarea
          rows="10"
          cols="50"
          placeholder="Write a description..."
          className={`${styles.fullGrid} ${styles.descriptionInput}`}
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        <select
          className={`${styles.fullGrid} ${styles.categoryInput}`}
          onChange={handleCategoryChange}
          value={category}
          required
        >
          <option value={"default"} disabled>
            Please select a category
          </option>

          {categories
            .filter((cat) => cat.id !== categoryIdForAll)
            .map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
        </select>
        <SubmitBtn className={`${styles.btn} ${styles.fullGrid}`} />
      </div>
    </form>
  );
};

export default NewGemForm;
