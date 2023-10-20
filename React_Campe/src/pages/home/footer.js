import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Footer(){

const navigate = useNavigate();

  const id1 = 1;
  const id2 = 2;
  const id3 = 3;
  const id4 = 4;

  const handleButtonClick = (id) => {
    navigate(`/yachts/${id}`);
  };
  

return(


<footer className="footer mt-4" >
            <div class="space-bottom-2 space-top-1" >
                <div class="container" >
                    <div class="row justify-content-xl-between">
                        <div class="col-12 col-lg-4 col-xl-3dot1 mb-6 mb-md-10 mb-xl-0">
                     
                            <div class ="d-md-flex d-lg-block">
                                <div class="mb-5 mr-md-7 mr-lg-0">
                                    <h4 class="h6 mb-4 font-weight-bold font-size-17">Need My Travel Help?</h4>
                                    <a href="tel:+962775886521">
                                        <div class="d-flex align-items-center">
                                            <div class="mr-4">
                                            </div>
                                            <div>
                                                <div class="mb-2 h6 font-weight-normal text-gray-1">Got Questions ? Call us 24/7!</div>
                                                <small class="d-block font-size-18 font-weight-normal text-primary">Call Us: <span class="text-primary font-weight-semi-bold">+962775886521</span></small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="ml-md-6 ml-lg-0">
                                    <div class="mb-4">
                                        <h4 class="h6 font-weight-bold mb-2 font-size-17">Contact Info</h4>
                                        <address class="pr-4">
                                            <span class="mb-2 h6 font-weight-normal text-gray-1">
                                                PO Box CT16122 Collins Street West,Jordan.
                                            </span>
                                        </address>
                                    </div>
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item " >
                                            <a className="btn btn-icon btn-social btn-bg-transparent" href="#">
                                                <span className="fab fa-facebook-f btn-icon__inner " style={{fontSize:"25px"}}></span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item ">
                                            <a className="btn btn-icon btn-social btn-bg-transparent" href="#">
                                                <span className="fab fa-twitter  btn-icon__inner" style={{fontSize:"25px"}}></span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item ">
                                            <a className="btn btn-icon btn-social btn-bg-transparent" href="#">
                                                <span className="fab fa-instagram btn-icon__inner" style={{fontSize:"25px"}}></span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item ">
                                            <a className="btn btn-icon btn-social btn-bg-transparent" href="#">
                                                <span className="fab fa-linkedin-in btn-icon__inner" style={{fontSize:"25px"}}></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                          
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 col-xl-1dot8 mb-6 mb-md-10 mb-xl-0" >
                            <h4 class="h6 font-weight-bold mb-2 mb-xl-4 font-size-17">Company</h4>
                          
                            <ul className="list-group list-group-flush list-group-borderless mb-0" >

                                <li><Link  href="../others/about.html" class="text-decoration-on-hover list-group-item  list-group-item-action"  to={"/about"}>About us</Link></li>
                                <li><a class="text-decoration-on-hover list-group-item list-group-item-action" href="../others/contact.html">Contact us</a></li>
                                <li><a class="list-group-item list-group-item-action text-decoration-on-hover" href="../others/terms-conditions.html">Privacy Statement</a></li>
                                <li><a class="list-group-item list-group-item-action text-decoration-on-hover" href="../others/about.html">Partners</a></li>
                            </ul>
                         
                        </div>
                   
                   
                        
                    </div>
                </div>
            </div>
           
     
        </footer>
      



);
}

export default Footer;

