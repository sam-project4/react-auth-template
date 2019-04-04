import React, { Component } from "react";
import { getUser } from "../../services/AuthService";

import apiUrl from "../../apiConfig";

const test = {
  background: 'purple',
  color:'white',
  
  
}




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
       <div className="border_addPost">
        <h1 className="bg_title">Add your item</h1>
        <br/>
        <div className="padding_AddPost">
        
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              name="name"
              placeholder= " type item name"
              className="form-control margin-top"
              onChange={this.handleChange}
            />
            <label>description:</label>
            <input
              name="description"
              placeholder= " type item description"
              className="form-control margin-top"
              onChange={this.handleChange}
            />

            <label>image:</label>
            <input
              name="image"
              placeholder= "type url example : https:image.com/old_pen"
              className="form-control margin-top"
              onChange={this.handleChange}
            />

            <label>start bid:</label>
            <input
              name="close_bid"
              className="form-control"
              placeholder= " example : 100 "
              onChange={this.handleChange}
              type="number"
            />
          </div>
          <br/>

          <button type="submit" className="btn btn-outline-primary col-md-12" style={test}>
            <span className="text.AddPost">submit</span>
          </button>
        </form>
        </div>
        </div>
      </div>

    );
  }
}

export default Post;