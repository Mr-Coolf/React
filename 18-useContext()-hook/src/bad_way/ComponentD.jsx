import ComponentA from "./ComponentA"

function ComponentD(props) {
    return(
    <div className="box">
        <h1>ComponentD</h1>
        <h2>User: {props.user}</h2>
        {/* <ComponentA/> */}
    </div>)
}

export default ComponentD