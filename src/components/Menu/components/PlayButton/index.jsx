import React, { useState } from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const PlayButton = ({ onClick }) => {
  const [playActive, setPlayActive] = useState(true);
  return (
    <Button
      style={{
        backgroundColor: "cornflowerblue",
        borderColor: "cornflowerblue",
        width: "48px",
        height: "48px",
        boxShadow: "0 0 4px rgba(0,0,0,0.7)",
      }}
      onClick={() => {
        onClick(playActive);
        setPlayActive((prev) => !prev);
      }}
      type="primary"
      shape="circle"
      icon={<FontAwesomeIcon size="10x" icon={playActive ? faPlay : faPause} />}
    />
  );
};

export default PlayButton;
