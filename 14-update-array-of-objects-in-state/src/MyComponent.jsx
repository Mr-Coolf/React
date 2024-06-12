import React, {useEffect, useState} from "react";

function MyComponent() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    // let enterPressed = false;

    // useEffect( () =>  {
    //     window.addEventListener("keydown", event => {
    //         if(event.key == "Enter" && carMake != "" && carModel != "" && !enterPressed) {
    //             handleAddCar()
    //             setCarYear(new Date().getFullYear());
    //             setCarMake("");
    //             setCarModel("");
    //             enterPressed = true;
    //     }})
    //     window.addEventListener("keyup", event => {
    //         if(event.key == "Enter" && enterPressed) enterPressed = false;
    //     }, [])
    // })

    
    async function handleAddCar() {
        const newCar = {year: carYear,
            make: carMake,
            model: carModel
        }
        if (carMake != "" && carModel != "") {
            await setCars(prevCars => [...prevCars, newCar])
            await setCarYear(new Date().getFullYear());
            await setCarMake("");
            await setCarModel("");
        }        
    }
    function handleRemoveCarById(id) {
        setCars(cars.filter((_, i) => i !== id))
    }
    function handleYearChange(event) {
        setCarYear(event.target.value);
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }
    function handleKeyDown(event) {
        if (event.key == "Enter") { 
            handleAddCar()
        }
    }

    return(
    <div onKeyDown={handleKeyDown}>
        <h2>List of Car Objects</h2>
        <ul>
            {cars.map((car, id) => 
            <li key={id} onClick={() => handleRemoveCarById(id)}>
                {car.year} {car.make} {car.model}
            </li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange}/><br />
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/><br />
        <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/><br />
        <button onClick={handleAddCar}>Add Car</button>
    </div>)
}

export default MyComponent