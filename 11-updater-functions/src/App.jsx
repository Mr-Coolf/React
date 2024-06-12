// updater function = A function passed as an argument to setState() usually ex. setYear(prevYear => prevYear + 1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions

import MyComponent from "./MyComponent";

//                    Good practice to use updater functions
function App() {

  return (
    <>
    <MyComponent/>
    </>
    
  );
}

export default App
