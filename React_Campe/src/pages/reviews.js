import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Reviews() {
      let { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    axios
      .get("https://651db05044e393af2d5a346e.mockapi.io/review")
      .then((response) => {
        const filteredReviews = response.data.filter(
          (review) => review.yacht_id === id
        );
        setReviews(filteredReviews);
        console.log(reviews);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [commentText]);

   const userData = localStorage.getItem("user");
   const user = JSON.parse(userData);

   const comment = (e) => {
     e.preventDefault();
     const userData = localStorage.getItem("user");
     const user = JSON.parse(userData);
     axios
       .post("https://651db05044e393af2d5a346e.mockapi.io/review", {
         comment: commentText, // Send the comment text
         yacht_id: id,
         username: user.firstName,
         image:
           "https://www.shutterstock.com/shutterstock/photos/1849644754/display_1500/stock-photo-nice-to-meet-you-portrait-of-smiling-confident-young-lady-intern-trainee-employee-looking-at-1849644754.jpg",
         userId: user.user_id,
       })
       .then((response) => {
         //  console.log(user.name);
         // Handle success, reset state variables here
         setCommentText(""); // Clear the comment text after posting
       })
       .catch((error) => {
         // Handle errors here
         console.error("Error posting comment:", error);
       });
   };

   return (
     <div>
       {/* <div class="border-bottom py-4">
         <h5 class="font-size-21 font-weight-bold text-dark mb-4">
           Average Reviews
         </h5>
         <div class="row">
           <div class="col-md-4 mb-4 mb-md-0">
             <div class="border rounded flex-content-center py-5 border-width-2">
               <div class="text-center">
                 <h2 class="font-size-50 font-weight-bold text-primary mb-0 text-lh-sm">
                   4.2<span class="font-size-20">/5</span>
                 </h2>
                 <div class="font-size-25 text-dark mb-3">Very Good</div>
                 <div class="text-gray-1">From 40 reviews</div>
               </div>
             </div>
           </div>
           <div class="col-md-8">
             <div class="row">
               <div class="col-md-6 mb-4">
                 <h6 class="font-weight-normal text-gray-1 mb-1">
                   Cleanliness
                 </h6>
                 <div class="flex-horizontal-center mr-6">
                   <div
                     class="progress bg-gray-33 rounded-pill w-100"
                     style={{ height: "7px" }}
                   >
                     <div
                       class="progress-bar rounded-pill"
                       role="progressbar"
                       style={{ width: "80%" }}
                       aria-valuenow="80"
                       aria-valuemin="0"
                       aria-valuemax="100"
                     ></div>
                   </div>
                   <div class="ml-3 text-primary font-weight-bold">4.8</div>
                 </div>
               </div>
               <div class="col-md-6 mb-4">
                 <h6 class="font-weight-normal text-gray-1 mb-1">Facilities</h6>
                 <div class="flex-horizontal-center mr-6">
                   <div
                     class="progress bg-gray-33 rounded-pill w-100"
                     style={{ height: "7px;" }}
                   >
                     <div
                       class="progress-bar rounded-pill"
                       role="progressbar"
                       style={{ width: "40%" }}
                       aria-valuenow="40"
                       aria-valuemin="0"
                       aria-valuemax="100"
                     ></div>
                   </div>
                   <div class="ml-3 text-primary font-weight-bold">1.4</div>
                 </div>
               </div>
               <div class="col-md-6 mb-4">
                 <h6 class="font-weight-normal text-gray-1 mb-1">
                   Value for money
                 </h6>
                 <div class="flex-horizontal-center mr-6">
                   <div
                     class="progress bg-gray-33 rounded-pill w-100"
                     style={{ height: "7px" }}
                   >
                     <div
                       class="progress-bar rounded-pill"
                       role="progressbar"
                       style={{ width: "60%" }}
                       aria-valuenow="60"
                       aria-valuemin="0"
                       aria-valuemax="100"
                     ></div>
                   </div>
                   <div class="ml-3 text-primary font-weight-bold">3.2</div>
                 </div>
               </div>
               <div class="col-md-6 mb-4">
                 <h6 class="font-weight-normal text-gray-1 mb-1">Service</h6>
                 <div class="flex-horizontal-center mr-6">
                   <div
                     class="progress bg-gray-33 rounded-pill w-100"
                     style={{ height: "7px" }}
                   >
                     <div
                       class="progress-bar rounded-pill"
                       role="progressbar"
                       style={{ width: "100%" }}
                       aria-valuenow="100"
                       aria-valuemin="0"
                       aria-valuemax="100"
                     ></div>
                   </div>
                   <div class="ml-3 text-primary font-weight-bold">5.0</div>
                 </div>
               </div>
               <div class="col-md-6">
                 <h6 class="font-weight-normal text-gray-1 mb-1">Location</h6>
                 <div class="flex-horizontal-center mr-6">
                   <div
                     class="progress bg-gray-33 rounded-pill w-100"
                     style={{ height: "7px" }}
                   >
                     <div
                       class="progress-bar rounded-pill"
                       role="progressbar"
                       style={{ width: "86%" }}
                       aria-valuenow="86"
                       aria-valuemin="0"
                       aria-valuemax="100"
                     ></div>
                   </div>
                   <div class="ml-3 text-primary font-weight-bold">4.8</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div> */}

       <div class="border-bottom py-4">
         <h5 class="font-size-21 font-weight-bold text-dark mb-8">
           Showing verified guest comments
         </h5>
         {reviews.map((review) => (
           <div class="media flex-column flex-md-row align-items-center align-items-md-start mb-4">
             <div className="mr-md-5">
               <img
                 src={review.image}
                 alt={`Image by ${review.username}`}
                 style={{ maxWidth: "100px", maxHeight: "100px" }} // Adjust the dimensions as needed
               />
             </div>

             <div class="media-body text-center text-md-left">
               <div>
                 <div class="mb-4">
                   <h6 class="font-weight-bold text-gray-3">
                     {review.username}
                   </h6>

                   <div class="d-flex align-items-center flex-column flex-md-row mb-2">
                     <span class="font-weight-bold font-italic text-gray-3">
                       {review.comment}
                     </span>
                   </div>
                 </div>
               </div>
             </div>
             <div class="media flex-column flex-md-row align-items-center align-items-md-start mb-0"></div>
           </div>
         ))}
       </div>

       <div
         class="py-4"
         style={{
           display: localStorage.getItem("user") ? "block" : "none",
         }}
       >
         <h5 class="font-size-21 font-weight-bold text-dark mb-6">
           Write a Review
         </h5>
         <form class="js-validate" novalidate="novalidate">
           <div class="row mb-5 mb-lg-0">
             {/* <!-- Input --> */}
             <div class="col-sm-12 mb-5">
               <div class="js-form-message">
                 <div class="input-group">
                   <input
                     type="text"
                     class="form-control"
                     rows="6"
                     cols="77"
                     name="text"
                     placeholder="Comment"
                     aria-label="Hi there, I would like to ..."
                     required=""
                     data-msg="Please enter a reason."
                     data-error-class="u-has-error"
                     data-success-class="u-has-success"
                     value={commentText}
                     onChange={(e) => setCommentText(e.target.value)}
                   ></input>
                 </div>
               </div>
             </div>
             {/* <!-- End Input --> */}
             <div className="col d-flex justify-content-center justify-content-lg-start">
               <button
                 onClick={(e) => comment(e)}
                 style={{
                   backgroundColor: "#297cbb", // Background color #297cbb;

                   color: "white", // Text color
                   padding: "10px 20px", // Padding
                   border: "none", // Remove border
                   borderRadius: "4px", // Rounded corners
                   cursor: "pointer", // Add a pointer cursor on hover
                 }}
               >
                 Submit Comment
               </button>
             </div>
           </div>
         </form>
       </div>
     </div>
   );




}

export default Reviews;