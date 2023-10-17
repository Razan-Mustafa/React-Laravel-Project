import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Import the necessary components from react-router-dom
import { useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/home/home";
import Register from "./pages/Register";
import Booking from "./pages/booking";
import Aboutus from "./pages/aboutus";
import Profile from "./pages/profile/Profile";
import SingleProduct from "./pages/singleproduct";
import Yacht from "./pages/products/yacht";
import Navbar from "./pages/home/navbar";
import Blog from "./pages/home/blog";
import Footer from "./pages/home/footer";
import "bootstrap/dist/js/bootstrap"; 
import Contact from "./pages/contact";

function App() {
  const { pathname } = useLocation(); // Use 'useLocation' to get the current path

  // List of routes where you want to hide the footer
  const routesWithoutFooter = ["/Login"];

  // Check if the current path is in the list of routes without the footer
  const hideFooter = routesWithoutFooter.includes(pathname);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/singleProduct" element={<SingleProduct />} /> */}
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/yachts/:id" element={<Yacht />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
   
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
