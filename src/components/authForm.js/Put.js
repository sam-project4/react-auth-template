import React, { Component } from "react";
import { getUser } from "../../services/AuthService";
import apiUrl from "../../apiConfig";


const test = {
  background: 'purple',
  color:'white',
  
  
}

class Put extends Component {
    state = {
        formData: {
            name: '',
            description: '',
            image: '',
            owner_id:  getUser().id,
            close_bid:''

          }
        }


        handleProductRequest = product => {
            let url = `${apiUrl}/api/product/${this.props.id}`;
        
            fetch(url, {
              // mode: "cors",
              // credentials: "include",
              method: "PUT",
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
        
        
          handleSubmit = e => {
            e.preventDefault();
            console.log(this.state.formData)
            this.handleProductRequest(this.state.formData);
             
            
            
         
          };
        
        
          handleChange = ({ currentTarget }) => {
            const formData = { ...this.state.formData };
            formData[currentTarget.name] = currentTarget.value;
            this.setState({ formData });
          };
        
          render() {
            return (
              <div className="pt-5 mt-5">
                <div className="border_addPost">
                  <h1 className="bg_title">Update your item</h1>
                  <br/>
                  <div className="padding_AddPost">
                
                
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
        
                    <label>Name </label>
                    <input
                      name="name"
                      className="form-control margin-top"
                      placeholder= " type item name"
                      onChange={this.handleChange}
                    />
                    <label>description</label>
                    <input
                      name="description"
                      className="form-control margin-top"
                      placeholder= " type item description"
                      onChange={this.handleChange}
                    />
        
                    <label>image</label>
                    <input
                      name="image"
                      className="form-control margin-top"
                      placeholder= "type url example : https:image.com/old_pen"
                      onChange={this.handleChange}
                    />
        
        
        
                    <label>close_bid</label>
                    <input
                      name="close_bid"
                      className="form-control margin-top"
                      onChange={this.handleChange}
                      placeholder= " example : 100 "
                      type="number"
                    />
                  </div>
                  <br/>
                  <button type="submit" className="btn btn-primary col-12" style={test}>
                    submit
                  </button>
                </form>
              </div>
              </div>
              </div>
            );
          }
        }
        
        export default Put;