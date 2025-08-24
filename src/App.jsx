import { Routes, Route} from "react-router-dom"
import Navbar from "./general/navbar";
import Homepage from "./Pages/homepage";
import { useState } from "react";
import Footer from "./general/footer";
import Aboutus from "./Pages/aboutus";
import { NavLink } from "react-router-dom";

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
      <nav className="phone-nav" style={navStyle}>
        <div className="cancel">
          <button onClick={openNav}>x</button>
        </div>
        <div className="p-nav-links">
          <NavLink className="link" to=".." onClick={openNav}><p>Home <i className="bi-chevron-down"></i></p></NavLink>
          <NavLink className="link" to="../aboutus" onClick={openNav}><p>About Us<i className="bi-chevron-down"></i></p></NavLink>
          <p>Services <i className="bi-chevron-down"></i></p>
          <p>Products <i className="bi-chevron-down"></i></p>
          <p>Blog <i className="bi-chevron-down"></i></p>
          <p>Contact Us <i className="bi-chevron-down"></i></p>
        </div>
      </nav>
      <Routes>
        <Route index element={<Homepage openNav={openNav}/>} />
        <Route path="aboutus" element={<Aboutus openNav={openNav}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
