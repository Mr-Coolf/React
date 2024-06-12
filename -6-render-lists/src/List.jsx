
import propTypes from 'prop-types'

function List(props) {

    const category = props.category;    
    const itemList = props.items;

    // itemList.sort((a,b)=> a.name.localeCompare(b.name)); // ALPHABETICAL
    // itemList.sort((a,b)=> a.calories - b.calories); // NUMERICAL

    // const lowCalFruits = itemList.filter(fruit => fruit.calories < 100);


    const highCalFruits = itemList.filter(item => item.calories >= 100);

    const listItems = itemList.map(itemList => <li key={itemList.id}>{itemList.name}: &nbsp;<b>{itemList.calories}</b></li>);
    // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp;<b>{lowCalFruit.calories}</b></li>);
    // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp;<b>{highCalFruit.calories}</b></li>);
    return (<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>);
}
List.defaultProps = {
    category: "Category",
    items: [],
}
List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number, name: propTypes.string, calories: propTypes.number}))
}

export default List