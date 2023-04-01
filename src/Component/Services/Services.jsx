import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Cards/Card'
import resume from "../../img/humble.png"

//import HeartEmoji from "../../img/heartemoji.png"
import { themeContext } from '../../Context'
import { useContext } from 'react'

import { motion } from 'framer-motion'


const Services=()=>{

    const transition={duration:2,type:'spring'}

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className='services' id='Services'>
            {/* left side */}
            <div className='awesome'>
                <span style={{color:darkMode?'white':""}} >My Awesome</span>
                <span>Services</span>
                <span> my services you always find best service from our side
                    <br/>
                    so dont worry about your Work Here We are?
                </span>
                <a href={resume} download>
                <button className='button s-button'>Download CV</button>
                </a>
                <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>

            </div>
            {/* right side */}
            <div className='cards'>
                <div className='motion1'>
                {/* <motion.div
                whileInView={{left:'14rem'}}
                initial={{left:'25%'}}
                transition={transition}
                className='motion1'
                 style={{left:'14rem'}}
                 > */}
                    <Card
                    emoji={HeartEmoji}
                    heading={'Design'}
                    details={'Figma, Sketch ,Photoshop, Adobe, Canva'}
                     
                     />
                     </div>
                {/* </motion.div> */}
                <div className='motion2'>
                {/* <motion.div 
                whileInView={{right:'30rem'}}
                className='motion2'
                initial={{right:'5%'}}
                transition={transition}

                style={{top:"12rem" ,left:"-4rem"}}
                > */}
                <Card
                    emoji={Glasses}
                    heading={'Developer'}
                    details={'Html ,Css, JavaScript, React ,Capacitor ,TypeScript,Bootstrap'}
                     
                     />
                 </div>
                {/* </motion.div> */}
                {/* <motion.div 
                className='motion3'
                whileInView={{left:'14rem'}}
                initial={{left:'25%'}}
                transition={transition}
                style={{top:"19rem" ,left:"12rem"}}
                > */}
                <div className='motion3'>
                <Card
                    emoji={Humble}
                    heading={'UI/UX'}
                    details={'Html ,Css, JavaScript, React ,Capacitor ,Ionic,TypeScript,Bootstrap'}
                     
                     />
                      </div>
                {/* </motion.div> */}
                <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>

            </div>
        </div>
    )
}
export default Services;