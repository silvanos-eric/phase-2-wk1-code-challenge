import { Header, Main, Footer, Container, Row, Col } from "./components";

import "./App.css";

function App() {
  return (
    <Container className="p-3 h-100 d-flex flex-column">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className="flex-grow-1">
        <Col>
          <Main />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
