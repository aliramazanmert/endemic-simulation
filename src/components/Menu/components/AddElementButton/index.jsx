import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

import { ButtonContainer, ButtonBorder, ButtonCenter } from "./styles";

const AddElementButton = ({ action, setAction, buttonAction, color, icon }) => {
  return (
    <ButtonContainer>
      <ButtonBorder action={action} buttonAction={buttonAction} />
      <ButtonCenter>
        <Button
          shape="circle"
          icon={<FontAwesomeIcon color={color} icon={icon} />}
          onClick={() => setAction(buttonAction)}
        />
      </ButtonCenter>
    </ButtonContainer>
  );
};

export default AddElementButton;
