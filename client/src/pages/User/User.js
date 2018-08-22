import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const User = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>This is the User Page</h1>
          <h1>
            <span role="img" aria-label="User">
            👤
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default User;
