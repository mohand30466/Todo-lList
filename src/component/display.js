import React from "react";
import "./display.css";
// import BtnPrimary from './BtnPrimary';

const Dsiplay = (props) => {
  

  
    return (
      <div className="newlist">
        <ul>
            {props.task.map(items =>{
              return(
                <div>
              <li  key={items.key}>{items.text} 
              </li>
              {/* <BtnPrimary name="Remove"/> */}
              <button onClick = {() =>props.delete(items.key)}>remove</button>
              </div>
              )
            })}
        </ul>
       
      </div>
    );
  }

export default Dsiplay;
