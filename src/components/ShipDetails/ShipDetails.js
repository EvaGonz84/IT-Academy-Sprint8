import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  GlobalStyle,
  ContainerDetails,
  Container,
  DivDetails,
  Line,
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
        <Line></Line>

        <h2>{details.name}</h2>

        <ContainerDetails>
          <DivDetails>
            <p>Model:{details.model}</p>
            <p>Cost in credits:{details.cost_in_credits}</p>
            <p>Atmospheric speed:{details.max_atmosphering_speed}</p>
          </DivDetails>
          <DivDetails>
            <p>Manufacturer:{details.manufacturer}</p>
            <p>Length:{details.length}</p>
            <p>Crew:{details.crew}</p>
          </DivDetails>
        </ContainerDetails>
      </Container>
    </>
  );
};

export default ShipDetails;
