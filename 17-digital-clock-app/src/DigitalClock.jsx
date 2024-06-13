import React, { useEffect, useState } from "react"


function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {//setInterval(callback, timeinms)
            setTime(new Date());
        }, 250)
        return () => {
            clearInterval(intervalID);
        }
    }, []); 

    function padZero(num) {
        return ((num + "").padStart(2, "0"));
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{padZero(time.getHours())}:{padZero(time.getMinutes())}:{padZero(time.getSeconds())}</span>
            </div>

        </div>
    )
}

export default DigitalClock