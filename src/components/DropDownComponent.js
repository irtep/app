import React, { Component } from "react";
import '../App.css';

class DropDownComponent extends Component {
  constructor() {
    super();
    this.state = {
      factionChosen: ''
    }
    this.collectData = this.collectData.bind(this);
    this.focusedDropdown = this.focusedDropdown.bind(this);
  }
  componentDidMount() {
    /* fill menus */
    this.props.options.forEach( (item) => {
      const o = document.createElement("option");
      o.text = item.name;
      o.value = item.name;
      o.key = item.name;
      document.getElementById("ddMenu").appendChild(o);
    });
    console.log('props ', this.props);
  }
  componentDidUpdate() {
    console.log('first option: ', this.props.firstOption);
    const select = document.getElementById("ddMenu");
    const length = select.options.length;
    for (let i = length-1; i >= 0; i--) {
      select.options[i] = null;
    }
    /* fill menus */
    const startOption = document.createElement('option');
    startOption.text = this.props.firstOption;
    select.appendChild(startOption);
    this.props.options.forEach( (item) => {
      const o = document.createElement("option");
      o.text = item.name;
      o.value = item.name;
      o.key = item.name;
      select.appendChild(o);
    });
    this.props.newFactionChosen(this.state.factionChosen);
  }
  collectData(elem){
    //console.log('dd value now: ', elem.target.value);
    console.log('value: ', elem.target.value);
    this.setState({factionChosen: elem.target.value});
  }
  focusedDropdown(element) {
    //console.log('focused: ', element.target.id);
    /*
    const objectToSend = {name: 'infoToLeftSection', value: element.target.id}
    this.props.sendData(objectToSend);
    */
  }
  render() {
    return(
      <div>
        <select id= "ddMenu" className= "rollMenus" onChange= {this.collectData} onFocus= {this.focusedDropdown}>
          <option value = "Choose a faction">{this.props.firstOption}</option>
        </select><br />
      </div>
    );
  }
}

export default DropDownComponent;
