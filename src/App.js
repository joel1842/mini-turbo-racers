import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from "./img/logo.png";
import flag from "./img/checkeredFlag.png";
import garageIcon from "./img/garageIcon.png";
import moneyIcon from "./img/moneyIcon.png";
import rulesIcon from "./img/rulesIcon.png";
import starIcon from "./img/starIcon.png";
import Racetrack from "./Racetrack";
import Garage from "./Garage";
import Bank from "./Bank";
import HowToPlay from './HowToPlay';
import Credits from './Credits';
import Bet from "./Bet";

function App() {

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
                    {/* <Link to="/track">
                      <button>
                        <img src={flag} alt="Track" />
                        <a href="/track">Track</a>
                      </button>
                    </Link>   */}
                    <Link to="/garage">
                      <button>
                        <img src={garageIcon} alt="Garage" />
                        <a href="/garage">Garage</a>
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
            <Racetrack/>
          </Route>
          <Route path="/garage">
            <Garage />
          </Route>
          <Route path="/bet">
            <Bet />
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
