import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import List from "./List";
import axios from "axios";
function Read() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://61d552c12b4f730017a8276f.mockapi.io/fakeData`)
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
  }, []);

  const removePost = (id) => {
    axios
      .delete(`https://61d552c12b4f730017a8276f.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get(`https://61d552c12b4f730017a8276f.mockapi.io/fakeData`)
      .then((getData) => {
        setData(getData.data);
      });
  };
  console.log(data);
  return (
    <Container>
      <div>
        {data.map((lists) => {
          return (
            <div className="listContainer" key={lists.id}>
              <List lists={lists} removePost={removePost} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Read;
