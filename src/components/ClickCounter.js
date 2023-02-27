import React, { Component } from "react";

export class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>click {count} me</button>
      </div>
    );
  }
}

export default ClickCounter;
