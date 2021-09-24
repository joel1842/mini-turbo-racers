import React, {Component} from "react";

import Car from "./Cars";
import car2 from "./img/blue car.png";

export default function Car2() { 
    new Car("Car 2", 120, null, 2, 0, 0);
    const car2Img = car2;

    return <img className="car2" src={car2Img}/>
}