import styled from "styled-components";

export const Container = styled.div`
  height: 23px;
  width: 23px;
  border-right: ${(props) => (props.right ? ` solid 3px black` : ` solid 1px lightskyblue`)};
  border-top: ${(props) => (props.top ? ` solid 3px black` : ` solid 1px lightskyblue`)};
  background-size: cover;

  ${(props) => (props.mask ? `background-image: url("mask.png");` : ``)}

  ${(props) =>
    props.condition === "infected"
      ? "background-color: crimson;"
      : props.condition === "immune"
      ? "background-color: green;"
      : props.condition === "normal"
      ? "background-color: moccasin;"
      : props.condition === "dead"
      ? "background-color: dimgray;"
      : props.condition === "vaccined"
      ? `background-color: royalblue;background-image: url("syringe.png");`
      : "background-color: rgb(245,245,245)	;"}

  transition: background-color linear 0.25s;

  :hover {
    ${(props) =>
      props.action === "quarantine"
        ? `
        border-${props.hoverPos}: solid 3px black;`
        : props.action === "mask"
        ? `background-image: url("mask.png");
        background-size: cover;`
        : `transform: scale(1.5, 1.5);
          border: solid 1px lightskyblue;
          background-color: crimson;`}

    z-index: 1000;
    position: relative;
  }
`;
