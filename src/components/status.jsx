import React, {useState} from "react";
import ReactDOM from "react-dom";
import Options from "./options";

let status = false;

function DisplayOptions(){
  status === false? status = true : status = false;
  if(status)
  {
    ReactDOM.render(
      <div id="options-container">
        <div className="options">
          <Options content="Undo Batch"/>
        </div>
        <div className="options">
          <Options content="Assgin Suppliers" />
        </div>
        <div className="options">
          <Options content="Generate PO" />
        </div>
      </div>,document.getElementById("options"));
  }
  else if (!status) {
    ReactDOM.render("",document.getElementById("options"));
  }
}

function mouseEvent(){
  document.getElementById("status-executing").style.backgroundColor = "black";
}

function mouseOut(){
  document.getElementById("status-executing").style.backgroundColor = " #bbbbbb";
}

function Status(props){
  return(
    <div className="status" id={props.id} onClick={props.id==="status-executing"?DisplayOptions:console.log("not matched")} onMouseOver={props.id==="status-executing"?mouseEvent:console.log("not hover")} onMouseOut={mouseOut}>
      <h6>
        {props.title}
      </h6>
    </div>
  )
}

export default Status;
export {DisplayOptions};
