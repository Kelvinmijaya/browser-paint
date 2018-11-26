import React, { Component } from "react";
import "./App.css";

import Pokeball from "./components/Pokeball";

class App extends Component {
  state = {
    left: 50,
    translateX: 0,
    hex: "transparant",
    count: 1,
    jank: ""
  };

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    this.intervalId = clearInterval(this.intervalId);
  }

  initiateCompositeOnly = () => {
    const { translateX } = this.state;

    this.setState({
      translateX: translateX + 10
    });
  };

  initiatePaint = () => {
    this.setState({
      hex: "#" + Math.floor(Math.random() * 16777215).toString(16)
    });
  };

  initiateLayout = () => {
    const { left } = this.state;

    if (left - 10 >= 0) {
      this.setState({
        left: left - 10
      });
    }
  };

  reset = () => {
    this.setState({
      left: 50,
      translateX: 0,
      hex: "transparant",
      jank: ""
    });
  };

  changeCount = event => {
    this.setState({ count: event.target.value });
  };

  renderPokeball = () => {
    const { left, translateX, hex, jank, count } = this.state;
    const result = [];

    for (let i = 0; i < count; i++) {
      result.push(
        <Pokeball
          key={`pokeball-${i}`}
          left={left}
          translateX={translateX}
          hex={hex}
          jank={jank}
        />
      );
    }

    return result;
  };

  jank = () => {
    this.setState({
      jank: "layout"
    });
  };

  jankComposite = () => {
    this.setState({
      jank: "composite"
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderPokeball()}
          <div className="Bottom-nav">
            <ul>
              <li>
                <button onClick={this.initiatePaint}>Paint</button>
              </li>
              <li>
                <button onClick={this.initiateLayout}>Layout</button>
              </li>
              <li>
                <button onClick={this.initiateCompositeOnly}>
                  Composite Only
                </button>
              </li>
              <li>
                <select onChange={this.changeCount} value={this.state.count}>
                  <option value="1">1</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
              </li>
              <li>
                <button onClick={this.jank}>Jank</button>
              </li>
              <li>
                <button onClick={this.jankComposite}>Jank Composite</button>
              </li>
              <li>
                <button onClick={this.reset}>Reset</button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
