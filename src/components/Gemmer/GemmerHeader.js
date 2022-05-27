import styles from "./GemmerHeader.module.css";

import GemmerInfo from "./GemmerInfo";
import GemmerEditForm from "./GemmerEditForm";
import { useState } from "react";

const GemmerHeader = ({ gemmer, isSameUser }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm((prevState) => !prevState);
  };

  const handleEditFormSubmit = (newData) => {
    
  };

  return (
    <header className={styles.header}>
      {!showEditForm && (
        <GemmerInfo
          gemmer={gemmer}
          isSameUser={isSameUser}
          onEditClick={handleEditClick}
        />
      )}
      {showEditForm && (
        <GemmerEditForm gemmer={gemmer} onCloseEdit={handleEditClick} />
      )}
    </header>
  );
};

export default GemmerHeader;
