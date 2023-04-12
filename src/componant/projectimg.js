import "./projectimg.css"
import React, { Component } from 'react'

class Projectimg extends Component {
  render(){
    return (
      <div className="project-img">
        <div className="heading">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  };
};

export default Projectimg;
