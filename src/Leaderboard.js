import React, { useState } from "react";

const Leaderboard = ({carArray}) => {
    let firstPlace = carArray[0];
    let secondPlace = carArray[1];
    let thirdPlace = carArray[2];

    return (
        <div>
            <h1>Leaderboard</h1>
            <p>1st place: {firstPlace.name} with a time of {firstPlace.time} seconds!</p>
            <p>2nd place: {secondPlace.name} with a time of {secondPlace.time} seconds!</p>
            <p>3rd place: {thirdPlace.name} with a time of {thirdPlace.time} seconds!</p>
        </div>
    )
}

 export default Leaderboard;