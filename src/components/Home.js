import React, { Component } from "react";
import apiUrl from "../apiConfig";

const pStyle = {
  width: '18rem',
  height: '28rem'
};

class Home extends Component {
  state = {
    products: []
    
  };

  handelProductRequest = () => {
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

  componentDidMount() {

    this.handelProductRequest()
      
  }
      
  


  render() {
    return (
      <div class="row pt-2">
        

        {this.state.products.map((product, index) => (
         
          <div class="col-sm p-2">
            <div class="card" style={pStyle} onClick={() => this.props.changeActiveProduct(product)}>
              <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
              <div class="card-body">
                <p key={index+' name'}  > <b> {product.name} </b></p> 
                    
                <p key={index+' description'}> start bid: {product.close_bid} SR</p>

                  { product.Biddings[0] ? (
                    <p key={index+' Biddings'}> highest bidding: <span className="highest_bid_span">{ product.Biddings[0].bid_number} </span> </p>) :"Start bidding now"
                  }
                  

              
                  {/* <button key={index+' button'} onClick={() => this.props.changeActivePage('put', product.id)}>Edit</button> */}
              </div>
            </div>
          </div>
          
        ))}


    
      </div>
    );
  }
}

export default Home;
