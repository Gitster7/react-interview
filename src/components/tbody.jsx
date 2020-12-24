import React from "react";
import tableData from "./tableData";


function Tbody(props){
  return(
    <tbody>
      <td>{props.sno}</td>
      <td>{props.category}</td>
      <td>{props.image}</td>
      <td>{props.description}</td>
      <td>{props.quantity}</td>
    </tbody>
  );
}

export default Tbody;
