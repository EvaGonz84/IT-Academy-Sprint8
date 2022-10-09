import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShipDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${id}`)
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, [id]);

  return (
    <div>
      <img
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        alt={`starship-${details.name}`}
      />
      <h1>{details.name}</h1>
      <p>{details.manufacturer}</p>
      <p>Model:{details.model}</p>
      <p>Cost in credits:{details.cost_in_credits}</p>
      <p>Atmospheric speed:{details.max_atmosphering_speed}</p>
      <p>Manufacturer:{details.manufacturer}</p>
      <p>Length:{details.length}</p>
      <p>Crew:{details.crew}</p>
    </div>
  );
};

export default ShipDetails;
