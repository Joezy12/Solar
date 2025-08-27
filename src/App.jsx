import { Routes, Route} from "react-router-dom"
import Navbar from "./general/navbar";
import Homepage from "./Pages/homepage";
import { useState } from "react";
import Footer from "./general/footer";
import Aboutus from "./Pages/aboutus";
import { NavLink } from "react-router-dom";
import Cart from "./Pages/cart";
import Products from "./Pages/products";
import ContactUS from "./Pages/contactus";

function App() {
     const [navOpen, setNavOpen] = useState(false);

     const navStyle = {
      transform : navOpen ? `translate(0%,0%)` : `translate(-100%, 0%)`,
     }

     function openNav() {
      setNavOpen(!navOpen)
     }
  return (
    <>
    <Cart/>
      <nav className="phone-nav" style={navStyle}>
        <div className="cancel">
          <button onClick={openNav}>x</button>
        </div>
        <div className="p-nav-links">
          <NavLink className="link" to=".." onClick={openNav}><p>Home <i className="bi-chevron-down"></i></p></NavLink>
          <NavLink className="link" to="../aboutus" onClick={openNav}><p>About Us<i className="bi-chevron-down"></i></p></NavLink>
          <NavLink className="link" to="../products" onClick={openNav}><p>Products <i className="bi-chevron-down"></i></p></NavLink>
          <p>Services <i className="bi-chevron-down"></i></p>
          <p>Blog <i className="bi-chevron-down"></i></p>
          <NavLink className="link" to="../contactus" onClick={openNav}><p>Contact Us <i className="bi-chevron-down"></i></p></NavLink>
        </div>
      </nav>
      <Routes>
        <Route index element={<Homepage openNav={openNav}/>} />
        <Route path="aboutus" element={<Aboutus openNav={openNav}/>}/>
        <Route path="products" element={<Products openNav={openNav}/>} />
        <Route path="contactus" element={<ContactUS openNav={openNav}/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
