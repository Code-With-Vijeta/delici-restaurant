import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [error, setError] = useState(""); 

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError("Please enter your email address.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      navigate("/subscription"); 
    }
  };

  return (
    <div className="footer">
      <img className="footerImg" src="./images/footer.jpg" alt="footer" />
      <div className="footer-intro">
        <div className="footer-left">
          <div className="social-links">
            <h3 className="footer-subtitle">Quick Links</h3>
            <a href="#">HOME</a>
            <a href="#">MENUS</a>
            <a href="#">ABOUT US</a>
            <a href="#">OUR CHEFS</a>
            <a href="#">CONTACT</a>
          </div>
        </div>

        <div className="footer-center">
          <img className="logo" src="./images/logo.png" alt="logo" />
          <p style={{ marginTop: "50px" }}>Restaurant St, Delicious City, London 9578, UK</p>
          <p>Email: booking@domainname.com</p>
          <p>Booking Request: +88-123-123456</p>
          <p>Open: 09:00 am - 10:00 pm</p>
          <h3 className="footer-subtitle">Get News & Offers</h3>
          <p>Subscribe to us & Get <span className="bold-text">25% Off</span>.</p>
          <div className="subscribe-container">
            <input
              type="email"
              placeholder="Your email"
              className="subscribe-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="subscribe-button" onClick={handleSubscribe}>
              SUBSCRIBE
            </button>
          </div>
          {error && <p className="error-message">{error}</p>} 
        </div>

        <div className="footer-right">
          <p className="footer-subtitle">Follow Us</p>
          <div className="social-links">
            <a href="#">FACEBOOK</a>
            <a href="#">INSTAGRAM</a>
            <a href="#">TWITTER</a>
            <a href="#">YOUTUBE</a>
            <a href="#">GOOGLE MAP</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;