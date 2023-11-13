import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Autoservisas from "./pages/Autoservisas";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Owner from "./pages/Owner";

function App() {
  return (
    <div className="font">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Autoservisas />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/User" element={<User />} />
          <Route path="/Owner" element={<Owner />} />
        </Routes>
      </Router>{" "}
    </div>
  );
}

export default App;
