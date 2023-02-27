import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleComments = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  handleTopic = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };

  handleSubmit = (e) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    e.preventDefault(); //pour que la page ne se raffrechie pas
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Commentaire</label>
            <textarea
              value={this.state.comments}
              onChange={this.handleComments}
            />
          </div>
          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopic}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
