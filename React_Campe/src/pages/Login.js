import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert
import "../login.css";
import styled from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email format",
      });
      return;
    }

    const user = data.find((userdata) => userdata.email === email);
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "User not found",
      });
      return;
    }

    // Password validation - minimum length of 8 characters
    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Password must be at least 8 characters long",
      });
      return;
    }

    if (user.password === password) {
      const userString = localStorage.getItem("user");
      const users = JSON.parse(userString);
      const userData = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        user_id: user.id,
        status: true,
        
      };
      localStorage.setItem("user", JSON.stringify(userData));

      if (localStorage.getItem("cart")) {
        const cartData = localStorage.getItem("cart");
        const cart = JSON.parse(cartData);
        const startDate = new Date(cart[0].startDate);
        const endDate = new Date(cart[0].endDate);
        const nights = Math.floor(
          (endDate - startDate) / (1000 * 60 * 60 * 24)
        );

        axios
          .post("https://651a606d340309952f0d2d8f.mockapi.io/booking", {
            userId: userData.user_id,
            yachtId: cart[0].yachtId,
            startDate: startDate,
            endDate: endDate,
            totalPrice: cart[0].totalPrice,
            nights: nights,
          })
          .then((response) => {
            navigate("/booking");
            // localStorage.removeItem("cart");
          })
          .catch((error) => {
            console.error("Error while posting booking data:", error);
            // Handle the error appropriately
          });
      } else {
        navigate("/");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid password",
      });
    }
  };

  useEffect(() => {
    const apiUrl = "https://64db17df593f57e435b06a91.mockapi.io/AHMED";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Empty dependency array for one-time API request

  return (
    <div className="login-container">
      <div className="login-form-wrap">
        <h2 className="login">Login</h2>
        <form onSubmit={handleSubmit} id="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="btn btn-primary col-12" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
