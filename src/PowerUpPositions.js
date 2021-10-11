import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import gasCan from "./img/gas can.png";
import './css/powerup.css';

export const PowerUpPositions = () => {

    const powerUpGenerator = () => { 
        // const powerUpLane = () => {
        //     return Math.floor(Math.random() * 3) + 1;
        // }
        const powerUpPosition = () => {
        return Math.floor(Math.random() * 45) + 1;
        }
        return powerUpPosition()
    }

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
    
    let powerUpX = lane1Positions[powerUpGenerator()].x
    let powerUpY = lane1Positions[powerUpGenerator()].y
    const [style, animate] = useSpring(() => ({
        from: {x:powerUpX, y: powerUpY}
    }))

    return(
        <animated.img className='gasCan' src={gasCan} style={style} alt="Gas Can" />
    )
}