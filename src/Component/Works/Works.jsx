import React from "react"
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from '../../Context'
import { useContext } from 'react'

import { motion } from "framer-motion"
import { Link } from "react-scroll"


const Works=()=>{

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
      <div className="works">
        <div className='awesome'>
                <span style={{color:darkMode?'white':""}} >Works for All these</span>
                <span>Brands & clients</span>
                <span> my services you always find best service from our side
                    <br/>
                    so dont worry about your Work Here We are?
                    <br/>
                    hiring easy when we work toghether 
                </span>
                <Link to="Contact" smooth={true} spy={true}>

                <button className='button s-button'>Hire Me</button></Link>
                
                <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>

            </div>
            {/* right side */}
            <div className="w-right">
                <motion.div 
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration:3.5,type:'spring'}}
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork}/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr}/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify}/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon}/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook}/>
                    </div>

                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>

      </div>
    )
}
export default Works
