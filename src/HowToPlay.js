import "./css/howtoplay.css";
import howToPlayTitle from "./img/how to play.png";
import {
    Link
  } from "react-router-dom";

const HowToPlay = () => {
    return(
        <div>
            <div className="howtoplay">
                <img src={howToPlayTitle} alt="How To Play" />
                <h2>Wondering how to play? You're in the right place!</h2>

                <h3>Place a bet!</h3>
                <p>Place a bet on the car you think will win! You can bet between 10 and 100 coins. You will win coins based on what postition your car comes in!</p>
                
                <h3>Power-ups</h3>
                <p>Power ups randomly spawn on the track for cars to pick up, or you can buy power-ups for your car! Power ups give cars a boost!</p>
                
                <h3>Blocks</h3>
                <p>Three blocks are available at the beginning of each race. They can be placed wherever you want! You influence the position of each car based on where you place your blocks, if a car you don’t want to win is leading, place a block down in front of it! Ran out of blocks? Buy some more!</p>

                <h3>Car Stats</h3>
                <p>Each car has different stats that affect the way it drives. Stop by the garage to check the stats of each car before you bet! A car may have faster acceleration but a slower top speed. Choose wisely!</p>

                <h3>Postition Earnings</h3>
                <p>You win or lose coins based on what position the car you bet on places.</p>

                <h3>What if I run out of coins?</h3>
                <p>Ran out of coins? Stop by the bank! Rumour has it they give away a lot of coins!</p>
            </div>

           <div className="homebtn">
                <Link to="/">
                    <button>
                        <a href="/">Go back!</a>
                    </button>
                </Link>
            </div> 
        </div>
    )
}

export default HowToPlay;