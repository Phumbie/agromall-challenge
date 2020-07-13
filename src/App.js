import React from "react";
// import logo from "./logo.svg";
import Home from "./components/home";
import Profile from "./components/profile";
import "./App.css";
import FarmerState from "./context/farmer/FarmerState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const FourOhFour = () => (
  <div class="error-page">
    <h1>Error 404; This Page Doesn't Exist</h1>
  </div>
);
function App() {
  return (
    <FarmerState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/:id" component={Profile} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </Router>
    </FarmerState>
  );
}

export default App;
