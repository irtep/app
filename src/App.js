import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { factions, cards } from './data/variables.js'
import DropDownComponent from './components/DropDownComponent.js';
import Unit from './components/Unit.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      faction: '',
      factionShowing: '',
      pointsLimit: 50,
      wPoints: 0,
      bgPoints: 0,
      totalPoints: 0
    }
    this.loadArmy = this.loadArmy.bind(this);
    this.saveArmy = this.saveArmy.bind(this);
    this.deleteArmy = this.deleteArmy.bind(this);
    this.factionSelected = this.factionSelected.bind(this);
    this.changePointLimit = this.changePointLimit.bind(this);
  }
  componentDidMount() {
    const maxPointIndicator = document.getElementById('maxPointIndicator');
    maxPointIndicator.value = 50;
  }
  componentDidUpdate() {
    console.log('state: ', this.state);
    // if change in faction
    if (this.state.faction !== '' && this.state.faction !== this.state.factionShowing) {
      this.setState({factionShowing: this.state.faction});
    }
  }
  changePointLimit() {
    const maxPointIndicator = document.getElementById('maxPointIndicator');
    console.log('on change');
    if (this.state.pointsLimit !== maxPointIndicator.value) {
      this.setState({pointsLimit: maxPointIndicator.value});
    }
  }
  loadArmy(e) {
    console.log('load', e.target.id);
  }
  saveArmy(e) {
    console.log('save', e.target.id);
  }
  deleteArmy(e) {
    console.log('delete', e.target.id);
  }
  factionSelected(e) {
    console.log('facSe ', e);
    if (e !== this.state.faction) {
      this.setState({faction: e});
    }
  }
  render() {
    return (
      <div className="App">
            <header className="App-header">
                HordesHelp 2
            </header>
            <div id = "controlButtons">{/*up*/}
              <input type= "button" className = "ctrlButtons" value= "load army" onClick= {this.loadArmy}/>
              <input type= "button" className = "ctrlButtons" value= "save army" onClick= {this.saveArmy}/>
              <input type= "button" className = "ctrlButtons" value= "delete saved army" onClick= {this.deleteArmy}/>
            </div>
            <div id = "feedBack">{/*up*/}
              <span id= "fetchedFromDB"></span><br/>
              <span id= "feedBackPlace"></span>
            </div>
            <div id = "setups">{/*up left*/}
              <DropDownComponent
                firstOption = "choose a faction"
                options = {factions}
                newFactionChosen = {this.factionSelected}
              />
              point limit:
              <input id= "maxPointIndicator"
              className = "chooseNumber"
              type= "number"
              onChange= {this.changePointLimit}/>
            </div>
            <div id = "armiesSlots">
              <div id = "leftBox" className= "grids">{/*left side*/}
                <p  id = "unitsSelected" className= "textBox"></p>
              </div>
              <div id = "rightBox" className= "grids">{/*right side*/}
                <p  id = "unitsAvailable" className= "textBox">
                  {cards.map(card => {
                    return (
                      <Unit
                      title={card}
                      showing={this.state.factionShowing}
                      cards = {cards}
                      key = {card.name}
                      />
                    )
                  })}
                </p>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
