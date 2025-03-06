import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import Page1 from './Components/1';
import Page2 from './Components/2';
import Page3 from './Components/3';
import Page4 from './Components/4';
import Page4 from './Components/5';

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
            <a href="/3">
              3 ▶
            </a>
            <a href="/4">
              4 ▶
            </a>
            <a href="/5">
              4 ▶
            </a>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
          <Route path="/3" element={<Page3 />} />
          <Route path="/4" element={<Page4 />} />
          <Route path="/5" element={<Page4 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
