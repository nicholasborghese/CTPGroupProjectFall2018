import React from "react";
import { withRouter } from "react-router-dom";
import Auth from "./Auth";

const SignOut = withRouter(
  ({ history }) => (
    <button className = "btn btn-primary"
      onClick={() => {
        Auth.signOut(() => history.push("/public"));
      }}
    >
      Sign out
          </button>

  )
);
export default SignOut;