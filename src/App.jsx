import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Stories from "./components/Stories/Stories";
import Features from "./components/Features/Features";
import Pricing from "./components/pricing/Pricing";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <>
        <NavBar />
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
