import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from "./img/miniturbologo.png";
import flag from "./img/checkeredFlag.png";
import rulesIcon from "./img/rulesIcon.png";
import starIcon from "./img/starIcon.png";
import Racetrack from "./Racetrack";
import Garage from "./Garage";
import HowToPlay from './HowToPlay';
import Credits from './Credits';

function App() {

  // bank is stored globally
  const [globalBank, setGlobalBank] = useState(1000)

  // sets bank amount
  function setBank(amount) {
    setGlobalBank(prevGlobalBank => prevGlobalBank + amount)
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Mini Turbo Racers" />
                </div>
                <div className="btn-menu text-center">
                    <Link to="/track">
                      <button>
                        <img src={flag} alt="Start" /> 
                        <a href="/track">Start Game!</a>
                      </button>
                    </Link>
                    <Link to="/howtoplay">
                      <button>
                        <img src={rulesIcon} alt="How to play!" />
                        <a href="/how-to-play">How to play!</a>
                      </button>
                    </Link>
                    <Link to="/credits">
                      <button>
                        <img src={starIcon} alt="Credits" />
                        <a href="/credits">Credits</a>
                      </button>
                    </Link>
                </div>
            </nav>
          </Route>
          <Route path="/track">
            <Racetrack globalBank={globalBank} setBank={setBank}/>
          </Route>
          <Route path="/garage">
            <Garage />
          </Route>
          <Route path="/howtoplay">
            <HowToPlay />
          </Route>
          <Route path="/credits">
            <Credits />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
