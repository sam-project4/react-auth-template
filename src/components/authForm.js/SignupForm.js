import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setUser } from "../../services/AuthService";
class SignupForm extends Component {
  state = {
    formData: {
      email: null,
      password: null,
      password_confirmation: null
    },
    err: null
  };

  handleLoginRequest = user => {
    let url = `${apiUrl}/sign-up`;

    fetch(url, {
      // mode: "cors",
      // credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ credentials: user })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status > 299) 
          this.setState({ err: data.message});
        else {
          setUser(data);
          this.props.onSignin();
        }
      })
      .catch(e => console.log(e));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleLoginRequest(this.state.formData);
  };

  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };

  render() {
    return (
      <div className="Login-component">
       <div className="pt-5 mt-5">
       <div class="mainbox col-md-5 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center margin">    
       <div class="box">   
        <h1>PLEASE SIGNUP</h1>
        {this.state.err ? (
          <div className="alert alert-warning"> {this.state.err} </div>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>email </label>
            <input
              name="email"
              className="form-control"
              placeholder="Email address"
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
              name="password"
              className="form-control"
              type="password"
              placeholder="password"
              onChange={this.handleChange}
            />

            <label>Password Confirmation</label>
            <input
              name="password_confirmation"
              className="form-control"
              type="password"
              placeholder="password confirmation"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default SignupForm;