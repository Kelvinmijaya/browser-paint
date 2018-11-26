import React, { Component } from "react";
import { number, string } from "prop-types";

import "./Pokeball.css";

class Pokeball extends Component {
  render() {
    const { hex, left, translateX, jank } = this.props;
    const className = [
      "pokeball",
      `${jank === "layout" && "animateLayout"}`,
      `${jank === "composite" && "animateComposite"}`
    ].join(' ');

    return (
      <div
        style={{
          backgroundColor: hex,
          left: `${left}%`,
          transform: `translateX(${translateX}%)`
        }}
        className={className}
      >
        <div className="pokeballButton" />
      </div>
    );
  }
}

Pokeball.propTypes = {
  hex: string,
  jank: string,
  left: number,
  translateX: number
};

export default Pokeball;
