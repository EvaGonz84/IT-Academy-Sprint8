import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalStyle, Container } from "./Ships.styles";
import InfiniteScroll from "react-infinite-scroll-component";

const Ships = () => {
  const [starShips, setStarShips] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/?page=" + page)
      .then((res) => res.json())
      .then((res) => {
        setStarShips((prevShips) => prevShips.concat(res.results));
        setHasMore((res.next === null? false : true));
      });
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={starShips.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
    >
      <GlobalStyle />

      {starShips.map((ship) => (
        <Container key={ship.name}>
          <Link
            style={{ color: "grey", textDecoration: "none"}}
            to={`/shipdetails/${Number(ship.url.split("/").slice(-2)[0])}`}
          >
            {ship.name.toUpperCase()}
          </Link>
          <p>{ship.model}</p>
        </Container>
      ))}
    </InfiniteScroll>
  );
};

export default Ships;
