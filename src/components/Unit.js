import React, { Component } from "react";
import '../App.css';

class Unit extends Component {
  render() {
    let showThis = '';
    if (this.props.showing !== '') {
      showThis = '';
      this.props.cards.forEach((item, i) => {
        item.factions.forEach((it, ii) => {
          if (this.props.showing === it) {
            console.log('found: ', this.props.showing, item.name);
            showThis = item.name;
          }
        });
      });
    }
    return(
      <div>
       {showThis}
      </div>
    );
  }
}

export default Unit;
