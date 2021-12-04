import React,{useState,useEffect} from "react";
import Button from '../Button/Button'
import "./sectionhome.css";
function Sectionhome() {
    
    

    const calculateTimeLeft=()=>{
        
        let year = new Date().getFullYear();
        const difference =+new Date('12/25/2021') - +new Date();
        let timeLeft={};
        if (difference > 0) {
            timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            };
          }
          return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer=setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
          
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
      });
  return (
    <div className="section-home">
      <div className="home-conatiner">
        <div className="main-banner-content">
          <p className="main-banner-p">
            Are you<span className="main-banner-p__span"> ready </span>to
            praticipate?
          </p>
          <h1 className="main-heading">
            Aavesh IIIT UNA <span className="main-heading-span">Biggest</span>
            <br />
            Technical Fest <b>2</b>
            <b>0</b>
            <b>2</b>
            <b>1</b>
          </h1>
          <ul className="main-detail">
            <li className="main-deatil__item">
              <i class="fas fa-globe-asia"></i>Online Mode
            </li>
            <li className="main-deatil__item">
              <i className="fas fa-calendar-alt"></i>25-31 Dec, 2021
            </li>
          </ul>
          <div className="main-button">
            <Button text="Paraticipate"/>
          </div>
          
        </div>
      </div>
      <div class="event-countdown countdown1">
            <div className="timer">
              <div className="days">
               - {timeLeft.days}<span>Days </span>
              </div>
              <div className="hours">
                {timeLeft.hours}<span>Hours </span>
              </div>
              <div className="minutes">
                {timeLeft.minutes}<span>Minutes </span>
              </div>
              <div className="seconds">
                {timeLeft.seconds}<span>Seconds</span>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Sectionhome;