import React from "react";
import "./book.css";
import CircularText from "./circularText.jsx";
import { useNavigate } from "react-router-dom";


function Book() {
  const navigate = useNavigate();
  return (
    <div className="bookWrapper">
      {/* Main Content */}
      <div className="bookSection">
        <div className="bookContent">
          <img
            className="bookVegImg"
            src="./images/bookVegImg.png"
            alt="vegImg"
          />
          <p className="greetings">O U R&nbsp;&nbsp;S T O R Y</p>
          <img
            className="greetingImg"
            src="./images/greeting.svg"
            alt="greeting"
          />
          <h1 style={{ fontSize: "xxx-large", fontWeight: "100" }}>
            Every Flavor Tells a Story
          </h1>
          <p>
          You'll need to be more specific with your language. Focus on what makes you different: Highlight what makes your product, service, or company stand out from the competition. It could even be a particularly unique sales promotion that makes you a worthwhile choice for customers.
          </p>
          <p style={{ marginTop: "40px" }}>Book Through Call</p>
          <h2
            style={{
              fontWeight: "100",
              color: "#e7bf7a",
              marginTop: "-5px",
              fontSize: "x-large",
            }}
          >
            +80 (400) 123 4567
          </h2>
          <button className="btnTable btn-table readBtn" onClick={() => navigate("/read-more")}>
            R E A D&nbsp; &nbsp; M O R E
          </button>
        </div>
        <div className="bookImg">
          <CircularText
            text="QUALITY FOOD . FRESH ENVIRONMENT . "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
          <img className="bookImg1" src="./images/bookPic1.jpg" alt="book" />
          <img className="bookImg2" src="./images/bookPic2.jpg" alt="book2" />
        </div>
      </div>
    </div>
  );
}

export default Book;
