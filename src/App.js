import React from 'react';
import Earnings from './Earnings';
import Color from './Color';
import SingleProject from './SingleProject';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';


function App() {
  return (
    <div class="container-fluid" style={{backgroundColor:"#EAE9E8"}}>
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <i class="bi bi-emoji-laughing-fill" style={{fontSize:"40px"}}></i>&nbsp;&nbsp;<span class="fs-4 d-none d-sm-inline">SB ADMIN</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                    <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0" style={{color:"black"}}>
                    <i class="bi bi-speedometer text-light"></i><span class="ms-1 d-none d-sm-inline">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle" style={{color:"black"}}>
                        <i class="bi bi-gear text-light"></i> <span>Components</span> </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle" style={{color:"black"}}>
                        <i class="bi bi-wrench text-light"></i> <span class="ms-1 d-none d-sm-inline">Utilities</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle" style={{color:"black"}}>
                        <i class="bi bi-folder2 text-light"></i> <span class="ms-1 d-none d-sm-inline">Pages</span></a>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle" style={{color:"black"}}>
                        <i class="bi bi-graph-up text-light"></i> <span class="ms-1 d-none d-sm-inline">Charts</span> </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle" style={{color:"black"}}>
                        <i class="bi bi-table text-light"></i> <span class="ms-1 d-none d-sm-inline">Tables</span> </a>
                    </li>
                </ul>
                <hr/>
            </div>
        </div>

  <div class="col py-0 navbar-nav ml-auto" >
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid" >
    <div class="container justify-content-center">
    <div class="row">
        <div class="col-md-8">
            <div class="input-group "> 
            <input type="text" placeholder=" Search for..." style={{width:"300px",border:"0px solid #C8BCB2",backgroundColor:"#F9F8F7",borderRadius:"2px"}}/>
            <button class="btn btn-primary active btn-default" type="button"><i class="bi bi-search"></i></button>
            </div>
        </div>
    </div>
    </div>

    <div class="d-flex align-items-center">

    <i style={{marginRight:"20px"}} class="bi bi-bell-fill text-secondary"></i>
    <i style={{marginRight:"50px"}} class="bi bi-envelope-fill text-secondary"></i>

        <span style={{borderLeft:"1px solid #C8BCB2" , marginLeft:"10px",paddingLeft:"50px"}} class="d-sm-inline ">Douglas</span>
        <img
        style={{marginLeft:"10px"}}
          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
          class="rounded-circle"
          height="25"
          alt=""
          loading="lazy"
        />
    </div>
  </div>
  </nav>
  <div class="container-fluid">
  <div class="d-sm-flex align-items-center justify-content-between mt-4">
    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
    <i class="bi bi-cloud-arrow-down-fill"></i> Generate Report</a>
  </div>
  {/* EaRNING CARDS COMPONENT */}
  <Earnings/>

  {/* canvas area chart */}
                        <div class="row">
                        <div class="col-xl-8 col-lg-7">
                        <div class="card shadow mb-4">
                               
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="card-body">
                                    <div class="chart-area pt-4 pb-4">
                                        <canvas id="myAreaChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                           {/* pieChart */}
                           <div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-has popup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="chart-pie pt-4 pb-4">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*end of piechart */}

                    </div>
                    <SingleProject/>
                    <Color/>
             </div>
       </div>
    </div>
</div>
  )}

export default App;


    {/* <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">hi</div> */}
