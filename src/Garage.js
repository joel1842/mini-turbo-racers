import React from "react";
import {
    Link
  } from "react-router-dom";

const Garage = () => {
    return(
        <div>
            <h1>GARAGE!</h1>
            <Link to="/">
                <button>
                    Go back!
                </button>
            </Link>
        </div>
    )
}

export default Garage;