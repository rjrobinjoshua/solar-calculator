import React from "react";

import "./SolarCalculator.css";
// reactstrap components
import { Card, CardDeck, CardBody, CardTitle, CardHeader } from "reactstrap";

function ResultCard({
  totalLoad,
  totalEnergy,
  solarPower,
  solarPanels,
  inverter,
  battery,
}) {
  return (
    <>
      <Card className="card-calculator" data-background-color="blue">
        <CardHeader className="text-center">
          <CardTitle className="title-up" tag="h3">
            Result
          </CardTitle>
        </CardHeader>
        <CardBody>
          <CardDeck>
            <Card className="card-result" data-background-color="blue">
              <h2 className="result-card">
                <div className="result-container">
                  <span className="fas fa-charging-station"></span>
                  <div className="ml-4">
                    <small className="result-title">Total Load</small>
                    <h6 className="result-value">
                      {totalLoad}
                      <small className="text-none"> Watts</small>
                    </h6>
                  </div>
                </div>
              </h2>
            </Card>
            <Card className="card-result" data-background-color="blue">
              <h2 className="result-card">
                <div className="result-container">
                  <span className="fas fa-bolt"></span>
                  <div className="ml-4">
                    <small className="result-title">Total Energy</small>
                    <h6 className="result-value">
                      {totalEnergy}
                      <small className="text-none"> Watt hour</small>
                    </h6>
                  </div>
                </div>
              </h2>
            </Card>
            <Card className="card-result" data-background-color="blue">
              <h2 className="result-card">
                <div className="result-container">
                  <span className="fas fa-sun"></span>
                  <div className="ml-4">
                    <small className="result-title">Solar Power</small>
                    <h6 className="result-value">
                      {solarPower}
                      <small className="text-none"> Watt peak</small>
                    </h6>
                  </div>
                </div>
              </h2>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card className="card-result" data-background-color="blue">
              <h2 className="result-card">
                <div className="result-container">
                  <span className="fas fa-solar-panel"></span>
                  <div className="ml-4">
                    <small className="result-title">Solar Panels</small>
                    <h6 className="result-value">
                      {solarPanels}
                      <small className="text-none"> Wp Panel x </small>
                      {solarPanels}
                      <small className="text-none"> nos</small>
                    </h6>
                  </div>
                </div>
              </h2>
            </Card>
            <Card className="card-result" data-background-color="blue">
              <h2 className="result-card">
                <div className="result-container">
                  <span className="far fa-hdd"></span>
                  <div className="ml-4">
                    <small className="result-title">Inverter Capacity</small>
                    <h6 className="result-value">
                      {inverter}
                      <small className="text-none"> Watts</small>
                    </h6>
                  </div>
                </div>
              </h2>
            </Card>
            <Card className="card-result" data-background-color="blue">
              <h2 className="result-card">
                <div className="result-container">
                  <span className="fas fa-car-battery"></span>
                  <div className="ml-4">
                    <small className="result-title">Battery Capacity</small>
                    <h6 className="result-value">
                      {battery}
                      <small className="text-none"> Ampere hour</small>
                    </h6>
                  </div>
                </div>
              </h2>
            </Card>
          </CardDeck>
        </CardBody>
      </Card>
    </>
  );
}

export default ResultCard;
