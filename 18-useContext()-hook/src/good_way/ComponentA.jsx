import { createContext, useContext, useEffect, useState } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext();

function ComponentA() {
    const [user, setUser] = useState("Human");
    useEffect(() => {
        const intervalID = setInterval(() => {setUser(prevUser => prevUser + "a")}, 1000);
    }, [])
    return(
    <div className="box">
        <h1>ComponentA</h1>
        <h2>{`Hello, ${user}`}</h2>
        <UserContext.Provider value={user}>
            <ComponentB/>
        </UserContext.Provider>
    </div>)
}

export default ComponentA