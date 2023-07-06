import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Stories from "./components/Stories/Stories";
import Features from "./components/Features/Features";
import Pricing from "./components/pricing/Pricing";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Footer /> */}
      {/* <Stories /> */}
      <Features />
      <Pricing />
    </>
  );
}

export default App;
