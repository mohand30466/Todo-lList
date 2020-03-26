import React from "react";
// import Display from "./Display";
import "./Form.css";

const Form = props => {
  return (
    <div className="list">
      <div className="form">
        <form onSubmit={props.onSubmit}>
          <input
            type="text"
            value={props.value}
            onChange={e => props.onChange(e)}
          />
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
