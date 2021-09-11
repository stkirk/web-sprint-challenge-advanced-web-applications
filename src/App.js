import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";
import axios from "axios";

function App() {
  // console.log("window: ", window.location);

  const logout = () => {
    localStorage.removeItem("token");
    // window.location.href = "http://localhost:3000/login";
    console.log("logging out");
    // axios
    //   .post("http://localhost:5000/api/logout")
    //   .then((res) => {
    //     console.log("Logout res: ", res);
    //   })
    //   .catch((err) => {
    //     console.log("Logout err: ", err);
    //   });
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a
            data-testid="logoutButton"
            onClick={logout}
            href="http://localhost:3000/login"
          >
            logout
          </a>
        </header>
        <Switch>
          <PrivateRoute exact path="/bubbles" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
