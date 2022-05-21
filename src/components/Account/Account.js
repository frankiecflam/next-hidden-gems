import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

import Overlay from "../Overlay/Overlay";
import AccountModal from "./AccountModal";

const Account = ({
  onClick,
  onModalClose,
  onToggleBtnClick,
  loginModalActive,
  signupModalActive,
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  // If neither is active
  if (!loginModalActive && !signupModalActive) return null;

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay onClick={onModalClose} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <AccountModal
          onClick={onClick}
          onModalClose={onModalClose}
          loginModalActive={loginModalActive}
          signupModalActive={signupModalActive}
          onToggleBtnClick={onToggleBtnClick}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Account;
