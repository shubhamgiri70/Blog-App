import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = { ...this.state.errors };

    switch (name) {
      case "email":
        let emailError =
          value.indexOf("@") === -1 ? "email does not contains @" : "";
        errors.email = emailError;
        break;
      case "password":
        let passError;
        if (value.length < 7) {
          passError = `password can't be less than 6 character`;
        }
        let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
        if (!re.test(value)) {
          passError = "password must contains a character and a number";
        }
        errors.password = passError;
        break;
      default:
        return errors;
    }

    this.setState({ [name]: value, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <>
        <div className="user-details">
          <h2>Signin</h2>
          <Link to="/signup">
            <p>Need an account?</p>
          </Link>
          <form onSubmit={this.handleSubmit} className="flex flex-column">
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
                errors.email || errors.password ? "btn-disabled" : "btn-enabled"
              }
              type="submit"
              disabled={errors.email || errors.password}
            >
              Signin
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
