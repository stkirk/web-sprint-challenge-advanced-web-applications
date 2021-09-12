import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const initialFormValues = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const [error, setError] = useState("");
  //replace with error state

  const handleChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const { push } = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formValues)
      .then((res) => {
        console.log("Login res: ", res.data.payload);
        localStorage.setItem("token", res.data.payload);
        setError("");
        push("/bubbles");
      })
      .catch((err) => {
        console.log("Login err: ", err);
        setError(
          "Username or Password incorrect, please enter valid credentials"
        );
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={formValues.username}
          placeholder="username"
        />
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={formValues.password}
          placeholder="password"
        />
        <button id="submit">Login</button>
      </form>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
