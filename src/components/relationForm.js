import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import * as MTree from "../modules/tree";
const R = require("ramda");

const fRelationCss = { color: "white", minHeight: "100vh" };

function FRelationForm(props) {
  const [treeValue, setTreeValue] = useState(MTree.getEmptyTree());
  const [currentCharacter, setCurrentCharacter] = useState(
    MTree.getEmptyCharacter()
  );
  const [showCharacterForm, setShowCharacterForm] = useState(false);

  const handleTreeNameChange = (event) => {
    let tree = MTree.updateTreeName(treeValue, event.target.value);
    setTreeValue(tree);
    props.treeUpdated(tree);
  };

  const handleCharacterNameChange = (event) => {
    let char = R.merge(currentCharacter, { name: event.target.value });
    let tree = MTree.addOrUpdateCharacter(treeValue, char);
    setCurrentCharacter(char);
    setTreeValue(tree);
    props.treeUpdated(tree);
  };

  const handleCharacterGenderChange = (event) => {
    let char = R.merge(currentCharacter, { gender: event.target.id });
    let tree = MTree.addOrUpdateCharacter(treeValue, char);
    setCurrentCharacter(char);
    setTreeValue(tree);
    props.treeUpdated(tree);
  };

  const resetCharacterBtn = () => {
    let tree = MTree.deleteCharacter(treeValue, currentCharacter);
    setCurrentCharacter(MTree.getEmptyCharacter());
    setTreeValue(tree);
    props.treeUpdated(tree);
  };

  const submitCharacterBtn = () => {
    setCurrentCharacter(MTree.getEmptyCharacter());
  };

  return (
    <div style={fRelationCss}>
      <h3>Add/Edit Trees</h3>
      <Form>
        <Form.Group controlId="formTreeName">
          <Form.Label>Enter Tree Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="eg: Greek-Mythology"
            value={treeValue.rootNode.name}
            onChange={handleTreeNameChange}
          />
          <Form.Text className="text-muted">
            {/* once already existed tree selected, you can edit it's name */}
          </Form.Text>
          <Button
            variant="primary"
            disabled={treeValue.rootNode.name.length < 1}
            style={{ float: "right" }}
            onClick={(e) => {
              setShowCharacterForm(true);
            }}
          >
            Create
          </Button>
        </Form.Group>
        <hr />

        {showCharacterForm ? (
          <>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Character/Element Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg: Icarus"
                value={currentCharacter.name}
                onChange={handleCharacterNameChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                inline
                label="Male"
                checked={currentCharacter.gender == "Male"}
                name="gender"
                type="radio"
                onChange={handleCharacterGenderChange}
                id="Male"
              />
              <Form.Check
                inline
                label="Female"
                checked={currentCharacter.gender == "Female"}
                onChange={handleCharacterGenderChange}
                name="gender"
                type="radio"
                id="Female"
              />
              <Form.Check
                inline
                label="Can't say"
                checked={currentCharacter.gender == "NA"}
                onChange={handleCharacterGenderChange}
                name="gender"
                type="radio"
                id="NA"
              />
            </Form.Group>

            <Form.Group controlId="formBasic">
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="relation : son of" />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="eg: Dedalus" />
                </Col>
              </Row>
            </Form.Group>

            <Button variant="primary"> + Add Relation </Button>
            <hr />

            <Button variant="primary" onClick={resetCharacterBtn}>
              {" "}
              Reset{" "}
            </Button>
            <Button
              variant="primary"
              style={{ float: "right" }}
              onClick={submitCharacterBtn}
            >
              Submit Character
            </Button>
          </>
        ) : null}
        <hr />
      </Form>
    </div>
  );
}

export default FRelationForm;
