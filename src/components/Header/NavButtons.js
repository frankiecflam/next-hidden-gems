import styles from "./NavButtons.module.css";
import LoginBtn from "../Buttons/LoginBtn";
import SignupBtn from "../Buttons/SignupBtn";
import { useReducer } from "react";

const ACTIONS = {
  login: "LOGIN",
  signup: "SIGNUP",
  clear: "CLEAR",
  toggle: "TOGGLE",
};

const accountBtnInitialState = {
  loginModalActive: false,
  signupModalActive: false,
};

const accountBtnReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.login:
      return {
        ...state,
        loginModalActive: !state.loginModalActive,
      };
    case ACTIONS.signup:
      return {
        ...state,
        signupModalActive: !state.signupModalActive,
      };

    case ACTIONS.toggle:
      return {
        loginModalActive: !state.loginModalActive,
        signupModalActive: !state.signupModalActive,
      };

    case ACTIONS.clear:
      return accountBtnInitialState;

    default:
      return accountBtnInitialState;
  }
};

const NavButtons = () => {
  const [accountBtnState, accountBtnDispatch] = useReducer(
    accountBtnReducer,
    accountBtnInitialState
  );

  const handleLoginBtnClick = () => {
    accountBtnDispatch({ type: ACTIONS.login });
  };

  const handleSignupBtnClick = () => {
    accountBtnDispatch({ type: ACTIONS.signup });
  };

  const handleToggleBtnClick = () => {
    accountBtnDispatch({ type: ACTIONS.toggle });
  };

  const handleModalClose = () => {
    accountBtnDispatch({ type: ACTIONS.clear });
  };

  return (
    <div className={styles.navButtons}>
      <LoginBtn
        onClick={handleLoginBtnClick}
        onModalClose={handleModalClose}
        onToggleBtnClick={handleToggleBtnClick}
        showLoginModal={accountBtnState.loginModalActive}
      />
      <SignupBtn
        onClick={handleSignupBtnClick}
        showSignupModal={accountBtnState.signupModalActive}
        onToggleBtnClick={handleToggleBtnClick}
        onModalClose={handleModalClose}
      />
    </div>
  );
};

export default NavButtons;
