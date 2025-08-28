import Navbar from "../general/navbar";
import "../styles/contactus.css"

function ContactUS(prop) {
    return (
        <>
            <div className="contactus-banner">
                <Navbar openNav={prop.openNav} />
                <div className="products-banner-write">
                    <h1>CONTACT US NOW</h1>
                    <p>Read about our orginazation and what we offer to keep your electricity runnig, <br /> we are here to serve your our premiumn feautures</p>
                    <h4>Home / Contact Us</h4>
                </div>
            </div>


            <div className="contact-d-container">
                <div className="contact-d-head">
                    <p>CONTACT DETAILS</p>
                    <h1>WE ARE HAPPY TO ASSIST AND RECIEVE <br /> YOUR ORDERS</h1>
                </div>

                <div className="contact-main">
                    <div className="contact-box ">
                        <div className="contact-m-top">
                            <div className="contact-svg">
                                <i className="bi-geo-alt"></i>
                            </div>
                        </div>
                        <div className="contact-m-bottom">
                            <h2>Our Addresses:</h2>
                            <p>123, Lorem Ipsum, Street no, City, Country 123456</p>
                        </div>
                    </div>
                    <div className="contact-box c-box2">
                        <div className="contact-m-top">
                            <div className="contact-svg">
                                <i className="bi-envelope"></i>
                            </div>
                        </div>
                        <div className="contact-m-bottom">
                            <h2>Emails:</h2>
                            <p>info@domainname.com</p>
                            <p>sales@domainname.com</p>
                        </div>
                    </div>
                    <div className="contact-box c-box3">
                        <div className="contact-m-top">
                            <div className="contact-svg">
                                <i className="bi-telephone-outbound"></i>
                            </div>
                        </div>
                        <div className="contact-m-bottom">
                            <h2>Phones:</h2>
                            <p>(+0) 123 456 789</p>
                            <p>(+1) 456 123 789</p>
                        </div>
                    </div>
                    <div className="contact-box c-box4">
                        <div className="contact-m-top">
                            <div className="contact-svg">
                                <i className="bi-share"></i>
                            </div>
                        </div>
                        <div className="contact-m-bottom">
                            <h2>Follow Us:</h2>
                            <div className="c-follow-box">
                                <div className="c-follow-icon"><i className="bi-facebook"></i></div>
                                <div className="c-follow-icon"><i className="bi-twitter"></i></div>
                                <div className="c-follow-icon"><i className="bi-instagram"></i></div>
                                <div className="c-follow-icon"><i className="bi-linkedin"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="in-touch-container">
                <div className="in-touch-box">
                    <div className="in-touch-head">
                        <p>contact now</p>
                        <h1>Get In Touch With Us</h1>
                    </div>
                    <div className="in-touch-line">
                        <input placeholder="Name" />
                        <input placeholder="Email" />
                    </div>
                    <div className="in-touch-line">
                        <input placeholder="Phone" />
                        <input placeholder="Subject" />
                    </div>
                    <div className="big-input">
                      <textarea name="" id="" placeholder="Write a Message"/>
                    </div>
                    <div className="in-touch-submit">
                        <button>Submit Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUS;