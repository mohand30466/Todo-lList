import React, { Component } from 'react';
import Display from './display';
import"./Form.css"

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state={items:[]};

    this.ontaskSubmit = this.ontaskSubmit.bind(this)
    // this.deleteItems=this.deleteItems.bind(this)
  }
   

    ontaskSubmit=(event)=>{
      if (this.state.term !== " "){
        var newItem ={
          text: this.state.term,
          Key:Date.now()
        }
      }
        this.setState((e)=>{
          return{
           items: e.items.concat(newItem)
          }
        });

        if(this.state.term == " "){
          return;
        }

       
        event.preventDefault();
        
    
    }


    render(){
  
    return(
        <div className="list">
        <div className="form">
          <form onSubmit={this.ontaskSubmit}>
            <input type="text" 
             value={this.state.term}
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