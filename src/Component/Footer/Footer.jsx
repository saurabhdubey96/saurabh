import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer=()=>{
    return(
        <div className="footer">
            <img src={Wave} alt="" />
            <div className="f-content">
                <span>saurabhdubey967018@gmail.com</span>
                <div className="f-icons">
                  <a href="https://instagram.com/bhardwaj.saur">  <Insta color='white' size='3rem'/></a>
                  <a href="https://www.facebook.com/saur.bhardwaj.3">  <Facebook color='white' size='3rem'/></a>
                 <a href="https://github.com/saurabhdubey96">   <Github color='white' size='3rem'/></a>
                </div>
            </div>
        </div>
    )
}
export default Footer