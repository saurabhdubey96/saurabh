import React from "react"
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thombup from '../../img/thumbup.png'
import glassesimoji from '../../img/glassesimoji.png'
import crown from '../../img/crown.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv"

import { themeContext } from '../../Context'
import { useContext } from 'react'

import {motion} from 'framer-motion'
import { Link } from "react-scroll"


const Intro=()=>{
    const transition={duration:2,type:'spring'}
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    return(
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':""}} >Hy ! I Am</span>
                <span> Saurabh Dubey</span>
                <span>Fronted Developer with high level of experience in web designing and development, producting the Quality work</span>

            </div>
            <Link to="Contact" smooth={true} spy={true}>

            <button className="button i-button"> Hire Me</button>
            </Link>
            <div className="i-icons">
                <img src={Github} alt="this"/>
                <img src={Linkedin} alt="this"/>
                <img src={Instagram} alt="this"/>

            </div>

        </div>
        <div className="i-right">
        <img src={Vector1} alt="this"/>
        <img src={Vector2} alt="this"/>
        <img src={boy} alt="this"/>
        <motion.img 
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src={glassesimoji} alt="this"/>
        <motion.div 
        initial={{top:'-4%',left:'74%'}}
        whileInView={{left:'68%'}}
        transition={transition}
        style={{top:'-4%',left:'68%'}}
        className='floating-div'>
            <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
        </motion.div>
        <motion.div
        initial={{top:'18rem',left:'9rem'}}
        whileInView={{left:'0rem'}}
        transition={transition}
        
         style={{top:'18rem',left:'0rem'}}
         className='floating-div'>
            <FloatingDiv image={thombup} txt1='Best Design' txt2='Award' />
        </motion.div>
        {/* blur */}
        <div className="blur" style={{background:'rgb(238,210,255)'}}></div>
        <div className="blur"
          style={{
            background:"#C1F5FF",
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'
          }}
          
          ></div>


        </div>
        

    </div>
    )
}
export default Intro;