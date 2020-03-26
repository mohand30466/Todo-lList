import React from "react";
import "./display.css";

const Display = props => {
  return (
    <div className="newlist">
      <ul>
        {props.task.map(items => {
          return (
            <div>
              <li key={items.key}>{items.text}</li>
              <button onClick={() => props.delete(items.key)}>remove</button>
              <button onClick={e => props.upDate(e)}>update</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Display;
