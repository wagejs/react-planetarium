import React from "react";
import { Routes, Route } from "react-router-dom";
import Planets from "./pages/Planets";
import DetailPlanet from "./pages/DetailPlanet";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  background: #f7f7f7;
  min-height: 100vh;
`;

function App() {
  return (
    <Container className="code-test-app">
      <Routes>
        <Route path="/" element={<Planets />} />
        <Route path="/planet/:id" element={<DetailPlanet />} />
      </Routes>
    </Container>
  );
}

export default App;
