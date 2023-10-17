import React from 'react';
import { useNavigate } from 'react-router-dom';
import CounterComponent from "../home/counter";
import Category from "../home/category";
import Header from "../home/header";



function Home(){

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(`/blog`);
      };

return (
  <div>
    
    <Header />

    <Category />

    <CounterComponent />

            <div className="category-block category-v3 border-bottom border-color-8">
                <div className="container space-1 mt-3 mb-4">
                    <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
                        <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Our Amenities</h2>
                    </div>
                    <div className="row mb-1">
                        <div className="col-md-4 col-xl-2">
                            <div className="mb-5 mb-xl-0">
                                <a className="d-block">
                                    <div className="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i className="flaticon-wifi-signal mr-3 text-brown-light font-size-60"></i>
                                        <h6 className="font-size-17 text-gray-3 text-center font-weight-bold">Wifi (Internet)</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-2">
                            <div className="mb-5 mb-xl-0">
                                <a className="d-block" >
                                    <div className="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i className="flaticon-weightlifting mr-3 text-brown-light font-size-60"></i>
                                        <h6 className="font-size-17 text-gray-3 font-weight-bold">Fitness center</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-2">
                            <div className="mb-5 mb-xl-0">
                                <a className="d-block" >
                                    <div className="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i className="flaticon-hamburger mr-3 text-brown-light font-size-60"></i>
                                        <h6 className="font-size-17 text-gray-3 font-weight-bold">Kitchen</h6>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-2">
                            <div className="mb-5 mb-md-0">
                                <a className="d-block" >
                                    <div className="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i className="flaticon-air-conditioner mr-3 text-brown-light font-size-60"></i>
                                        <h6 className="font-size-17 text-gray-3 font-weight-bold">Air Conditioning</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-2">
                            <div className="mb-5 mb-md-0">
                                <a className="d-block" >
                                    <div className="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i className="flaticon-phone-call mr-3 text-brown-light font-size-60"></i>
                                        <h6 className="font-size-17 text-gray-3 font-weight-bold">Telephone</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-2">
                            <div className="mb-0">
                                <a className="d-block" >
                                    <div className="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i className="flaticon-bathrobe mr-3 text-brown-light font-size-60"></i>
                                        <h6 className="font-size-17 text-gray-3 font-weight-bold">Bathrobes</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
    
    
{/*     
            <div className="testimonial-block testimonial-v2 border-bottom border-color-8">
                <div className="container">
                    <div className="pt-7 pb-8">
                        <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
                            <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Customer Reviews</h2>
                        </div>
                        <div className="js-slick-carousel u-slick u-slick--gutters-3" data-infinite="    true" data-autoplay="true" data-speed="3000" data-fade="true"
                        data-pagi-classNamees="text-center u-slick__pagination mb-0 mt-4"
                            data-responsive='[{
                            "breakpoint": 992,
                               "settings": {
                                 "slidesToShow": 1
                               }
                            }]'>

                            <div className="js-slide">
                                
                                <div className="d-flex justify-content-center mb-6">
                                    <div className="position-relative">
                                        <img className="img-fluid mx-auto" src="../../assets/img/137x137/img1.jpg" alt="Image-Descrition"></img>
                                        <div className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote7" className="svg-preloader">
                                                <img className="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote7"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 className="font-size-17 font-weight-bold text-gray-6 mb-0">Jessica Brown</h6>
                                    <span className="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>

                            <div className="js-slide">
                                
                                <div className="d-flex justify-content-center mb-6">
                                    <div className="position-relative">
                                        <img className="img-fluid mx-auto" src="../../assets/img/137x137/img2.jpg" alt="Image-Descrition"></img>
                                        <div className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote8" className="svg-preloader">
                                                <img className="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote8"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 className="font-size-17 font-weight-bold text-gray-6 mb-0">Augusta Silva</h6>
                                    <span className="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>

                            <div className="js-slide">
                                
                                <div className="d-flex justify-content-center mb-6">
                                    <div className="position-relative">
                                        <img className="img-fluid mx-auto" src="../../assets/img/137x137/img3.jpg" alt="Image-Descrition"></img>
                                        <div className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote9" className="svg-preloader">
                                                <img className="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote9"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 className="font-size-17 font-weight-bold text-gray-6 mb-0">Ali Tufan</h6>
                                    <span className="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>

                            <div className="js-slide">
                                
                                <div className="d-flex justify-content-center mb-6">
                                    <div className="position-relative">
                                        <img className="img-fluid mx-auto" src="../../assets/img/137x137/img1.jpg" alt="Image-Descrition"></img>
                                        <div className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote10" className="svg-preloader">
                                                <img className="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote10"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 className="font-size-17 font-weight-bold text-gray-6 mb-0">Jessica Brown</h6>
                                    <span className="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>

                            <div className="js-slide">
                                
                                <div className="d-flex justify-content-center mb-6">
                                    <div className="position-relative">
                                        <img className="img-fluid mx-auto" src="../../assets/img/137x137/img3.jpg" alt="Image-Descrition"></img>
                                        <div className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote11" className="svg-preloader">
                                                <img className="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote11"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 className="font-size-17 font-weight-bold text-gray-6 mb-0">Ali Tufan</h6>
                                    <span className="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>

                            <div className="js-slide">
                                
                                <div className="d-flex justify-content-center mb-6">
                                    <div className="position-relative">
                                        <img className="img-fluid mx-auto" src="../../assets/img/137x137/img2.jpg" alt="Image-Descrition"></img>
                                        <div className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote12" className="svg-preloader">
                                                <img className="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote12"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 className="font-size-17 font-weight-bold text-gray-6 mb-0">Augusta Silva</h6>
                                    <span className="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div> */}
            





            <div className="recent-article-block recent-article-v1">
                <div className="container space-1 mt-3 mb-lg-4">
                    <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
                        <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Recent Articles</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="mb-4 mb-lg-0 text-md-center text-lg-left">
                                <a className="d-block mb-3" onClick={() => handleButtonClick()} >
                                    <img className="img-fluid rounded-xs w-100" src="../../assets/img/410x300/img1.jpg" alt="Image-Description"></img>
                                </a>
                                <h6 className="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
                                    <a href=" " onClick={() => handleButtonClick()}>How to travel with paper map</a>
                                </h6>
                                <a className="text-gray-1" href=" ">
                                    <span>June 6, 2019</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="mb-4 mb-lg-0 text-md-center text-lg-left">
                                <a className="d-block mb-3" onClick={() => handleButtonClick()}>
                                    <img className="img-fluid rounded-xs w-100" src="../../assets/img/410x300/img2.jpg" alt="Image-Description"></img>
                                </a>
                                <h6 className="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
                                    <a href=" " onClick={() => handleButtonClick()}>Change your place and get fresh air</a>
                                </h6>
                                <a className="text-gray-1" href=" ">
                                    <span>June 6, 2019</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="mb-0 text-md-center text-lg-left">
                                <a className="d-block mb-3" href=" " onClick={() => handleButtonClick()}>
                                    <img className="img-fluid rounded-xs w-100" src="../../assets/img/410x300/img3.jpg" alt="Image-Description"></img>
                                </a>
                                <h6 className="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
                                    <a href=" " onClick={() => handleButtonClick()}>Pityful a rethoric question ran</a>
                                </h6>
                                <a className="text-gray-1" href=" ">
                                    <span>June 6, 2019</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
  </div>


);

};

export default Home;
