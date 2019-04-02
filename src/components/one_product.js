import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService"
class OneProduct extends Component {
  state = {
    products: [],
    formData: {
      bid: 100
    }
  };
  componentDidMount() {
    let url = `${apiUrl}/api/product/${this.props.product.id}`;

    console.log(url);
    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status > 299) this.setState({ err: data.message });
        else {
          console.log(data.product);
          this.setState({ products: data.product });

        }
      })
      .catch(e => console.log(e));
  }

  handleProductRequest = product => {
    console.log("product\n\n\n" , product)
    let url = `${apiUrl}/api/products/${this.props.product.id}`;

    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "DELETE",
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


  handleBidRequest = product => {
    console.log("product\n\n\n" , this.props.product.id , this.state.formData.bid , getUser().id)
    let url = `${apiUrl}/api/products/${this.props.product.id}/bid`;
  
    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ bid: this.state.formData.bid })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status > 299) 
          this.setState({ err: data.message});
          console.log(data)


          // this.props.changeActivePage('home')
      })
      .catch(e => console.log(e));
  };

  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };


  render() {
    return (
      <div className="pt-5 mt-5">
        <h1>{this.state.products.name}</h1>

        <h2>Description</h2>
        <p>{this.state.products.description}</p>
        <h2>Image</h2>
        <p>{this.state.products.image}</p>
        <button  onClick={() => this.props.changeActivePage('put', this.props.product.id)}>Edit</button>
        {/* <button  onClick={() => this.props.changeActivePage('delete', this.props.product.id)}>Delete</button> */}
        <button onClick={() => {this.handleProductRequest()}} className="delete-btn">Delete</button>
        <label>Bid </label>
        <input type="number" name="bid" onChange={this.handleChange} value = {this.state.formData.bid} ></input>
        <button onClick={() => {this.handleBidRequest()}} className="delete-btn">BID</button>
        {/* we need to put a textfeild, after we creating the bid table */}
      </div>
    );
  }
}
export default OneProduct;
