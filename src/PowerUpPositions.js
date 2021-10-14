import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import gasCan from "./img/gas can.png";
import './css/powerup.css';
import Car1 from "./Car1";
import Car2 from "./Car2";
import Car3 from "./Car3";

export const PowerUpPositions = (props) => {

    let lane1Positions = {
        1: {
            x: 1040,
            y: 115.3
        },
        2: {
            x: 1018,
            y: 50.3
        },
        3: {
            x: 943, 
            y: 21.3
        },
        4: {
            x: 807,
            y: 21.3
        },
        5: {
            x: 657,
            y: 21.3
        },
        6: {
            x: 562,
            y: 21.3
        },
        7: {
            x: 501, 
            y: 52.3  
        },
        8: {
            x: 482, 
            y: 125.3
        },
        9: {
            x: 482,
            y: 325.3
        },
        10: {
            x: 482,
            y: 540.3
        },
        11: {
            x: 514, 
            y: 597.3
        }, 
        12: {
            x:572, 
            y:625
        }, 
        13: {
            x: 627,
            y: 627
        },
        14: {
            x: 692, 
            y: 595.3
        },
        15: {
            x: 722, 
            y: 525.3
        }, 
        16: {
            x: 722,
            y: 425.3
        }, 
        17: {
            x: 710, 
            y: 375.3
        }, 
        18: {
            x: 687, 
            y: 315.3
        }, 
        19: {
            x: 697, 
            y: 285.3
        }, 
        20: {
            x: 727, 
            y: 272.3
        }, 
        21: {
            x: 787,
            y: 295.3
        }, 
        22: {
            x: 827, 
            y: 295.3
        },
        23: {
            x: 832, 
            y: 315.3
        }, 
        24: {
            x: 819, 
            y: 355.3
        }, 
        25: {
            x: 795, 
            y: 425.3
        },
        26: {
            x: 795,
            y: 525.3
        }, 
        27: {
            x: 822, 
            y: 590.3
        }, 
        28: {
            x: 892, 
            y: 625.3
        },
        29: {
            x: 1096,
            y: 625.3
        },
        30: {
            x: 1307,
            y: 625.3
        },
        31: {
            x: 1377, 
            y: 590.3
        }, 
        32: { 
            x: 1392, 
            y: 545.3
        },
        33: {
            x: 1392, 
            y: 495.3  
        }, 
        34: {
            x: 1352, 
            y: 360.3
        }, 
        35: {
            x: 1307, 
            y: 215.3
        }, 
        36: {
            x: 1304, 
            y: 100.3
        }, 
        37: {
            x: 1284, 
            y: 43.3
        }, 
        38: {
            x: 1202, 
            y: 21.3
        },
        39: {
            x: 1124, 
            y: 45.3
        }, 
        40: {
            x:1096, 
            y:105.3 
        },
        41: {
            x:1097, 
            y:250.3
        },
        42: {
            x:1087, 
            y:285.3
        }, 
        43: {
            x:1067, 
            y:290.3
        }, 
        44: {
            x:1045, 
            y:285.3
        },
        45: {
            x:1040, 
            y:235.3
        }
    }

    let lane2Positions = {
        1: {
            x: 1002,
            y: 130.6
        },
        2: {
            x: 987,
            y: 80.6
        },
        3: {
            x: 922, 
            y: 56
        },
        4: {
            x: 815,
            y: 56
        },
        5: {
            x: 708,
            y: 56
        },
        6: {
            x: 600,
            y: 56 
        },
        7: {
            x: 537, 
            y: 75.6  
        },
        8: {
            x: 521, 
            y: 125.6
        },
        9: {
            x: 521,
            y: 258
        },
        10: {
            x: 521,
            y: 391
        },
        11: {
            x: 521, 
            y: 525.6
        }, 
        12: {
            x: 537, 
            y: 561
        }, 
        13: {
            x: 600,
            y: 585
        },
        14: {
            x: 668, 
            y: 562
        },
        15: {
            x: 686, 
            y: 522
        }, 
        16: {
            x: 686,
            y: 430.6
        }, 
        17: {
            x: 669, 
            y: 370
        }, 
        18: {
            x: 650, 
            y: 313
        }, 
        19: {
            x: 667, 
            y: 257.6
        }, 
        20: {
            x: 760, 
            y: 229
        }, 
        21: {
            x: 849,
            y: 252
        }, 
        22: {
            x: 872, 
            y: 300.6
        },
        23: {
            x: 851, 
            y: 370.6
        }, 
        24: {
            x: 835, 
            y: 430.6
        }, 
        25: {
            x: 835, 
            y: 520.6
        },
        26: {
            x: 857,
            y: 568
        }, 
        27: {
            x: 917, 
            y: 585
        }, 
        28: {
            x: 1040, 
            y: 585
        },
        29: {
            x: 1163,
            y: 585
        },
        30: {
            x: 1287,
            y: 585
        },
        31: {
            x: 1350, 
            y: 550
        }, 
        32: { 
            x: 1354, 
            y: 479
        },
        33: {
            x: 1323, 
            y: 383   
        }, 
        34: {
            x: 1288, 
            y: 288
        }, 
        35: {
            x: 1268, 
            y: 208
        }, 
        36: {
            x: 1268, 
            y: 123
        }, 
        37: {
            x: 1252, 
            y: 73
        }, 
        38: {
            x: 1207, 
            y: 55
        },
        39: {
            x: 1152, 
            y: 73
        }, 
        40: {
            x: 1136, 
            y: 118
        },
        41: {
            x: 1136, 
            y: 263
        },
        42: {
            x: 1122, 
            y: 302
        }, 
        43: {
            x: 1072, 
            y: 327
        }, 
        44: {
            x: 1017, 
            y: 301
        },
        45: {
            x: 1002, 
            y: 234.6
        }
    }

    let lane3Positions = {
        1: {
            x: 964,
            y: 130.6
        },
        2: {
            x: 987,
            y: 80.6
        },
        3: {
            x: 922, 
            y: 56
        },
        4: {
            x: 815,
            y: 56
        },
        5: {
            x: 708,
            y: 56
        },
        6: {
            x: 600,
            y: 56
        },
        7: {
            x: 537, 
            y: 75.6  
        },
        8: {
            x: 521, 
            y: 125.6
        },
        9: {
            x: 521,
            y: 258
        },
        10: {
            x: 521,
            y: 391
        },
        11: {
            x: 521, 
            y: 525.6
        }, 
        12: {
            x: 537, 
            y: 561
        }, 
        13: {
            x: 600,
            y: 585
        },
        14: {
            x: 668, 
            y: 562
        },
        15: {
            x: 686, 
            y: 522
        }, 
        16: {
            x: 686,
            y: 430.6
        }, 
        17: {
            x: 669, 
            y: 370
        }, 
        18: {
            x: 650, 
            y: 313
        }, 
        19: {
            x: 667, 
            y: 257.6
        }, 
        20: {
            x: 760, 
            y: 229
        }, 
        21: {
            x: 849,
            y: 252
        }, 
        22: {
            x: 872, 
            y: 300.6
        },
        23: {
            x: 851, 
            y: 370.6
        }, 
        24: {
            x: 835, 
            y: 430.6
        }, 
        25: {
            x: 835, 
            y: 520.6
        },
        26: {
            x: 857,
            y: 568
        }, 
        27: {
            x: 917, 
            y: 585
        }, 
        28: {
            x: 1040, 
            y: 585
        },
        29: {
            x: 1163,
            y: 585
        },
        30: {
            x: 1287,
            y: 585
        },
        31: {
            x: 1350, 
            y: 550
        }, 
        32: { 
            x: 1354, 
            y: 479
        },
        33: {
            x: 1323, 
            y: 383  
        }, 
        34: {
            x: 1288, 
            y: 288
        }, 
        35: {
            x: 1268, 
            y: 208
        }, 
        36: {
            x: 1268, 
            y: 123
        }, 
        37: {
            x: 1252, 
            y: 73
        }, 
        38: {
            x: 1207, 
            y: 55
        },
        39: {
            x: 1152, 
            y: 73
        }, 
        40: {
            x: 1136, 
            y: 118
        },
        41: {
            x: 1136, 
            y: 263
        },
        42: {
            x: 1122, 
            y: 302
        }, 
        43: {
            x: 1072, 
            y: 327
        }, 
        44: {
            x: 1017, 
            y: 301
        },
        45: {
            x: 1002, 
            y: 234.6
        }
    }

    let lanePositions = [lane1Positions, lane2Positions, lane3Positions]

    const powerUpLane = () => {
        return Math.floor(Math.random() * 3) + 1;
    }

    const powerUpPosition = () => {
        return Math.floor(Math.random() * 45) + 1;
    }

    let powerUp;
    let randPos;
    let randLane
    function getPowerUpPos() {
        randPos = powerUpPosition()
        randLane = powerUpLane()
        if (randLane === 1) {
            powerUp = lane1Positions[randPos]
        } if (randLane === 2) {
            powerUp = lane2Positions[randPos]
        } if (randLane === 3) {
            powerUp = lane3Positions[randPos]
        }
    }

    const [style, animate] = useSpring(() => ({
        props: getPowerUpPos(),
        from: {x: powerUp.x, y: powerUp.y}
    }))

    useEffect(() => {
        setInterval(carChecker, 10)
    }, [])

    function carChecker() {
        if ((Car1.position === randPos) && (Car1.lane === randLane)) {
            Car1.speed = 80
            animate({opacity: 0})
        } if ((Car2.position === randPos) && (Car2.lane === randLane)) {
            Car2.speed = 80
            animate({opacity: 0})
        } if ((Car3.position === randPos) && (Car3.lane === randLane)) {
            Car3.speed = 80
            animate({opacity: 0})
        }
    }
    

    return(
        <animated.img className='gasCan' src={gasCan} style={style} alt="Gas Can" />
    )
}