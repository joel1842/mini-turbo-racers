import {
    Link
  } from "react-router-dom";

const Track = () => {
    return(
        <div>
            <h1>TRACK!</h1>
            <Link to="/">
                <button>
                    Go back!
                </button>
            </Link>
        </div>
        
    )
}

export default Track;