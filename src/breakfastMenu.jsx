import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const BreakfastMenu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", 
    });
  }, []);

  const breakfastItems = [
    {
      name: "Pancakes",
      description: "Fluffy pancakes served with maple syrup and butter.",
      price: "$6.99",
      image: "./images/pancakes.png",
    },
    {
      name: "Omelette",
      description: "A delicious omelette with cheese, tomatoes, and bell peppers.",
      price: "$7.99",
      image: "./images/omelette.png",
    },
    {
      name: "Avocado Toast",
      description: "Toasted bread topped with mashed avocado and seasoning.",
      price: "$8.50",
      image: "./images/avocado_toast.png",
    },
    {
      name: "French Toast",
      description: "Golden-brown French toast served with powdered sugar and syrup.",
      price: "$7.50",
      image: "./images/french_toast.png",
    },
    {
      name: "Breakfast Burrito",
      description: "A hearty burrito filled with eggs, sausage, and cheese.",
      price: "$9.99",
      image: "./images/breakfast_burrito.png",
    },
    {
      name: "Fruit Parfait",
      description: "Layers of yogurt, granola, and fresh fruits.",
      price: "$6.50",
      image: "./images/fruit_parfait.png",
    },
  ];

  return (
    <div className="breakfast-menu-container">
      <h2 className="menu-title">Delicious Breakfast Menu</h2>
      <p className="menu-subtitle">
        Start your day with our nutritious and tasty breakfast options.
      </p>
      <div className="breakfast-list">
        {breakfastItems.map((item, index) => (
          <div key={index} className="breakfast-card">
            <img src={item.image} alt={item.name} className="breakfast-image" />
            <h3 className="breakfast-name">{item.name}</h3>
            <p className="breakfast-description">{item.description}</p>
            <p className="breakfast-price">{item.price}</p>
          </div>
        ))}
      </div>
      <button className="back-home-btn" onClick={() => navigate("/")}>
        ⬅ Go Back Home
      </button>
    </div>
  );
};

export default BreakfastMenu;
