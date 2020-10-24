import React, { useState } from "react";

import { Row, Col } from "antd";
import Cell from "../Cell";
import Menu from "../Menu";
import { Container, OuterContainer } from "./styles";
import {
  TIME_TO_RECOVER,
  INFECTION_CHANCE_CLOSE,
  INFECTION_CHANCE_FAR,
  NUM_COLS,
  NUM_ROWS,
  QUARANTINE_CONDITIONS,
} from "../../constants";
import { deepCopy, initializeCells } from "../../utils";

const Home = () => {
  const [cells, setCells] = useState(() => initializeCells(0.5, 0, 0));
  const [action, setAction] = useState("virus");

  const [deathsEnabled, setDeathsEnabled] = useState(false);
  const [deathChance, setDeathChance] = useState(0);
  const [closeInfectionChance, setCloseInfectionChance] = useState(INFECTION_CHANCE_CLOSE);
  const [farInfectionChance, setFarInfectionChance] = useState(INFECTION_CHANCE_FAR);
  const [infectionDuration, setInfectionDuration] = useState(TIME_TO_RECOVER);

  const calcNextState = () => {
    setCells((prevCells) => {
      let tempCells = deepCopy(prevCells);
      tempCells.forEach((row, i) => {
        return row.forEach((_, j) => {
          if (prevCells[i][j].state === "infected") {
            if (deathsEnabled) {
              if (deathChance !== 0 && Math.random() < deathChance / infectionDuration) {
                tempCells[i][j].state = "dead";
                return;
              }
            }
            if (--tempCells[i][j].timeLeftToRecover === 0) {
              tempCells[i][j].state = "immune";
            }

            for (let x = i - 2; x <= i + 2; x++) {
              for (let y = j - 2; y <= j + 2; y++) {
                if (!(x === i && y === j)) {
                  if (x >= 0 && x < NUM_ROWS && y >= 0 && y < NUM_COLS) {
                    if (tempCells[x][y].state === "normal") {
                      const preventedByQuarantine = QUARANTINE_CONDITIONS[x - i + 2][y - j + 2].reduce(
                        (acc, curr) =>
                          acc ||
                          curr.reduce(
                            (acc2, curr2) => acc2 && tempCells[i + curr2.x][j + curr2.y][curr2.wall] === true,
                            true
                          ),
                        false
                      );

                      //console.log(x-i+2,y-j+2, preventedByQuarantine)

                      if (!preventedByQuarantine) {
                        const farNeighbor = x === i - 2 || x === i + 2 || y === j - 2 || y === j + 2;
                        let infectionChance = farNeighbor ? farInfectionChance : closeInfectionChance;
                        infectionChance = tempCells[x][y].mask === true ? infectionChance / 3.0 : infectionChance;

                        if (Math.random() < infectionChance) {
                          tempCells[x][y].state = "infected";
                          tempCells[x][y].timeLeftToRecover = infectionDuration;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        });
      });
      return tempCells;
    });
  };

  return (
    <OuterContainer>
      <Menu
        action={action}
        setCells={setCells}
        setAction={setAction}
        calcNextState={calcNextState}
        setDeathsEnabled={setDeathsEnabled}
        setDeathChance={setDeathChance}
        setCloseInfectionChance={setCloseInfectionChance}
        setFarInfectionChance={setFarInfectionChance}
        setInfectionDuration={setInfectionDuration}
      />
      <Container>
        {cells.map((row, i) => (
          <Row key={i}>
            {row.map((cell, j) => (
              <Col key={j}>
                <Cell
                  condition={cell.state}
                  setCells={setCells}
                  i={i}
                  j={j}
                  action={action}
                  top={cell.top}
                  right={cell.right}
                  mask={cell.mask}
                  infectionDuration={infectionDuration}
                />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </OuterContainer>
  );
};

export default Home;
