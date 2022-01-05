import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
function Create() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const postData = (e) => {
    e.preventDefault();
    setName(name);
    setMessage(message);
    console.log(`name${name} message:${message}`);
    axios.post(`https://61d552c12b4f730017a8276f.mockapi.io/fakeData`, {
      name,
      message,
    });
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
          <Button onClick={postData} type="submit">
            Submit
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Create;
