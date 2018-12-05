import React from "react";
import Auth from "./Auth";
import { Redirect } from "react-router-dom";
import Emoji from "react-emoji-render";

class SignUp extends React.Component {
  state = {
    redirectToReferrer: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
  };

  isEmptyFields = () => {
    if (this.state.email === "" || this.state.password === ""
      || this.state.firstName === "" || this.state.lastName === "") {
      this.setState({ error: "Fields cannot be empty, please enter your email address and password" });
      return true;
    }
    return false;
  }

  signUp = () => {
    if (!this.isEmptyFields()) {
      Auth.signUpAuth(this.state.firstName, this.state.lastName, this.state.email, this.state.password, () => {
        this.setState({ redirectToReferrer: true })
      })
        .then(() => {
          if (this.state.redirectToReferrer) {
            this.setState({ error: "" });
            this.setState({ redirectToReferrer: false });
          }
          else {
            this.setState({ error: "email is already associated with another account, please enter another email" });
          }
        });

    }
  };
  // functions to handle the field values
  firstNameChanged = (event) => {
    this.setState({ firstName: event.target.value })
  }
  lastNameChanged = (event) => {
    this.setState({ lastName: event.target.value })
  }
  emailChanged = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordChanged = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    let error = this.state.error ? this.state.error + " 😩" : "";
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      this.setState({ error: "" });
      return <Redirect to={from} />;
    }

    return (
      <div>
         <Emoji style = {{fontSize : "65px"}}className ="align-text-center h1" text = "Sign Up To Become a Hero 😎" />
        <div className="pt-5 container-fluid">
          <div className="form-group row col-med-6 ">
            <label for="firstName" className="col-sm-2 offset-sm-2 col-form-label">First Name</label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.firstNameChanged} placeholder="First Name" />
            </div>
          </div>
          <div className="form-group row col-med-6 ">
            <label for="lastName" className="col-sm-2 offset-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.lastNameChanged} placeholder="Last Name" />
            </div>
          </div>
          <div className="form-group row col-med-6 ">
            <label for="email" className="col-sm-2 offset-sm-2 col-form-label">Email</label>
            <div className="col-sm-5">
              <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.emailChanged} placeholder="Email" />
            </div>
          </div>
          <div className="form-group row col-med-6">
            <label for="password" className="col-sm-2 offset-sm-2 col-form-label">Password</label>
            <div className="col-sm-5">
              <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.passwordChanged} placeholder="Password" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-6">
              <button type="submit" onClick={this.signUp} className="btn btn-primary ">Sign Up</button>
            </div>
          </div>
          {error && <div><Emoji className="text-center p text-danger" text={error} /></div>}
        </div>
        </div>
        );
      }
    }
export default SignUp;