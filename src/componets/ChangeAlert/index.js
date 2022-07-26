import React from "react";
import { withStorageListener } from "./withStorageListener";
import { AlertModal } from "./AlertModal";

function ChangeALert({ show, toggleShow }) {
  if (show) {
    return <AlertModal show={show} toggleShow={toggleShow} />;
  }
  return null;
}

const ChangeALertWirhStirageListener = withStorageListener(ChangeALert);

export { ChangeALertWirhStirageListener };
