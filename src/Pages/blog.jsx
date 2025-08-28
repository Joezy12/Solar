
import "../styles/blog.css";
import Navbar from "../general/navbar";

function Blog(prop) {
    return (
        <>
            <div className="blog">
                <div className="blog-banner">
                    <Navbar openNav={prop.openNav} />
                    <div className="products-banner-write">
                        <h1>READ LATEST NEWS</h1>
                        <p>Read about our orginazation and what we offer to keep your electricity runnig, <br /> we are here to serve your our premiumn feautures</p>
                        <h4>Home / Blog</h4>
                    </div>
                </div>


                <div className="blog-main-container">
                    <div className="blog-m-left">
                        <div className="blog-box">
                            <div className="blog-box-img"></div>
                            <div className="by-blog">
                                <p>by Bigwrldmin</p>
                                <p>February 3, 2025</p>
                            </div>
                            <h1>LEADING BY EXAMPLE: POWERING SCHOOLS AND PUBLIC</h1>
                            <p className="blog-para">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                            </p>
                            <button>READ MORE</button>
                        </div>


                        <div className="blog-box">
                            <div className="blog-box-img b-b-i-2"></div>
                            <div className="by-blog">
                                <p>by Bigwrldmin</p>
                                <p>February 3, 2025</p>
                            </div>
                            <h1>HOUSE LETTER CALLS ON LEADERSHIP TO INCLUDE ENERGY</h1>
                            <p className="blog-para">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                            </p>
                            <button>READ MORE</button>
                        </div>


                        <div className="blog-box">
                            <div className="blog-box-img b-b-i-3"></div>
                            <div className="by-blog">
                                <p>by Bigwrldmin</p>
                                <p>February 3, 2025</p>
                            </div>
                            <h1>HOUSE LETTER CALLS ON LEADERSHIP TO INCLUDE ENERGY</h1>
                            <p className="blog-para">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                            </p>
                            <button>READ MORE</button>
                        </div>
                    </div>

                    <div className="blog-m-right">
                        <div><h1>Recent News</h1></div>

                        <div className="recent-blog-box">
                            <div className="recent-pic"></div>
                            <div className="recent-write">
                                <h4>SOLAR PRICES INCREASE <br />ACROSS EVERY MARKET</h4>
                                <p> <i className="bi-calendar"></i> August 03, 2021</p>
                            </div>
                        </div>

                         <div className="recent-blog-box">
                            <div className="recent-pic"></div>
                            <div className="recent-write">
                                <h4>SOLAR PRICES INCREASE <br />ACROSS EVERY MARKET</h4>
                                <p> <i className="bi-calendar"></i> August 03, 2021</p>
                            </div>
                        </div>

                         <div className="recent-blog-box">
                            <div className="recent-pic"></div>
                            <div className="recent-write">
                                <h4>SOLAR PRICES INCREASE <br />ACROSS EVERY MARKET</h4>
                                <p> <i className="bi-calendar"></i> August 03, 2021</p>
                            </div>
                        </div>

                         <div className="recent-blog-box">
                            <div className="recent-pic"></div>
                            <div className="recent-write">
                                <h4>SOLAR PRICES INCREASE <br />ACROSS EVERY MARKET</h4>
                                <p> <i className="bi-calendar"></i> August 03, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;