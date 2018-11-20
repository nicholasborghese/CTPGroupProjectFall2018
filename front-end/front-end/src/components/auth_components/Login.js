import React from "react";
import Auth from "./Auth";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
    state = { redirectToReferrer: false,
      email : "",
      password : "",
      error : "",
   };
    
   isEmptyFields = () => {
     if (this.state.email === "" || this.state.password === ""){
       this.setState({error : "Fields cannot be empty, please enter your email address and password"});
       return true;
     }
     return false;
   }

    login = () => {
      if(!this.isEmptyFields()){
      Auth.authenticate(this.state.email, this.state.password, () => {
        this.setState({ redirectToReferrer: true })})
        .then(() => {
          if (this.state.redirectToReferrer)
          { this.setState({error : ""});
            //this.setState({redirectToReferrer : false});}
          }
          else{
            this.setState({error : "Invalid username or password"});
        }
        });
       
    }
    };
  
    emailChanged = (event) =>{
        this.setState({email : event.target.value});
    };
  
    passwordChanged = (event) =>{
        this.setState({password : event.target.value});
    };
  
    render() {
      
      let { from } = this.props.location.state || { from: { pathname: "/" } };
      let  {redirectToReferrer}  = this.state;
      if (redirectToReferrer) {
        this.setState({error: ""});
        return <Redirect to={from} />;
  }
  
      return (
        <div>
          
          <p>You must log in to view the page at {from.pathname}</p>
          <input type ="text" placeholder = "email" value = {this.state.email} onChange = {this.emailChanged} />
          <input type = "password" placeholder = "password" value = {this.state.password} onChange = {this.passwordChanged} /> 
          <button onClick={this.login}>Log in</button>
          {this.state.error && <div>{this.state.error}</div>}
        </div>
      );
    }
  }
  export default Login;