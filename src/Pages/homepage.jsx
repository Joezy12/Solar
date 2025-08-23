
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
          <h1>Powering the Future With<span> Renewable </span></h1>
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


      <section className="work-process">
        <div className="pro-line">
          <h1>PROCCESS</h1>
        </div>
        <div className="pro-head">
          <h1>OUR WORK PROCESS</h1>
          <p>Contact us today to learn more about the partners we work with, or for more information
            regarding our process and services. We appreciate your consideration.</p>
        </div>
        <div className="pro-arrows">
          <h1>01<br /><span>Prepare Project</span></h1>
          <img src="https://bigworldsolar.com/wp-content/uploads/2021/08/bg-process.png" alt="" />
          <h1>02 <br /><span>Accompanying Docs</span></h1>
          <img src="https://bigworldsolar.com/wp-content/uploads/2021/08/bg-process.png" alt="" />
          <h1>03  <br /><span>Location exploration</span></h1>
          <img src="https://bigworldsolar.com/wp-content/uploads/2021/08/bg-process.png" alt="" />
          <h1>04  <br /><span>Equipment Installation</span></h1>
        </div>
        <div className="pro-write">
          <h1>Prepare Project</h1>
          <h1>Accompanying Docs</h1>
          <h1>Location <br />exploration</h1>
          <h1>Equipment <br />Installation</h1>
        </div>
      </section>

      <section className="watch">
        <div className="watch-head"><h1>Best Solar Distributors</h1></div>
        <div className="watch-vid">
          <div className="watch-box">
            <div className="vid-circle circ"></div>
            <div className="vid-circle circ2"></div>
            <div className="vid-circle">
              <i className="bi-play"></i>
            </div>
          </div>
        </div>

        <div className="best">
          <div className="best-left">
           <h3>SOLAR ENERGY AND POWER</h3>
           <h1>Best Solution For Your Solar Energy</h1>
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div className="best-right">
            <div className="best-load">
              <p>Solar Panels <span>95%</span></p>
              <div className="best-load-bar"><div className="best-load-in"></div></div>
            </div>
             <div className="best-load">
              <p>Hybrid Energy <span>80%</span></p>
              <div className="best-load-bar"><div className="best-load-in load2"></div></div>
            </div>
             <div className="best-load">
              <p>Marketing <span>70%</span></p>
              <div className="best-load-bar"><div className="best-load-in load3"></div></div>
            </div>
          </div>
        </div>


      </section>
    </div>
  )
}


export default Homepage;