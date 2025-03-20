import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router';
function Home() {
  const navUl = {
    listStyle: 'none',
  };
  return (
    <>
      <header>
        <Container>
          <Row className='py-3'>
            <Col className="col-lg-4">
              <div className="logo fs-3">한울ERP</div>
            </Col>
            <Col className="col-lg-8">
              <nav>
                <ul className="d-flex justify-content-around" style={navUl}>
                  <li>
                    <Link to="/home">처음으로</Link>
                  </li>
                  <li>
                    <Link to="/list">사원목록</Link>
                  </li>
                  <li>
                    <Link to="/add">사원등록</Link>
                  </li>
                  <li>
                    <Link to="/news">새소식</Link>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 한울ERP</p>
      </footer>
    </>
  );
}

export default Home;
