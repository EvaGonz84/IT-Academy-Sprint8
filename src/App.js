import { useState, useEffect } from "react";
import { getShips } from "./api/starships";

function App() {
  const [starShips, setStarShips] = useState([]);

  useEffect(() => {
    getShips().then((data) => setStarShips(data.results));
  }, []);

  return (
    <div className="App">
      {starShips.map((ship) => (
        <div key={ship.name}>
          <h4>{ship.name.toUpperCase()}</h4>
          <p>{ship.model}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
