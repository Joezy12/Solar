import { Routes, Route} from "react-router-dom"
import Navbar from "./general/navbar";
import Homepage from "./Pages/homepage";
import { useState } from "react";


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
          <p>Home <i className="bi-chevron-down"></i></p>
          <p>About Us<i className="bi-chevron-down"></i></p>
          <p>Services <i className="bi-chevron-down"></i></p>
          <p>Products <i className="bi-chevron-down"></i></p>
          <p>Blog <i className="bi-chevron-down"></i></p>
          <p>Contact Us <i className="bi-chevron-down"></i></p>
        </div>
      </nav>
      <Routes>
        <Route index element={<Homepage openNav={openNav}/>} />
      </Routes>
    </>
  )
}

export default App
