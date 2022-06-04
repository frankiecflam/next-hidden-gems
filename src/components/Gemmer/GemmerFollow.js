import React from "react";
import ReactDOM from "react-dom";
import Overlay from "../Overlay/Overlay";
import GemmerFollowModal from "./GemmerFollowModal";

const GemmerFollow = ({ onClick, following, followers, gemmers }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay onClick={onClick} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <GemmerFollowModal
          following={following}
          followers={followers}
          gemmers={gemmers}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default GemmerFollow;
