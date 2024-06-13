// useContext() = React Hook that allows you to share values between multiple levels of components without passing props to each level

// PROVIDER COMPONENT
// 1. import { createContext } from 'react';
// 2. export const MyContext = createContext();
// 3 <MyContext.Provider value={value}

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react'
//    import { MyContext } from './ComponentA'
// 2. const value = useContext(MyContext);

import React, {useState, useEffect, useContext} from "react"
import ComponentA1 from "./bad_way/ComponentA"
import ComponentA2 from "./good_way/ComponentA"

function App() {
  return (
  <>
    <ComponentA2/>
    <ComponentA1/>
  </>)
}

export default App
