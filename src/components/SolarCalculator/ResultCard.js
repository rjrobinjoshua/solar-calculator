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
            <Card data-background-color="blue">
              <CardImg
                width="100%"
                src={require("assets/img/300x240.svg")}
                alt="Total Load image"
              />
              <CardImgOverlay>
                <CardTitle>Total Load</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
            <Card data-background-color="blue">
              <CardImg
                width="100%"
                src={require("assets/img/300x240.svg")}
                alt="Total Energy image"
              />
              <CardImgOverlay>
                <CardTitle>Total Energy</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
            <Card data-background-color="blue">
              <CardImg
                width="100%"
                src={require("assets/img/300x240.svg")}
                alt="Solar power image"
              />
              <CardImgOverlay>
                <CardTitle>Solar Power</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card data-background-color="blue">
              <CardImg
                width="100%"
                src={require("assets/img/300x240.svg")}
                alt="Solar panel image"
              />
              <CardImgOverlay>
                <CardTitle>Solar Panels</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
            <Card data-background-color="blue">
              <CardImg
                width="100%"
                src={require("assets/img/300x240.svg")}
                alt="Inverter image"
              />
              <CardImgOverlay>
                <CardTitle>Inverter</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
            <Card data-background-color="blue">
              <CardImg
                width="100%"
                src={require("assets/img/300x240.svg")}
                alt="Battery image"
              />
              <CardImgOverlay>
                <CardTitle>Battery</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </CardDeck>
        </CardBody>
      </Card>
    </>
  );
}

export default ResultCard;
