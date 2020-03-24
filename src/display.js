import React from "react";
import "./display.css";

class Dsiplay extends React.Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
  }

  createTask(items) {
    return (
      <li onClick = {() =>this.delete(items.key)} key={items.key}>
        {items.text}
      </li>
   
    );
  }
  delete(key){
      
      this.props.delete(key)
      console.log("this is my new " + key);
  }

  render() {
    var newTask = this.props.task;
    var listTask = newTask.map(this.createTask);

    return (
      <div className="newlist">
        <ul>
            {listTask}
        </ul>
      </div>
    );
  }
}
export default Dsiplay;
