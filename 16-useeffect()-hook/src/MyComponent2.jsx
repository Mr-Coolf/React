// useEffect() = React Hook that tells React TO DO SOME CODE WHEN (pick one):
//                  This component re-renders
//                  This component mounts
//                  The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})           // Runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount
// 3. useEffect(() => {}, [value])  // Runs only on mount + when the value changes

// USES
//  #1 Event Listeners
//  #2 DOM manipulation
//  #3 Subscriptions (real-time updates)
//  #4 Fetching data from an API
//  #5 Clean up when a component unmounts

import { useState, useEffect } from 'react'

function MyComponent2() {

    const[width, setWidth] = useState(window.innerWidth)
    const[height, setHeight] = useState(window.innerHeight)
    
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event listener added");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        }

    }, []);

    useEffect(() => {document.title = `Size: ${width},${height}`})

    // useEffect(() => {}, [window.innerWidth, window.innerHeight])

    function handleResize() {
        setWidth(window.innerWidth); 
        setHeight(window.innerHeight);
    }

    return(
    <div>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
    </div>)
}

export default MyComponent2