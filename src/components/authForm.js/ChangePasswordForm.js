import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { getUser } from "../../services/AuthService";
class ChangePasswordForm extends Component {
  state = {
    formData: {
      old: null,
      new: null
    },
    err: null
  };

  handleLoginRequest = passwords => {
    let url = `${apiUrl}/change-password`;

    console.log({ email: getUser().email, passwords });
    console.log(url);
    fetch(url, {
      method: "PATCH",
      // mode: "cors",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: getUser().email, passwords })
    })
      .then(res => res.json())
      .then(data => {
        this.props.changeActivePage("home");
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
      <div className="pt-5 mt-5">
      <div class="mainbox col-md-5 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center margin">    
      <div class="box">   
        <h1>Change Password</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <br/>
            <input
              name="old"
              className="form-control"
              type="password"
              placeholder="old Password"
              onChange={this.handleChange}
            />
            <br/>
            <input
              name="new"
              type="password"
              className="form-control"
              placeholder="new Password"
              onChange={this.handleChange}
            />
          </div>
            <br/>
          <button type="submit" className="btn btn-primary col-md-12">
            Submit
          </button>
        </form>
      </div>
      </div>
      </div>
      
    );
  }
}

export default ChangePasswordForm;
