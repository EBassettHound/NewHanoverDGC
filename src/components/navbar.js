import React from "react"
import { Link } from "gatsby"
import "./navbar.css"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => (
  <div>
  
  <nav>
    <div className="logo">
    <StaticImage
        src="../images/NHDGC-LOGO.jpg"
        loading="eager"
        width={128}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      
      />
      
  </div>
    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses/">Courses</Link></li>
      <li><Link to="/events/">Events</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>
  </nav>
  </div>
)

export default Navbar