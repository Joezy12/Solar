import "../styles/navbar.css"
import logo from "../../public/logo.png"
import { NavLink } from "react-router-dom";


function Navbar(props) {
    return (
        <>
            <nav className="navbar">
                <div className="nav-top">
                    <div className="n-top-left">
                        <p><i className="bi-envelope"></i>solar@gmail.com</p>
                        <p><i className="bi-telephone"></i>+234 7049311985</p>
                    </div>
                    <div className="n-top-right">
                        <p><i className="bi-facebook"></i></p>
                        <p><i className="bi-twitter"></i></p>
                        <p><i className="bi-linkedin"></i></p>
                        <p><i className="bi-instagram"></i></p>
                    </div>
                </div>
                <div className="nav-main">
                 <img src={logo}/>
                 <div className="n-main-right">
                   <NavLink className="link" to=".."><p>Home</p></NavLink> 
                     <NavLink className="link" to="../aboutus"><p>About Us</p></NavLink> 
                   <NavLink className="link" to="../products"> <p>Products <i className="bi-chevron-down"></i></p></NavLink>
                    
                    <NavLink className="link" to="../contactus"><p>Contact Us</p></NavLink>
                   <NavLink className="link" to="../blog"><p>Blog</p></NavLink> 
                    <button>contact us</button>
                    <button className="lister" onClick={props.openNav}><i className="bi-list"></i></button>
                 </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;