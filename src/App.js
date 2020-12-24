
import './App.css';
import Status, {displayOptions} from "./components/status"
import Table from "./components/table"
import Tab from "./components/tab"
import SideNav from "./components/sidenav"
import DownloadLink from "react-download-link";

function App() {
  return (
    <div className="container">
      <div className ="row">
        <div className="col col-2 col-sidenav">
          <SideNav />
        </div>
        <div className="col col-10">
          <header>
            <div className="container">
              <div>
              <h2 className="heading">Agri-Input Master Maintenance</h2>
              </div>
              <div className="row">
                <div className="col status-col">
                  <Status id="status-pending" title ="PENDING" />
                  <Status id="status-executing" title ="EXECUTING" />
                  <Status id="status-executed" title ="EXECUTED" />
                  <Status id="status-completed" title ="COMPLETED" />
                </div>
              </div>
              <div className="row">
                <div className="col options-col" id="options">
                </div>
              </div>
              <div className="row">
                <div className="col">
                <h5 className="details">Executing Agri-Input orders</h5>
                <h5 className="details">Batched By:</h5>
                <hr />
                </div>
              </div>
              <div id="tab-opt">
              </div>
              <div className="row tab-row">
                <Tab id="up" logo="https://image.shutterstock.com/image-vector/red-vector-banner-new-product-260nw-1135814726.jpg" header="Description of product" content={<i class="fas fa-chevron-up"></i>}/>
                <Tab logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqeiMvcMA8ATx6McIgv0QgGq9njL6_9Q9Ww&usqp=CAU" header="Alex Lee" />
                <Tab logo="https://cdn.iconscout.com/icon/free/png-512/excel-1-129882.png" header="RFQLlist___13042020_042" content={<DownloadLink
                  label={<i class="fas fa-file-download fa-lg"></i>}
                  filename="myfile.txt"
                  exportFile={() => "My cached data"}
                  />}/>

              </div>
              <div className="row">
                <div className="col">
                  <Table />
                </div>
              </div>
              <div id="tab-opt">
              </div>
              <div className="row tab-row">
                <Tab logo="https://image.shutterstock.com/image-vector/red-vector-banner-new-product-260nw-1135814726.jpg" header="Description of product" content={<i class="fas fa-chevron-down"></i>}/>
                <Tab logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqeiMvcMA8ATx6McIgv0QgGq9njL6_9Q9Ww&usqp=CAU" header="Alex Lee" />
                <Tab logo="https://cdn.iconscout.com/icon/free/png-512/excel-1-129882.png" header="RFQLlist___13042020_042" content={<DownloadLink
                  label={<i class="fas fa-file-download fa-lg"></i>}
                  filename="myfile.txt"
                  exportFile={() => "My cached data"}
                  />}/>

              </div>
              <div id="tab-opt-btm">
              </div>
            </div>
          </header>
          </div>
      </div>
    </div>
  );
}

export default App;
