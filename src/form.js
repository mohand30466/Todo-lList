import React, { Component } from 'react';

class Form extends React.Component {
    state={term:''}

    ontaskSubmit=(event)=>{
        event.preventDefault();

        console.log(this.state.term);
    
    }


    render(){
  
    return(
        <div className="list">
        <div className="form">
          <form onSubmit={this.ontaskSubmit}>
            <input type="text" placeholder="enter a task" value={this.state.term} onChange={(e)=> this.setState({term: e.target.value})} />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    )
    }

}
export default Form;