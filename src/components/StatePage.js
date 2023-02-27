import { Component } from "react";

class StatePage extends Component {
  constructor() {
    super();
    this.state = {
      message: "Bienvenu Assane",
    };
  }
  changeMessage() {
    this.setState({
      message: "Merci beaucoup pour votre visite",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Event</button>
      </div>
    );
  }
}
export default StatePage;
