import React, { useState } from "react";

 const Leaderboard = ({carTimes}) => {
    let firstPlace = carTimes[0];
    let secondPlace = carTimes[1];
    let thirdPlace = carTimes[2];

     return (
         <div>
            <h1>Leaderboard</h1>
            <p>First place: {firstPlace.name}  ={">"}  Time: {firstPlace.time} seconds!</p>
            <p>Second place: {secondPlace.name}  ={">"}  Time: {secondPlace.time} seconds!</p>
            <p>Third place: {thirdPlace.name}  ={">"}  Time: {thirdPlace.time} seconds!</p>
         </div>
     )
 }

 export default Leaderboard;