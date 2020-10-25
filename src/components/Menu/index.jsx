import React, { useState, useEffect, useRef } from "react";
import { initializeCells } from "../../utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadSideMask,
  faPeopleArrows,
  faRestroom,
  faVirus,
  faGripLines,
  faSkullCrossbones,
  faGlobeAfrica,
  faWrench,
  faClock,
  faShieldAlt,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Popover, Slider, Checkbox, Row, Col } from "antd";

import PlayButton from "./components/PlayButton";
import SpeedButton from "./components/SpeedButton";
import AddElementButton from "./components/AddElementButton";

import { SliderContainer, Container, Title, AddButtonsContainer, ConditionalInput } from "./styles";

let timeout;

const Menu = ({
  setCells,
  action,
  setAction,
  calcNextState,
  setDeathChance,
  setDeathsEnabled,
  setCloseInfectionChance,
  setFarInfectionChance,
  setInfectionDuration,
  setPermanentImmunity,
  setImmunityDuration,
  setVaccineEnabled,
  setVaccineTime,
}) => {
  const [socialDistanceRate, setSocialDistanceRate] = useState(0.5);
  const [maskUsage, setMaskUsage] = useState(0);
  const [quarantineRate, setQuarantineRate] = useState(0);
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [playing, setPlaying] = useState(false);

  const [deathEnabled, setDeathEnabled] = useState(false);
  const [permImmunity, setPermImmunity] = useState(true);
  const [vaccEnabled, setVaccEnabled] = useState(false);

  const startSimulation = () => {
    timeout = setInterval(() => {
      calcNextState();
      setTime((prev) => prev + 1);
    }, 1000 / speed);
  };

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (playing) {
      clearInterval(timeout);
      startSimulation();
    }
    // eslint-disable-next-line
  }, [speed]);

  const generateMapMenu = (
    <div style={{ width: "300px" }}>
      <h5>Social Distancing</h5>
      <SliderContainer>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faPeopleArrows} />
          <Slider defaultValue={50} onChange={(val) => setSocialDistanceRate(val / 100)} max={90} tipFormatter={null} />
        </div>
      </SliderContainer>
      <h5>Quarantine Rate</h5>
      <SliderContainer>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faRestroom} />
          <Slider onChange={(val) => setQuarantineRate(val / 100)} max={60} tipFormatter={null} />
        </div>
      </SliderContainer>
      <h5>Mask Usage</h5>
      <SliderContainer>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faHeadSideMask} />
          <Slider onChange={(val) => setMaskUsage(val / 100)} tipFormatter={null} />
        </div>
      </SliderContainer>
      <Button onClick={() => setCells(() => initializeCells(socialDistanceRate, maskUsage, quarantineRate))}>
        Generate Map
      </Button>
    </div>
  );

  const endemicPropsMenu = (
    <div style={{ width: "300px" }}>
      <h5>Infection Duration</h5>
      <SliderContainer>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faClock} />
          <Slider
            marks={{ 48: "48h", 144: "144h" }}
            defaultValue={48}
            min={48}
            max={144}
            step={6}
            onAfterChange={(val) => setInfectionDuration(val)}
            tipFormatter={(val) => `${val} hours`}
          />
        </div>
      </SliderContainer>
      <h5>Infection Chance (Close)</h5>
      <SliderContainer>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faVirus} />
          <Slider
            marks={{ 0.75: "0.75%", 1: "1%", 1.25: "1.25%" }}
            defaultValue={1}
            min={0.75}
            max={1.25}
            step={0.05}
            onAfterChange={(val) => setCloseInfectionChance(val / 100)}
            tipFormatter={(val) => `${val}%`}
          />
        </div>
      </SliderContainer>
      <h5>Infection Chance (Far)</h5>
      <SliderContainer>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faVirus} />
          <Slider
            marks={{ 0.25: "0.25%", 0.5: "0.5%", 0.75: "0.75%" }}
            defaultValue={0.5}
            min={0.25}
            max={0.75}
            step={0.05}
            onAfterChange={(val) => setFarInfectionChance(val / 100)}
            tipFormatter={(val) => `${val}%`}
          />
        </div>
      </SliderContainer>
      <h5>Enable Deaths</h5>
      <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faSkullCrossbones} />
      <Checkbox
        checked={deathEnabled}
        onChange={() => {
          setDeathEnabled((prev) => !prev);
          setDeathsEnabled((prev) => !prev);
        }}
      />
      <ConditionalInput show={deathEnabled}>
        <h5>Death Chance</h5>
        <SliderContainer>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faSkullCrossbones} />
            <Slider
              marks={{ 0: "0%", 5: "5%" }}
              defaultValue={0}
              max={5}
              step={0.1}
              onAfterChange={(val) => setDeathChance(val / 100)}
              tipFormatter={(val) => `${val}%`}
            />
          </div>
        </SliderContainer>
      </ConditionalInput>
      <h5>Permanent Immunity</h5>
      <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faShieldAlt} />
      <Checkbox
        checked={permImmunity}
        onChange={() => {
          setPermImmunity((prev) => !prev);
          setPermanentImmunity((prev) => !prev);
        }}
      />
      <ConditionalInput show={!permImmunity}>
        <h5>Immunity Duration</h5>
        <SliderContainer>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faShieldAlt} />
            <Slider
              marks={{ 0: "No Immunity", 144: "144h" }}
              defaultValue={0}
              max={144}
              step={6}
              onAfterChange={(val) => setImmunityDuration(val)}
              tipFormatter={(val) => `${val} hours`}
            />
          </div>
        </SliderContainer>
      </ConditionalInput>
      <h5>Enable Vaccine</h5>
      <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faSyringe} />
      <Checkbox
        checked={vaccEnabled}
        onChange={() => {
          setVaccEnabled((prev) => !prev);
          setVaccineEnabled((prev) => !prev);
        }}
      />
      <ConditionalInput show={vaccEnabled}>
        <h5>Time When Vaccine Found</h5>
        <SliderContainer>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faSyringe} />
            <Slider
              marks={{ 8: "Day8", 16: "Day16" }}
              defaultValue={8}
              min={8}
              max={16}
              onAfterChange={(val) => setVaccineTime(val * 24)}
              tipFormatter={(val) => `Day ${val}`}
            />
          </div>
        </SliderContainer>
      </ConditionalInput>
    </div>
  );

  const handlePlayPause = (play) => {
    if (play) {
      startSimulation();
      setPlaying(true);
    } else {
      clearInterval(timeout);
      setPlaying(false);
    }
  };

  return (
    <Container>
      <Row align="middle" style={{ width: "100%" }}>
        <Col offset={1} span={6}>
          <Title>Epidemic Simulation</Title>
        </Col>
        <Col span={8}>
          <AddButtonsContainer>
            <AddElementButton
              icon={faVirus}
              color="crimson"
              buttonAction="virus"
              action={action}
              setAction={setAction}
            />
            <AddElementButton
              icon={faGripLines}
              color="black"
              buttonAction="quarantine"
              action={action}
              setAction={setAction}
            />
            <AddElementButton
              icon={faHeadSideMask}
              color="#00DDDD"
              buttonAction="mask"
              action={action}
              setAction={setAction}
            />
          </AddButtonsContainer>
        </Col>
        <Col span={1}>{`Time: ${time}`}</Col>
        <Col span={4}>
          <Popover content={endemicPropsMenu} title="Endemic Properties" trigger="click">
            <Button
              shape="round"
              icon={
                <FontAwesomeIcon
                  style={{ fontSize: "16px", marginRight: "8px", verticalAlign: "text-bottom" }}
                  icon={faWrench}
                />
              }
              style={{ backgroundColor: "cornflowerblue", borderColor: "cornflowerblue", color: "white" }}
            >
              Endemic Properties
            </Button>
          </Popover>
        </Col>
        <Col span={4}>
          <Popover content={generateMapMenu} title="Generate Map" trigger="click">
            <Button
              shape="round"
              icon={
                <FontAwesomeIcon
                  style={{ fontSize: "18px", marginRight: "8px", verticalAlign: "text-bottom" }}
                  icon={faGlobeAfrica}
                />
              }
              style={{
                backgroundColor: "cornflowerblue",
                borderColor: "cornflowerblue",
                color: "white",
              }}
            >
              Generate Map
            </Button>
          </Popover>
        </Col>
      </Row>

      <div style={{ position: "absolute", left: "50%", bottom: "0", transform: "translate(-50%,50%)" }}>
        <SpeedButton speedUp={false} onClick={() => setSpeed((prev) => prev - 1)} />
        <PlayButton onClick={handlePlayPause} />
        <SpeedButton speedUp={true} onClick={() => setSpeed((prev) => prev + 1)} />
      </div>
    </Container>
  );
};

export default Menu;
