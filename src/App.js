import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import ShipDetails from "./components/ShipDetails/ShipDetails";
import Ships from "./components/Ships/Ships";
import "./App.css";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import SignUpScreen from "./components/SignUpScreen/SignUpScreen";
import UserProvider from "./context/UserProvider";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter basename='/STAR-WARS-'>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/starships"
              element={
                <RequireAuth>
                  <Ships />
                </RequireAuth>
              }
            />
            <Route path="/shipdetails/:id" element={<ShipDetails />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </BrowserRouter>
      </UserProvider>
      
    </div>
  );
}

export default App;
