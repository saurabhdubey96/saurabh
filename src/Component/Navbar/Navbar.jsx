import React from "react"
import Toggle from "../Toggle/Toggle";
import './Navbar.css'
 import {Link }from "react-scroll"


const Navbar=()=>{
    return(
        <div className="n-wrapper">
            <div className="n-left"> 
                <div className="n-name">
                    Saurabh
                    <div style={{display:"flex"}}>
                   <Toggle/>
                   </div>
                   
                </div>
                <div className="n-right">
                    <div className="n-list"> 
                    <ul style={{listStyleType:'none'}}>
                    <Link to="Intro" smooth={true} spy={true}>

                    <li>Home</li></Link>
                    <Link to="Services" smooth={true} spy={true}>

                    <li>Services</li></Link>
                    <Link to="Experience" smooth={true} spy={true}>

                    <li>Experience</li></Link>
                    <Link to="portfolio" smooth={true} spy={true}>

                    <li>Portfolio</li></Link>
                    <Link to="Testimonial" smooth={true} spy={true}>

                    <li>Testimonial</li></Link>
                    </ul>

                    </div>
                    <Link to="Contact" smooth={true} spy={true}>

                    <button className="button n-button">Contact Us</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;