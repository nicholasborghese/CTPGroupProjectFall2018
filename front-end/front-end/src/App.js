
import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Main from "./components/auth_components/Main";
import Home from "./components/auth_components/Home";
import Protected from "./components/auth_components/Protected";
import Login from "./components/auth_components/Login";
import PrivateRoute from "./components/auth_components/PrivateRoute";
import SignUp from "./components/auth_components/SignUp";
import SignOut from "./components/auth_components/SignOut";
import Restaurant from './components/auth_components/Restaurant';
class App extends Component {
  render() {
    
    return (
      <Router>
      <div className="App">
    
      <Main>
      {/* All routes of the application */}
      <Switch>
      <Route exact path = "/" component = {Home}>
      </Route>
      <Route exact path = "/search/:filter/:input/" component = {Restaurant
      } />
      <PrivateRoute path="/protected" component={Protected}/>
      <Route path="/signout" component={SignOut}/>
      <Route path = "/login" component = {Login}></Route>
      <Route path ="/signup" component = {SignUp}></Route>
      </Switch>
      </Main>
      </div>
      </Router>
      
       
    );
    
  }
}

export default App;

/*{/*
      <Route path = "/signup" component = {Protected}></Route>        {/*
      
      <Route path = "/"></Route>
        <Auth /> }
      <Router path = "/" component = {Main}></Router>
        {/*<Router  path="/"> 
        <AuthButton />*/
      /*</Router> */
      
      /*End of application }*/
      
