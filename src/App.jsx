import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Stories from "./components/Stories";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Header />
      <Home />
      <Footer />
      <Stories />
      <Features /> */}
      <Pricing />
    </>
  );
}

export default App;
