import styles from "./Main.module.css";

const Main = ({ children }) => {
  return (
    <main className={styles.main}>
      <div id="modal-root" />
      <div id="overlay-root" />
      {children}
    </main>
  );
};

export default Main;
