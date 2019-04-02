import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import Home from "./components/Home";
import Profile from "./components/Profile";
import OneProduct from "./components/one_product";
import Post from "./components/authForm.js/Post";
import Put from "./components/authForm.js/Put";

class App extends Component {
  state = {
    user: null,
    activePage: "home",
    activeProduct: null,
    productId: undefined
  };
  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }

  changeActiveProduct = activeProduct => {
    console.log("changing active product", activeProduct);
    this.setState({ activeProduct });
    this.changeActivePage("one_product");
  };

  changeActivePage = (activePage, productId) => {
    this.setState({ 
      activePage: activePage,
      productId: productId 
    });
  };
  onSignin = () => {
    this.setState({ user: getUser() });
    this.changeActivePage("profile");
  };
  onSignout = () => {
    console.log("sigin out");
    this.setState({ user: null });
    Signout();
  };
  render() {
    const { user, activePage } = this.state;
    const bgBack = this.state.activePage === "sign-in" ? "loginBG" : "";
    return (
      <div className={bgBack}>
        <Nav
          user={user}
          changeActivePage={this.changeActivePage}
          onSignout={this.onSignout}
        />

        <div className="container">
          {activePage === "home" ? (
            <Home changeActiveProduct={this.changeActiveProduct} changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
          {activePage === "sign-in" ? (
            <SigninForm onSignin={this.onSignin} />
          ) : (
            ""
          )}
          {activePage === "sign-up" ? (
            <SignupForm onSignin={this.onSignin} />
          ) : (
            ""
          )}
          {activePage === "change-password" ? (
            <ChangePasswordForm changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
          {activePage === "profile" ? <Profile /> : ""}
          {activePage === "one_product" ? (
            <OneProduct product={this.state.activeProduct} changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
          {activePage === "post" ? <Post changeActivePage={this.changeActivePage}/> : ""}
          {activePage === "put" ? <Put id={this.state.productId} changeActivePage={this.changeActivePage}/> : ""}
        </div>

       

      </div>
    );
  }
}

export default App;
