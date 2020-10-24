import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 1000;
  background-color: midnightblue;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  font-family: Comfortaa;
  font-size: 24px;
  font-weight: 900;
  color: white;
`;

export const AddButtonsContainer = styled.div`
  display: flex;
`;

export const ConditionalInput = styled.div`
  ${(props) => (props.show ? `` : `display: none;`)}
`;

export const SliderContainer = styled.div`
  margin: 20px 0;
  .icon-wrapper {
    position: relative;
    padding: 0px 30px;
  }

  .icon-wrapper .svg-inline--fa {
    position: absolute;
    top: -6px;
    width: 18px;
    height: 18px;
    line-height: 1;
    font-size: 24px;
  }

  .icon-wrapper .icon-wrapper-active {
    color: rgba(0, 0, 0, 0.45);
  }

  .icon-wrapper .svg-inline--fa:first-child {
    left: 0;
  }

  .icon-wrapper .svg-inline--fa:last-child {
    right: 0;
  }
`;
