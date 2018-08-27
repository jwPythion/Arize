import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import './NotFound.css';

const NotFound = () => (
  <div className = "fourOhFour">
  <Container fluid>
    <Row>
      <Col size="md-12">
       
          <h1>404! Page Not Found</h1>
        
      </Col>
    </Row>
  </Container>
  </div>
);

export default NotFound;
