import { NUM_COLS, NUM_ROWS } from "../constants";

export const initializeCells = (socialDistanceRate, maskUsage, quarantineRate) => {
  let cells = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    cells.push([]);
    for (let j = 0; j < NUM_COLS; j++) {
      let cell = {};
      if (quarantineRate !== 0) {
        if (Math.random() < quarantineRate) {
          cell.left = true;
          if (j !== 0) {
            cells[i][j - 1].right = true;
          }
        }
        if (Math.random() < quarantineRate) {
          cell.top = true;
          if (i !== 0) {
            cells[i - 1][j].bottom = true;
          }
        }
      }
      if (Math.random() < socialDistanceRate) {
        cell.state = "empty";
      } else {
        cell.state = "normal";
        if (Math.random() < maskUsage) {
          cell.mask = true;
        }
      }
      cells[i].push(cell);
    }
  }
  return { time: 0, grid: cells };
};

export const deepCopy = (arr) => {
  let copy = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      copy.push(deepCopy(elem));
    } else {
      if (typeof elem === "object") {
        copy.push(deepCopyObject(elem));
      } else {
        copy.push(elem);
      }
    }
  });
  return copy;
};
// Helper function to deal with Objects
const deepCopyObject = (obj) => {
  let tempObj = {};
  for (let [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      tempObj[key] = deepCopy(value);
    } else {
      if (typeof value === "object") {
        tempObj[key] = deepCopyObject(value);
      } else {
        tempObj[key] = value;
      }
    }
  }
  return tempObj;
};
