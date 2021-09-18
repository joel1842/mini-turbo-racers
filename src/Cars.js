// car constructor
class Car extends Component {
    constructor(name, speed, time, weight, acceleration, lane, isBet) {
        super();
        this.name = name;
        this.speed = speed;
        this.time = time;
        this.weight = weight;
        this.acceleration = acceleration;
        this.lane = lane;
        this.isBet = isBet;
        this.setBet = this.setBet.bind(this);
    }

    setBet() {
        this.isBet = true;
        console.log(this.name, this.isBet);
    }
} 

// cars
const car1 = new Car("Car 1", 100, 200, 5, 1, false);

const car2 = new Car("Car 2", 120, 300, 2, 2, false);

const car3 = new Car("Car 3", 90, 150, 7, 3, false);

export default Car;