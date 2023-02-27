import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    {
      /*methode bind*/
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     this.setState({
  //       message: "goodbye",
  //     });
  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({
      message: "goodbye",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*methode simple*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}{" "}
        {/*methode arrow func*/}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/*methode bind*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
