import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }
  // conditional rendering in react js
  render() {
    // quatrieme methode
    // methode recommandé
    return this.state.isLoading && <div>je suis Assane</div>;

    // troisieme methode
    // methode recommandé
    // return this.state.isLoading ? (
    //   <div>Bienvenue Assane</div>
    // ) : (
    //   <div>je suis null</div>
    // );

    // deuxieme methode
    // let message;
    // if (this.state.isLoading) {
    //   message = <div>welcome Assane</div>;
    // } else {
    //   message = <div>welcome dev web</div>;
    // }
    // return <div>{message}</div>;

    // premiere methode
    // if (this.state.isLoading) {
    //   return <div>Bienvenue Assane</div>;
    // } else {
    //   return <div>Bienvenue Modou</div>;
    // }
  }
}

export default UserGreeting;
