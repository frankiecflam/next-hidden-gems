import styles from "./GemmerHeader.module.css";

import GemmerInfo from "./GemmerInfo";
import GemmerEditForm from "./GemmerEditForm";
import { useState } from "react";

const GemmerHeader = ({ gemmer, gemmers, isSameUser, currentUser }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      {!showEditForm && (
        <GemmerInfo
          gemmer={gemmer}
          gemmers={gemmers}
          isSameUser={isSameUser}
          onEditClick={handleEditClick}
          currentUser={currentUser}
        />
      )}
      {showEditForm && (
        <GemmerEditForm gemmer={gemmer} onCloseEdit={handleEditClick} />
      )}
    </header>
  );
};

export default GemmerHeader;
