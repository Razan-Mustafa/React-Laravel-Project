import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();

  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);

  const cartData = localStorage.getItem("cart");
  const cart = JSON.parse(cartData);
  const startDate = new Date(cart[0].startDate);
  const start = startDate.toISOString().slice(0, 10);
  const endDate = new Date(cart[0].endDate);
  const end = endDate.toISOString().slice(0, 10);
  const nights = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

    const [bookingData, setBookingData] = useState([0]);


  // console.log(startDate);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          "https://651db05044e393af2d5a346e.mockapi.io/yachts"
        );
        if (response.status === 200) {
          const book = response.data.filter(
            (carts) => carts.id === cart[0].yachtId
          );
          setBookingData(book);
          console.log(book);
        } else {
        }
      } catch (error) {}
    };

    const homePage = () => {
      navigate("/");
    };

    fetchEventData();

    return () => {};
  }, []);

  return (
    <>
      <main id="content" class="bg-gray space-2">
        <div class="container" >
        <div className="row"  style={{ display: 'flex', alignItems: 'center',height:'780px' }}>
            <div class="col-lg-8 col-xl-9 " >
              <div class="mb-5 shadow-soft bg-white rounded-sm">
                <div class="py-6 px-5 border-bottom">
                  <div class="flex-horizontal-center">
                    <div class="height-50 width-50 flex-shrink-0 flex-content-center bg-primary rounded-circle">
                      <i class="flaticon-tick text-white font-size-24"></i>
                    </div>
                    <div class="ml-3">
                      <h3 class="font-size-18 font-weight-bold text-dark mb-0 text-lh-sm">
                        Thank You. Your Booking Order is Confirmed Now.
                      </h3>
                      <p class="mb-0">
                        A confirmation email has been sent to your provided
                        email address.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="pt-4 pb-5 px-5 border-bottom">
                  <h5
                    id="scroll-description"
                    class="font-size-21 font-weight-bold text-dark mb-2"
                  >
                    Traveler Information
                  </h5>
                  <ul class="list-unstyled font-size-1 mb-0 font-size-16">
                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">Booking number</span>
                      <span class="text-secondary text-right">5784-BD245</span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">First name</span>
                      <span class="text-secondary text-right">
                        {user.firstName}
                      </span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">Last name</span>
                      <span class="text-secondary text-right">
                        {user.lastName}
                      </span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">E-mail address</span>
                      <span class="text-secondary text-right">
                        {user.email}
                      </span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">Yacht Name: </span>
                      <span class="text-secondary text-right">
                        {bookingData[0].name}
                      </span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">Location</span>
                      <span class="text-secondary text-right">
                        {bookingData[0].location}
                      </span>
                    </li>

                    {/* <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">ZIP code</span>
                      <span class="text-secondary text-right">75800-875</span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">Country</span>
                      <span class="text-secondary text-right">
                        United States of america
                      </span>
                    </li> */}
                  </ul>
                </div>
                {/* <div class="pt-4 pb-5 px-5 border-bottom">
                  <h5
                    id="scroll-description"
                    class="font-size-21 font-weight-bold text-dark mb-3"
                  >
                    Payment
                  </h5>
                  <p class="">
                    Praesent dolor lectus, rutrum sit amet risus vitae,
                    imperdiet cursus neque. Nulla tempor nec lorem eu suscipit.
                    Donec dignissim lectus a nunc molestie consectetur. Nulla eu
                    urna in nisi adipiscing placerat. Nam vel scelerisque magna.
                    Donec justo urna, posuere ut dictum quis.
                  </p>
                  <a href="#" className="text-underline text-primary">
                    Payment is made by Credit Card Via Paypal.
                  </a>
                  yarn add jquery
                </div>
                <div class="pt-4 pb-5 px-5">
                  <h5
                    id="scroll-description"
                    class="font-size-21 font-weight-bold text-dark mb-3"
                  >
                    View Booking Details
                  </h5>
                  <p class="">
                    Praesent dolor lectus, rutrum sit amet risus vitae,
                    imperdiet cursus neque. Nulla tempor nec lorem eu suscipit.
                    Donec dignissim lectus a nunc molestie consectetur. Nulla eu
                    urna in nisi adipiscing placerat. Nam vel scelerisque magna.
                    Donec justo urna, posuere ut dictum quis.
                  </p>

                  <a href="#" class="text-underline text-primary">
                    https://www.mytravel.com/booking-details/?=f4acb19f-9542-4a5c-b8ee
                  </a>
                </div> */}
              </div>
              <a class="btn btn-primary" onClick={() => {
localStorage.removeItem("cart");
    navigate('/');
  }} style={{ textAlign: "center" ,color:"white"}}>
                Home Page
              </a>
            </div>
            <div class="col-lg-4 col-xl-3 " style={{marginTop:'50px'}}>
              <div class="shadow-soft bg-white rounded-sm">
                <div class="pt-5 pb-4 px-5 border-bottom">
                  <a href="#" class="d-block mb-2">
                    <img
                      className="img-fluid rounded-sm"
                      src={bookingData[0].image1} // Corrected attribute name from avater to avatar
                      alt="Image-Description"
                    />
                  </a>
                  {/* {eventData.name} */}
                  <div class="flex-horizontal-center text-gray-1">
                    <i class="icon flaticon-pin-1 mr-2 font-size-15"></i>{" "}
                    {bookingData[0].location}
                  </div>
                </div>
                <div id="basicsAccordion">
                  <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
                    <div
                      class="card-header card-collapse bg-transparent border-0"
                      id="basicsHeadingOne"
                    >
                      <h5 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                          data-toggle="collapse"
                          data-target="#basicsCollapseOne"
                          aria-expanded="true"
                          aria-controls="basicsCollapseOne"
                        >
                          Booking Detail
                          <span class="card-btn-arrow font-size-14 text-dark">
                            <i class="fas fa-chevron-down"></i>
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="basicsCollapseOne"
                      class="collapse show"
                      aria-labelledby="basicsHeadingOne"
                      data-parent="#basicsAccordion"
                    >
                      <div class="card-body px-4 pt-0">
                        <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                          {/* <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">Date:</span>
                            <span className="text-secondary">
                              <a href="#" className="text-underline">
                                Edit
                              </a>
                              {eventData.date}
                            </span>
                          </li> */}

                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">
                              Nights :{" "}
                            </span>
                            <span className="text-secondary">
                              {cart[0].nights}
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">From:</span>
                            <span className="text-secondary">{start}</span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">To:</span>
                            <span className="text-secondary">{end}</span>
                          </li>

                          {/* <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">
                              Est. Distance
                            </span>
                            <span className="text-secondary">50 kilometer</span>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
                    <div
                      class="card-header card-collapse bg-transparent border-0"
                      id="basicsHeadingFour"
                    >
                      <h5 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                          data-toggle="collapse"
                          data-target="#basicsCollapseFour"
                          aria-expanded="false"
                          aria-controls="basicsCollapseFour"
                        >
                          Payment
                          <span class="card-btn-arrow font-size-14 text-dark">
                            <i class="fas fa-chevron-down"></i>
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="basicsCollapseFour"
                      class="collapse show"
                      aria-labelledby="basicsHeadingFour"
                      data-parent="#basicsAccordion"
                    >
                      <div class="card-body px-4 pt-0">
                        <ul class="list-unstyled font-size-1 mb-0 font-size-16">
                          <li class="d-flex justify-content-between py-2">
                            <span class="font-weight-medium">Subtotal</span>
                            <span class="text-secondary">
                              JD{cart[0].totalPrice}
                            </span>
                          </li>

                          <li class="d-flex justify-content-between py-2">
                            <span class="font-weight-medium">Extra Price</span>
                            <span class="text-secondary">JD0,00</span>
                          </li>

                          <li class="d-flex justify-content-between py-2">
                            <span class="font-weight-medium">Tax</span>
                            <span class="text-secondary">0 %</span>
                          </li>

                          <li class="d-flex justify-content-between py-2 font-size-17 font-weight-bold">
                            <span class="font-weight-bold">Pay Amount</span>JD
                            {cart[0].totalPrice}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Booking;
