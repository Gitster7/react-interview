import React from "react";

function link(){
  document.getElementById("link").style.color = "green";
}

function linkDown(){
  document.getElementById("link").style.color = "#ffffff";
}

function SideNav(){
  return(
    <div className="sidenav">
      <h4>Agri Purchase Managment</h4>
      <hr />
      <h6>Agri Input Maintenance</h6>
      <hr />
      <h6>Suplier Maintenance</h6>
      <hr />
      <h6 id="link" onMouseOver={link} onMouseOut={linkDown}>Agri Input Purchase Request</h6>
      <hr />
    </div>
  );
}

export default SideNav;
