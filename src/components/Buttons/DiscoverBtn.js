import styles from "./DiscoverBtn.module.css";
import { Fragment, useReducer } from "react";
import Button from "../UI/Button";
import Account from "../Account/Account";

const ACTIONS = {
  initial: "INITIAL",
  clear: "CLEAR",
  toggle: "TOGGLE",
};

const accountModalInitialState = {
  loginModalActive: false,
  signupModalActive: false,
};

const accountModalReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.initial:
      return {
        ...state,
        signupModalActive: true,
      };

    case ACTIONS.toggle:
      return {
        loginModalActive: !state.loginModalActive,
        signupModalActive: !state.signupModalActive,
      };

    default:
      return accountModalInitialState;
  }
};

const DiscoverBtn = () => {
  const [accountModalState, accountModalDispatch] = useReducer(
    accountModalReducer,
    accountModalInitialState
  );

  const handleDiscoverBtnClick = () => {
    accountModalDispatch({ type: ACTIONS.initial });
  };

  const handleModalClose = () => {
    accountModalDispatch({ type: ACTIONS.clear });
  };

  const handleToggleBtnClick = () => {
    accountModalDispatch({ type: ACTIONS.toggle });
  };

  return (
    <Fragment>
      <Button className={styles.btn} onClick={handleDiscoverBtnClick}>
        discover
      </Button>
      <Account
        signupModalActive={accountModalState.signupModalActive}
        loginModalActive={accountModalState.loginModalActive}
        onModalClose={handleModalClose}
        onToggleBtnClick={handleToggleBtnClick}
      />
    </Fragment>
  );
};

export default DiscoverBtn;
