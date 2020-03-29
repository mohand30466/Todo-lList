import React from "react";
import "./App.css";
import Form from "./component/form";
import Display from "./component/Display";

class App extends React.Component {
  state = { items: [], term: " " };

  onChangeItem = e => {
    this.setState({ term: e.target.value });
  };

  ontaskSubmit = e => {
    e.preventDefault();
    if (this.state.items !== "") {
      var newItem = {
        text: this.state.term,
        key: Date.now()
      };
    }
    this.setState(e => {
      return {
        items: e.items.concat(newItem)
      };
    });
    this.setState({ term: "" });
  };

  deleteItem = Key => {
    const filterItem = this.state.items.filter(item => {
      return item.key !== Key;
    });
    this.setState({ items: filterItem });
  };
  upDateItem = e => {
    const todolist = [...this.state.items];
    const index = this.state.items.findIndex(item => {
      return (e.key = item.key);
    });
    todolist[index].text = this.state.term;
    this.setState({ items: todolist });
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="ui-continer">
        <div className="tittle">
          <h1>Todo list</h1>
          <p>orgnize your times and list your metions</p>
        </div>

        <Form
          value={this.state.term}
          onChange={this.onChangeItem}
          onSubmit={this.ontaskSubmit}
        />
        <Display
          task={this.state.items}
          delete={this.deleteItem}
          upDate={this.upDateItem}
        />
      </div>
    );
  }
}

export default App;
