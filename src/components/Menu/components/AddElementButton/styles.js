import styled from "styled-components";

export const ButtonContainer = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  margin: 0 8px;
`;

export const ButtonCenter = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonBorder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  ${(props) =>
    props.action === props.buttonAction ? `border: 3px dashed cornflowerblue;animation: spin 6s linear infinite;` : ``}

  @keyframes spin {
    100% {
      transform: rotateZ(360deg);
    }
  }
`;
