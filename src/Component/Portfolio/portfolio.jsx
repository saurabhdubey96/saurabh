import React  from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Slidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import 'swiper/css'
import Music from "../../img/Blue Modern Coach TIps YouTube Thumbnail.png"
import Weather from "../../img/Colorful Sunset Cloudy Mountain Now Playing UI Dekstop Wallpaper.png"
import Betting from "../../img/Navy Line Texture Businesses YouTube Thumbnail.png"
import client from "../../img/Colorful Freelancer YouTube Thumbnail.png"

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import { themeContext } from '../../Context'
import { useContext } from 'react'
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };



const Portfolio=()=>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

   
    return(
        <div className="portfolio" id='Portifolio'>

            {/*  */}
            <span style={{color:darkMode?'white':""}}>Recent Projects</span>
            <span>Portfolio</span>
            
            {/* <Swiper
             spaceBetween={30}
             slideperView={5}
             grabCursor={true}
             
             
             className='portfolio-slider '>
                
                <SwiperSlide>
                    <img src={client} alt=""/>
                    
                </SwiperSlide>
                <SwiperSlide>
                <img src={Ecommerce} alt=""/>
                    
                </SwiperSlide>
                <SwiperSlide>
                <img src={Betting} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={MusicApp} alt=""/>

                </SwiperSlide>
                <SwiperSlide>
                <img src={Weather} alt=""/>

                </SwiperSlide>
                <SwiperSlide>
                <img src={Music} alt=""/>

                </SwiperSlide>

            </Swiper> */}
            <div className='portfolio-slider'> 
            <Slider {...settings}>
          <div>
          <img src={Music} alt=""/>

          </div>
          <div>
          <img src={Weather} alt=""/>

          </div>
          <div>
          <img src={MusicApp} alt=""/>

          </div>
          <div>
          <img src={Betting} alt=""/>

          </div>
          <div>
          <img src={Ecommerce} alt=""/>

          </div>
          <div>
          <img src={client} alt=""/>
          </div>
          
        </Slider>
        </div>
        </div>
    )
}
export default Portfolio;