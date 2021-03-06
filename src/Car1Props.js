import carImg from "./img/orange car.png";

// car 1 props
export const Car1Props = {
    name: 'Car 1',
    img: carImg,
    lane: 1,
    speed: 95,
    startTime: null,
    time: null,
    lap: 0,
    position: 0,
    doneRace: false,
    leaderboard: 0,
    hasEffect: false
}

// resets car 1 props
export const resetCar1 = () => {
    Car1Props.position = 0;
    Car1Props.lap = 0;
    Car1Props.doneRace = false;
    Car1Props.startTime = null;
    Car1Props.time = null;
    Car1Props.speed = 95;
    Car1Props.hasEffect = false;
}