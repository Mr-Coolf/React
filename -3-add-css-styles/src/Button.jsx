// import styles from './Button.module.css'

function Button() {
    const styles = {
        // {
            padding: "10px 15px",
            backgroundColor: "rgba(100, 148, 237, 0.825)",
            fontSize: "3rem",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontWeight: "bold",
            margin: "15px",
            borderRadius: "15px",
            border: "none",
            cursor: "pointer",
            boxShadow: "5px 10px 9px hsla(0, 0%, 0%, 0.353)",
            transition: "0.2s background-color ease-in-out, transform 0.2s ease-in-out"
        //   }
        //   .myBtn:hover{
        //     background-color: rgba(72, 117, 200, 0.825);
        //   }
        //   .myBtn:active{
        //     background-color: rgb(81, 117, 184);
        //     transform: translateY(1px);
        //   }
          
    };
    return (
        <>
            <button style={styles}>Click me!</button>
        </>
    );
}
export default Button