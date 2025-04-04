import React from "react";
import { useNavigate } from "react-router-dom";
import "./subscription.css";

const Subscription = () => {
  const navigate = useNavigate();

  return (
    <div className="subscription-container">
      <h2 className="subscription-title">Thank You for Subscribing!</h2>
      <p className="subscription-text">
        You are now part of our exclusive newsletter. Get ready to receive
        special offers, delicious recipes, and exciting updates from our
        restaurant!
      </p>
      <p className="subscription-text">
        Check your email for a <strong>special 25% discount</strong> on your
        next visit!
      </p>
      <p className="subscription-text">
        Stay connected with us on social media for more updates and surprises!
      </p>
      <div className="socialLinks">
        <a href="#" className="social-btn">Facebook</a>
        <a href="#" className="social-btn">Instagram</a>
        <a href="#" className="social-btn">Twitter</a>
        <a href="#" className="social-btn">YouTube</a>
      </div>
      <p className="subscription-text">We appreciate your support and look forward to serving you soon!</p>
      <button className="back-home-btn" onClick={() => navigate("/")}>
        ⬅ Go Back Home
      </button>
    </div>
  );
};

export default Subscription;
