import { useContext } from "react"
import { UserContext } from "./ComponentA"
// import ComponentA from "./ComponentA"

function ComponentD() {
    const user = useContext(UserContext);

    return(
    <div className="box">
        <h1>ComponentD</h1>
        <h2>Bye, {user}</h2>
        {/* <ComponentA/> */}
    </div>)
}

export default ComponentD