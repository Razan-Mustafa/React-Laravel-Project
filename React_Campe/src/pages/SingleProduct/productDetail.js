import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Rating } from "../../helper";
import "./ReviewRedux/style.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';


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

  return (
    <div className="sigma_team style-17 mb-0">
      <div className="row no-gutters">
        <div className="col-md-4">
          <div className="sigma_team-thumb">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/${details.image}`}
              alt={details.name}
            />
          </div>
        </div>
        <div className="col-md-8">
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
                <i className="fal fa-phone" />
                {details.phone}
              </span>
              <span>
                <i className="fal fa-at" />
                {details.email}
              </span>
              <span>
                <i className="fal fa-building" />
                {details.location}
              </span>
              <span>
              {/* <FontAwesomeIcon icon={faMoneyBill} /> */}
                Rent Price: {details.price} JOD
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
