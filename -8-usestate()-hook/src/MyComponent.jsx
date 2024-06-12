import React, {useState} from 'react';

function MyComponent() {

    let [name, setName] = useState("Guest");
    let [age, setAge] = useState("0");
    let [isEmployed, setIsEmployed] = useState(false);

    const updateName = async (e) =>{
        await setName("Spongebob");
        console.log(name);
    }

    const incrementAge = async (e) => {
        await setAge(age+1);
    }

    const toggleEmployedStatus = async (e) => {
        await setIsEmployed(!isEmployed);
    }

    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment age</button>

        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle status</button>
    </div>);
}

export default MyComponent