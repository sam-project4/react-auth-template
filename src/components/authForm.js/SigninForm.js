import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setUser } from "../../services/AuthService";




class SigninForm extends Component {
  state = {
    formData: {
      email: null,
      password: null
    },
    err: null
  };

  handleLoginRequest = user => {
    let url = `${apiUrl}/sign-in`;

    console.log(url);
    fetch(url, {
      // mode: "cors",
      // credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status > 200) this.setState({ err: data.message });
        else {
          this.setState({ err: null });
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

        <h1>PLEASE SIGININ</h1>
        <br/>
        <br/>
        {this.state.err ? (
          <div className="alert alert-danger"> {this.state.err} </div>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            
        
            <input
              name="email"
              className="form-control"
              placeholder="Email address"
              onChange={this.handleChange}
            />

            <br/>
           
            
            <input
              name="password"
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
           </div>
          
           <br/>
        
          <button type="submit" className="btn btn-primary col-md-12">
            Login
          </button>

        </form>
        <br/>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SigninForm;
