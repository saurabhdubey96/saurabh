import React, { useState } from  'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Contact=()=>{

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    
    const form = useRef();
    const [done , setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_oiyz58n', 'template_7h77zsj', form.current, 'V28-rDK52QwDqlOQP')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
<div className="contact-form" id='Contact'>
    <div className="w-left">
        <div className="awesome">
            <span style={{color:darkMode?'white':""}} >Get in touch</span>
            <span>Contact me</span>
            <div className=" blur s-blur" style={{background:'#ABF1FF94'}}></div>

        </div>
    </div>


    <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user-name' className='user' placeholder='Name' />
            <input type="email" name='user-email' className='user' placeholder='Email' />
            <textarea name="message" id="" cols="30" rows="10" className='user' placeholder='Message'></textarea>
            <input type="submit" value='Send'  className='button'/>
            <span>{done &&"Thanks for contacting me!"}</span>
            <div className='blur c-blur1' style={{background:'var(--purple)'}}></div>

        </form>
    </div>
</div>
    )
}
export default Contact