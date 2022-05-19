import styles from "./NavButtons.module.css";
import LoginBtn from "../Buttons/LoginBtn";
import SignupBtn from "../Buttons/SignupBtn";

const NavButtons = () => {
  return (
    <div className={styles.navButtons}>
      <LoginBtn />
      <SignupBtn />
    </div>
  );
};

export default NavButtons;
