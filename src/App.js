import React from "react";
// import logo from "./logo.svg";
import Home from "./components/home";
import Profile from "./components/profile";
import "./App.css";
import FarmerState from "./context/farmer/FarmerState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <FarmerState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/:id" component={Profile} />
          </Switch>
        </div>
      </Router>
    </FarmerState>
  );
}

export default App;
