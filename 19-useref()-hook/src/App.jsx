// useState() = Re-renders component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when it's value changes. When you want a component to "remember" some information, but you don't want to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals

import { useState } from 'react'
import MyComponent from './MyComponent'

function App() {

  return (
    <>
      <MyComponent/>
    </>
  )
}

export default App
