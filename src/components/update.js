import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
export default function Update() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [id, setID] = useState(null);
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setMessage(localStorage.getItem("Message"));
  }, []);
  const updateAPIData = () => {
    axios.put(`https://61d552c12b4f730017a8276f.mockapi.io/fakeData/${id}`, {
      name,
      message,
    });
    console.log("data updated");
  };
  return (
    <div>
      <Container>
        <div className="form_container">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Post</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Button type="submit" onClick={updateAPIData}>
            update
          </Button>
        </div>
      </Container>
    </div>
  );
}
