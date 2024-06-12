// Conditional rendering = allows you to control what gets rendered in your application based on certain conditions
//                         (show, hide or change components)

import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <div className="container">
        <UserGreeting isLoggedIn={true} username="Pythagoras"/>
        <UserGreeting username={"Fridge"}/>
      </div>
    </>
  );
}

export default App
