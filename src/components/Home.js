import React, { Component } from "react";
import apiUrl from "../apiConfig";
import OneProduct from "./one_product";

class Home extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    let url = `${apiUrl}/api/products`;

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
          this.setState({ products: data.products });
        }
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="pt-5 mt-5">
        <h1>Home</h1>
        <label>Name</label>
        {this.state.products.map((product, index) => (
          <p key={index}>{product.name}</p>
        ))}
        {this.state.products.map((product, index) => (
          <p key={index}>{product.image}</p>
        ))}
        {/* we need to put the number of bidding here, after we creating the bid table */}
      </div>
    );
  }
}
export default Home;