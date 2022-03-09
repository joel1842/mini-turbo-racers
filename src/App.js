import React, { useState, useEffect } from "react";
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
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  // bank is stored globally
  const [globalBank, setGlobalBank] = useState()
  const [userWins, setUserWins] = useState()
  useEffect(() => {

    if (isAuthenticated) {
      const getScore = async () => {

        const data = {
          name: user.name,
          sub: user.sub
        } 

        const response = await fetch('http://localhost:8800/score/getscore/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
        })
        const responseData = (response.json())
        responseData.then((data) => {
          setGlobalBank(data[0].coins)
          setUserWins(data[0].wins)
        })
        
      }
      getScore()
    }

  }, [isAuthenticated, user, getAccessTokenSilently])


  // useEffect(() => {
  //   if (score) {
  //     console.log(score)
  //     console.log("SCORE")
  //   }
  // }, [score])

  // sets bank amount
  function setBank(amount) {
    setGlobalBank(prevGlobalBank => prevGlobalBank + amount)
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
          <div className='navContainer'>

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

          </div>

          </Route>
          <Route path="/track">
            <Racetrack globalBank={globalBank} userWins={userWins} setBank={setBank}/>
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
