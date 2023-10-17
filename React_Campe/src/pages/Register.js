import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import "../login.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = "https://64db17df593f57e435b06a91.mockapi.io/AHMED";
  const navigate = useNavigate();
  const image = "userreact.jpeg";

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkEmailAvailability = async () => {
    try {
      const response = await axios.get(`${apiUrl}?search=${email}`);
      if (response.data.length > 0) {
        return false; // Email already exists
      } else {
        return true; // Email is available
      }
    } catch (error) {
      console.error("Error checking email availability:", error);
      return false; // Assume email is unavailable on error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    // Validate password length
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long.",
      });
      return;
    }

    const isEmailAvailable = await checkEmailAvailability();

    if (!isEmailAvailable) {
      Swal.fire({
        icon: "error",
        title: "Email Already Exists",
        text: "This email address is already registered. Please use a different email.",
      });
      return;
    }

    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      image: image,
    };

    axios
      .post(apiUrl, userData)
      .then((response) => {
        const responseData = response.data;
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have successfully registered.",
        });
        navigate("/Login");
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "An error occurred during registration. Please try again later.",
        });
      });
  };

  return (
    <div className="login-container">
      <div className="login-form-wrap">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} id="login-form">
          <p>
            <input
              className="form-control form-control-lg"
              onChange={handleFirstName}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
            />
          </p>
          <p>
            <input
              className="form-control form-control-lg"
              onChange={handleLastName}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </p>
          <p>
            <input
              className="form-control form-control-lg"
              onChange={handleEmail}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </p>
          <p>
            <input
              className="form-control form-control-lg"
              onChange={handlePassword}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </p>
          <p>
            <input
              onClick={handleSubmit}
              className="btn btn-primary mb-2 col-12"
              type="submit"
              id="register"
              value="Register"
            />
          </p>
        </form>
        <div id="create-account-wrap">
          {/* Not a member? <a href="#">Create Account</a> */}
        </div>
      </div>
    </div>
  );
}

export default Register;
