import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ReadMore.css";

const RestaurantDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", 
    });
  }, []);

  return (
    <div className="restaurant-details">
      <h2 className="details-title">About Our Restaurant</h2>
      <p className="details-text">
        Welcome to <strong>Delicious Bites</strong>, a fine dining experience that blends tradition with innovation. We take pride in serving gourmet dishes crafted from fresh, locally sourced ingredients.
      </p>
      <p className="details-text">
        Our chefs bring passion and creativity to every plate, ensuring a memorable experience for every guest. Whether you're here for a romantic dinner, a family gathering, or a special occasion, we are dedicated to making your visit unforgettable.
      </p>
      <p className="details-text">
        Our restaurant features a warm and inviting atmosphere, perfect for any occasion. Enjoy stunning interiors, exceptional service, and a menu designed to satisfy even the most sophisticated palates.
      </p>

      <h3 className="details-subtitle">Our Specialties</h3>
      <ul className="specialties-list">
        <li>Signature Gourmet Burgers</li>
        <li>Authentic Italian Pasta</li>
        <li>Premium Aged Steaks</li>
        <li>Fresh Seafood Platters</li>
        <li>Handcrafted Desserts</li>
      </ul>

      <h3 className="details-subtitle">Visit Us</h3>
      <p className="details-text">
        📍 Location: <strong>Restaurant St, Delicious City, London 9578, UK</strong>
      </p>
      <p className="details-text">
        📞 Call us: <strong>+1 123 456 7890</strong>
      </p>
      <p className="details-text">
        ✉ Email: <strong>booking@restaurant.com</strong>
      </p>
      <p className="details-text">
        🕒 Open Daily: <strong>8:00 AM - 10:00 PM</strong>
      </p>

      <button className="back-home-btn" onClick={() => navigate("/")}>
        ⬅ Go Back Home
      </button>
    </div>
  );
};

export default RestaurantDetails;
