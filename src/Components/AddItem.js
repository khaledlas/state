import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  state = { text: "" };
  handleText = (event) => {
    this.setState({ text: event.target.value });
  };
  handleAdd = () => {
    this.props.addTask(this.state.text);
  };
  render() {
    return (
      <div>
        <input
          className="to-do-form"
          type="text"
          placeholder="Ajouter une tache"
          // style={{ background: "red", border: "radius" }}
          onChange={this.handleText}
        />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddItem;
