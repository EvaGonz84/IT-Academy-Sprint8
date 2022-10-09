import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Ships = () => {
  const [starShips, setStarShips] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((res) => res.json())
      .then((res) => setStarShips(res.results));
  }, []);


  return (
    <div>
      {starShips.map((ship) => (
        <div key={ship.name}>
          <Link to={`/shipdetails/${Number(ship.url.split("/").slice(-2)[0])}`}>
            {ship.name.toUpperCase()}
          </Link>
          <p>{ship.model}</p>
        </div>
      ))}
    </div>
  );
};

export default Ships;
