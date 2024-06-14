import { useState, useEffect, useRef } from "react"

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect( () => {
        console.log(isRunning);
        if(isRunning){
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            },5)
        }

        return () =>{
            clearInterval(intervalIDRef.current);
        }

    }, [isRunning])

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop() {
        setIsRunning(false);
    }
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime() {
        const hours = (Math.floor(elapsedTime / (1000 * 60 * 60)) + "").padStart(2, "0");
        const minutes = (Math.floor(elapsedTime / (1000 * 60)) + "").padStart(2, "0");
        const seconds = (Math.floor((elapsedTime / (1000))%60) + "").padStart(2, "0");
        const milliseconds = (Math.floor((elapsedTime % 1000)/ 10) + "").padStart(2, "0");
        if(hours === "00"){
            return `${minutes}:${seconds}:${milliseconds}`;
        }
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
        // hours:minutes:
    }

    return(
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={reset} className="reset-button">Reset</button>
                <button onClick={stop} className="stop-button">Stop</button>
            </div>
        </div>  
    )
}

export default Stopwatch