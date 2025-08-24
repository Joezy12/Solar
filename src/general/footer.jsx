import "../styles/footer.css"

function Footer() {
    return (
        <section className="footer">
            <div className="footer-top-bar">
                <div className="f-top-box">
                    <div className="f-box-left">
                        <i className="bi-geo-alt-fill"></i>
                    </div>
                    <div className="f-box-right" >
                        <p>Our Address</p>
                        <h1>F520 ALABA INTL MARKET, OJO-LAGOS</h1>
                    </div>
                </div>

                <div className="f-top-box">
                    <div className="f-box-left">
                        <i className="bi-telephone-fill"></i>
                    </div>
                    <div className="f-box-right" >
                        <p>Call Us</p>
                        <h1>+234-803-600-2609</h1>
                    </div>
                </div>


                <div className="f-top-box">
                    <div className="f-box-left">
                        <i className="bi-envelope-fill"></i>
                    </div>
                    <div className="f-box-right" >
                        <p>Our Mail</p>
                        <h1>admin@bigworldsolar.com</h1>
                    </div>
                </div>


            </div>




            <div className="footer-main">
                <div className="footer-boxes f-head">
                    <h1>SOLAR ENERGY AND POWER<br />TRANSFORMERS NG LTD.</h1>
                    <p>Solar Energy and Power A Leading <br /> Supplier Of Solar Materials For <br /> Manufacturers</p>
                </div>
                <div className="footer-boxes f-services">
                    <h1>Services</h1>
                    <p className="first">OFF GRID INVERTER</p>
                    <p>BATTERY PACK</p>
                    <p>HYBRID INVERTER</p>
                    <p>LITHIUM BATTERY</p>
                    <p>MICRO CONTROLLER</p>
                    <p>MPPT CONTROLLER</p>
                </div>
                <div className="footer-boxes f-blog">
                    <h1>Latest Post</h1>
                    <div className="f-blog-box">
                        <div className="f-blog-pic">

                        </div>
                        <div className="f-blog-write">
                            <p>Aug 02,2025</p>
                            <h1>SOLAR PRICES INCREASE ACROSS EVERY MARKET</h1>
                        </div>
                    </div>

                    <div className="f-blog-box">
                        <div className="f-blog-pic b-pic-2">

                        </div>
                        <div className="f-blog-write">
                            <p>July 03, 2025</p>
                            <h1>PATH TO 100 COALITION SECURES 50% RENEWABLE</h1>
                        </div>
                    </div>
                </div>


                <div className="footer-boxes f-last-box">
                   <h1>Subscribe</h1>
                   <input type="text" placeholder="Email Address"/>
                   <button>Subscribe</button>
                   <p>Get the latest updates via email. Any time you may unsubscribe</p>
                </div>


            </div>
        </section>
    )
}


export default Footer;