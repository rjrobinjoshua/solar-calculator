import React from "react";

import "./SolarCalculator.css";
// reactstrap components
import { Container, Row } from "reactstrap";
import CalculatorCard from "./CalculatorCard";
import ResultCard from "./ResultCard";

function SolarCalculator() {
  //result
  const [totalLoad, setTotalLoad] = React.useState(0);
  const [totalEnergy, setTotalEnergy] = React.useState(0);
  const [solarPower, setSolarPower] = React.useState(0);
  const [solarPanels, setSolarPanels] = React.useState(0);
  const [inverter, setInverter] = React.useState(0);
  const [battery, setBattery] = React.useState(0);

  function onButtonSubmit(power, usage) {
    console.log("power => " + power);
    console.log("usage => " + usage);
    setTotalLoad(power);
    setTotalEnergy(power * usage);
  }

  return (
    <>
      <div className="section section-calculator">
        <Container>
          <Row>
            <CalculatorCard onButtonSubmit={onButtonSubmit} />
          </Row>
          <Row>
            <ResultCard
              totalLoad={totalLoad}
              totalEnergy={totalEnergy}
              solarPower={solarPower}
              solarPanels={solarPanels}
              inverter={inverter}
              battery={battery}
            />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SolarCalculator;
