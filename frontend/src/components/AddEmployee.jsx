import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
function AddEmployee() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center my-3">사원등록</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default AddEmployee;
