import styled from "styled-components";

export const Container = styled.div`
  height: 23px;
  width: 23px;
  border-right: ${(props) => (props.right ? ` solid 3px black` : ` solid 1px lightskyblue`)};
  border-top: ${(props) => (props.top ? ` solid 3px black` : ` solid 1px lightskyblue`)};
  ${(props) =>
    props.condition === "infected"
      ? "background-color: crimson;"
      : props.condition === "immune"
      ? "background-color: green	;"
      : props.condition === "normal"
      ? "background-color: moccasin	;"
      : props.condition === "dead"
      ? "background-color: dimgray	;"
      : "background-color: rgb(245,245,245)	;"}

  ${(props) =>
    props.mask
      ? `background-image: url("mask.webp");
        background-size: cover;`
      : ``}

  transition: background-color linear 0.25s;

  :hover {
    ${(props) =>
      props.action === "quarantine"
        ? `
        border-${props.hoverPos}: solid 3px black;`
        : props.action === "mask"
        ? `background-image: url("mask.webp");
        background-size: cover;`
        : `transform: scale(1.5, 1.5);
          border: solid 1px lightskyblue;
          background-color: crimson;`}

    z-index: 1000;
    position: relative;
  }
`;
