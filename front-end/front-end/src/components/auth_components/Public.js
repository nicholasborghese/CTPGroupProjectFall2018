import React from "react";
import Auth from "./Auth";
function Public() {
    return (<div>
      <h3>Public</h3>
      <h1>{Auth.activeUser && Auth.activeUser}</h1>
    </div>
    );
  }

export default Public;