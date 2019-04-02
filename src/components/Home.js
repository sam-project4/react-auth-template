import React, { Component } from "react";
import apiUrl from "../apiConfig";

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

        {this.state.products.map((product, index) => (
          <div
            className="products"
            onClick={() => this.props.changeActiveProduct(product)}
          >
            <p key={index+' name'}> Name : {product.name}</p> 
                  
            <p key={index+' description'}> description: {product.description}</p>
            <hr key={index+' hr'}/>
          </div>
        ))}

       
      </div>
    );
  }
}
export default Home;
