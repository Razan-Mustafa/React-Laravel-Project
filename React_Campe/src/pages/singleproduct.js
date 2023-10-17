import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Reviews from "./reviews";

function SingleProduct() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category_id: "",
    location: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    description: "",
    price: "",
    speed: "",
    size: "",
    person: "",
    beds: "",
    fuelCapacity: "",
    map: "",
  });
  const [bookingData, setBookingData] = useState({});
  const [related, setRelatedData] = useState({});
  const [data, setData] = useState([]);
  // const [reviews, setReviews] = useState([]);
  // const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`
            https://651db05044e393af2d5a346e.mockapi.io/yachts/${id}`);
        if (response.status === 200) {
          setFormData(response.data);
          setRelatedData(response.data);
        } else {
          // Handle error if needed
        }
      } catch (error) {
        // Handle error if needed
      }
    };
  
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://651db05044e393af2d5a346e.mockapi.io/yachts/${id}`
        );
        const filteredData = response.data.filter((yacht) => {
          return yacht.id === parseInt(id);
        });



        const getRandomItems = (array, numItems) => {
          const shuffledArray = array.slice(); 
          for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
          }
          return shuffledArray.slice(0, numItems);
        };
    
       
        const randomData = getRandomItems(filteredData, 3);
    
        setData(randomData);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };
    
    
    
  
    fetchEventData();
    fetchData();
  }, [id]);


  const handlePost = (e) => {
    e.preventDefault();

    const startDate = new Date(bookingData.startDate);
    const endDate = new Date(bookingData.endDate);
    const nights = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    if (localStorage.getItem("user")) {
      axios
        .post("https://651a606d340309952f0d2d8f.mockapi.io/booking", {
          ...bookingData,
          totalPrice: formData.price * nights,
          yachtId: id,
          nights: nights,
          userId: user.user_id,
        })
        
        .then((response) => {
          setBookingData({
            userId: "",
            productId: "",
            date: "",
            totalPrice: "",
            nights: "",
          });

          Swal.fire({
            icon: "success",
            title: "Data saved!",
            text: "You will be redirected to /booking.",
          }).then(() => {
            navigate("/booking");
          });
        })
        
        .catch((error) => {
          // Handle error if needed
        });
         const cartData = {
           yachtId: id,
           startDate: startDate,
           endDate: endDate,
           nights: nights,
           totalPrice: formData.price * nights,
         };
               const existingCart =
                 JSON.parse(localStorage.getItem("cart")) || [];

               existingCart.push(cartData);

               localStorage.setItem("cart", JSON.stringify(existingCart));
    } else {
      // User is logged in, add data to the cart and navigate to "/login"
      const cartData = {
        yachtId: id,
        startDate: startDate,
        endDate: endDate,
        nights: nights,
        totalPrice: formData.price * nights,
      };

      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      existingCart.push(cartData);

      localStorage.setItem("cart", JSON.stringify(existingCart));
      // console.log(cartData);
      // console.log(formData.startDate);
      Swal.fire({
        icon: "success",
        title: "Item added to cart!",
        text: "You will be redirected to /login.",
      }).then(() => {
        navigate("/login");
      });
    }
  };

  return (
    <main id="content">
      <div class="container">
        <nav class="py-3" aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-no-gutter mb-0 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
            <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
              <a href="#">All yachts</a>
            </li>
            <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
              <a href="#">Yachts</a>
            </li>
            <li
              class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active"
              aria-current="page"
            >
              Park Avenue Baker Street London
            </li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Breadcrumb --> */}
      <div class="mb-8">
        {/* <!-- Images Carousel --> */}
        <div
          class="js-slick-carousel u-slick u-slick__img-overlay"
          data-arrows-classes="d-none d-md-inline-block u-slick__arrow-classic u-slick__arrow-centered--y rounded-circle"
          data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left ml-md-4 ml-xl-8"
          data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right mr-md-4 mr-xl-8"
          data-infinite="true"
          data-slides-show="1"
          data-slides-scroll="1"
          data-center-mode="true"
          data-pagi-classes="d-md-none text-center u-slick__pagination mt-5 mb-0"
          data-responsive='[{
                          "breakpoint": 1480,
                          "settings": {
                              "centerPadding": "300px"
                          }
                      }, {
                          "breakpoint": 1199,
                          "settings": {
                              "centerPadding": "200px"
                          }
                      }, {
                          "breakpoint": 992,
                          "settings": {
                              "centerPadding": "120px"
                          }
                      }, {
                          "breakpoint": 554,
                          "settings": {
                              "centerPadding": "20px"
                          }
                      }]'
        >
          {" "}
          <div
            className=" bg-img-hero min-height-550"
            style={{
              backgroundImage: `url(${formData.image1})`,
              width: "100%",
              backgroundAttachment: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center", // Center the image horizontally and vertically
            }}
          ></div>
          <div
            className="js-slide bg-img-hero min-height-550"
            style={{
              backgroundImage: `url(${formData.image2})`,
              width: "100%",
              backgroundAttachment: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center", // Center the image horizontally and vertically
            }}
          ></div>
          <div
            className="js-slide bg-img-hero min-height-550"
            style={{
              backgroundImage: `url(${formData.image3})`,
              width: "100%",
              backgroundAttachment: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center", // Center the image horizontally and vertically
            }}
          ></div>
          <div
            className="js-slide bg-img-hero min-height-550"
            style={{
              backgroundImage: `url(${formData.image4})`,
              width: "100%",
              backgroundAttachment: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center", // Center the image horizontally and vertically
            }}
          ></div>
        </div>
        {/* <!-- End Images Carousel --> */}
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-xl-9">
            <div class="d-block d-md-flex flex-center-between align-items-start mb-3">
              <div class="mb-3">
                <div class="d-block d-md-flex flex-horizontal-center mb-2 mb-md-0">
                  <h4 class="font-size-23 font-weight-bold mb-1 mr-3 pr-1">
                    {formData.name}
                  </h4>
                  <div class="d-inline-flex align-items-center font-size-13 text-lh-1">
                    <div class="green-lighter mr-2 letter-spacing-2">
                      <small class="fas fa-star"></small>
                      <small class="fas fa-star"></small>
                      <small class="fas fa-star"></small>
                      <small class="fas fa-star"></small>
                      <small class="fas fa-star"></small>
                    </div>
                    {/* <span class="text-secondary font-size-14 mt-1">
                       Reviews
                    </span> */}
                  </div>
                </div>
                <div class="d-block d-md-flex flex-horizontal-center font-size-14 text-gray-1">
                  <i class="icon flaticon-placeholder mr-2 font-size-20">
                    {formData.location}
                  </i>
                </div>
              </div>
              <ul class="list-group list-group-borderless list-group-horizontal custom-social-share">
                <li class="list-group-item px-1">
                  <a
                    href="#"
                    class="height-45 width-45 border rounded border-width-2 flex-content-center"
                  >
                    <i class="flaticon-like font-size-18 text-dark"></i>
                  </a>
                </li>
                {/* <li class="list-group-item px-1">
                  <a
                    href="#"
                    class="height-45 width-45 border rounded border-width-2 flex-content-center"
                  >
                    <i class="flaticon-share font-size-18 text-dark"></i>
                  </a>
                </li> */}
              </ul>
            </div>
            <div class="py-4 border-top border-bottom mb-4">
              <ul class="list-group list-group-borderless list-group-horizontal flex-center-between text-center mx-md-4 flex-wrap">
                <li class="list-group-item text-lh-sm ">
                  <i class="flaticon-ruler text-primary font-size-40 mb-1 d-block"></i>
                  <div class="text-gray-1">{formData.size} M</div>
                </li>
                <li class="list-group-item text-lh-sm ">
                  <i class="flaticon-download-speed text-primary font-size-40 mb-1 d-block"></i>
                  <div class="text-gray-1">{formData.speed} KMPH </div>
                </li>
                <li class="list-group-item text-lh-sm ">
                  <i class="flaticon-user-2 text-primary font-size-40 mb-1 d-block"></i>
                  <div class="text-gray-1">{formData.person} People</div>
                </li>
                <li class="list-group-item text-lh-sm ">
                  <i class="flaticon-bed-1 text-primary font-size-40 mb-1 d-block"></i>
                  <div class="text-gray-1">{formData.beds} Beds</div>
                </li>
              </ul>
            </div>
            <div class="border-bottom position-relative">
              <h5 class="font-size-21 font-weight-bold text-dark"></h5>
              <p>{formData.description}</p>
              <div class="collapse" id="collapseLinkExample">
                <p>
                  Once inside the historic palace located on the Right Bank of
                  the Seine, see unmissable and iconic sights such as the Mona
                  Lisa and Venus de Milo. Discover masterpieces of the
                  Renaissance and ancient Egyptian relics, along with paintings
                  from the 13th to 20th centuries, prints from the Royal
                  Collection, and much more.
                </p>
              </div>

              <a
                class="link-collapse link-collapse-custom gradient-overlay-half mb-5 d-inline-block border-bottom border-primary"
                data-toggle="collapse"
                href="#collapseLinkExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseLinkExample"
              >
                <span class="link-collapse__default font-size-14">
                  View More{" "}
                  <i class="flaticon-down-chevron font-size-10 ml-1"></i>
                </span>
                <span class="link-collapse__active font-size-14">
                  View Less <i class="flaticon-arrow font-size-10 ml-1"></i>
                </span>
              </a>
            </div>
            <div class="border-bottom py-4">
              <h5 class="font-size-21 font-weight-bold text-dark mb-4">
                Amenities
              </h5>
              <ul class="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-wifi-signal mr-3 text-primary font-size-24"></i>
                  Wifi
                </li>
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-alarm mr-3 text-primary font-size-24"></i>
                  Wake-up call
                </li>
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-bathrobe mr-3 text-primary font-size-24"></i>
                  Bathrobes
                </li>
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-weightlifting mr-3 text-primary font-size-24"></i>
                  Fitness center
                </li>
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-phone-call mr-3 text-primary font-size-24"></i>
                  Telephone
                </li>
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-folded-towel mr-3 text-primary font-size-24"></i>
                  Dry cleaning
                </li>
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-wine-glass mr-3 text-primary font-size-24"></i>
                  Beverages
                </li>
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-hair-dryer mr-3 text-primary font-size-24"></i>
                  Hair dryer
                </li>
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-desk-chair mr-3 text-primary font-size-24"></i>
                  High chair
                </li>
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-hamburger mr-3 text-primary font-size-24"></i>
                  Kitchen
                </li>
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-air-conditioner mr-3 text-primary font-size-24"></i>
                  Air Conditioning
                </li>
                <li class="col-md-4 mb-3 list-group-item">
                  <i class="flaticon-slippers mr-3 text-primary font-size-24"></i>
                  Slippers
                </li>
              </ul>
            </div>
            <div class="border-bottom py-4">
              <h5 class="font-size-21 font-weight-bold text-dark mb-4">
                Specifications
              </h5>
              <ul class="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                <li class="col-md-4 mb-5 list-group-item py-0">
                  <div class="font-weight-bold text-dark">Make</div>
                  <span class="text-gray-1">Sailing Yacht</span>
                </li>
                <li class="col-md-4 mb-5 list-group-item py-0">
                  <div class="font-weight-bold text-dark">Engine Model</div>
                  <span class="text-gray-1">C32A</span>
                </li>
                <li class="col-md-4 mb-5 list-group-item py-0">
                  <div class="font-weight-bold text-dark">Length</div>
                  <span class="text-gray-1">{formData.size}</span>
                </li>
                <li class="col-md-4 mb-5 list-group-item py-0">
                  <div class="font-weight-bold text-dark">Gross Weight</div>
                  <span class="text-gray-1">278,000 lb</span>
                </li>
                <li class="col-md-4 mb-5 list-group-item py-0">
                  <div class="font-weight-bold text-dark">Hull Material</div>
                  <span class="text-gray-1">Fiberglass</span>
                </li>
                <li class="col-md-4 mb-5 list-group-item py-0">
                  <div class="font-weight-bold text-dark">Draft</div>
                  <span class="text-gray-1">5.92 ft</span>
                </li>
                <li class="col-md-4 mb-5 list-group-item py-0">
                  <div class="font-weight-bold text-dark">Fuel Capacity</div>
                  <span class="text-gray-1">{formData.fuelCapacity}</span>
                </li>
                <li class="col-md-4 mb-5 list-group-item py-0">
                  <div class="font-weight-bold text-dark">Fuel Type</div>
                  <span class="text-gray-1">Diesel</span>
                </li>
                <li class="col-md-4 mb-5 list-group-item py-0">
                  <div class="font-weight-bold text-dark">Manufacturer</div>
                  <span class="text-gray-1">Caterpillar</span>
                </li>
                <li class="col-md-4 mb-5 list-group-item py-0">
                  <div class="font-weight-bold text-dark">Passengers </div>
                  <span class="text-gray-1">{formData.person} </span>
                </li>
                <li class="col-md-4 mb-5 list-group-item py-0">
                  <div class="font-weight-bold text-dark">Max Speed</div>
                  <span class="text-gray-1">{formData.speed} KMPH</span>
                </li>
              </ul>
            </div>
            <div class="border-bottom py-4">
              <h5 class="font-size-21 font-weight-bold text-dark mb-4">
                Location
              </h5>
              <iframe
                src={formData.map}
                width="100%"
                height="480"
                frameborder="0"
                style={{ border: "0" }}
                allowfullscreen=""
              ></iframe>
            </div>
            <Reviews />
          </div>

          <div class="col-lg-4 col-xl-3">
            <div class="mb-4">
              <div class="border border-color-7 rounded mb-5">
                <div class="border-bottom">
                  <div class="p-4">
                    <span class="font-size-24 text-gray-6 font-weight-bold ml-1">
                      {formData.price}€
                    </span>
                    <span class="font-size-14"> Per Day</span>
                  </div>
                </div>

                <div class="p-4 m-1">
                  {/* <!-- End Input -->
                                      <!-- Input --> */}
                  <span class="d-block text-gray-1 font-weight-normal mb-0 text-left">
                    From - To
                  </span>
                  <div className="mb-4">
                    <div className="border-bottom border-width-2 border-color-1">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="flaticon-calendar text-primary font-weight-semi-bold"></i>
                          </span>
                        </div>
                        <input
                          type="date"
                          className="form-control"
                          id="startDate"
                          name="startDate"
                          min={new Date().toISOString().split("T")[0]} // Set min date to today
                          required
                          value={bookingData.startDate}
                          onChange={(e) =>
                            setBookingData({
                              ...bookingData,
                              startDate: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="input-group mt-2">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="flaticon-calendar text-primary font-weight-semi-bold"></i>
                          </span>
                        </div>
                        <input
                          type="date"
                          className="form-control"
                          id="endDate"
                          name="endDate"
                          min={
                            bookingData.startDate ||
                            new Date().toISOString().split("T")[0]
                          } // Set min date to the selected start date or today
                          required
                          value={bookingData.endDate}
                          onChange={(e) =>
                            setBookingData({
                              ...bookingData,
                              endDate: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- End Input --> */}
                  <div class="text-center">
                    <a
                      href="../yacht/yacht-booking.html"
                      onClick={handlePost}
                      class="btn btn-primary d-flex align-items-center justify-content-center height-60 w-100 mb-xl-0 mb-lg-1 transition-3d-hover font-weight-bold"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="border border-color-7 rounded p-4 mb-5">
                <h6 class="font-size-17 font-weight-bold text-gray-3 mx-1 mb-3 pb-1">
                  Why Book With Us?
                </h6>
                <div class="d-flex align-items-center mb-3">
                  <i class="flaticon-star font-size-25 text-primary mr-3 pr-1"></i>
                  <h6 class="mb-0 font-size-14 text-gray-1">
                    <a href="#">No-hassle best price guarantee</a>
                  </h6>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <i class="flaticon-support font-size-25 text-primary mr-3 pr-1"></i>
                  <h6 class="mb-0 font-size-14 text-gray-1">
                    <a href="#">Customer care available 24/7</a>
                  </h6>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <i class="flaticon-favorites-button font-size-25 text-primary mr-3 pr-1"></i>
                  <h6 class="mb-0 font-size-14 text-gray-1">
                    <a href="#">Hand-picked Tours &amp; Activities</a>
                  </h6>
                </div>
                <div class="d-flex align-items-center mb-0">
                  <i class="flaticon-airplane font-size-25 text-primary mr-3 pr-1"></i>
                  <h6 class="mb-0 font-size-14 text-gray-1">
                    <a href="#">Free Travel Insureance</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Product Cards carousel --> */}
        {/* <div class="product-card-carousel-block product-card-carousel-v6">
          <div class="space-1">
            <div class="w-md-80 w-lg-50 text-center mx-md-auto">
              <h2 class="section-title text-black font-size-30 font-weight-bold mb-0">
                You might also like...
              </h2>
            </div>
           
              <div className="row">
              {data.map((yacht) => (
              <div className="col-md-4 mt-5" style={{width:"400px"}}>
                 <div className="card mb-4">
                  <div className="position-relative">
                    <a
                      href="../yacht/yacht-single-v1.html"
                      className="d-block gradient-overlay-half-bg-gradient-v5"
                    >
                      <img
                        className="card-img-top"
                        src="../../assets/img/300x230/img21.jpg"
                        alt="Image Description"
                     
                      />
                    </a>
                    <div className="position-absolute top-0 right-0 pt-3 pr-3">
                      <button
                        type="button"
                        className="btn btn-sm btn-icon text-white rounded-circle"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Save for later"
                      >
                        <span className="flaticon-heart-1 font-size-20"></span>
                      </button>
                    </div>
                    <div className="position-absolute bottom-0 left-0 right-0">
                      <div className="px-3 pb-2">
                        <a href="../yacht/yacht-single-v1.html">
                          <span className="text-white font-weight-bold font-size-17">
                          {yacht.name}
                          </span>
                        </a>
                        <div className="text-white my-2">
                          <span className="mr-1 font-size-14">From</span>
                          <span className="font-weight-bold font-size-19">
                          {yacht.price}
                          </span>
                          <span className="font-size-14"> / week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-4 pt-3 pb-2 border-bottom">
                    <a href="../yacht/yacht-single-v1.html" className="d-block">
                      <div className="d-flex align-items-center font-size-14 text-gray-1">
                        <i className="icon flaticon-placeholder mr-2 font-size-20"></i>{" "}
                        {yacht.location}
                      </div>
                    </a>
                    <div className="my-2">
                      <div className="d-inline-flex align-items-center font-size-14 text-lh-1 text-primary">
                        <div className="green-lighter mr-2">
                          <small className="fas fa-star"></small>
                          <small className="fas fa-star"></small>
                          <small className="fas fa-star"></small>
                          <small className="fas fa-star"></small>
                          <small className="fas fa-star"></small>
                        </div>
                        <span className="text-secondary font-size-14 mt-1">
                          18 Reviews
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <div className="row">
                      <div className="col-6">
                        <ul className="list-unstyled mb-0">
                          <li className="media mb-2 text-gray-1 align-items-center">
                            <small className="mr-3">
                              <small className="flaticon-ruler font-size-16"></small>
                            </small>
                            <div className="media-body font-size-1">  {yacht.size}</div>
                          </li>
                          <li className="media mb-2 text-gray-1 align-items-center">
                            <small className="mr-3">
                              <small className="flaticon-user font-size-16"></small>
                            </small>
                            <div className="media-body font-size-1">{yacht.person}</div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="list-unstyled mb-0">
                          <li className="media mb-2 text-gray-1 align-items-center">
                            <small className="mr-3">
                              <small className="flaticon-download-speed font-size-16"></small>
                            </small>
                            <div className="media-body font-size-1">
                            {yacht.speed}
                            </div>
                          </li>
                          <li className="media mb-2 text-gray-1 align-items-center">
                            <small className="mr-3">
                              <small className="flaticon-bed-1 font-size-16"></small>
                            </small>
                            <div className="media-body font-size-1"> {yacht.beds}</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                 ))}
          </div>
            </div>
          </div> */}
        </div>
      
    </main>
  );
}

export default SingleProduct;
