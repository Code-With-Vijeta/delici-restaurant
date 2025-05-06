import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Routes,Route, useNavigate,} from "react-router-dom";
import Offer from "./offer";
import Book from "./book";
import Footer from "./footer";
import BookingForm from "./BookingForm";
import FindTable from "./FindTable";
import ReadMore from "./ReadMore";
import Subscription from "./subscription";
import DrinksMenu from "./drinksMenu";
import BreakfastMenu from "./breakfastMenu";
import AppetizersMenu from "./appetizers";

const MainComponent = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();
  const slideData = [
    {
      image: "./images/cafe.jpg",
      heading: "Welcome to Our Restaurant!",
      subheading: "Flavors Inspired by the Seasons",
      buttonText: "BOOK A TABLE",
    },
    {
      image: "./images/mainImg.avif",
      heading: "For The Love Of Delicious Food",
      subheading: "Come with family & joy of mouthwatering food",
      buttonText: "BOOK A TABLE",
    },
    {
      image: "./images/slide3.jpg",
      heading: "Every Flavor Tells A Story",
      subheading: "Indulge in the finest cuisine",
      buttonText: "BOOK A TABLE",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideData.length]);

  return (
    <div className="Maindiv">
      {/* MAIN IMAGE */}
      <img
        className="mainImg"
        src={slideData[slideIndex].image}
        alt="mainImg"
      />

      {/* NAVBAR */}
      <div className="Navbar">
        <div className="nav1">
          <p>
            <img
              className="locationImg"
              src="./images/location.png"
              alt="location"
            />
            &nbsp; Restaurant St, Delicious City, London 9578, UK
          </p>
          <img
            className="diamondImg"
            src="./images/diamond.png"
            alt="diamond"
          />
          <p>
            <img className="clockImg" src="./images/clock.png" alt="clock" />
            &nbsp; Daily : 8.00 am to 10.00 pm
          </p>
        </div>
        <div className="nav2">
          <p>
            <img
              className="contactImg"
              src="./images/circle.png"
              alt="circle"
            />
            &nbsp; +1 123 456 7890
          </p>
          <img
            className="diamondImg"
            src="./images/diamond.png"
            alt="diamond"
          />
          <p>
            <img className="emailImg" src="./images/email.png" alt="email" />
            &nbsp; booking@restaurant.com
          </p>
        </div>
      </div>

      {/* MAIN DIV */}
      <div className="viewportDiv">
        <div className="loading">
          <div className="loader"></div>
          <img className="logo" src="./images/logo.png" alt="logo" />
          <button
            className="btnTable btn-table findBtn"
            onClick={() => navigate("/find-table")}
          >
            FIND A TABLE
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="mainContent">
          <div className="centeredDiv">
            <p className="experience"> DELIGHTFUL EXPERIENCE </p>
            <img
              className="greetingImg"
              src="./images/greeting.svg"
              alt="greeting"
            />
            <h1 className="flavors">{slideData[slideIndex].heading}</h1>
            <h3 className="family">{slideData[slideIndex].subheading}</h3>
            <button
              className="btnTable btn-table menuBtn"
              onClick={() => navigate("/book-table")}
            >
              {slideData[slideIndex].buttonText}
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel-container">
          <div
            className="carousel-slide"
            style={{ backgroundImage: `url(${slideData[slideIndex].image})` }}
          >
            <p className="carousel-caption">Slide {slideIndex + 1}</p>
          </div>
        </div>
      </div>

      {/* Offer Section */}
      <Offer />

      {/* Book Section */}
      <Book />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/book-table" element={<BookingForm />} />
        <Route path="/find-table" element={<FindTable />} />
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/drink-menu" element={<DrinksMenu />} />
        <Route path="/breakfast-menu" element={<BreakfastMenu />} />
        <Route path="/appetizers-menu" element={<AppetizersMenu />} />
      </Routes>
    </Router>
  );
};

export default App;