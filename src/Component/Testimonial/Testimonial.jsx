import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'


import { themeContext } from '../../Context'
import { useContext } from 'react'


const Testimonial=()=>{
    // const theme=useContext(themeContext);
    // const darkMode=theme.state.darkMode;

    const clients=[
        {
            img:profilePic1,
            review:"The graphic and typographic opewith the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dumm"
        },
        {
            img:profilePic2,
            review:"The graphic and typograph dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a du"

        },
        {
            img:profilePic3,
            review:"The graphic and typograpealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a "

        },
        {
            img:profilePic4,
            review:"The graphic and typographic operators know this well, in reality all the professions dealing with the u but what is it? Lorem ipsum is a dumm graphic and typographic operators know this w"

        },
    ]
    return(
    <div className="t-wrapper" id='Testimonial'>
        <div className="t-heading">
            <span>Clients Always get </span>
            <span> Exeptional Work </span>
            <span> From me...</span>
            <div className='blur t-blur1'style={{background:"var(--purple)"}}></div>
            <div className='blur t-blur2'style={{background:"skyblue"}}></div>

        </div>
        {/* slider */}
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}  
            slidePerView={1}
        pagination={{ clickable: true }}
        >
        {clients.map((client,index)=>{
            return(
                <SwiperSlide key={index}>
                    <div className='testimonial' >
                    <img src={client.img} alt=""/>
                    <span>{client.review}</span>
                    </div>

                </SwiperSlide>
            );
        })}
        </Swiper> 

    </div>
    )
}
export default Testimonial