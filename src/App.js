import "./components/utils";
import { FHeader } from "./components/utils";
import "./css/App.css";
import { Container, Row, Col } from "react-bootstrap";
import FRelationForm from "./components/relationForm";
import FTreeViewer from "./components/treeViewer";
import React, { useState } from "react";
import * as Modules from "./modules/tree";

function App() {
  const [treeValue, setTreeValue] = useState(Modules.getEmptyTree());
  return (
    <>
      <FHeader />
      <Container fluid>
        <Row>
          <Col className="leftForm" sm={4}>
            <FRelationForm treeUpdated={setTreeValue} />
          </Col>
          <Col className="rightView">
            <FTreeViewer treeValue={treeValue} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
