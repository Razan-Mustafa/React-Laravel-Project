import React from "react";
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();

    const id1 = 1;

    const handleButtonClick = (id) => {
        navigate(`/yachts/${id}`);
      };
    
    const heroBlockStyle = {
       backgroundImage: 'linear-gradient(rgba(41,124,187, 0.3), rgba(41,124,187, 0.3)), url(https://tripfinder-boat.vercel.app/_next/image?url=%2Fimages%2Fbanner%2F1.jpg&w=1920&q=75)'
      };  
  return(
<div>


<div className="hero-block hero-v7 bg-img-hero-bottom  text-center z-index-2" style={heroBlockStyle}>
                <div className="container space-2 space-top-xl-10">
                  
                    <div className="py-wd-10 pb-5">
                      <h1 className="font-size-60 font-size-xs-30 text-white font-weight-bold">Boat Holidays Made Easy</h1>
                      <p className="font-size-20 font-weight-normal text-white">Rent a boat from the #1 yacht charter platform</p>
                    </div>
                   
                    <div className="space-top-lg-2 space-top-xl-3">
                                   <div className="card border-0">
                            <div className="card-body">
                                <form className="js-validate" >
                                  <div className="row d-block nav-select d-lg-flex mb-lg-3 px-lg-3 px-2">
                                    <div className="col-sm-12 col-lg-3dot7 mb-4 mb-lg-0 ">
                                    
                                        <span className="d-block text-gray-1  font-weight-normal mb-0 text-left">Destination or Hotel Name</span>
                                        <select className="js-select selectpicker dropdown-select tab-dropdown col-12 pl-0 flaticon-pin-1 d-flex align-items-center text-primary font-weight-semi-bold" title="Where are you going?"
                                            data-style=""
                                            data-live-search="true"
                                            data-searchbox-classNamees="input-group-sm">
                                            <option className="border-bottom border-color-1" value="project1" data-content='
                                                <span className="d-flex align-items-center">
                                                    <span className="font-size-16">  Aqaba, Jordan </span>
                                                </span>'>
                                                Aqaba, Jordan
                                            </option>
                                            <option  className="border-bottom border-color-1" value="project3" data-content='
                                                <span className="d-flex align-items-center">
                                                    <span className="font-size-16">Abu Dhabi, UAE</span>
                                                </span>'>
                                                Abu Dhabi, UAE
                                            </option>
                                            <option className="" value="project4" data-content='
                                                <span className="d-flex align-items-center">
                                                    <span className="font-size-16">Reykjavík, USA</span>
                                                </span>'>
                                                Miami, USA
                                            </option>
                                            <option className="border-bottom border-color-1" value="project4" data-content='
                                                <span className="d-flex align-items-center">
                                                    <span className="font-size-16">Bodrum, Turkey</span>
                                                </span>'>
                                                Bodrum, Turkey
                                            </option>
                                           
                                        </select>
                                  
                                    </div>

                                    <div className="col-sm-12 col-lg-3dot6 mb-4 mb-lg-0 ">
                                   
                                        <span className="d-block text-gray-1 font-weight-normal mb-0 text-left">Check In - Out</span>
                                        <div className="js-focus-state">
                                            <div className="border-bottom border-width-2 border-color-1">
                                                <div id="datepickerWrapperFrom" className="u-datepicker input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="d-flex align-items-center mr-2">
                                                          <i className="flaticon-calendar text-primary font-weight-semi-bold"></i>
                                                        </span>
                                                    </div>
                                                    <input className="js-range-datepicker font-size-lg-16 shadow-none font-weight-bold form-control hero-form bg-transparent  border-0" type="date"
                                                         data-rp-wrapper="#datepickerWrapperFrom"
                                                         data-rp-type="range"
                                                         data-rp-date-format="M d / Y"
                                                         data-rp-default-date='["Jul 7 / 2020", "Aug 25 / 2020"]'></input>
                                                </div>
                                              
                                            </div>
                                        </div>
                                   
                                    </div>

                                    <div className="col-sm-12 col-lg-2dot8 mb-4 mb-lg-0">
                                  
                                        <span className="d-block text-gray-1 font-weight-normal mb-0 text-left">Boat Type</span>
                                        <div className="js-focus-state">
                                            <div className="d-flex border-bottom border-width-2 border-color-1">
                                                <i className="flaticon-backpack d-flex align-items-center mr-2 text-primary font-weight-semi-bold"></i>
                                                <select className="js-select selectpicker dropdown-select">
                                                    <option value="2 Rooms - 3 Guests" selected>sailboat</option>
                                                    <option value="2 Rooms - 3 Guests">2 Rooms - 4 Guests</option>
                                                    <option value="2 Rooms - 3 Guests">3 Rooms - 6 Guests</option>
                                                    <option value="2 Rooms - 3 Guests">1 Rooms - 2 Guests</option>
                                                </select>
                                            </div>
                                        </div>
                              
                                    </div>

                                    <div className="col-sm-12 col-lg-1dot8 align-self-lg-end text-md-right">
                                        <button type="submit"  onClick={() => handleButtonClick(id1)} className="btn btn-primary text-white font-weight-semi-bold btn-md mb-xl-0 mb-lg-1 transition-3d-hover"><i className="flaticon-magnifying-glass font-size-20 mr-2"></i>Search</button>
                                    </div>
                                  </div>
                             
                                </form>
                            </div>
                        </div>
                  
                    </div>
                </div>
            </div>
    
</div>





  );  


};
export default Header;