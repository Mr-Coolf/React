import React, {useState} from 'react'
import { useEffect } from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    useEffect(() => {
        window.addEventListener("keyup", event => {
            if (event.key ==="Enter") {
                handleAddFood();
                // console.log("Im alive");
            }
        })    
    })

    function handleAddFood() {
        const inputValue = document.getElementById("foodInput").value;
        if (inputValue != "") {
            setFoods(prevFoods => [...prevFoods, inputValue]);
            document.getElementById("foodInput").value = "";
        }
        
    }
    function handleRemoveFood() {
        const inputValue = document.getElementById("foodInput").value;
        if (inputValue != "") {
            const lowerCaseFoods = foods.map(food => food.toLowerCase())
            if (lowerCaseFoods.includes(inputValue.toLowerCase())) {
                const index = lowerCaseFoods.indexOf(inputValue.toLowerCase())
                setFoods(foods.filter((_, i) => i !== index));
                document.getElementById("foodInput").value = "";
            }
        } else{
            setFoods(foods.filter((_, i) => i !== foods.length - 1));
        }
    }

    function handleRemoveByFoodId(id) {
        setFoods(foods.filter((_, i) => i !== id));
    }

    return(
    <div>
        <h2>List of food</h2>
        <ul>
            {foods.map((food, index)=> <li key={index} onClick={() => handleRemoveByFoodId(index)}>{food}</li>)}
        </ul>
        <input type="text" id='foodInput' placeholder='Enter food name' /> <br />
        <button onClick={handleAddFood}>Add food</button>
        <button onClick={handleRemoveFood}>Remove food</button>
    </div>)
}

export default MyComponent