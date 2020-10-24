import React from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepForward, faStepBackward } from "@fortawesome/free-solid-svg-icons";

const SpeedButton = ({ onClick, speedUp }) => {
  return (
    <Button
      style={{
        backgroundColor: "	cornflowerblue",
        borderColor: "	cornflowerblue",
        width: "32px",
        height: "32px",
        boxShadow: "0 0 3px rgba(0,0,0,0.7)",
      }}
      onClick={() => {
        onClick();
      }}
      type="primary"
      shape="circle"
      icon={<FontAwesomeIcon size="10x" icon={speedUp ? faStepForward : faStepBackward} />}
    />
  );
};

export default SpeedButton;
