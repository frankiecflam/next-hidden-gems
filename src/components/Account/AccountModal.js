import styles from "./AccountModal.module.css";
import { useState, useReducer } from "react";

import AccountHeader from "./AccountHeader";
import AccountBody from "./AccountBody";
import AccountFooter from "./AccountFooter";

const accountFormInitialState = {
  signupSucceeded: false,
  signupFormSubmitted: false,
  loginFormSubmitted: false,
  loginSucceeded: false,
};

const ACTIONS = {
  successfulLogin: "SUCCESSFUL_LOGIN",
  unsuccessfulLogin: "UNSUCCESSFUL_LOGIN",
  successfulSignup: "SUCCESSFUL_SIGNUP",
  unsuccessfulSignup: "UNSUCCESSFUL_SIGNUP",
};

const accountFormStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.successfulSignup:
      return {
        ...state,
        signupFormSubmitted: true,
        signupSucceeded: true,
      };
    case ACTIONS.unsuccessfulSignup:
      return {
        ...state,
        signupFormSubmitted: true,
        signupSucceeded: false,
      };

    case ACTIONS.successfulLogin:
      return {
        ...state,
        loginFormSubmitted: true,
        loginSucceeded: true,
      };

    case ACTIONS.unsuccessfulLogin:
      return {
        ...state,
        loginFormSubmitted: true,
        loginSucceeded: false,
      };

    default:
      return accountFormInitialState;
  }
};

const AccountModal = ({
  onModalClose,
  onToggleBtnClick,
  loginModalActive,
  signupModalActive,
}) => {
  const heading = loginModalActive ? "log in" : "sign up";
  const textContent =
    signupModalActive &&
    "sign up for discovering hidden gems from peope all over the world";

  const [accountFormState, accountFormStateDispatch] = useReducer(
    accountFormStateReducer,
    accountFormInitialState
  );

  const {
    signupSucceeded,
    signupFormSubmitted,
    loginFormSubmitted,
    loginSucceeded,
  } = accountFormState;

  const handleSuccessfulSignup = () => {
    accountFormStateDispatch({ type: ACTIONS.successfulSignup });
  };

  const handleUnsuccessfulSignup = () => {
    accountFormStateDispatch({ type: ACTIONS.unsuccessfulSignup });
  };

  const handleSuccessfulLogin = () => {
    accountFormStateDispatch({ type: ACTIONS.successfulLogin });
  };

  const handleUnsuccessfulLogin = () => {
    accountFormStateDispatch({ type: ACTIONS.unsuccessfulLogin });
  };

  return (
    <div className={styles.modal}>
      <AccountHeader
        onClick={onModalClose}
        heading={heading}
        textContent={textContent}
      />
      <AccountBody
        loginModalActive={loginModalActive}
        signupModalActive={signupModalActive}
        signupSucceeded={signupSucceeded}
        signupFormSubmitted={signupFormSubmitted}
        onSuccessfulSignup={handleSuccessfulSignup}
        onUnsuccessfulSignup={handleUnsuccessfulSignup}
        loginFormSubmitted={loginFormSubmitted}
        loginSucceeded={loginSucceeded}
        onSuccessfulLogin={handleSuccessfulLogin}
        onUnsuccessfulLogin={handleUnsuccessfulLogin}
      />
      <AccountFooter
        loginModalActive={loginModalActive}
        signupModalActive={signupModalActive}
        onToggleBtnClick={onToggleBtnClick}
        signupSucceeded={signupSucceeded}
        loginSucceeded={loginSucceeded}
        onModalClose={onModalClose}
      />
    </div>
  );
};

export default AccountModal;
