import React from "react";
import ReactDOM from "react-dom";
import tableData from "./tableData";
import Tbody from "./tbody";

function modal(){
  alert("design your modal here");
}

function createTableBody(data){
  return(
    <tr>
      <td>{data.sno}</td>
      <td>{data.category}</td>
      <td style={{textAlign:"center"}}>{<img style={{width:"3rem", height:"3rem"}} src={data.image} />}</td>
      <td>{data.description}</td>
      <td>{data.quantity}</td>
      <td onClick={modal}><i class="fas fa-external-link-alt fa-lg"></i></td>
    </tr>
  );
}

function Table(){
  return(
    <table className="table table-striped table-bordered">
      <thead>
        <th>sno</th>
        <th>Agri-Input Category</th>
        <th>Product Image</th>
        <th>Product Description</th>
        <th>Order Quantity</th>
      </thead>
      <tbody>
        {tableData.map(createTableBody)}
      </tbody>
    </table>
  );
}


export default Table;
