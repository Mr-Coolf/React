// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }
    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }
    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (<>
        <div>
            <input type="text" name="" id="" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
<br />
            <input type="number" name="" id="" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>
            <br />
            <textarea value={comment} name="" id="" onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comment}</p>
            <br />
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
            <br />
            <label>
                <input type="radio" value="Pick Up" id="" checked={shipping ==="Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label> <br />
            <label>
                <input type="radio" value="Delivery" id="" checked={shipping ==="Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    </>);
}
export default MyComponent