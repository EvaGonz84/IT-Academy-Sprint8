import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import ShipDetails from "./components/ShipDetails/ShipDetails";
import Ships from "./components/Ships/Ships";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/starships" element={<Ships />} />
        <Route path="/shipdetails/:id" element={<ShipDetails/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
