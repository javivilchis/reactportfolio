import './App.css';
import React, { useState } from "react";
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

import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


import { onMessageListener } from "./firebase";
import Notifications from "./components/Notifications/Notifications";
import ReactNotificationComponent from "./components/Notifications/ReactNotification";



/* importing react Google Analytics */


const trackingId = "G-BJT6LTFH6Y";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

toast.configure()

function App() {

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  //console.log(show, notification);

  onMessageListener()
    .then((payload) => {
      //console.log("app.js/PAYLOAD: ", payload);
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      //console.log(payload);
    })
    .catch((err) => console.log("failed booo: ", err));

  return (
    <div className="App">
      {show ? (<ReactNotificationComponent title={notification.title} body={notification.body} />) : (
        <></>
      )}
      <Notifications />

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

