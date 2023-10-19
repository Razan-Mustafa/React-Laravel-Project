import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Rating } from "../../helper";
import "./ReviewRedux/style.css";
import Slider from './products_slider/products_slider';


const ProductDetails = ({ id }) => {
  const [details, setDetails] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const getProductDetails = () => {
      axios
        .get(`http://127.0.0.1:8000/api/packages/1`) 
        .then((response) => {
            setDetails(response.data[0])
            console.log(response.data[0].name)
        })
        .catch((error) => console.error(error));
    };

    getProductDetails();
  }, [id]);
  let package_id = 1;

  return (
    <div className="sigma_team style-17 mb-0">
      <br></br><br></br><br></br>
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="sigma_team-thumb">
             <Slider package_id = {package_id}/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="sigma_team-body">
            <h5>
              {details.name}
            </h5>
            <div className="sigma_rating">
              {Rating(averageRating.toFixed(2))}
              <span className="ml-3">({averageRating.toFixed(2)})</span>
            </div>
            <div className="sigma_team-categories">
                {details.description}
            </div>
            <div className="sigma_team-info mt-4">
              <span>
              <i className="fas fa-user" /> {details.number_of_person} Persons
              </span>
          
              <span>
              {/* <FontAwesomeIcon icon={faMoneyBill} /> */}
                <i className="fas fa-dollar-sign" /> Rent Price: {details.price} JOD
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
