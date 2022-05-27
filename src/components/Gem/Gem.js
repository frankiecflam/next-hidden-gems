import Overlay from "../Overlay/Overlay";
import React from "react";
import ReactDOM from "react-dom";
import GemModal from "./GemModal";

const Gem = ({ item, onCloseModal, users }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay onClick={onCloseModal} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <GemModal item={item} users={users} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Gem;
