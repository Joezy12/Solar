
import "../styles/homepage.css"
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../general/navbar";
import svg1 from "../../public/svg1.svg";
import go from "../../public/solar2.svg"
import traffic from "../../public/traffic.svg"
import light from "../../public/light.svg"


function Homepage() {



  return (
    <div className="homepage">
      <div className="banner">
        <Navbar />
        <div className="banner-head">
          <h4>WELCOME TO SOLAR ENERGY AND POWER</h4>
          <h1>LET SOLAR HANDLE YOUR <span> BILLS</span></h1>
          <p>Duis ultricies, tortor a accumsan fermentum, purus diam mollis velit, eu bibendum ipsum erat quis leo. Vestibulum finibus, leo dapibus feugiat rutrum, augue lacus rhoncus velit, vel scelerisque odio est.</p>
          <div className="banner-button">
            <button>Order Now</button>
            <button className="con-but">Contact Now</button>
          </div>
        </div>
      </div>


      <section className="solar-svg">

        <div className="svg">
          <div className="svg-img">
            <img src={go} alt="" />
          </div>
          <div className="svg-write">
            <h1>Long Time To Use</h1>
            <p>Last for a very long time</p>
          </div>
        </div>

        <div className="svg">
          <div className="svg-img">
            <img src={traffic} alt="" />
          </div>
          <div className="svg-write">
            <h1>Easy Installation</h1>
            <p>Our Engineers Can Install Easily</p>
          </div>
        </div>


        <div className="svg">
          <div className="svg-img">
            <img src={light} alt="" />
          </div>
          <div className="svg-write">
            <h1>Environmental Solutions</h1>
            <p>Reduced Environmental Pollution</p>
          </div>
        </div>

        <div className="svg">
          <div className="svg-img">
            <img src={go} alt="" />
          </div>
          <div className="svg-write">
            <h1>For Many Purpose</h1>
            <p>Our Products Serves Many Purpose</p>
          </div>
        </div>

      </section>


      <section className="introduce">
        <div className="intro-img">

        </div>
        <div className="intro-content">
          <h1>Introducing Our New Gospower GPEX-12KH3 hybrid inverter</h1>
          <p>Gospower GPEX-12KH3 hybrid inverter is a high-performance three-phase energy controller with excellent reliability.Built-in BMS communication makes it more smart and intelligent.</p>
          <div className="rev-stars">
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
            <i className="bi-star-fill"></i>
          </div>
          <div className="add-btn">
            <button className="add-cart">Add to cart</button>
             <button className="add-cart">View more products </button>
          </div>
        </div>

      </section>
    </div>
  )
}


export default Homepage;