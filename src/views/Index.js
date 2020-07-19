import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/Footer.js";
import SolarCalculator from "components/SolarCalculator/SolarCalculator.js";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <div className="section section-about-us">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Solar Calculator</h2>
                  <h5 className="description">
                    A simple calculator used to calculate the various solar
                    components required like solar panels, battery capacity and
                    inverter capacity based on the given load.
                  </h5>
                </Col>
              </Row>
            </Container>
          </div>
          <SolarCalculator />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
