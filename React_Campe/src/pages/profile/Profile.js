import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';
import "../profile/profile.css";






export default function Profile() {
  const imageInput = useRef(null);
  // const user_id = sessionStorage.getItem("user_id");
  const id = localStorage.getItem("user_id");
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    image: '',
    phone: '',
    address: '',
    image: '',
   
  });

 
  const [userAvailable, setUserAvailable] = useState(false);
  const [error, setError] = useState([]);

//   useEffect(() => {
//   axios({
//     method: "get",
//     url: `http://127.0.0.1:8000/api/users/${id}`,
//     data: userData,
//   })
//     .then((res) => {
//       console.log("Response Data:", res.data);
//       if (res.data.errors) {
//         setError(res.data.errors);
//       } else {
//         const { name, email, image, phone, address } = res.data[0];
//         console.log(res.data[0]);
// setUserData({ name, email, image, phone, address });
//       }
//     })
//     .catch((error) => {
//       console.log(error.response.data.message);
//     });
//   }, [id]);

useEffect(() => {
  if (!id) {
    // User is not available, handle the case as needed (e.g., show a message or redirect)
    setUserAvailable(false);
    return;
  }

  axios({
    method: "get",
    url: `http://127.0.0.1:8000/api/users/${id}`,
    data: userData,
  })
    .then((res) => {
      if (res.data.errors) {
        setError(res.data.errors);
      } else {
        const { name, email, image, phone, address } = res.data[0];
        setUserData({ name, email, image, phone, address });
        setUserAvailable(true);
      }
    })
    .catch((error) => {
      console.log(error.response.data.message);
      setUserAvailable(false);
    });
}, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserData((prev) => ({
          ...prev,
          image: reader.result, // Use the data URL
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  

//   const SaveInfo = async () => {
//     const formData = new FormData();
//     formData.append("name", userData.name);
//     formData.append("phone", userData.phone);
//     formData.append("email", userData.email);
//     formData.append("address", userData.address);
//     formData.append("image", imageInput.current.files[0]); // Use the selected file

//     try {
//         const response = await axios.post(
//             `http://127.0.0.1:8000/api/edit_profile/` + id,
//             formData
//         );

//         if (response.status === 200) {
//             alert("Data Updated Successfully");
//         } else {
//             alert("There is something wrong");
//         }
//     } catch (error) {
//         console.error("Error updating data:", error);
//     }
// };

const SaveInfo = async () => {
  if (imageInput.current && imageInput.current.files.length > 0) {
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("phone", userData.phone);
    formData.append("email", userData.email);
    formData.append("address", userData.address);
    formData.append("image", imageInput.current.files[0]);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/edit_profile/` + id,
        formData
      );

      if (response.status === 200) {
        alert("Data Updated Successfully");
      } else {
        alert("There is something wrong");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  } else {
    // Handle the case where no file is selected or imageInput is null.
    // You can show an error message or take appropriate action.
  }
};


  useEffect(() => {
    SaveInfo();
  }, []);


// console.log(userData.image)
  


  return (

    
<div>

<div className="container rounded bg-white  profile">

        <div className="row">
            <div className="col-md-4 border-right mt-5 ">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <h1  className="font-weight-bold  mb-4"
  style={{
    fontSize: '35px', // Set the desired font size
    color: '#637E4C',   // Set the desired color
  }}
>
Welcome {userData.name}</h1>
<img
  src={userData.image ? `http://127.0.0.1:8000/img/${userData.image}` : 'https://icones.pro/wp-content/uploads/2022/07/icones-d-administration-vert.png'}
  alt="Selected Image"
  width="170"
  height="170"
  className="rounded-circle mt-2"
/>

{/* <label
  className="font-weight-bold "
  style={{
    fontSize: '30px', // Set the desired font size
    color: 'green',   // Set the desired color
  }}
>
  {userData.name}
</label> */}

  <label for="Image" className='mt-2'>Edit your image</label>
  <input
    id="Image"
    name="image"
    type="file"
    accept="image/*" // Note the correct 'image' type
    className="form-control-file"
    onChange={handleImageChange}
    autoComplete="image"
    hidden
    ref={imageInput}
  />
</div>


            </div>
            <div className="col-md-8">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                            <h6>Back to home</h6>
                        </div>
                        <h6 className="text-right">Edit Profile</h6>
                    </div>
                    <form action="" onSubmit={SaveInfo}>
                    <div className="row mt-2">
                        <div className="col-md-6"><input onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          value={userData.name}
                          name="name"
                          type="text"
                          placeholder="your name"
                          className="form-control" 
                         /></div>
                        <div className="col-md-6"><input onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          value={userData.phone}
                          name="phone"
                          placeholder="your phone"
                          type="text"
                          className="form-control" 
                          /></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6"><input  onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          value={userData.email}
                          placeholder="Ex:shathaandlama@mail.com"
                          name="email"
                          type="text"
                          className="form-control" 
                          /></div>
                        <div className="col-md-6"><input  onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              address: e.target.value,
                            }))
                          }
                          className="form-control" 
                          value={userData.address}
                          name="address"
                          type="text"

                          /></div>
                               </div>


                                <div className="mt-5 text-right"><input id="input7Save" type="submit" className="btn btn-primary profile-button" value="Save" /></div> 
                          </form>
                          <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                            <h6>Change Password</h6>
                        </div>
                          <div className="row mt-2">
                          <div className="col-md-9">
                            <input type='Password' placeholder='Current password'  className="form-control" /></div>
                           
                            </div>
                            <div className="row mt-2">
                          <div className="col-md-9">
                            <input type='Password' placeholder='New password'  className="form-control" /></div>
                           
                            </div>
                            <div className="row mt-2">
                          <div className="col-md-9">
                            <input type='Password' placeholder='Confirm password'  className="form-control" /></div>
                           
                            </div>
                            <div className="mt-5 text-right"><input id="input7Save" type="submit" className="btn btn-primary profile-button" value="Save" /></div> 
{/*                
                    <div className="row mt-3">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="address" value="D-113, right avenue block, CA,USA"/></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="USA" placeholder="Country"/></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" value="Bank of America"/></div>
                        <div className="col-md-6"><input type="text" className="form-control" value="043958409584095" placeholder="Account Number"/></div>
                    </div> */}
                    {/* <div className="mt-5 text-right"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div> */}
                </div>
            </div>
        </div>
    </div>



    <hr></hr>
    <h1  className="font-weight-bold text-center mb-4"
  style={{
    fontSize: '35px', // Set the desired font size
    color: '#637E4C',   // Set the desired color
  }}>Booking table</h1>
  <div class="d-flex justify-content-center">
  <table class="table custom-table mx-auto">


          <thead>
            <tr>  

              <th scope="col">
                <label class="control control--checkbox">
                  <input type="checkbox"  class="js-check-all"/>
                  <div class="control__indicator"></div>
                </label>
              </th>
              
              <th scope="col">Order</th>
              <th scope="col">Name</th>
              <th scope="col">Occupation</th>
              <th scope="col">Contact</th>
              <th scope="col">Education</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row">
              <th scope="row">
                <label class="control control--checkbox">
                  <input type="checkbox"/>
                  <div class="control__indicator"></div>
                </label>
              </th>
              <td>
                1392
              </td>
              <td><a href="#">James Yates</a></td>
              <td>
                Web Designer
            
              </td>
              <td>+63 983 0962 971</td>
              <td>NY University</td>
            </tr>
       
            
          </tbody>
        </table>


</div>

</div>

    );
}
