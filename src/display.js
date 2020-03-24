import React from "react";
import "./display.css";

class Dsiplay extends React.Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
  }

  createTask(items) {
    return (
      <li key={items.key}>
        {items.text}
      </li>
   
    );
  }

  render() {
    var newTask = this.props.task;
    var listTask = newTask.map(this.createTask);

    return (
      <div className="newlist">
        <ul>{listTask}</ul>
      </div>
    );
  }
}
export default Dsiplay;
