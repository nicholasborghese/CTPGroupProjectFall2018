import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Public from "./components/auth_components/Public";
import Protected from "./components/auth_components/Protected";
import Login from "./components/auth_components/Login";
import AuthButton from "./components/auth_components/AuthButton";
import PrivateRoute from "./components/auth_components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <AuthButton />
      { /* All links to the different routes of the application */}
      <ul>
        <li><Link to="/public" >Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
      
      {/* All routes of the application */}
      <Route path = "/public" component = {Public}></Route>
      <PrivateRoute path="/protected" component={Protected}/>
      <Route path = "/login" component = {Login}></Route>
      
      
      {/*
      <Route path = "/signup" component = {Protected}></Route>        {/*
      
      <Route path = "/"></Route>
        <Auth /> */}
        
      {/*End of application */}
      </div>
      </Router>
      
    );
  }
}

export default App;
