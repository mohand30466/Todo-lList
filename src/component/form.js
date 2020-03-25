import React, { Component } from "react";
import Display from "./display";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
    
  }

  ontaskSubmit = event => {
    if (this.state.items !== " ") {
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

    if (this.state.items == " ") {
      return " ";
    }

    event.preventDefault();
  };

  deleteItem =(Key)=> {
    const  filterItem = this.state.items.filter((item)=> {
      return item.key !== Key;
    });
    this.setState({ items: filterItem });
  }

  upDateItem = (newItem) =>{
     console.log(this.state.items.text);
    
     }
  

  render() {
    return (
      <div className="list">
        <div className="form">
          <form onSubmit={this.ontaskSubmit}>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <button type="submit">add</button>
          
          </form> 
          </div>
      
         <Display task={this.state.items} delete={this.deleteItem} upDate={this.upDateItem}/>
      </div>
    );
  }
}
export default Form;
