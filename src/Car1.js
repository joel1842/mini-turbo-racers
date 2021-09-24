import React, {Component} from "react";
import { useSpring, animated } from "react-spring";
import "./css/car1.css";

import Car from "./Cars";
import car1 from "./img/orange car.png";
import { reverseEasing } from "popmotion";

export default function Car1() { 

    new Car("Car 1", 100, null, 1, 0, 0)
    const car1Img = car1;

    const carSpring = useSpring({
        loop: true,
        to:{x:100, y:100},
        from:{y:500},
        transform: {rotate: 180},
        config: {duration: 1500}
    })

    return <animated.img className="car1" style={carSpring} src={car1Img}/>
}

