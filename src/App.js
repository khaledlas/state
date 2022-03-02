import { Component } from "react";
import "./App.css";
import AddItem from "./Components/AddItem";
import TaskList from "./Components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        // { id: Date.now(), text: "task1" },
        // { id: Date.now(), text: "task2" },
        // { id: Date.now(), text: "task3" },
      ],
    };
  }
  addTask = (text) => {
    this.setState({
      // taskList: this.state.taskList.concat({ id: Math.random(), text: text }),
      taskList: [...this.state.taskList, { id: Date.now(), text: text }],
    });
  };
  deleteTask = (id) => {
    this.setState({
      taskList: this.state.taskList.filter((task) => task.id !== id),
    });
  };
  render() {
    return (
      <div className="App">
        <AddItem addTask={this.addTask} />
        <TaskList taskList={this.state.taskList} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
