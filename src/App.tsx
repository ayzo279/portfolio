// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Amplifi from "./pages/Amplifi";
import Insights from "./pages/Insights";
import Arbimon from "./pages/Arbimon";
import Uplift from "./pages/Uplift";
import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Uplift />} />
          <Route path="/project2" element={<Insights />} />
          <Route path="/project3" element={<Arbimon />} />
          <Route path="/project4" element={<Amplifi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
