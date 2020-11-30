import React, { Component } from "react";
import '../App.css';

class Unit extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log('props ', this.props);
  }
  componentDidUpdate() {
  }
  render() {
    return(
      <div>
      p
      </div>
    );
  }
}

export default Unit;
