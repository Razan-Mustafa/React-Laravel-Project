 

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
