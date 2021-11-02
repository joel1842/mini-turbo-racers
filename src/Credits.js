import React from "react";
import "./css/credits.css";
import creditsTitle from "./img/credits.png";
import github from "./img/github logo.png";
import linkedin from "./img/linkedin logo.png";
import {
    Link
  } from "react-router-dom";

const Credits = () => {
    return(
        <div>
            <div className="credits">
                <img className="creditsimg" src={creditsTitle} alt="Credits" />
                <div className="creditsContainer">
                    <h3>Graphics & Programming</h3>
                    <p>JOEL LAKE</p>
                    <div className="social">
                        <a href="https://github.com/joel1842/mini-turbo-racers">
                            <img className="githubicon" src={github} alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/joel-lake/">
                            <img className="linkedinicon" src={linkedin} alt="linkedin" />
                        </a>
                    </div>
                </div>
                
            </div>
            
            <div className="creditButton">
                <Link to="/">
                    <button className='homeButton'>
                        <a href="/">Go back!</a>
                    </button>
                </Link>
            </div>    
        </div>
    )
}

export default Credits;