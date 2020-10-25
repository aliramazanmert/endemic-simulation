import React, { useState, memo } from "react";

import { Container } from "./styles";
import { NUM_COLS, NUM_ROWS } from "../../constants";

const Cell = (props) => {
  const [hoverPos, setHoverPos] = useState();
  //console.log(props.i * 60 + props.j);
  const addVirus = (i, j) => {
    props.setCells((prevCells) => {
      let rows = [...prevCells.grid];
      let row = [...rows[i]];
      let cell = { ...row[j] };
      cell.state = "infected";
      cell.timeLeftToRecover = props.infectionDuration;
      row[j] = cell;
      rows[i] = row;
      return { ...prevCells, grid: rows };
    });
  };
  const addQuarantineBorder = (i, j) => {
    props.setCells((prevCells) => {
      let rows = [...prevCells.grid];
      let row = [...rows[i]];
      let cell = { ...row[j] };
      let neighborRow;
      let neighborCell;
      if (hoverPos === "left" && j !== 0) {
        neighborCell = { ...row[j - 1] };
        neighborCell.right = true;
        row[j - 1] = neighborCell;
      } else if (hoverPos === "right" && j !== NUM_COLS - 1) {
        neighborCell = { ...row[j + 1] };
        neighborCell.left = true;
        row[j + 1] = neighborCell;
      } else if (hoverPos === "top" && i !== 0) {
        neighborRow = [...rows[i - 1]];
        neighborCell = { ...neighborRow[j] };
        neighborCell.bottom = true;
        neighborRow[j] = neighborCell;
        rows[i - 1] = neighborRow;
      } else if (hoverPos === "bottom" && i !== NUM_ROWS - 1) {
        neighborRow = [...rows[i + 1]];
        neighborCell = { ...neighborRow[j] };
        neighborCell.top = true;
        neighborRow[j] = neighborCell;
        rows[i + 1] = neighborRow;
      }

      cell[hoverPos] = true;
      row[j] = cell;
      rows[i] = row;
      return { ...prevCells, grid: rows };
    });
  };
  const addMask = (i, j) => {
    props.setCells((prevCells) => {
      let rows = [...prevCells.grid];
      let row = [...rows[i]];
      let cell = { ...row[j] };
      cell.mask = true;
      row[j] = cell;
      rows[i] = row;
      return { ...prevCells, grid: rows };
    });
  };

  const handleCellClick = (i, j) => {
    if (props.action === "virus") {
      addVirus(i, j);
    } else if (props.action === "quarantine") {
      addQuarantineBorder(i, j);
    } else if (props.action === "mask") {
      addMask(i, j);
    }
  };

  const handleMouseEnter = (e) => {
    if (e.buttons === 1 || e.buttons === 3) {
      handleCellClick(props.i, props.j);
    }
  };

  const handleMouseMove = (e) => {
    if (props.action !== "quarantine") return;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    if (x < 5 && y > x && y < 20 - x) setHoverPos("left");
    else if (x > 15 && y < x && y > 20 - x) setHoverPos("right");
    else if (y < 5 && x > y && y < 20 - x) setHoverPos("top");
    else if (y > 15 && y > x && y > 20 - x) setHoverPos("bottom");
  };

  return (
    <Container
      condition={props.condition}
      top={props.top}
      right={props.right}
      mask={props.mask ? 1 : 0}
      onClick={() => handleCellClick(props.i, props.j)}
      onMouseMove={handleMouseMove}
      onMouseDown={() => handleCellClick(props.i, props.j)}
      onMouseEnter={handleMouseEnter}
      action={props.action}
      hoverPos={hoverPos}
    />
  );
};

export default memo(Cell);
