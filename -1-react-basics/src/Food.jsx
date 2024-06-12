function Food(){
    const food = ["Orange", "Banana", "Tomato", "Cucumber"];
    return(
        <ul>
            <li>{food[0]}</li>
            <li>{food[1]}</li>
            <li>{food[2].toUpperCase()}</li>
            <li>{food[3]}</li>
        </ul>
    );
}
export default Food