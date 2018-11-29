import React from "react";
import Auth from "./Auth";
import { Redirect } from "react-router-dom";
import Emoji from "react-emoji-render";

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    email: "",
    password: "",
    error: "",
  };

  isEmptyFields = () => {
    if (this.state.email === "" || this.state.password === "") {
      this.setState({ error: "Fields cannot be empty, please enter your email address and password" });
      return true;
    }
    return false;
  }

  login = () => {
    if (!this.isEmptyFields()) {
      Auth.loginAuth(this.state.email, this.state.password, () => {
        this.setState({ redirectToReferrer: true })
      })
        .then(() => {
          if (this.state.redirectToReferrer) {
            this.setState({ error: "" });
            this.setState({ redirectToReferrer: false });
          }
          else {
            this.setState({ error: "Invalid email or password" });
          }
        });

    }
  };

  emailChanged = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordChanged = (event) => {
    this.setState({ password: event.target.value });
  };
 
  render() {

    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;
    let error = this.state.error ? this.state.error + " 😩" : "";
    if (redirectToReferrer) {
      this.setState({ error: "" });
      return <Redirect to={from} />;
    }

    return(
      <div>
      <Emoji style = {{fontSize : "65px"}}className ="align-text-center h1"text = "Login 🍔" />
      <div className = " pt-5 container-fluid">
      <div className="form-group row col-med-6 ">
      <label className="col-sm-2 offset-sm-2 col-form-label">Email</label>
      <div className="col-sm-5">
        <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.emailChanged} placeholder="Email"/>
      </div>
      </div>
     <div className="form-group row col-med-6">
    <label  className="col-sm-2 offset-sm-2 col-form-label">Password</label>
    <div className="col-sm-5">
      <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.passwordChanged} placeholder="Password"/>
    </div>
    </div>
    <div className="form-group row">
    <div className="col-sm-6">
      <button type="submit" onClick={this.login} className="btn btn-primary ">Sign in</button>
  </div>
  </div>
  {error && <div><Emoji className = "text-center p text-danger" text = {error}/></div>}
  </div>
  </div>
    ); 
        }
      }
export default Login;

 