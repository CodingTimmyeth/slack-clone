import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Header />
        </>
      </Router>
    </div>
  );
}

const Home = styled.div``

export default App;
