import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  GlobalStyle,
  ContainerDetails,
  Container,
} from "./ShipDetails.styles.js";

const ShipDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${id}`)
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, [id]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          alt={`starship-${details.name}`}
        />

        <h2>{details.name}</h2>

        <ContainerDetails>
          <div style={{ padding: "5px" }}>
            <p>Model:{details.model}</p>
            <p>Cost in credits:{details.cost_in_credits}</p>
            <p>Atmospheric speed:{details.max_atmosphering_speed}</p>
          </div>
          <div style={{ padding: "5px" }}>
            <p>Manufacturer:{details.manufacturer}</p>
            <p>Length:{details.length}</p>
            <p>Crew:{details.crew}</p>
          </div>
        </ContainerDetails>
      </Container>
    </>
  );
};

export default ShipDetails;