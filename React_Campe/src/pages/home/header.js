// import { useNavigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";

// function Header() {
//   const navigate = useNavigate();

//       const heroBlockStyle = {
//         backgroundImage:
//           " url(https://lp-cms-production.imgix.net/2020-11/wildcamping.jpg)",
//       };

//   return (
//     <div class="mb-8">
//       {/* <!-- Images Carousel --> */}
//       <div
//         class="js-slick-carousel u-slick u-slick__img-overlay"
//         data-arrows-classes="d-none d-md-inline-block u-slick__arrow-classic u-slick__arrow-centered--y rounded-circle"
//         data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left ml-md-4 ml-xl-8"
//         data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right mr-md-4 mr-xl-8"
//         data-infinite="true"
//         data-slides-show="1"
//         data-slides-scroll="1"
//         data-center-mode="true"
//         data-pagi-classes="d-md-none text-center u-slick__pagination mt-5 mb-0"
//         data-responsive='[{
//                           "breakpoint": 1480,
//                           "settings": {
//                               "centerPadding": "300px"
//                           }
//                       }, {
//                           "breakpoint": 1199,
//                           "settings": {
//                               "centerPadding": "200px"
//                           }
//                       }, {
//                           "breakpoint": 992,
//                           "settings": {
//                               "centerPadding": "120px"
//                           }
//                       }, {
//                           "breakpoint": 554,
//                           "settings": {
//                               "centerPadding": "20px"
//                           }
//                       }]'
//       >
//         <div
//           className=" bg-img-hero min-height-550"
//           style={{
//             heroBlockStyle,
//             width: "100%",
//             backgroundAttachment: "cover",
//             backgroundSize: "cover",
//             backgroundPosition: "center", // Center the image horizontally and vertically
//           }}
//         ></div>
//         <div
//           className="js-slide bg-img-hero min-height-550"
//           style={{
//             heroBlockStyle,
//             width: "100%",
//             backgroundAttachment: "cover",
//             backgroundSize: "cover",
//             backgroundPosition: "center", // Center the image horizontally and vertically
//           }}
//         ></div>
//         <div
//           className="js-slide bg-img-hero min-height-550"
//           style={{
//             heroBlockStyle,
//             width: "100%",
//             backgroundAttachment: "cover",
//             backgroundSize: "cover",
//             backgroundPosition: "center", // Center the image horizontally and vertically
//           }}
//         ></div>
//         <div
//           className="js-slide bg-img-hero min-height-550"
//           style={{
//             heroBlockStyle,
//             width: "100%",
//             backgroundAttachment: "cover",
//             backgroundSize: "cover",
//             backgroundPosition: "center", // Center the image horizontally and vertically
//           }}
//         ></div>
//       </div>
//       {/* <!-- End Images Carousel --> */}
//     </div>
//   );
// }
// export default Header;

////////sami

// import React, { useEffect, useState } from "react";

//  import { useNavigate } from 'react-router-dom';

// function Header() {
//     const navigate = useNavigate();

//     const id1 = 1;

//     const handleButtonClick = (id) => {
//         navigate(`/yachts/${id}`);
//       };

//     const heroBlockStyle = {
//       backgroundImage:
//         " url(https://lp-cms-production.imgix.net/2020-11/wildcamping.jpg)",
//     };
//   return (
//     <div
//       className="js-slick-carousel u-slick u-slick__img-overlay"
//       data-arrows-classes="d-none d-md-inline-block u-slick__arrow-classic u-slick__arrow-centered--y rounded-circle"
//       data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left ml-md-4 ml-xl-8"
//       data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right mr-md-4 mr-xl-8"
//       data-infinite="true"
//       data-slides-show="1"
//       data-slides-scroll="1"
//       data-center-mode="true"
//       data-pagi-classes="d-md-none text-center u-slick__pagination mt-5 mb-0"
//       data-responsive='[{
//         "breakpoint": 1480,
//         "settings": {
//           "centerPadding": "300px"
//         }
//       }, {
//         "breakpoint": 1199,
//         "settings": {
//           "centerPadding": "200px"
//         }
//       }, {
//         "breakpoint": 992,
//         "settings": {
//           "centerPadding": "120px"
//         }
//       }, {
//         "breakpoint": 554,
//         "settings": {
//           "centerPadding": "20px"
//         }
//       }]'
//     >
//       <div
//         className="hero-block hero-v7 bg-img-hero-bottom  text-center z-index-2"
//         style={heroBlockStyle}
//       >
//         <div className="container space-2 space-top-xl-10">
//           <div className="py-wd-10 pb-5">
//             <h1 className="font-size-60 font-size-xs-30 text-white font-weight-bold">
//               "Camping Made Easy"
//             </h1>
//             <p className="font-size-20 font-weight-normal text-white">
//               "Rent your equipment and be ready for your adventure."
//             </p>
//           </div>

//           <div className="space-top-lg-2 space-top-xl-3"></div>
//         </div>
//       </div>

//       <div
//         className="hero-block hero-v7 bg-img-hero-bottom  text-center z-index-2"
//         style={heroBlockStyle}
//       >
//         <div className="container space-2 space-top-xl-10">
//           <div className="py-wd-10 pb-5">
//             <h1 className="font-size-60 font-size-xs-30 text-white font-weight-bold">
//               "Camping Made Easy"
//             </h1>
//             <p className="font-size-20 font-weight-normal text-white">
//               "Rent your equipment and be ready for your adventure."
//             </p>
//           </div>

//           <div className="space-top-lg-2 space-top-xl-3"></div>
//         </div>
//       </div>
//     </div>
//   );

// };
// export default Header;

import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const itemStyle = {
  width: "100%",
  height: "100vh",
  objectFit: "cover",
};

export default function Header() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ZJM4YYWEKFD7NJ3JI22Y2NUAZQ.jpg"
        alt="..."
        style={itemStyle}
      >
        <h2>Second slide label</h2>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://images.prismic.io/visiticeland/79c03ed5-6fc3-424c-be29-8f0150211aad_Glamping_AsaSteinars.jpg?auto=compress,format"
        alt="..."
        style={itemStyle}
      >
        <h2>Second slide label</h2>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://lp-cms-production.imgix.net/2020-11/wildcamping.jpg"
        alt="..."
        style={itemStyle}
      >
        <h2>Second slide label</h2>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

// export default Header;
