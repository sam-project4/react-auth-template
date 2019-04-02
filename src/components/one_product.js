import React, { Component } from "react";
import apiUrl from "../apiConfig";

class OneProduct extends Component {
  state = {
    products: []
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

        {/* we need to put a textfeild, after we creating the bid table */}
      </div>
    );
  }
}
export default OneProduct;
