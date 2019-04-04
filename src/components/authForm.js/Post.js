import React, { Component } from "react";
import { getUser } from "../../services/AuthService";

import apiUrl from "../../apiConfig";

class Post extends Component {
    state = {
        formData: {
            name: '',
            description: '',
            image: '',
            owner_id: getUser().id ,
            close_bid:''

          }
        }

 handleProductRequest = product => {
    let url = `${apiUrl}/api/products`;

    fetch(url, {
      // mode: "cors",
      // credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ product: product })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status > 299) 
          this.setState({ err: data.message});
          this.props.changeActivePage('home')
      })
      .catch(e => console.log(e));
  };


  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.formData)
    this.handleProductRequest(this.state.formData);
     
    
    
 
  };


  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };

  render() {
    return (
      <div className="pt-5 mt-5">
        <h1>Product</h1>
        
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name </label>
            <input
              name="name"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>description</label>
            <input
              name="description"
              className="form-control"
              onChange={this.handleChange}
            />

            <label>image</label>
            <input
              name="image"
              className="form-control"
              onChange={this.handleChange}
            />

            <label>start bid</label>
            <input
              name="close_bid"
              className="form-control"
              onChange={this.handleChange}
              type="number"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default Post;