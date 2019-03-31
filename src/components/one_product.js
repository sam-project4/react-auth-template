import React, { Component } from "react";
import apiUrl from "../apiConfig";

class OneProduct extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    let url = `${apiUrl}/api/product/${this.state.products.id}`;

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

  render() {
    return (
      <div className="pt-5 mt-5">
        <h1>{this.state.products.name}</h1>

        <h2>Description</h2>
        <p>{this.state.products.description}</p>
        <h2>Image</h2>
        <p>{this.state.products.image}</p>

        {/* we need to put a textfeild, after we creating the bid table */}
      </div>
    );
  }
}
export default OneProduct;
