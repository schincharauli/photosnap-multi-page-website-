import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Stories from "./components/Stories/Stories";
import Features from "./components/Features/Features";
import Pricing from "./components/pricing/Pricing";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <>
        {/* <Header /> */}
        {/* <Home /> */}
        {/* <Footer /> */}
        {/* <Stories /> */}
        {/* <Features />
        <Pricing /> */}
      </>
    </Router>
  );
}

export default App;
