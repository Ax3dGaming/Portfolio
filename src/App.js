import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen/";
import { ReactNotifications } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <ReactNotifications/>
          <Home />
        </div>
      </Router>
    </div>
  );
}

export default App;
