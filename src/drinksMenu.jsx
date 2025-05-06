import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const DrinksMenu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const drinks = [
    {
      name: "Mojito",
      description: "Refreshing mint and lime cocktail with a hint of sweetness.",
      price: "$7.99",
      image: "./images/mojito.png",
    },
    {
      name: "Pina Colada",
      description: "A tropical blend of coconut, pineapple, and rum.",
      price: "$8.99",
      image: "./images/pinaColada.png",
    },
    {
      name: "Strawberry Daiquiri",
      description: "A sweet and tangy frozen strawberry delight.",
      price: "$9.50",
      image: "./images/strawberry.png",
    },
    {
      name: "Espresso Martini",
      description: "A smooth blend of coffee, vodka, and coffee liqueur.",
      price: "$10.99",
      image: "./images/espresso_martini.png",
    },
    {
      name: "Lemon Iced Tea",
      description: "Classic iced tea with a zesty lemon twist.",
      price: "$5.99",
      image: "./images/lemon_iced_tea.png",
    },
    {
      name: "Americano Coffee",
      description: "Diluting an espresso shot with hot water.",
      price: "$9.99",
      image: "./images/americano.png",
    },
  ];

  return (
    <div className="drinks-menu-container">
      <h2 className="menu-title">Refreshing Drinks Menu</h2>
      <p className="menu-subtitle">
        Enjoy our selection of handcrafted beverages to complement your meal.
      </p>
      <div className="drinks-list">
        {drinks.map((drink, index) => (
          <div key={index} className="drink-card">
            <img src={drink.image} alt={drink.name} className="drink-image" />
            <h3 className="drink-name">{drink.name}</h3>
            <p className="drink-description">{drink.description}</p>
            <p className="drink-price">{drink.price}</p>
          </div>
        ))}
      </div>
      <button className="back-home-btn" onClick={() => navigate("/")}>
        ⬅ Go Back Home
      </button>
    </div>
  );
};

export default DrinksMenu;
