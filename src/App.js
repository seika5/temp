import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import Page1 from './Components/1';
import Page2 from './Components/2';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <a href="/">
              Home
            </a>
            <a href="/1">
              1 ▶
            </a>
            <a href="/2">
              2 ▶
            </a>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
