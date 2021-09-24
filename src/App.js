
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
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

