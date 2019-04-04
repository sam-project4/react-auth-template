import React, { Component } from "react";
import apiUrl from "../apiConfig";

const pStyle = {
  width: '19rem',
  height: '28rem'
};


const borderStyle = {
  border : '2px blue solid',
  height: '50px'
  

}


const background = {
  background: '#e8e8e8'
  

}




class Home extends Component {
  state = {
    products: [],
    allProducts: [],
    formData: {
      productName : null
    }

    
  };
  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    const products = this.state.allProducts.filter(product => product.name.includes(currentTarget.value))
    this.setState({formData, products});
  };

  handelProductRequest = () => {
    let url = `${apiUrl}/api/products`;
  
    console.log(url);
    fetch(url, {
      // mode: "cors",
      // credentials: "include",
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    })

      .then(res => res.json())
      .then(data => {
        if (data.status > 299) this.setState({ err: data.message });
        else {
          this.setState({ products: data.products, allProducts: data.products });
        }
      })
      .catch(e => console.log(e));

  }

  componentDidMount() {

    this.handelProductRequest()
      
  }
      

  render() {
    return (
      <div style={background} >
       
        <div className="bg_home">
            <input 
                style = {borderStyle}
                name="productName"
                className="form-control test"
              
                placeholder= " 🔍  Search by item name"
                onChange={this.handleChange}
              />
              </div>
        <div class="row pt-2 m-5 test2">
            
            
        

          {this.state.products.map((product, index) => (
          
            <div class="col-sm p-2 animated slideInUp">
              <div class="card mt-3"  style={pStyle} onClick={() => this.props.changeActiveProduct(product)}>
                <img src={product.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <p key={index+' name'}  > <b> {product.name} </b></p> 
                      
                  <p key={index+' description'}> Start bid: {product.close_bid} SR</p>

                    { product.Biddings[0] ? (
                      <p key={index+' Biddings'}> Highest bidding: <span className="highest_bid_span">{ product.Biddings[0].bid_number} SR</span> </p>) :"Start bidding now"
                    }
                    

              
                  {/* <button key={index+' button'} onClick={() => this.props.changeActivePage('put', product.id)}>Edit</button> */}
               
              </div>
            </div>
          </div>
          
        ))}


    
      </div>
      </div>
    );
  }
}

export default Home;
