import React from "react";

import "./SolarCalculator.css";
// reactstrap components
import { Container, Row } from "reactstrap";
import CalculatorCard from "./CalculatorCard";
import ResultCard from "./ResultCard";

function SolarCalculator() {
  return (
    <>
      <div className="section section-calculator">
        <Container>
          <Row>
            <CalculatorCard />
          </Row>
          <Row>
            <ResultCard />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SolarCalculator;
