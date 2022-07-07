import React, { Component } from 'react';
import './App.css';
import logo from './blankmenu.svg';
export class App extends Component {
  state={
    foodImg: logo
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({foodImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  
  
	render() {
    const {foodImg} = this.state
		return (
			<div className="page">
        <div className="container">
          <h1 className="heading"> Add your File </h1>
          <div className="file-holder">
            <img src={foodImg} alt="" id="img" className="img" />
          </div>
          <input type="file" name="file-upload" id="input" onChange={this.imageHandler}/>
          <div className="label">
            <label htmlFor="input" className= "file-upload">
              <i className="material-icons">add_photo_alternate</i>
              Choose your file
            </label>
          </div>

        </div>

      </div>
		);
	}
}

export default App;
