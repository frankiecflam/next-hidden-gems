import styles from "./NavButtons.module.css";
import LoginBtn from "../Buttons/LoginBtn";
import SignupBtn from "../Buttons/SignupBtn";
import LogoutBtn from "../Buttons/LogoutBtn";
import { Fragment, useReducer } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/Slices/AuthSlice";
import { useRouter } from "next/router";

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

const NavButtons = ({ isAuthenticated }) => {
  const [accountBtnState, accountBtnDispatch] = useReducer(
    accountBtnReducer,
    accountBtnInitialState
  );

  const dispatch = useDispatch();
  const router = useRouter();

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

  const handleLogoutClick = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className={styles.navButtons}>
      {!isAuthenticated && (
        <Fragment>
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
        </Fragment>
      )}

      {isAuthenticated && <LogoutBtn onClick={handleLogoutClick} />}
    </div>
  );
};

export default NavButtons;
