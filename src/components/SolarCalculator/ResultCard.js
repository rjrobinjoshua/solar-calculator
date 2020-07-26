import React from "react";

import "./SolarCalculator.css";
// reactstrap components
import {
  Button,
  Card,
  CardDeck,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader,
  CardImgOverlay,
} from "reactstrap";

function ResultCard() {
  const [deviceFocus, setDeviceFocus] = React.useState(false);
  const [powerFocus, setPowerFocus] = React.useState(false);
  const [usageFocus, setUsageFocus] = React.useState(false);

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
                    <h6 className="result-value">3050</h6>
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
                    <h6 className="result-value">3050</h6>
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
                    <h6 className="result-value">3050</h6>
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
                    <h6 className="result-value">3050</h6>
                  </div>
                </div>
              </h2>
            </Card>
            <Card className="card-result" data-background-color="blue">
              <h2 className="result-card">
                <div className="result-container">
                  <span className="far fa-hdd"></span>
                  <div className="ml-4">
                    <small className="result-title">Inverter</small>
                    <h6 className="result-value">3050</h6>
                  </div>
                </div>
              </h2>
            </Card>
            <Card className="card-result" data-background-color="blue">
              <h2 className="result-card">
                <div className="result-container">
                  <span className="fas fa-car-battery"></span>
                  <div className="ml-4">
                    <small className="result-title">Battery</small>
                    <h6 className="result-value">3050</h6>
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
