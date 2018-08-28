import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import './NotFound.css';
import { BgImage } from "../../components/Main";
import { BackBtn } from "../../components/UI";

const NotFound = () => (
  <div className = "fourOhFour">
  <Container fluid>
  <BackBtn/>
    <Row>
      <Col size="md-12">
       
          <h1>404! <br/>Page Not Found</h1>
        
      </Col>
    </Row>
  </Container>
  <BgImage/>
  </div>
);

export default NotFound;
