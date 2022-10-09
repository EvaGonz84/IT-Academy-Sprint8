import Ships from "./components/Ships";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShipDetails from "./components/ShipDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Ships />} />
        <Route path="/shipdetails/:id" element={<ShipDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
