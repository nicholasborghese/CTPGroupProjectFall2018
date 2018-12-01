
import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";
import SignOut from "./SignOut";

// helper function to get greeting message
function getGreetingMsg() {
    const today = new Date();
    const currentHour = today.getHours();
    if (currentHour < 12) {
        return "Good Morning, ";
    }
    else if (currentHour < 18) {
        return "Good Afternoon, ";
    }
    else {
        return "Good Evening, ";
    }
}
function Main(props) {
    const greetingMsg = Auth.activeUser ? getGreetingMsg() + Auth.activeUser : "";
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#f47070" }}>
                <span className="navbar-brand mb-0 h1">Heroes Food</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" text-left collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link className="navbar-brand nav-link" to="/public" >Home</Link></li>
                        <li className="nav-item" ><Link className="navbar-brand nav-link" to="/protected">Protected Page</Link></li>
                        <li className="nav-item"><Link className="navbar-brand nav-link" to="/login">Login</Link></li>
                        <li className="nav-item "><Link className=" navbar-brand nav-link" to="/signup">Sign Up</Link></li>
                        {greetingMsg &&
                            <li className="nav-item pl-3"> <span className="navbar-brand mb-0 h1">{greetingMsg}</span></li>}
                        {Auth.activeUser && <SignOut />}
                    </ul>
                </div>
            </nav>
            <div className="main">
                {props.children}
            </div>
        </div>






    );
}

export default Main;
