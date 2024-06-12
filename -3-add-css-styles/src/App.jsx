//  HOW TO STYLE REACT COMPONENTS WITH CSS
// (not including external frameworks or preprocessors)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

import Button from "./Button/Button.jsx"; //via module
// import Button from "./Button"; // via inline

function App() {
  return (
    <>
      <Button/>
    </>
  );
}

export default App
