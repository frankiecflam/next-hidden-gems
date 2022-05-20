import styles from "./GemmerHeader.module.css";

import GemmerInfo from "./GemmerInfo";
import GemmerEditForm from "./GemmerEditForm";

const GemmerHeader = ({ gemmer }) => {
  return (
    <header className={styles.header}>
      <GemmerInfo gemmer={gemmer} />
      {/* <GemmerEditForm gemmer={gemmer}/> */}
    </header>
  );
};

export default GemmerHeader;
