import React, { Component } from "react";

class SetStatePage extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  Increment() {
    this.setState(
      {
        // incrementation de 1 à chaque clique sur le bouton
        count: this.state.count + 1,
      },
      () => {
        console.log("valeur courant", this.state.count);
      }
    );
    // le resultat de ce console renvoi 0 parce qu'elle est appelé apres le setState
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <h1>Cout - {this.state.count}</h1>
        <button onClick={() => this.Increment()}>Add</button>
      </div>
    );
  }
}

export default SetStatePage;
