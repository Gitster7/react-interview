import React from "react"
import ReactDOM from "react-dom"

let status = false;

function expandUp(){
  status === false? status = true : status = false;
  if(status)
  {
    ReactDOM.render(
      <div className="container-fluid">
        <div className="row">
          <div className="col">
              <option className="demoOptions">Demo Option</option>
          </div>
        </div>
      </div>
      ,document.getElementById("tab-opt"));
  }
  else if (!status) {
    ReactDOM.render("",document.getElementById("tab-opt"));
  }
}

function expandDown(){
  status === false? status = true : status = false;
  if(status)
  {
    ReactDOM.render(
      <div className="container-fluid">
        <div className="row">
          <div className="col">
           <option className="demoOptions">Demo Option</option>
          </div>
        </div>
      </div>
      ,document.getElementById("tab-opt-btm"));
  }
  else if (!status) {
    ReactDOM.render("",document.getElementById("tab-opt-btm"));
  }
}

function Tab(props){
  return(
      <div id="tab" className = "col tab-col">
        <p onClick={props.id==="up" ? expandUp : expandDown}>{<img style={{width: "20%", height:"auto", borderRadius: "100%"}} src={props.logo} alt="logo" />} {props.header} {props.content}</p>
      </div>
  );
}

export default Tab;
