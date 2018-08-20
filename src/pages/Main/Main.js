import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const Main = () => (
  <Container fluid>
    <Row>
      <Col size="md-8" spacing="mt-4">
        <Jumbotron>
          <h1>This is the Main Page</h1>
          <h1>
            <span role="img" aria-label="Person Raising Hand">
            🙋‍♀️
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default Main;
