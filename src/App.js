import React from "react";
import "./App.css";
import Form from './form';


class App extends React.Component{
 
  
  onaddtask(term){
    
    
    
  }
  render(){

  return (
    <div className="ui-continer">
      <div className="tittle">
        <h1>Todo list</h1>
        <p>orgnize your times and list your metions</p>
        </div>
    
      <Form  onSubmit={this.onaddtask}/>
      
    </div>

  )
}
}


export default App;
