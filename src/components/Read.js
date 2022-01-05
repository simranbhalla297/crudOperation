import React from "react";
import { Table, Container } from "react-bootstrap";
function Read() {
  return (
    <Container>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Read;
