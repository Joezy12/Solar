import "../styles/aboutus.css"
import Navbar from "../general/navbar";


function Aboutus(prop) {
    return (
        <>
            <section className="about-us">
                <div className="about-banner">
                    <Navbar openNav={prop.openNav} />
                    <div className="about-banner-write">
                        <h1>ABOUT US</h1>
                        <p>Read about our orginazation and what we offer to keep your electricity runnig, <br /> we are here to serve your our premiumn feautures</p>
                        <h4>Home / About Us</h4>
                    </div>
                </div>


                <div className="about-main">
                    <div className="about-m-left">
                        <div className="a-b-dot"><div className="a-b-dot2"></div></div>
                        <div className="a-b-line"></div>
                        <div className="a-b-pic"></div>
                    </div>
                    <div className="about-m-right">
                        <h1>ABOUT US</h1>
                        <h2>SOLAR ENERGY <br /> AND POWER LTD</h2>
                        <p>The best energy solution depends on several factors, including your specific needs, location, budget, and environmental considerations. Purchasing your own solar panel array and having a grid-tiered solar power system installed is an extremely cost effective and responsible energy consumption choice</p>

                        <div className="done-container">
                            <div className="done-box">
                                <div><i className="bi-check"></i></div>
                                <p>Ground Mounting System</p>
                            </div>
                            <div className="done-box">
                                <div><i className="bi-check"></i></div>
                                <p>Solar Carport</p>
                            </div>
                            <div className="done-box">
                                <div><i className="bi-check"></i></div>
                                <p>Flat Roof Mounting System</p>
                            </div>
                            <div className="done-box">
                                <div><i className="bi-check"></i></div>
                                <p>Components</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="choose-us">
                    <div className="choose-head">
                        <p>Solar energy and power ltd</p>
                        <h1>Why You Should Choose Us</h1>
                    </div>
                    <div className="choose-main">
                        <div className="choose-box">
                            <h1>Efficiency & Power</h1>
                            <p>Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.</p>
                        </div>
                        <div className="choose-box">
                            <h1>Trust & Warranty</h1>
                            <p>Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.</p>
                        </div>
                        <div className="choose-box">
                            <h1>High Quality Work</h1>
                            <p>Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.</p>
                        </div>
                        <div className="choose-box">
                            <h1>24 * 7 Support</h1>
                            <p>Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.</p>
                        </div>
                    </div>
                </div>


                <div className="green-container">
                    <div className="green-box">
                        <div className="green-pic"></div>
                        <div>
                            <h1>1,000+</h1>
                            <p>Project Done</p>
                        </div>
                    </div>
                    <div className="green-box">
                        <div className="green-pic"></div>
                        <div>
                            <h1>1,200+</h1>
                            <p>Happy Client</p>
                        </div>
                    </div>
                    <div className="green-box">
                        <div className="green-pic"></div>
                        <div>
                            <h1>850+</h1>
                            <p>Award Winning</p>
                        </div>
                    </div>
                    <div className="green-box">
                        <div className="green-pic"></div>
                        <div>
                            <h1>1,100+</h1>
                            <p>Rating Customer</p>
                        </div>
                    </div>
                </div>

                <marquee><h1 className="marq">HEAL THE WORLD WITH OUR NON-POLLUTANT POWER SUPPLY / EFFICIENCY AND POWER / 24 * 7 POWER SUPPLY</h1></marquee>


                <div className="about-review">
                    <div className="about-r-head">
                        <p>Testimonials</p>
                        <h1>Words From Our Customers</h1>
                    </div>
                    <div className="a-b-r-container">
                        <div className="a-b-r-box">
                            <div>
                                <div className="a-b-r-pic"></div>
                                <h1>Victor Jonathan</h1>
                                <p>(Customer)</p>
                                <div className="a-b-r-stars">
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                </div>
                                <p>
                                    Solar energy and power has been the best thing that has ever happened to me cause since I started using their product, I have never had any issues with electricity
                                </p>
                            </div>
                        </div>


                         <div className="a-b-r-box">
                            <div>
                                <div className="a-b-r-pic"></div>
                                <h1>Victor Jonathan</h1>
                                <p>(Customer)</p>
                                <div className="a-b-r-stars">
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                </div>
                                <p>
                                    Solar energy and power has been the best thing that has ever happened to me cause since I started using their product, I have never had any issues with electricity
                                </p>
                            </div>
                        </div>

                         <div className="a-b-r-box">
                            <div>
                                <div className="a-b-r-pic"></div>
                                <h1>Victor Jonathan</h1>
                                <p>(Customer)</p>
                                <div className="a-b-r-stars">
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                </div>
                                <p>
                                    Solar energy and power has been the best thing that has ever happened to me cause since I started using their product, I have never had any issues with electricity
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutus;