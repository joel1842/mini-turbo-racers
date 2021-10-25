import carImg from "./img/blue car.png";

// car 3 props
export const Car3Props = {
    name: 'Car 3',
    img: carImg,
    lane: 3,
    speed: 100,
    startTime: null,
    time: null,
    lap: 0,
    position: 0,
    doneRace: false,
    leaderboard: 0,
    hasEffect: false
}

// resets car 3 props
export const resetCar3 = () => {
    Car3Props.position = 0;
    Car3Props.lap = 0;
    Car3Props.doneRace = false;
    Car3Props.startTime = null;
    Car3Props.time = null;
    Car3Props.speed = 100;
    Car3Props.hasEffect = false;
}