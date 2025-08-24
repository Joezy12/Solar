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
            </section>
        </>
    )
}

export default Aboutus;