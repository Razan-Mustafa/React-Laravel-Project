// import React from 'react';
import { useNavigate } from "react-router-dom";
import CounterComponent from "../home/counter";
import Category from "../home/category";
import Header from "../home/header";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {


 const navigate = useNavigate();
 const [packages, setPackages] = useState([]);
 const handleButtonClick = (id) => {
   navigate(`/package/${id}`);
 };


  
  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/packages`);
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
              NEW ARRIVAL
            </h2>
          </div>
          <div className="row mb-1">
            {last6Packages.map((packages) => (
              <div className="col-md-4 col-x2-3" key={packages.id}>
                <div className="mb-4 mb-x2-0">
                  <a className="d-block">
                    <div className="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                      <img
                        src={packages.image}
                        alt="Image"
                        style={{ maxWidth: "100%", height: "auto" }}
                        onClick={() => handleButtonClick(packages.id)}
                      />

                      {/* <img
                        src={
                          "http://127.0.0.1:8000/api" + packages.image
                        }
                        alt="Image"
                        style={{ maxWidth: "100%", height: "auto" }}
                      /> */}

                      <h6 className="font-size-17 text-gray-3 font-weight-bold">
                        {packages.name}
                      </h6>
                      <h6 className="font-size-17 text-gray-3 font-weight-bold">
                        {packages.price} JOD
                      </h6>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="recent-article-block recent-article-v1">
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
                    src="/assets/img/ajloun.jpg"
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
                    src="/assets/img/wadyram.jpg"
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
      </div> */}
    </div>
  );
}

export default Home;
