import React, { Component } from 'react';
import Display from './display';

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state={items:[]};

    this.ontaskSubmit = this.ontaskSubmit.bind(this)
  }
   

    ontaskSubmit=(event)=>{
      if (this.inputhandling !== " "){
        var newItem ={
          text: this.inputhandling.value,
          Key:Date.now()
        }
      }
       
        // this.props.onSubmit(this.state.term)
        this.setState((prevState)=>{
          return{
           items: prevState.items.concat(newItem)
          }
        });
        this.inputhandling.value = " ";
        console.log(this.state.items);
        event.preventDefault();
        
    
    }


    render(){
  
    return(
        <div className="list">
        <div className="form">
          <form onSubmit={this.ontaskSubmit}>
            <input type="text" placeholder="enter a task"
             ref={(a)=>this.inputhandling= a} 
             onChange={(e)=> this.setState({term: e.target.value})} />
            <button type="submit">add</button>
          </form>
        </div>
        <Display task={this.state.items}/>
      </div>
    )
    }

}
export default Form;