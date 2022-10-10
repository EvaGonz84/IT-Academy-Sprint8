import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalStyle, Container } from "./Ships.styles";

const Ships = () => {
  const [starShips, setStarShips] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((res) => res.json())
      .then((res) => setStarShips(res.results));
  }, []);


  return (
    <>
    <GlobalStyle/>
    
      {starShips.map((ship) => (
        <Container key={ship.name}>
          
          <Link style={{color:'grey', textDecoration:'none'}} to={`/shipdetails/${Number(ship.url.split("/").slice(-2)[0])}`}>
            {ship.name.toUpperCase()}
          </Link>
          <p>{ship.model}</p>
        </Container>
      ))}
     
    </>
  );
};

export default Ships;
