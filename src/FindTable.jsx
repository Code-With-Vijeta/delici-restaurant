import React from "react";
import { useNavigate } from "react-router-dom";
import "./FindTable.css"; 

const FindTable = () => {
  const navigate = useNavigate();


  return (
    <div className="find-table-container">
      <h2 className="find-table-title">Reserve Your Table</h2>
      
      <p className="find-table-text">
        Call us at <strong>+1 123 456 7890</strong> to book a table.
      </p>
      <p className="find-table-text">
        Or email us at <strong>booking@restaurant.com</strong>.
      </p>
      <p className="find-table-text">
        We are open daily from <strong>8:00 AM to 10:00 PM</strong>.
      </p>

      <h3 className="available-tables-title">Available Tables</h3>
      <ul className="available-tables-list">
        <li>🍽 Table for 2 - Near Window</li>
        <li>🌿 Table for 4 - Outdoor Seating</li>
        <li>🎩 Table for 6 - VIP Lounge</li>
        <li>🏡 Private Dining Room - Up to 10 Guests</li>
      </ul>

      <button className="back-home-btn" onClick={() => navigate("/")}>
        ⬅ Go Back Home
      </button>
    </div>
  );
};

export default FindTable;
