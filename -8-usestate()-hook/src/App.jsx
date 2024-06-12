// React hook = Special function that allows functional components to use React features without writing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback, and more ...)

import Counter from "./Counter.jsx"
import MyComponent from "./MyComponent.jsx"

// useState() = A React hook that allows the creation of a stateful variable AND a setter function to update its value in the virtual DO.
//              [name, setName]



function App() {

  return (
    <>
      <Counter/>
      {/* <MyComponent/> */}
    </>
  )
}

export default App
