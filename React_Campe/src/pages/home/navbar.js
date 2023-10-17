import { data } from "jquery";
import React from "react";
import { setStatus } from "react";
import yacht from "./yacht (1).png";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Navbar() {
  const data = localStorage.getItem("user");
  const logindata = JSON.parse(data);

  const handelLogout = () => {
    logindata.id = "";
    logindata.status = false;
    localStorage.setItem("user", JSON.stringify(logindata));
    localStorage.clear();
    window.location.reload();
    localStorage.clear();
  };

  const myStyle = {
    minWidth: "230px",
  };
const mybackground = {
  background: "white",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // This adds a simple box shadow
};

const mytext = {
  color: "#637E4C",
};
const mytext2 = {
  color: "white",
};
  const myStyle2 = {
    width: "500px",
    animationDuration: "300ms",
    right: "0px",
  };
  return (
    <div>
      {localStorage.getItem("user") && logindata.status ? (
        <header
          style={mybackground}
          id="header"
          className="u-header u-header--abs-top-xl u-header--white-nav-links-xl u-header--bg-transparent-xl u-header--show-hide-xl"
          data-header-fix-moment="500"
          data-header-fix-effect="slide"
        >
          <div className="u-header__section u-header__shadow-on-show-hide py-4 py-xl-0 ">
            <div className="container-fluid   ">
              <nav
                style={myStyle}
                className="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space my-1 "
              >
                <Link
                  className="navbar-brand u-header__navbar-brand-default u-header__navbar-brand-center u-header__navbar-brand-text-white"
                  to={"/home"}
                  aria-label="MyYacht"
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="55px" height="53px" style="margin-bottom: 0;">
                                <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                                d="M53.175,51.207 C50.755,53.610 46.848,53.595 44.448,51.172 L40.766,47.484 C40.378,47.082 40.378,46.443 40.766,46.041 C41.164,45.629 41.821,45.617 42.233,46.016 L45.915,49.702 C47.503,51.246 50.030,51.246 51.619,49.703 C53.243,48.125 53.283,45.529 51.708,43.902 L50.100,42.292 C49.712,41.889 49.712,41.251 50.100,40.849 C50.498,40.436 51.155,40.425 51.567,40.823 L53.174,42.433 C53.186,42.445 53.198,42.456 53.210,42.469 C55.610,44.892 55.594,48.804 53.175,51.207 ZM47.857,37.404 C47.757,37.404 47.657,37.389 47.561,37.360 C47.561,37.360 47.561,37.360 47.561,37.360 C47.012,37.196 46.700,36.617 46.864,36.068 C48.542,30.412 47.740,24.310 44.659,19.281 C38.665,9.497 25.886,6.432 16.116,12.434 C16.085,12.456 16.054,12.475 16.021,12.493 C15.518,12.767 14.888,12.581 14.614,12.078 C14.340,11.574 14.526,10.943 15.029,10.669 C18.623,8.455 22.761,7.284 26.981,7.287 C29.178,7.289 31.363,7.608 33.469,8.234 C45.556,11.831 52.442,24.559 48.851,36.662 C48.719,37.102 48.315,37.403 47.857,37.404 ZM13.802,8.022 L12.765,6.983 C12.377,6.581 12.377,5.943 12.765,5.540 C13.163,5.128 13.820,5.117 14.232,5.515 L15.269,6.553 C15.657,6.956 15.657,7.594 15.269,7.996 C14.871,8.409 14.214,8.420 13.802,8.022 ZM9.654,3.868 L9.084,3.297 C7.495,1.753 4.968,1.752 3.379,3.296 C1.755,4.874 1.715,7.470 3.291,9.096 L10.083,15.900 C10.278,16.094 10.387,16.358 10.387,16.634 C10.387,17.208 9.923,17.672 9.350,17.672 C9.075,17.672 8.812,17.563 8.617,17.368 L1.824,10.566 C1.812,10.554 1.800,10.542 1.788,10.530 C-0.611,8.107 -0.596,4.195 1.824,1.792 C4.243,-0.611 8.150,-0.596 10.550,1.827 L11.121,2.400 C11.129,2.408 11.138,2.416 11.146,2.425 C11.544,2.838 11.533,3.495 11.121,3.894 C10.709,4.292 10.052,4.280 9.654,3.868 ZM7.742,19.850 C8.260,20.096 8.480,20.715 8.234,21.233 C5.232,27.580 5.635,35.016 9.305,41.001 C15.302,50.780 28.080,53.839 37.845,47.834 C37.876,47.813 37.908,47.793 37.940,47.775 C38.444,47.501 39.073,47.687 39.347,48.191 C39.621,48.695 39.435,49.326 38.932,49.599 C35.338,51.814 31.200,52.984 26.981,52.981 C23.606,52.979 20.273,52.228 17.223,50.782 C5.829,45.380 0.966,31.751 6.360,20.342 C6.606,19.824 7.225,19.603 7.742,19.850 ZM40.262,35.347 C40.601,35.280 40.951,35.387 41.196,35.631 L43.270,37.708 C43.675,38.113 43.675,38.771 43.270,39.176 L39.551,42.900 C37.191,45.264 33.364,45.264 31.004,42.900 L24.906,36.795 L21.491,40.215 C21.086,40.620 20.430,40.620 20.025,40.215 L17.951,38.138 C17.719,37.905 17.612,37.576 17.660,37.251 L18.624,30.501 L12.590,24.460 C11.040,22.907 11.040,20.390 12.590,18.837 C14.141,17.285 16.654,17.285 18.205,18.837 L24.077,24.716 L35.851,18.820 C36.250,18.620 36.732,18.699 37.048,19.015 L39.122,21.092 C39.527,21.498 39.527,22.155 39.122,22.561 L30.521,31.173 L35.622,36.277 L40.262,35.347 ZM20.758,38.012 L23.440,35.327 L20.454,32.337 L19.784,37.036 L20.758,38.012 ZM34.541,38.138 L28.318,31.907 C27.914,31.501 27.914,30.844 28.318,30.439 L36.919,21.826 L36.107,21.013 L24.333,26.910 C23.934,27.109 23.452,27.031 23.136,26.715 L16.735,20.306 C16.379,19.949 15.897,19.749 15.394,19.750 C14.347,19.750 13.498,20.600 13.499,21.649 C13.496,22.153 13.695,22.638 14.051,22.995 L20.449,29.401 L25.635,34.593 L32.464,41.432 C34.014,42.984 36.528,42.984 38.078,41.432 L41.064,38.442 L40.115,37.492 L35.474,38.421 C35.135,38.488 34.786,38.382 34.541,38.138 Z"/>
                            </svg> */}
                  <span style={mytext} className="u-header__navbar-brand-text">
                    MyYacht
                  </span>
                </Link>

                <Link
                  className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-collapsed"
                  to={"/home"}
                  aria-label="MyYacht"
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="55px" height="53px" style="margin-bottom: 0;">
                                <path fill-rule="evenodd"  className="fill-primary"
                                d="M53.175,51.207 C50.755,53.610 46.848,53.595 44.448,51.172 L40.766,47.484 C40.378,47.082 40.378,46.443 40.766,46.041 C41.164,45.629 41.821,45.617 42.233,46.016 L45.915,49.702 C47.503,51.246 50.030,51.246 51.619,49.703 C53.243,48.125 53.283,45.529 51.708,43.902 L50.100,42.292 C49.712,41.889 49.712,41.251 50.100,40.849 C50.498,40.436 51.155,40.425 51.567,40.823 L53.174,42.433 C53.186,42.445 53.198,42.456 53.210,42.469 C55.610,44.892 55.594,48.804 53.175,51.207 ZM47.857,37.404 C47.757,37.404 47.657,37.389 47.561,37.360 C47.561,37.360 47.561,37.360 47.561,37.360 C47.012,37.196 46.700,36.617 46.864,36.068 C48.542,30.412 47.740,24.310 44.659,19.281 C38.665,9.497 25.886,6.432 16.116,12.434 C16.085,12.456 16.054,12.475 16.021,12.493 C15.518,12.767 14.888,12.581 14.614,12.078 C14.340,11.574 14.526,10.943 15.029,10.669 C18.623,8.455 22.761,7.284 26.981,7.287 C29.178,7.289 31.363,7.608 33.469,8.234 C45.556,11.831 52.442,24.559 48.851,36.662 C48.719,37.102 48.315,37.403 47.857,37.404 ZM13.802,8.022 L12.765,6.983 C12.377,6.581 12.377,5.943 12.765,5.540 C13.163,5.128 13.820,5.117 14.232,5.515 L15.269,6.553 C15.657,6.956 15.657,7.594 15.269,7.996 C14.871,8.409 14.214,8.420 13.802,8.022 ZM9.654,3.868 L9.084,3.297 C7.495,1.753 4.968,1.752 3.379,3.296 C1.755,4.874 1.715,7.470 3.291,9.096 L10.083,15.900 C10.278,16.094 10.387,16.358 10.387,16.634 C10.387,17.208 9.923,17.672 9.350,17.672 C9.075,17.672 8.812,17.563 8.617,17.368 L1.824,10.566 C1.812,10.554 1.800,10.542 1.788,10.530 C-0.611,8.107 -0.596,4.195 1.824,1.792 C4.243,-0.611 8.150,-0.596 10.550,1.827 L11.121,2.400 C11.129,2.408 11.138,2.416 11.146,2.425 C11.544,2.838 11.533,3.495 11.121,3.894 C10.709,4.292 10.052,4.280 9.654,3.868 ZM7.742,19.850 C8.260,20.096 8.480,20.715 8.234,21.233 C5.232,27.580 5.635,35.016 9.305,41.001 C15.302,50.780 28.080,53.839 37.845,47.834 C37.876,47.813 37.908,47.793 37.940,47.775 C38.444,47.501 39.073,47.687 39.347,48.191 C39.621,48.695 39.435,49.326 38.932,49.599 C35.338,51.814 31.200,52.984 26.981,52.981 C23.606,52.979 20.273,52.228 17.223,50.782 C5.829,45.380 0.966,31.751 6.360,20.342 C6.606,19.824 7.225,19.603 7.742,19.850 ZM40.262,35.347 C40.601,35.280 40.951,35.387 41.196,35.631 L43.270,37.708 C43.675,38.113 43.675,38.771 43.270,39.176 L39.551,42.900 C37.191,45.264 33.364,45.264 31.004,42.900 L24.906,36.795 L21.491,40.215 C21.086,40.620 20.430,40.620 20.025,40.215 L17.951,38.138 C17.719,37.905 17.612,37.576 17.660,37.251 L18.624,30.501 L12.590,24.460 C11.040,22.907 11.040,20.390 12.590,18.837 C14.141,17.285 16.654,17.285 18.205,18.837 L24.077,24.716 L35.851,18.820 C36.250,18.620 36.732,18.699 37.048,19.015 L39.122,21.092 C39.527,21.498 39.527,22.155 39.122,22.561 L30.521,31.173 L35.622,36.277 L40.262,35.347 ZM20.758,38.012 L23.440,35.327 L20.454,32.337 L19.784,37.036 L20.758,38.012 ZM34.541,38.138 L28.318,31.907 C27.914,31.501 27.914,30.844 28.318,30.439 L36.919,21.826 L36.107,21.013 L24.333,26.910 C23.934,27.109 23.452,27.031 23.136,26.715 L16.735,20.306 C16.379,19.949 15.897,19.749 15.394,19.750 C14.347,19.750 13.498,20.600 13.499,21.649 C13.496,22.153 13.695,22.638 14.051,22.995 L20.449,29.401 L25.635,34.593 L32.464,41.432 C34.014,42.984 36.528,42.984 38.078,41.432 L41.064,38.442 L40.115,37.492 L35.474,38.421 C35.135,38.488 34.786,38.382 34.541,38.138 Z"/>
                            </svg> */}
                  <span className="u-header__navbar-brand-text" style={mytext}>
                    MyYacht
                  </span>
                </Link>

                <Link
                  className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-on-scroll"
                  to={"/home"}
                  aria-label="MyYacht"
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="55px" height="53px" style="margin-bottom: 0;">
                                <path fill-rule="evenodd"  className="fill-primary"
                                d="M53.175,51.207 C50.755,53.610 46.848,53.595 44.448,51.172 L40.766,47.484 C40.378,47.082 40.378,46.443 40.766,46.041 C41.164,45.629 41.821,45.617 42.233,46.016 L45.915,49.702 C47.503,51.246 50.030,51.246 51.619,49.703 C53.243,48.125 53.283,45.529 51.708,43.902 L50.100,42.292 C49.712,41.889 49.712,41.251 50.100,40.849 C50.498,40.436 51.155,40.425 51.567,40.823 L53.174,42.433 C53.186,42.445 53.198,42.456 53.210,42.469 C55.610,44.892 55.594,48.804 53.175,51.207 ZM47.857,37.404 C47.757,37.404 47.657,37.389 47.561,37.360 C47.561,37.360 47.561,37.360 47.561,37.360 C47.012,37.196 46.700,36.617 46.864,36.068 C48.542,30.412 47.740,24.310 44.659,19.281 C38.665,9.497 25.886,6.432 16.116,12.434 C16.085,12.456 16.054,12.475 16.021,12.493 C15.518,12.767 14.888,12.581 14.614,12.078 C14.340,11.574 14.526,10.943 15.029,10.669 C18.623,8.455 22.761,7.284 26.981,7.287 C29.178,7.289 31.363,7.608 33.469,8.234 C45.556,11.831 52.442,24.559 48.851,36.662 C48.719,37.102 48.315,37.403 47.857,37.404 ZM13.802,8.022 L12.765,6.983 C12.377,6.581 12.377,5.943 12.765,5.540 C13.163,5.128 13.820,5.117 14.232,5.515 L15.269,6.553 C15.657,6.956 15.657,7.594 15.269,7.996 C14.871,8.409 14.214,8.420 13.802,8.022 ZM9.654,3.868 L9.084,3.297 C7.495,1.753 4.968,1.752 3.379,3.296 C1.755,4.874 1.715,7.470 3.291,9.096 L10.083,15.900 C10.278,16.094 10.387,16.358 10.387,16.634 C10.387,17.208 9.923,17.672 9.350,17.672 C9.075,17.672 8.812,17.563 8.617,17.368 L1.824,10.566 C1.812,10.554 1.800,10.542 1.788,10.530 C-0.611,8.107 -0.596,4.195 1.824,1.792 C4.243,-0.611 8.150,-0.596 10.550,1.827 L11.121,2.400 C11.129,2.408 11.138,2.416 11.146,2.425 C11.544,2.838 11.533,3.495 11.121,3.894 C10.709,4.292 10.052,4.280 9.654,3.868 ZM7.742,19.850 C8.260,20.096 8.480,20.715 8.234,21.233 C5.232,27.580 5.635,35.016 9.305,41.001 C15.302,50.780 28.080,53.839 37.845,47.834 C37.876,47.813 37.908,47.793 37.940,47.775 C38.444,47.501 39.073,47.687 39.347,48.191 C39.621,48.695 39.435,49.326 38.932,49.599 C35.338,51.814 31.200,52.984 26.981,52.981 C23.606,52.979 20.273,52.228 17.223,50.782 C5.829,45.380 0.966,31.751 6.360,20.342 C6.606,19.824 7.225,19.603 7.742,19.850 ZM40.262,35.347 C40.601,35.280 40.951,35.387 41.196,35.631 L43.270,37.708 C43.675,38.113 43.675,38.771 43.270,39.176 L39.551,42.900 C37.191,45.264 33.364,45.264 31.004,42.900 L24.906,36.795 L21.491,40.215 C21.086,40.620 20.430,40.620 20.025,40.215 L17.951,38.138 C17.719,37.905 17.612,37.576 17.660,37.251 L18.624,30.501 L12.590,24.460 C11.040,22.907 11.040,20.390 12.590,18.837 C14.141,17.285 16.654,17.285 18.205,18.837 L24.077,24.716 L35.851,18.820 C36.250,18.620 36.732,18.699 37.048,19.015 L39.122,21.092 C39.527,21.498 39.527,22.155 39.122,22.561 L30.521,31.173 L35.622,36.277 L40.262,35.347 ZM20.758,38.012 L23.440,35.327 L20.454,32.337 L19.784,37.036 L20.758,38.012 ZM34.541,38.138 L28.318,31.907 C27.914,31.501 27.914,30.844 28.318,30.439 L36.919,21.826 L36.107,21.013 L24.333,26.910 C23.934,27.109 23.452,27.031 23.136,26.715 L16.735,20.306 C16.379,19.949 15.897,19.749 15.394,19.750 C14.347,19.750 13.498,20.600 13.499,21.649 C13.496,22.153 13.695,22.638 14.051,22.995 L20.449,29.401 L25.635,34.593 L32.464,41.432 C34.014,42.984 36.528,42.984 38.078,41.432 L41.064,38.442 L40.115,37.492 L35.474,38.421 C35.135,38.488 34.786,38.382 34.541,38.138 Z"/>
                            </svg> */}
                  <span className="u-header__navbar-brand-text" style={mytext}>
                    MyYacht
                  </span>
                </Link>

                <button
                  type="button"
                  className="navbar-toggler btn u-hamburger u-hamburger--primary order-2 ml-3"
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  aria-controls="navBar"
                  data-toggle="collapse"
                  data-target="#navBar"
                >
                  <span id="hamburgerTrigger" className="u-hamburger__box">
                    <span className="u-hamburger__inner"></span>
                  </span>
                </button>

                <div
                  id="navBar"
                  className="navbar-collapse u-header__navbar-collapse collapse order-2 order-xl-0 pt-4 p-xl-0 position-relative"
                >
                  <ul className="navbar-nav u-header__navbar-nav">
                    <li
                      className="nav-item  u-header__nav-item"
                      data-event="hover"
                      data-animation-in="slideInUp"
                      data-animation-out="fadeOut"
                    >
                      <Link
                        style={mytext}
                        id="homeMenu"
                        className="nav-link u-header__nav-link  u-header__nav-link-border"
                        to={"/home"}
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-labelledby="homeSubMenu"
                      >
                        Home
                      </Link>

                      <ul
                        id="homeSubMenu"
                        className="hs-sub-menu u-header__sub-menu u-header__sub-menu-rounded u-header__sub-menu-bordered hs-sub-menu-right u-header__sub-menu--spacer"
                        aria-labelledby="homeMenu"
                        style={myStyle}
                      ></ul>
                    </li>
                    <li
                      className="nav-item hs-has-sub-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="slideInUp"
                      data-animation-out="fadeOut"
                    >
                      <Link
                        style={mytext}
                        id="yachtMenu"
                        className="nav-link u-header__nav-link  u-header__nav-link-border"
                        to={"/about"}
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-labelledby="yachtSubMenu"
                      >
                        {" "}
                        About
                      </Link>
                    </li>
                    <li
                      className="nav-item hs-has-sub-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="slideInUp"
                      data-animation-out="fadeOut"
                    >
                      <Link
                        style={mytext}
                        id="yachtMenu"
                        className="nav-link u-header__nav-link  u-header__nav-link-border"
                        to={"/contact"}
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-labelledby="yachtSubMenu"
                      >
                        {" "}
                        Contact
                      </Link>
                    </li>

                    <li
                      className="nav-item hs-has-mega-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="slideInUp"
                      data-animation-out="fadeOut"
                      data-max-width="722px"
                      data-position="right"
                    >
                      <Link
                        style={mytext}
                        id="pagesMegaMenu"
                        className="nav-link u-header__nav-link "
                        to={"/blog"}
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </Link>
                    </li>
                    <li
                      className="nav-item hs-has-sub-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="slideInUp"
                      data-animation-out="fadeOut"
                    >
                      <Link
                        style={mytext}
                        id="yachtMenu"
                        className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-labelledby="yachtSubMenu"
                      >
                        <i className="flaticon-user font-size-16 mr-2"></i>
                        {logindata.name}
                      </Link>

                      <ul
                        id="yachtSubMenu"
                        class="hs-sub-menu u-header__sub-menu u-header__sub-menu-rounded u-header__sub-menu-bordered hs-sub-menu-right u-header__sub-menu--spacer"
                        aria-labelledby="yachtMenu"
                        style={myStyle}
                      >
                        <li>
                          <Link
                            style={mytext}
                            class="nav-link u-header__sub-menu-nav-link"
                            to={"/profile"}
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            class="nav-link u-header__sub-menu-nav-link"
                            to={"/home"}
                            onClick={handelLogout}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      ) : (
        <header
          style={mybackground}
          id="header"
          className="u-header u-header--abs-top-xl u-header--white-nav-links-xl u-header--bg-transparent-xl u-header--show-hide-xl"
          data-header-fix-moment="500"
          data-header-fix-effect="slide"
        >
          <div className="u-header__section u-header__shadow-on-show-hide ">
            <div id="logoAndNav" className="container-fluid ">
              <nav
                style={mytext}
                className="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space my-1"
              >
                {/* <a
                  className="navbar-brand u-header__navbar-brand-default u-header__navbar-brand-center u-header__navbar-brand-text-white"
                  href="../home/index.html"
                  aria-label="MyYacht"
                  style={mytext}
                >
<img src={yacht}  style={{ width: '90px' ,height:'75px'}}></img>

                  <span className="u-header__navbar-brand-text" style={mytext}>
                    MyYacht
                  </span>
                </a> */}

                <a
                  className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center"
                  href="../home/index.html"
                  aria-label="MyYacht"
                >
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="55px"
  height="53px"
  style={{ marginBottom: '0' }}
>
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <svg xmlns="http://www.w3.org/2000/svg" width="55px" height="53px" fill="#FF0000">
        <path
          fillRule="evenodd"
          className="fill-primary"
          d="M53.175,51.207 C50.755,53.610 46.848,53.595 44.448,51.172 L40.766,47.484 C40.378,47.082 40.378,46.443 40.766,46.041 C41.164,45.629 41.821,45.617 42.233,46.016 L45.915,49.702 C47.503,51.246 50.030,51.246 51.619,49.703 C53.243,48.125 53.283,45.529 51.708,43.902 L50.100,42.292 C49.712,41.889 49.712,41.251 50.100,40.849 C50.498,40.436 51.155,40.425 51.567,40.823 L53.174,42.433 C53.186,42.445 53.198,42.456 53.210,42.469 C55.610,44.892 55.594,48.804 53.175,51.207 ZM47.857,37.404 C47.757,37.404 47.657,37.389 47.561,37.360 C47.561,37.360 47.561,37.360 47.561,37.360 C47.012,37.196 46.700,36.617 46.864,36.068 C48.542,30.412 47.740,24.310 44.659,19.281 C38.665,9.497 25.886,6.432 16.116,12.434 C16.085,12.456 16.054,12.475 16.021,12.493 C15.518,12.767 14.888,12.581 14.614,12.078 C14.340,11.574 14.526,10.943 15.029,10.669 C18.623,8.455 22.761,7.284 26.981,7.287 C29.178,7.289 31.363,7.608 33.469,8.234 C45.556,11.831 52.442,24.559 48.851,36.662 C48.719,37.102 48.315,37.403 47.857,37.404 ZM13.802,8.022 L12.765,6.983 C12.377,6.581 12.377,5.943 12.765,5.540 C13.163,5.128 13.820,5.117 14.232,5.515 L15.269,6.553 C15.657,6.956 15.657,7.594 15.269,7.996 C14.871,8.409 14.214,8.420 13.802,8.022 ZM9.654,3.868 L9.084,3.297 C7.495,1.753 4.968,1.752 3.379,3.296 C1.755,4.874 1.715,7.470 3.291,9.096 L10.083,15.900 C10.278,16.094 10.387,16.358 10.387,16.634 C10.387,17.208 9.923,17.672 9.350,17.672 C9.075,17.672 8.812,17.563 8.617,17.368 L1.824,10.566 C1.812,10.554 1.800,10.542 1.788,10.530 C-0.611,8.107 -0.596,4.195 1.824,1.792 C4.243,-0.611 8.150,-0.596 10.550,1.827 L11.121,2.400 C11.129,2.408 11.138,2.416 11.146,2.425 C11.544,2.838 11.533,3.495 11.121,3.894 C10.709,4.292 10.052,4.280 9.654,3.868 ZM7.742,19.850 C8.260,20.096 8.480,20.715 8.234,21.233 C5.232,27.580 5.635,35.016 9.305,41.001 C15.302,50.780 28.080,53.839 37.845,47.834 C37.876,47.813 37.908,47.793 37.940,47.775 C38.444,47.501 39.073,47.687 39.347,48.191 C39.621,48.695 39.435,49.326 38.932,49.599 C35.338,51.814 31.200,52.984 26.981,52.981 C23.606,52.979 20.273,52.228 17.223,50.782 C5.829,45.380 0.966,31.751 6.360,20.342 C6.606,19.824 7.225,19.603 7.742,19.850 ZM40.262,35.347 C40.601,35.280 40.951,35.387 41.196,35.631 L43.270,37.708 C43.675,38.113 43.675,38.771 43.270,39.176 L39.551,42.900 C37.191,45.264 33.364,45.264 31.004,42.900 L24.906,36.795 L21.491,40.215 C21.086,40.620 20.430,40.620 20.025,40.215 L17.951,38.138 C17.719,37.905 17.612,37.576 17.660,37.251 L18.624,30.501 L12.590,24.460 C11.040,22.907 11.040,20.390 12.590,18.837 C14.141,17.285 16.654,17.285 18.205,18.837 L24.077,24.716 L35.851,18.820 C36.250,18.620 36.732,18.699 37.048,19.015 L39.122,21.092 C39.527,21.498 39.527,22.155 39.122,22.561 L30.521,31.173 L35.622,36.277 L40.262,35.347 ZM20.758,38.012 L23.440,35.327 L20.454,32.337 L19.784,37.036 L20.758,38.012 ZM34.541,38.138 L28.318,31.907 C27.914,31.501 27.914,30.844 28.318,30.439 L36.919,21.826 L36.107,21.013 L24.333,26.910 C23.934,27.109 23.452,27.031 23.136,26.715 L16.735,20.306 C16.379,19.949 15.897,19.749 15.394,19.750 C14.347,19.750 13.498,20.600 13.499,21.649 C13.496,22.153 13.695,22.638 14.051,22.995 L20.449,29.401 L25.635,34.593 L32.464,41.432 C34.014,42.984 36.528,42.984 38.078,41.432 L41.064,38.442 L40.115,37.492 L35.474,38.421 C35.135,38.488 34.786,38.382 34.541,38.138 Z"
        />
      </svg>
    </div>
  </foreignObject>
</svg>

                  <span className="u-header__navbar-brand-text" style={mytext}>
                    MyYacht
                  </span>
                </a>


                <button
                  type="button"
                  className="navbar-toggler btn u-hamburger u-hamburger--primary order-2 ml-3"
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  aria-controls="navBar"
                  data-toggle="collapse"
                  data-target="#navBar"
                >
                  <span
                    id="hamburgerTrigger"
                    className="u-hamburger__box"
                    style={myStyle}
                  >
                    <span className="u-hamburger__inner"></span>
                  </span>
                </button>

                <div
                  id="navBar"
                  className="navbar-collapse u-header__navbar-collapse collapse order-2 order-xl-0 pt-4 p-xl-0 position-relative"
                >
                  <ul className="navbar-nav u-header__navbar-nav">
                    <li
                      className="nav-item  u-header__nav-item"
                      data-event="hover"
                      data-animation-in="slideInUp"
                      data-animation-out="fadeOut"
                    >
                      <Link
                        style={mytext}
                        className="nav-link u-header__nav-link  u-header__nav-link-border"
                        to={"/home"}
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-labelledby="homeSubMenu"
                      >
                        Home
                      </Link>

                      <ul
                        id="homeSubMenu"
                        className="hs-sub-menu u-header__sub-menu u-header__sub-menu-rounded u-header__sub-menu-bordered hs-sub-menu-right u-header__sub-menu--spacer"
                        aria-labelledby="homeMenu"
                        style={myStyle}
                      ></ul>
                    </li>

                    <Link
                      style={mytext}
                      id="yachtMenu"
                      className="nav-link u-header__nav-link  u-header__nav-link-border"
                      to={"/about"}
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="yachtSubMenu"
                    >
                      {" "}
                      About
                    </Link>
                    <li
                      className="nav-item hs-has-sub-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="slideInUp"
                      data-animation-out="fadeOut"
                    >
                      <Link
                        style={mytext}
                        id="yachtMenu"
                        className="nav-link u-header__nav-link  u-header__nav-link-border"
                        to={"/contact"}
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-labelledby="yachtSubMenu"
                      >
                        {" "}
                        Contact
                      </Link>
                    </li>

                    <li
                      className="nav-item hs-has-mega-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="slideInUp"
                      data-animation-out="fadeOut"
                      data-max-width="722px"
                      data-position="right"
                    >
                      <Link
                        style={mytext}
                        id="pagesMegaMenu"
                        className="nav-link u-header__nav-link "
                        to={"/blog"}
                        href="javascript:;"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="pl-4 ml-1 u-header__last-item-btn u-header__last-item-btn-lg">
                  <Link
                    class="btn btn-wide rounded-sm btn-outline-white border-width-2 transition-3d-hover"
                    to={"/login"}
                  >
                    <span style={mytext2} class="d-inline-block">
                      Login
                    </span>
                  </Link>
                </div>
                <div class="pl-4 ml-1 u-header__last-item-btn u-header__last-item-btn-lg">
                  <Link
                    class="btn btn-wide rounded-sm btn-outline-white border-width-2 transition-3d-hover"
                    to={"/register"}
                  >
                    <span style={mytext2} class="d-inline-block">
                      Register
                    </span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </header>
      )}
    </div>
  );
}
export default Navbar;
