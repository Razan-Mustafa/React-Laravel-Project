// import React from 'react';
import { useNavigate } from 'react-router-dom';
import CounterComponent from "../home/counter";
import Category from "../home/category";
import Header from "../home/header";
import React, { useState, useEffect } from "react";
import axios from "axios";




function Home(){
  const [packages, setPackages] = useState([]);

     
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(`/blog`);
      };

      useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(
              `http://127.0.0.1:8000/api/packages`
            );
            setPackages(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error as needed, e.g., show an error message.
          }
        }

        fetchData(); // Call the async function inside useEffect
      }, []);
       const last6Packages = packages.slice(-6);


return (
  <div>
    <Header />

    <Category />

    <CounterComponent />

    <div className="category-block category-v3 border-bottom border-color-8">
      <div className="container space-1 mt-3 mb-4">
        <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
          <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">
            Our Amenities
          </h2>
        </div>
        <div className="row mb-1">
          {last6Packages && last6Packages.map((packages) => (
            <>
              <div className="col-md-4 col-xl-2">
                <div className="mb-5 mb-xl-0">
                  <a className="d-block">
                    <div className="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                      <i className="flaticon-camping mr-3 text-brown-light font-size-60"></i>
                      <h6 className="font-size-17 text-gray-3 font-weight-bold">
                        {/* Fitness center */}
                        {packages.name}
                        <p>{packages.price} JOD </p>
                      </h6>
                    </div>
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>

    <div className="recent-article-block recent-article-v1">
      <div className="container space-1 mt-3 mb-lg-4">
        <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
          <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">
            Recent Articles
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="mb-4 mb-lg-0 text-md-center text-lg-left">
              <a className="d-block mb-3" onClick={() => handleButtonClick()}>
                <img
                  className="img-fluid rounded-xs w-100"
                  src="../../assets/img/410x300/img1.jpg"
                  alt="Image-Description"
                ></img>
              </a>
              <h6 className="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
                <a href=" " onClick={() => handleButtonClick()}>
                  How to travel with paper map
                </a>
              </h6>
              <a className="text-gray-1" href=" ">
                <span>June 6, 2019</span>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="mb-4 mb-lg-0 text-md-center text-lg-left">
              <a className="d-block mb-3" onClick={() => handleButtonClick()}>
                <img
                  className="img-fluid rounded-xs w-100"
                  src="../../assets/img/410x300/img2.jpg"
                  alt="Image-Description"
                ></img>
              </a>
              <h6 className="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
                <a href=" " onClick={() => handleButtonClick()}>
                  Change your place and get fresh air
                </a>
              </h6>
              <a className="text-gray-1" href=" ">
                <span>June 6, 2019</span>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="mb-0 text-md-center text-lg-left">
              <a
                className="d-block mb-3"
                href=" "
                onClick={() => handleButtonClick()}
              >
                <img
                  className="img-fluid rounded-xs w-100"
                  src="../../assets/img/410x300/img3.jpg"
                  alt="Image-Description"
                ></img>
              </a>
              <h6 className="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
                <a href=" " onClick={() => handleButtonClick()}>
                  Pityful a rethoric question ran
                </a>
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



// import React from "react";
// import { useNavigate } from 'react-router-dom';


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
//     <div>
//       <div
//         className="hero-block hero-v7 bg-img-hero-bottom  text-center z-index-2"
//         style={heroBlockStyle}
//       >
//         <div className="container space-2 space-top-xl-10">
//           <div className="py-wd-10 pb-5">
//             <h1 className="font-size-60 font-size-xs-30 text-white font-weight-bold">
//               "Camping More Easy"
//             </h1>
//             <p className="font-size-20 font-weight-normal text-white">
//               "Rent your equipment and be ready for your adventure."
//             </p>
//           </div>

//           <div className="space-top-lg-2 space-top-xl-3">
          
//           </div>
//         </div>
//       </div>
//     </div>
//   );  


// };
// export default Header;







// return (
//   <div>
//     <Header />

//     <Category />

//     <CounterComponent />

//     <div className="category-block category-v3 border-bottom border-color-8">
//       <div className="container space-1 mt-3 mb-4">
//         <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
//           <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">
//             NEW ARRIVEL
//           </h2>
//         </div>
//         <div className="row mb-1">
//           <div className="col-md-4 col-xl-2">
//             {last4Packages.map((packages) => (
//               <div className="mb-5 mb-xl-0">
//                 <a className="d-block">
//                   <div className="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
//                     <i className="flaticon-camping  mr-3 text-brown-light font-size-60"></i>

//                     <h6 className="font-size-17 text-gray-3 font-weight-bold">
//                       {/* Kitchen */}

//                       {packages.name}
//                     </h6>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="recent-article-block recent-article-v1">
//       <div className="container space-1 mt-3 mb-lg-4">
//         <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
//           <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">
//             Recent Articles
//           </h2>
//         </div>
//         <div className="row">
//           <div className="col-md-6 col-lg-4">
//             <div className="mb-4 mb-lg-0 text-md-center text-lg-left">
//               <a className="d-block mb-3" onClick={() => handleButtonClick()}>
//                 <img
//                   className="img-fluid rounded-xs w-100"
//                   src="../../assets/img/410x300/img1.jpg"
//                   alt="Image-Description"
//                 ></img>
//               </a>
//               <h6 className="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
//                 <a href=" " onClick={() => handleButtonClick()}>
//                   How to travel with paper map
//                 </a>
//               </h6>
//               <a className="text-gray-1" href=" ">
//                 <span>June 6, 2019</span>
//               </a>
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-4">
//             <div className="mb-4 mb-lg-0 text-md-center text-lg-left">
//               <a className="d-block mb-3" onClick={() => handleButtonClick()}>
//                 <img
//                   className="img-fluid rounded-xs w-100"
//                   src="../../assets/img/410x300/img2.jpg"
//                   alt="Image-Description"
//                 ></img>
//               </a>
//               <h6 className="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
//                 <a href=" " onClick={() => handleButtonClick()}>
//                   Change your place and get fresh air
//                 </a>
//               </h6>
//               <a className="text-gray-1" href=" ">
//                 <span>June 6, 2019</span>
//               </a>
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-4">
//             <div className="mb-0 text-md-center text-lg-left">
//               <a
//                 className="d-block mb-3"
//                 href=" "
//                 onClick={() => handleButtonClick()}
//               >
//                 <img
//                   className="img-fluid rounded-xs w-100"
//                   src="../../assets/img/410x300/img3.jpg"
//                   alt="Image-Description"
//                 ></img>
//               </a>
//               <h6 className="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
//                 <a href=" " onClick={() => handleButtonClick()}>
//                   Pityful a rethoric question ran
//                 </a>
//               </h6>
//               <a className="text-gray-1" href=" ">
//                 <span>June 6, 2019</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// };

// export default Home;

