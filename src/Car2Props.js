import carImg from './img/neon car.png';

// car 2 props
export const Car2Props = {
    name: 'Car 2',
    img: carImg,
    lane: 2,
    speed: 97,
    startTime: null,
    time: null,
    lap: 0,
    position: 0,
    doneRace: false,
    leaderboard: 0,
    hasEffect: false
}

// resets car 2 props
export const resetCar2 = () => {
    Car2Props.position = 0;
    Car2Props.lap = 0;
    Car2Props.doneRace = false;
    Car2Props.startTime = null;
    Car2Props.time = null;
    Car2Props.speed = 97;
    Car2Props.hasEffect = false;
}