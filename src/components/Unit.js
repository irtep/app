import React, { Component } from "react";
import '../App.css';

class Unit extends Component {
  constructor() {
    super();
    this.clicked = this.clicked.bind(this);
  }
  componentDidMount() {
    //console.log('unit mounted ', this.props);
  }
  clicked(e) {
    console.log('clicked: ', e.target.id);
  }
  render() {
    let cardToShow = '';
    let cardsId = '';
    // check if this is card for this faction
    this.props.title.factions.forEach((item, i) => {
      if (item === this.props.factionShowing) {
        cardToShow = `${this.props.title.name} (${this.props.title.type})
        point cost: ${this.props.title.pointCost}`;
        cardsId = this.props.title.name;
      }
    });
    return(
      <div className = "cards">
        <div id = {cardsId} onClick = {this.clicked}>
          {cardToShow}
        </div>
      </div>
    );
  }
}

export default Unit;
