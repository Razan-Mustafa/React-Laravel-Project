import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import FormData from 'form-data';





export default function Profile() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    image: '',
  });

  const [userBookings, setUserBookings] = useState([]);
  const [isNameModified, setIsNameModified] = useState(false);
  const [isEmailModified, setIsEmailModified] = useState(false);


  // Get user data
  const userID = JSON.parse(localStorage.getItem('user')).user_id

  useEffect(() => {
    axios
      .get(`https://64db17df593f57e435b06a91.mockapi.io/AHMED/${userID}`)
      .then((res) => {
        const { firstName, lastName, email, image } = res.data;
        setUserData({ firstName, lastName, email, image });
      })
      .catch((err) => {
        console.log("ERROR GETTING USER DATA:", err);
      });
  }, []);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setIsNameModified(true);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setUserData({ ...userData, email: value });
    setIsEmailModified(true);
  };

  // Update user info
  const handleSubmitName = (e) => {
    e.preventDefault();
    setIsNameModified(false);
    updateUserProfile();
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setIsEmailModified(false);
    checkEmailExists();
  };


  // Check image if default
  const CheckImageSrc = () => {

    if (userData.image == "userreact.jpeg") {
      return "assets/img/userreact.jpeg";
    } else {
      return userData.image;
    }

  }


  const updateUserProfile = () => {
    axios
      .put(`https://64db17df593f57e435b06a91.mockapi.io/AHMED/${userID}`, userData)
      .then(() => {
        Swal.fire('Updated', 'Your profile is updated', 'success');
      })
      .catch((err) => {
        console.log("ERROR UPDATING PROFILE:", err);
      });
  };

  const checkEmailExists = () => {
    axios
      .get(`https://64db17df593f57e435b06a91.mockapi.io/AHMED`)
      .then((res) => {
        const exists = res.data.some((item) => item.email === userData.email);
        if (exists) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email already exists',
          });
        } else {
          updateUserProfile();
        }
      })
      .catch((err) => {
        console.log("ERROR CHECKING EMAIL EXISTENCE:", err);
      });
  };

  // Get user's bookings
// Get user's bookings
useEffect(() => {
  axios
    .get(`https://651a606d340309952f0d2d8f.mockapi.io/booking`)
    .then((res) => {
      let BookingData = res.data.filter((item) => item.userId == userID);
      // Create an array to store promises for fetching yacht data
      const yachtPromises = BookingData.map((booking) =>
        axios.get(`https://651db05044e393af2d5a346e.mockapi.io/yachts/${booking.yachtId}`)
      );

      // Use Promise.all to wait for all yacht data requests to complete
      Promise.all(yachtPromises)
        .then((yachtResponses) => {
          // Combine booking data with corresponding yacht data
          const combinedData = BookingData.map((booking, index) => ({
            ...booking,
            yachtData: yachtResponses[index].data,
          }));

          // Set the combined data in userBookings state
          setUserBookings(combinedData);
        })
        .catch((yachtErr) => {
          console.log("ERROR GETTING YACHT DATA:", yachtErr);
        });
    })
    .catch((err) => {
      console.log("ERROR GETTING USER BOOKINGS:", err);
    });
}, []);


  // Change the active email changing status
  const activeChangeEmail = () => {
    let emailInput = document.getElementById('emailInput');
    if (emailInput.hasAttribute('readonly')) {
      emailInput.removeAttribute('readonly')
    }
    else {
      emailInput.setAttribute('readonly', true)
    }
  }

  let image1 = ''

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      // console.log(reader.result);
      image1 = reader.result
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  // Handle image upload
  const handleImage = (e) => {
    getBase64(e.target.files[0])
  };

  const handleImageUpload = () => {
    axios.put(`https://64db17df593f57e435b06a91.mockapi.io/AHMED/${userID}`, {
      image: image1
    }).then((res) => {
      console.log('Image uploaded successfully:', res);
      setUserData(res.data);
    })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Image is too big',
        });
      });
  };

  // console.log("___________________HERE___________________")
  // console.log(userBookings[0].yachtData.name);
  // console.log("___________________HERE___________________")

  return (
    <div
      style={{
        marginTop: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center profile-box p-3 py-5">
              <img
                src={CheckImageSrc()}
                alt="User"
                className="rounded-circle mt-5"
                width="150px"
              />
              {/* IMAGE */}
              <input style={{display: 'none'}} accept="image/*" type="file" name="file" id="file" className="form-control" onChange={handleImage} />
              <label htmlFor="file" className='text-underline cursor-pointer'>Edit</label>
              <button className="btn btn-primary mt-3 mb-3 handle" style={{cursor: 'pointer'}} onClick={handleImageUpload} >uplode your image</button>
              <span className="font-weight-bold">{userData.firstName} {userData.lastName}</span>
              <span className="text-black-50">{userData.email}</span>
            </div>
          </div>
          <div className="col-md-9 border-right inpts-box">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <form onSubmit={handleSubmitName}>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="First name"
                      value={userData.firstName}
                      onChange={handleNameChange}
                    />
                    <br />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="Last name"
                      value={userData.lastName}
                      onChange={handleNameChange}
                    />
                  </div>
                </div>
                {isNameModified && (
                  <>
                    <button className="btn btn-primary profile-button mb-3" type="submit">
                      Save Name
                    </button>
                  </>
                )}
                <br />
              </form>
              <form onSubmit={handleSubmitEmail}>
                <label className="labels">Email</label>
                <div className="inpt d-flex align-items-center">
                  <input readOnly
                    type="email"
                    className="form-control w-50"
                    id='emailInput'
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleEmailChange}
                  />
                  <span onClick={activeChangeEmail} className='cursor-pointer ml-2'>change</span>
                </div>
                {isEmailModified && (
                  <button className="btn btn-primary profile-button mt-3" type="submit">
                    Save Email
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bookings">
        <h1 className='text-center'>Bookings</h1>
        {userBookings.length === 0 ? (
          <h5 className="text-center">No bookings</h5>
        ) : (
          <div className="booking">
            <table className="table table-hover text-center bookingsTable">
              <thead>
                <tr>
                  <th>Yacht's image</th>
                  <th>Yacht's name</th>
                  <th className="border">Start Date</th>
                  <th className="border">End Date</th>
                  <th className="border">Nights</th>
                  <th className="border">Price</th>
                </tr>
              </thead>
              <tbody>
                {userBookings.map((booking) => (
                  <tr key={booking.id} className="border">
                    <td className="border"><img width='250px' src={booking.yachtData.image1} alt="yacht's image"/></td>
                    <td className="border">{booking.yachtData.name}</td>
                    <td className="border">{booking.startDate}</td>
                    <td className="border">{booking.endDate}</td>
                    <td className="border">{booking.nights}</td>
                    <td className="border">${booking.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );



  
}
