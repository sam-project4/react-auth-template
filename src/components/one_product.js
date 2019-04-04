import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";
import Swal from 'sweetalert2'




class OneProduct extends Component {
  state = {
    products: [],
    formData: {
      bid: 100
    },
    counter: null 
   
  };
  componentDidMount() {
    let url = `${apiUrl}/api/product/${this.props.product.id}`;

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
      // mode: "cors",
      // credentials: "include",
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
    // console.log("product\n\n\n" , this.props.product.id , this.state.formData.bid , getUser().id)
    // let url = `${apiUrl}/api/products/${this.props.product.id}/bid`;
    let url = apiUrl + "/api/products/" + this.props.product.id + "/bid";
    fetch(url, {
      // mode: "cors",
      // credentials: "include",
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
         
          Swal.fire({
            position: 'center',
            type: 'success',
            title: 'You added bid successfully',
            showConfirmButton: false,
            timer: 2000
          })
          
          
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

  countDownDate =  () => {
    var date = new Date(this.props.product.createdAt);

    // add a day
    return date.setDate(date.getDate() + 1);
  }
  
  counterInterval = setInterval(() => {
    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = this.countDownDate() - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    let counter = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    this.setState({ counter });

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(this.counterInterval);
      counter = null ;

      this.setState({ counter });
    }
  }, 1000);

  componentWillUnmount() {
    clearInterval(this.counterInterval);
  }


  render() {


  
    
    console.log(this.props.product)
    return (


      
      
      <div className="pt-5 mt-5">
        <h1>{this.state.products.name}</h1>
        
        <h2>Description</h2>
        <p>{this.state.products.description}</p>
        <h2>Image</h2>
        <p>{this.state.products.image}</p>
        <h2>Start bid</h2>
        <p>{this.state.products.close_bid} SR</p>

        
        <img src={this.state.products.image}/>
        {  getUser() !== null && getUser().id === this.props.product.owner_id ? (<React.Fragment>  <button onClick={() => this.props.changeActivePage('put', this.props.product.id)}>Edit</button>
        <button onClick={() => { this.handleProductRequest()}} >Delete</button> </React.Fragment>) :( "")}

        {  getUser() && getUser().id !== this.props.product.owner_id  ?   (
          this.state.counter ? (
        <React.Fragment>  <
          
          label>Bid </label>
        <input type="number" name="bid" onChange={this.handleChange} value = {this.state.formData.bid} ></input>
       
       
        <button onClick={() =>   {this.handleBidRequest()} } className="delete-btn">BID</button> {this.state.counter} </React.Fragment>):( "you missed the bid")) :( " you can't bid ")}
        
        { this.props.product.Biddings[0] ? (
                    <p > highest bid: { this.props.product.Biddings[0].bid_number}</p>) :""
                  }

        
        {/* we need to put a textfeild, after we creating the bid table */}
      </div>
    );
    }
   
}
export default OneProduct;
