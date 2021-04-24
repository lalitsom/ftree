import "./components/utils";
import { FHeader } from "./components/utils";
import "./css/App.css";
import { Container, Row, Col } from "react-bootstrap";
import FRelationForm from "./components/relationForm";

function App() {
  return (
    <>
      <FHeader />
      <Container fluid>
        <Row>
          <Col className="leftForm" sm={4}>
            <FRelationForm />
          </Col>
          <Col className="rightView">Right View</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
