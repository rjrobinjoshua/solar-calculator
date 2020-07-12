import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}{" "}
          <a href="https://www.linkedin.com/in/robin-joshua-b317a677/">
            Robin Joshua
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
