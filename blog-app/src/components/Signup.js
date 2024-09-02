import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    errors: {
      username: "",
      email: "",
      password: "",
    },
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    let errors = { ...this.state.errors };

    switch (name) {
      case "email":
        let emailError =
          value.indexOf("@") === -1 ? "email does not contain @" : "";
        errors.email = emailError;
        break;
      case "username":
        let usernameError =
          value.length >= 6 ? "" : `username can't be less than 6 characters`;
        errors.username = usernameError;
        break;
      case "password":
        let passError = "";
        if (value.length < 7) {
          passError = `password can't be less than 6 characters`;
        }
        let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
        if (!re.test(value)) {
          passError = "password must contain a character and a number";
        }
        errors.password = passError;
        break;
      default:
        break;
    }

    this.setState({ [name]: value, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    let { errors, username, email, password } = this.state;
    return (
      <>
        <div className="user-details">
          <h2>Sign up</h2>
          <Link to="/login">
            <p>Have an account?</p>
          </Link>
          <form onSubmit={this.handleSubmit} className="flex flex-column">
            <input
              onChange={this.handleChange}
              name="username"
              value={username}
              type="text"
              placeholder="Your Name"
            />
            <span className="errors">{errors.username}</span>
            <input
              onChange={this.handleChange}
              name="email"
              value={email}
              type="email"
              placeholder="Email"
            />
            <span className="errors">{errors.email}</span>
            <input
              onChange={this.handleChange}
              name="password"
              value={password}
              type="password"
              placeholder="Password"
            />
            <span className="errors">{errors.password}</span>
            <button
              className={
                errors.email || errors.password || errors.username
                  ? "btn-disabled"
                  : "btn-enabled"
              }
              type="submit"
              disabled={errors.email || errors.password || errors.username}
            >
              Signup
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Signup;
