import React from "react";
import "./App.css";
import Form from "./component/form";
import Title from './component/Title'
// import Display from './component/display'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { items: [] };
  }

  render() {
    return (
      <div className="ui-continer">
       <Title/>
        <Form />
      </div>
    );
  }
}

export default App;
