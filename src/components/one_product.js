import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";
import Swal from "sweetalert2";

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
    console.log("product\n\n\n", product);
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
        if (data.status > 299) this.setState({ err: data.message });
        this.props.changeActivePage("home");
      })
      .catch(e => console.log(e));
  };

  handleBidRequest = product => {
    // console.log("product\n\n\n" , this.props.product.id , this.state.formData.bid , getUser().id)
    // let url = `${apiUrl}/api/products/${this.props.product.id}/bid`;
    let url = apiUrl + "/api/products/" + this.props.product.id + "/bid";
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
        if (data.status > 299) this.setState({ err: data.message });

        Swal.fire({
          position: "center",
          type: "success",
          title: "You added bid successfully",
          showConfirmButton: false,
          timer: 2000
        });

        console.log(data);

        // this.props.changeActivePage('home')
      })
      .catch(e => console.log(e));
  };

  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };

  countDownDate = () => {
    var date = new Date(this.props.product.createdAt);

    // add a day
    return date.setDate(date.getDate() + 1);
  };

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
      counter = null;

      this.setState({ counter });
    }
  }, 1000);

  componentWillUnmount() {
    clearInterval(this.counterInterval);
  }
  render() {
    console.log(this.props.product);
    return (
      <div className="one111" className="pt-5 mt-5">
        <div className="btns-one-product">
          {getUser() !== null &&
          getUser().id === this.props.product.owner_id ? (
            <React.Fragment>
              {" "}
              <button
                class="btn btn-secondary"
                onClick={() =>
                  this.props.changeActivePage("put", this.props.product.id)
                }
              >
                Edit
              </button>{" "}
              &ensp;
              <button
                class="btn btn-warning"
                // className="btn-del-one-product"
                onClick={() => {
                  this.handleProductRequest();
                }}
              >
                Delete
              </button>{" "}
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
        {/*Image */}
        <img className="image-one-product" src={this.state.products.image} />

        <div class="clearfix">
          <div className="box1">
            {/* Name */}
            <h1 className="name-one-product">{this.state.products.name}</h1>
            {/* starting bid */}
            <h3 className="HSB-one-product">Start Bid : </h3> &ensp;
            <p className="P-one-product">{this.state.products.close_bid} SR</p>
            <br />
            <br />
            {/* text feild bid and its message */}
            <div className="btn-bid-one-product">
              {getUser() && getUser().id !== this.props.product.owner_id ? (
                this.state.counter ? (
                  <React.Fragment>
                    {" "}
                    <p className="counter-one-product">
                      {this.state.counter}
                    </p>{" "}
                    <p className="until">Until The Ends</p>
                    <br />
                    <h6 className="bidNow-one-product">Bid : </h6> &ensp;
                    <input
                      className="input-bid-one-product"
                      type="number"
                      name="bid"
                      onChange={this.handleChange}
                      value={this.state.formData.bid}
                    />{" "}
                    &ensp;
                    {/* <br /> */}
                    <button
                      onClick={() => {
                        this.handleBidRequest();
                      }}
                      class="btn btn-primary"
                    >
                      BID
                    </button>{" "}
                  </React.Fragment>
                ) : (
                  <div>
                    <img
                      className="img-info"
                      src="https://vignette.wikia.nocookie.net/bestbrute/images/a/a1/Info_icon_blue_3d.svg/revision/latest?cb=20090524024510"
                    />
                    <p class="text-info">You Missed The Bid</p>{" "}
                  </div>
                )
              ) : (
                <div>
                  <img
                    className="img-info"
                    src="https://vignette.wikia.nocookie.net/bestbrute/images/a/a1/Info_icon_blue_3d.svg/revision/latest?cb=20090524024510"
                  />
                  <p class="text-info"> You Can not Bid </p>
                </div>
              )}
            </div>{" "}
            <br />
            {this.props.product.Biddings[0] ? (
              <h6> Highest Bid: {this.props.product.Biddings[0].bid_number}</h6>
            ) : (
              ""
            )}
          </div>

          <div className="box1">
            {/* Description */}
            <p className="desc-one-product">
              {this.state.products.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default OneProduct;