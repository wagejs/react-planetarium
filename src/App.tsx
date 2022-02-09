import React from "react";
import { Routes, Route } from "react-router-dom";
import Planets from "./pages/Planets";

function App() {
  return (
    <div className="code-test-app">
      <Routes>
        <Route path="/" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
