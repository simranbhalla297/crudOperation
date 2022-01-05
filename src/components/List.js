import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function List({ lists, removePost }) {
  const setData = (data) => {
    let { id, name, message } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Message", message);
  };

  return (
    <div>
      <div>
        <p>User Name: {lists.name}</p>
        <p>User Message: {lists.message}</p>
      </div>
      <div>
        <Button onClick={() => removePost(lists.id)}>Remove</Button>
        <Button style={{ marginLeft: "5px" }} onClick={() => setData(lists)}>
          <Link
            to="/update"
            style={{
              textDecoration: "none",
              color: "white",
            }}
            onClick={() => setData(lists)}
          >
            Update
          </Link>
        </Button>
        {/* <Button onClick={() => setData(lists)}>update</Button> */}
      </div>
    </div>
  );
}

export default List;
