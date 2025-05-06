import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", 
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.date || !formData.time || !formData.guests) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="booking-container">
      {!isSubmitted ? (
        <>
          <h2>Book a Table</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>

            <div className="input-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                value={formData.date}
                required
              />
            </div>

            <div className="input-group">
              <label>Time</label>
              <input
                type="time"
                name="time"
                onChange={handleChange}
                value={formData.time}
                required
              />
            </div>

            <div className="input-group">
              <label>Number of Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                onChange={handleChange}
                value={formData.guests}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Book Now</button>
          </form>
        </>
      ) : (
        <div className="success-message">
          <h2>🎉 Table Booked Successfully!</h2>
          <p>
            Thank you, {formData.name}! Your table is reserved for{" "}
            {formData.guests} guests on {formData.date} at {formData.time}.
          </p>
        </div>
      )}

      <div className="top-bar">
        <button className="home-btn" onClick={() => navigate("/")}>
          ⬅️ Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
