import React from "react";

import "./SolarCalculator.css";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

function CalculatorCard({ onButtonSubmit }) {
  const [deviceFocus, setDeviceFocus] = React.useState(false);
  const [powerFocus, setPowerFocus] = React.useState(false);
  const [usageFocus, setUsageFocus] = React.useState(false);
  const [power, setPower] = React.useState(0);
  const [usage, setUsage] = React.useState(0);

  return (
    <>
      <Card className="card-calculator" data-background-color="blue">
        <Form action="" className="form" method="">
          <CardHeader className="text-center">
            <CardTitle className="title-up" tag="h3">
              Calculator
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
                <InputGroup
                  className={
                    "no-border input-lg calculator-value" +
                    (deviceFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-plug"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    onFocus={() => setDeviceFocus(true)}
                    onBlur={(e) =>
                      !e.target.value ? setDeviceFocus(false) : ""
                    }
                  ></Input>
                  <span
                    className={
                      deviceFocus ? "floating-label-focus" : "floating-label"
                    }
                  >
                    Device
                  </span>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup
                  className={
                    "no-border input-lg calculator-value" +
                    (powerFocus ? " input-group-focus " : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-bolt"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    onFocus={() => setPowerFocus(true)}
                    onBlur={(e) =>
                      !e.target.value ? setPowerFocus(false) : ""
                    }
                    onChange={(e) => setPower(e.target.value)}
                  ></Input>
                  <span
                    className={
                      powerFocus ? "floating-label-focus" : "floating-label"
                    }
                  >
                    Power (watts)
                  </span>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup
                  className={
                    "no-border input-lg calculator-value" +
                    (usageFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="far fa-clock"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    onFocus={() => setUsageFocus(true)}
                    onBlur={(e) =>
                      !e.target.value ? setUsageFocus(false) : ""
                    }
                    onChange={(e) => setUsage(e.target.value)}
                  ></Input>
                  <span
                    className={
                      usageFocus ? "floating-label-focus" : "floating-label"
                    }
                  >
                    Usage (Hours per day)
                  </span>
                </InputGroup>
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="text-center">
            <Button
              className="btn-neutral btn-round"
              color="info"
              onClick={(e) => {
                e.preventDefault();
                onButtonSubmit(power, usage);
              }}
              size="lg"
            >
              Calculate
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </>
  );
}

export default CalculatorCard;
