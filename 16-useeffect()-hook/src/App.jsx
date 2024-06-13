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
import MyComponent from './MyComponent'
import MyComponent2 from './MyComponent2'

function App() {

  return (
    <>
      <MyComponent/>
      <MyComponent2/>
    </>
  )
}

export default App
