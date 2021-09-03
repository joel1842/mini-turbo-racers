import "./credits.css";
import creditsTitle from "./credits.png";
import {
    Link
  } from "react-router-dom";

const Credits = () => {
    return(
        <div>
            <div className="credits">
                <img src={creditsTitle} alt="Credits" />
                <h3>Designed & Created</h3>
                <p><strong>JOEL LAKE</strong></p>
                <h3>Programming</h3>
                <p><strong>JOEL LAKE</strong></p>
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

export default Credits;