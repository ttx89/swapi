import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./InputText.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function Home() {
  const [apiId, setApiId] = useState("");
  const [apiChosen, setApiChosen] = useState(false);
  const [api, setApi] = useState({
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
  });

  const searchApi = () => {
    Axios.get(`https://swapi.dev/api/people/${apiId}`).then(
      (response) => {
        setApi({
          name: response.data.name,
          height: response.data.height,
          mass: response.data.mass,
          hair_color: response.data.hair_color,
          skin_color: response.data.skin_color,
          eye_color: response.data.eye_color,
          birth_year: response.data.birth_year,
        });
        setApiChosen(true);
      }
    );
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>SWAPI</h1>
        <input
          type="text"
          onChange={(event) => {
            setApiId(event.target.value);
          }}
        />
        <button onClick={searchApi}>Search People by ID</button>
      </div>
      <div className="DisplaySection">
        {!apiChosen ? (
          <h1>Please choose a ID number</h1>
        ) : (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{api.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Height: {api.height}</ListGroupItem>
                <ListGroupItem>Mass: {api.mass}</ListGroupItem>
                <ListGroupItem>Hair Color: {api.hair_color}</ListGroupItem>
                <ListGroupItem>Skin Color: {api.skin_color}</ListGroupItem>
                <ListGroupItem>Birth Year: {api.birth_year}</ListGroupItem>
              </ListGroup>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}