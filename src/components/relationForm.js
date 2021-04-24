import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from "react";

const fRelationCss = { color: "white", "min-height": "100vh" };

function FRelationForm(props) {
  const [treeValue, setTreeValue] = useState({
    rootNode: { name: "" },
  });

  const [showCharacterForm, setShowCharacterForm] = useState(false);

  const handleTreeNameChange = (event) => {
    setTreeValue({ ...treeValue, rootNode: { name: event.target.value } });
  };

  //   changeHandler = (event) => {
  //     event.persist();

  //     // let value = event.target.value;
  //     console.log("hi");
  //     // this.setState(prevState => ({
  //     //   item: { ...prevState.item,  [event.target.name]: value }
  //     // }))
  //   };

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
            disabled={ treeValue.rootNode.name.length<1  }
            style={{ float: "right" }}
            onClick={ (e) => {setShowCharacterForm(true)}}
          >
            Create
          </Button>
        </Form.Group>
        <hr />

        {showCharacterForm ? (
          <>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Character/Element Name</Form.Label>
              <Form.Control type="text" placeholder="eg: Icarus" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                inline
                label="Male"
                name="gender"
                type="radio"
                id={`inline-radio-1`}
              />
              <Form.Check
                inline
                label="Female"
                name="gender"
                type="radio"
                id={`inline-radio-2`}
              />
              <Form.Check
                inline
                label="Can't say"
                name="gender"
                type="radio"
                id={`inline-radio-3`}
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

            <Button variant="primary"> Reset </Button>
            <Button variant="primary" style={{ float: "right" }}>
              {" "}
              Submit Character{" "}
            </Button>
          </>
        ) : null}
        <hr />
      </Form>
    </div>
  );
}

export default FRelationForm;
