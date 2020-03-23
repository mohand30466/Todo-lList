import React from "react";
import "./App.css";
import Form from './form';


class App extends React.Component{
 
  
  onaddtask(term){
    
    
    
  }
  render(){

  return (
    <div className="ui-continer">
      <h1>Todo list</h1>
      <p>orgnize your times and list your metions</p>
 
      <Form  onSubmit={this.onaddtask}/>
      
    </div>

  )
}
}


export default App;
