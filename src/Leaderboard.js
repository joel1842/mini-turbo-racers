import React, { useState } from "react";

const Leaderboard = ({carArray}) => {
    let firstPlace = carArray[0];
    let secondPlace = carArray[1];
    let thirdPlace = carArray[2];

    return (
        <div>
            <h1>Leaderboard</h1>
            <p>{firstPlace.name} came in 1st place with a time of {firstPlace.time} seconds!</p>
            <p>{secondPlace.name} came in 2nd place with a time of {secondPlace.time} seconds!</p>
            <p>{thirdPlace.name} came in 3rd place with a time of {thirdPlace.time} seconds!</p>
        </div>
    )
}

 export default Leaderboard;