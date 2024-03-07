import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { RiSignalTowerFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; 


function WMT_UI() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const navigate = useNavigate(); ;
  
  const handleFindTrains = async () => {
    try {
        const response = await fetch('http://localhost:3000/check', {
            method: 'POST',
            body: JSON.stringify({ fromStation, toStation }),
            headers: {
              'Content-Type': 'application/json',
          },
        });

        const result = await response.json();

        if (result.isValid) {
            navigate("/train-time");
        } else {
            alert("Please enter valid station");
        }
    } catch (error) {
        console.error('Error sending data to the server');
        alert('An error occurred. Please try again.');
    }
};


  return (
    <div className="container">
      <nav className="nav">
        <div className="nav-div">
          <span>
            <VscThreeBars className="icon" />
          </span>
          <h1>Where is my Train</h1>
        </div>
      </nav>
      <main className="main">
        <div className="top-main">
          <div className="wrapper">
            <div className="main-one">
              <h5 className="blue-back">HWH</h5>
              <input
                type="text"
                name="fromStation"
                id="fromStation"
                placeholder="From Station"
                value={fromStation}
                onChange={(e) => setFromStation(e.target.value)}
              />
              <RxCross2 className="cross-icon" />
            </div>
            <div className="border"></div>
            <span className="swipe-arrow">
              <FaArrowDownUpAcrossLine />
            </span>
            <div className="main-one">
              <h5 className="blue-back">DEH</h5>
              <input
                type="text"
                name="toStation"
                id="toStation"
                placeholder="To Station"
                value={toStation}
                onChange={(e) => setToStation(e.target.value)}
              />
              <RxCross2 className="cross-icon" />
            </div>
          </div>
          <div className="button-div">
            <button className="button" onClick={handleFindTrains}>
              Find trains
            </button>
          </div>
        </div>
        <div className="train-search">
          <h3 className="blue-back">111111</h3>
          <h1>Rajdhani Express</h1>
          <RxCross2 className="cross-icon1" />
          <span>
            <IoSearch className="search-icon" />
          </span>
        </div>
        <div className="train-search">
          <RiSignalTowerFill className="logo" />
          <h1>Station departure board</h1>
          <span>
            <IoSearch className="search-icon" />
          </span>
        </div>
        <div className="search-history">
          <h1 className="search">SEARCH HISTORY</h1>
          <div className="sh">
            <div>
              <h3>313127</h3>
              <h1>Punjab Mail</h1>
            </div>
            <h2>
              HWH - PNB
              <MdKeyboardArrowRight className="right-arrow" />
            </h2>
          </div>
          <div className="sh">
            <div>
              <h3>313127</h3>
              <h1>Punjab Mail</h1>
            </div>
            <h2>
              HWH - PNB
              <MdKeyboardArrowRight className="right-arrow" />
            </h2>
          </div>
          <div className="sh">
            <div>
              <h3>313127</h3>
              <h1>Punjab Mail</h1>
            </div>
            <h2>
              HWH - PNB
              <MdKeyboardArrowRight className="right-arrow" />
            </h2>
          </div>
          <div className="sh">
            <div>
              <h3>313127</h3>
              <h1>Punjab Mail</h1>
            </div>
            <h2>
              HWH - PNB
              <MdKeyboardArrowRight className="right-arrow" />
            </h2>
          </div>
          <div className="sh">
            <div>
              <h3>313127</h3>
              <h1>Punjab Mail</h1>
            </div>
            <h2>
              HWH - PNB
              <MdKeyboardArrowRight className="right-arrow" />
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WMT_UI;
