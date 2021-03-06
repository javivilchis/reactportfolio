
import './App.css';
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import ReactGA from 'react-ga';
/* importing firebase */
//import firebase from 'firebase/compat/app';
import './i18n';
/*
firebase.initializeApp({
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "jv-website-42ff6.firebaseapp.com",
  databaseURL: "https://jv-website-42ff6.firebaseio.com",
  projectId: "jv-website-42ff6",
  storageBucket: "jv-website-42ff6.appspot.com",
  messagingSenderId: "915417051276",
  appId: "1:915417051276:web:ef203d8b7d73a0430a4ba9",
  measurementId: "G-DFB3DJ2HT5"
});*/


/* importing react Google Analytics */


const trackingId = "G-BJT6LTFH6Y";
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
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

