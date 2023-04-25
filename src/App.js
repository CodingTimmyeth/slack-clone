import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

const Home = styled.div``

const AppBody = styled.div`
  display: flex;
  height: 100vw;
`

export default App;
