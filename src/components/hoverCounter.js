import React, { Component } from "react";

export class hoverCounter extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>Hovered X times</h2>
      </div>
    );
  }
}

export default hoverCounter;
