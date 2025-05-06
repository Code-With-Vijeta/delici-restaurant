import React from 'react';
import { useNavigate } from "react-router-dom";
import './offer.css'; 

function Offer() {
    const navigate = useNavigate();

    return (
        <div className='offerDiv'>
          <div className='centerDiv'>
          <p className='greetings'>F L A V O U R S&nbsp; &nbsp;F O R&nbsp;&nbsp; R O Y A L I T Y</p>
            <img className='greetingImg' src="./images/greeting.svg" alt="greeting" />
            <h1 className='heading'>We Offer Top Notch</h1>
            <p className='lorem'>“Always give people more than what they expect to get.” “Treat the customer like you would want to be treated. Period!”</p>
          </div>

          <div className='topNotch'>
            <div>
              <img className='topNotch1' src="./images/topNotch1.jpg" alt="topNotch1" />
              <h1>Breakfast</h1>
              <p className='viewMenu' onClick={() => navigate("/breakfast-menu")}>View Menu</p>
            </div>
            <div>
            <img className='topNotch2' src="./images/topNotch2.jpg" alt="topNotch2" />
            <h1>Appetizers</h1>
            <p className='viewMenu' onClick={() => navigate("/appetizers-menu")}>View Menu</p>
            </div>
            <div>
            <div></div>
            <img className='topNotch3' src="./images/topNotch3.jpg" alt="topNotch3" />
            <h1>Drinks</h1>
            <p className='viewMenu' onClick={() => navigate("/drink-menu")}>View Menu</p>
            </div>
          </div>

          <img className='rightBot' src="./images/right-bot.png" alt="right-bot" />
          <img className="leftBot" src="./images/left-bot.png" alt="left-bot" />
        </div>
    );
}

export default Offer;
