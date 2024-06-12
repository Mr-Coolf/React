import propTypes from "prop-types";
function UserGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>;
    
    const loginPrompt = <h2 className="login-prompt">
                        Please log in, {props.username}
                        </h2>;

    return props.isLoggedIn ? welcomeMessage : loginPrompt;

    // return props.isLoggedIn ? 
    // (<h2 className="welcome-message">Welcome {props.username}</h2>) : 
    // (<h2 className="login-prompt">Please log in, {props.username}</h2>);
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
};

export default UserGreeting