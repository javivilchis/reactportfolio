
import './App.css';
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";

import ReactGA from 'react-ga';

const trackingId = "G-ECYMCZPMG0"; 
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Switch>
        <Route exact path="/reactportfolio/" component={Home} />
        <Route exact path="/reactportfolio/about" component={About} />
        <Route exact path="/reactportfolio/work" component={Work} />
        <Route exact path="/reactportfolio/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

