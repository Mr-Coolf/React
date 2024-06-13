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

function MyComponent() {

    // useEffect(function, [dependencies])

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // }) // on every re-render

    // useEffect(() => {
    //     document.title = `My counter program`
    // }, []) // Updates once

    useEffect(() => {
        document.title = `Counter: ${count} ${color}`
    }, [count, color]) // Updates once + on every count update

    const addCount = () => setCount(prevCount => prevCount + 1);
    const subtractCount = () => setCount(prevCount => prevCount - 1);

    const changeColor = () => setColor(color == "green" ? "red": "green") 

  return (
    <div>
        <p style={{color: color}}>Count: {count} {color}</p>
        <button onClick={subtractCount}>Subtract</button><br /><br />
        <button onClick={addCount}>Add</button>
        <button onClick={changeColor}>Change color</button><br /><br />

    </div>
  )
}

export default MyComponent
