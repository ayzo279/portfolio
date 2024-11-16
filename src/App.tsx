// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Amplifi from "./pages/Amplifi";
import Insights from "./pages/Insights";
import Arbimon from "./pages/Arbimon";
import Uplift from "./pages/Uplift";

import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";
import ScrollToTop from "./components/ScrollToTop";

import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App font-sans bg-slate-900 text-white min-h-screen">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uplift" element={<Uplift />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/arbimon" element={<Arbimon />} />
          <Route path="/amplifi" element={<Amplifi />} />
        </Routes>
        <ContactBar/>
      </div>
    </Router>
  );
}

export default App;
