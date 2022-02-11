import React from "react";
import { Routes, Route } from "react-router-dom";
import Planets from "./pages/Planets";
import DetailPlanet from "./pages/DetailPlanet";

function App() {
  return (
    <div className="code-test-app">
      <Routes>
        <Route path="/" element={<Planets />} />
        <Route path="/planet/:id" element={<DetailPlanet />} />
      </Routes>
    </div>
  );
}

export default App;
