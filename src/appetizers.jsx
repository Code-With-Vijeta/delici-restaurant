import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const AppetizersMenu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", 
    });
  }, []);

  const appetizersItems = [
    {
      name: "Mozzarella Sticks",
      description: "Crispy breaded mozzarella sticks served with marinara sauce.",
      price: "$5.99",
      image: "./images/mozzarella_sticks.png",
    },
    {
      name: "Stuffed Mushrooms",
      description: "Mushrooms stuffed with cheese and herbs, baked to perfection.",
      price: "$6.99",
      image: "./images/stuffed_mushrooms.png",
    },
    {
      name: "Bruschetta",
      description: "Toasted baguette topped with tomatoes, basil, and balsamic glaze.",
      price: "$7.50",
      image: "./images/bruschetta.png",
    },
    {
      name: "Chicken Wings",
      description: "Spicy or BBQ chicken wings served with ranch dip.",
      price: "$8.99",
      image: "./images/chicken_wings.png",
    },
    {
      name: "Onion Rings",
      description: "Golden-fried onion rings with a side of special sauce.",
      price: "$5.50",
      image: "./images/onion_rings.png",
    },
    {
      name: "Spring Rolls",
      description: "Crispy spring rolls filled with fresh vegetables and served with sweet chili sauce.",
      price: "$6.50",
      image: "./images/spring_rolls.png",
    },
  ];

  return (
    <div className="appetizers-menu-container">
      <h2 className="menu-title">Tasty Appetizers Menu</h2>
      <p className="menu-subtitle">
        Start your meal with our delicious selection of appetizers.
      </p>
      <div className="appetizers-list">
        {appetizersItems.map((item, index) => (
          <div key={index} className="appetizers-card">
            <img src={item.image} alt={item.name} className="appetizers-image" />
            <h3 className="appetizers-name">{item.name}</h3>
            <p className="appetizers-description">{item.description}</p>
            <p className="appetizers-price">{item.price}</p>
          </div>
        ))}
      </div>
      <button className="back-home-btn" onClick={() => navigate("/")}>
        ⬅ Go Back Home
      </button>
    </div>
  );
};

export default AppetizersMenu;
