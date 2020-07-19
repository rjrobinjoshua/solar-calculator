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
  Container,
  Row,
  Col,
} from "reactstrap";

function SolarCalculator() {
  const [deviceFocus, setDeviceFocus] = React.useState(false);
  const [powerFocus, setPowerFocus] = React.useState(false);
  const [usageFocus, setUsageFocus] = React.useState(false);

  return (
    <>
      <div className="section section-calculator">
        <Container>
          <Row>
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
                          "no-border input-lg" +
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
                            deviceFocus
                              ? "floating-label-focus"
                              : "floating-label"
                          }
                        >
                          Device
                        </span>
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup
                        className={
                          "no-border input-lg" +
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
                        ></Input>
                        <span
                          className={
                            powerFocus
                              ? "floating-label-focus"
                              : "floating-label"
                          }
                        >
                          Power (watts)
                        </span>
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup
                        className={
                          "no-border input-lg" +
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
                        ></Input>
                        <span
                          className={
                            usageFocus
                              ? "floating-label-focus"
                              : "floating-label"
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
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Calculate
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SolarCalculator;
