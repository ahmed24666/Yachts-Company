import './mainSlider.scss'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Navigation, Pagination ,Autoplay, EffectFade} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
SwiperCore.use([Navigation, Pagination, Autoplay])

const MainSlider = ({id}) => {
    return (
        <div className='MainSlider' id={id}>
            <Swiper spaceBetween={0} modules={[EffectFade]} effect={"fade"} slidesPerView={1} autoplay={{delay: 2500,disableOnInteraction: false,}} loop={true} navigation={{ clickable: true }} pagination={{ clickable: true, dynamicBullets:true}}>
                <SwiperSlide>
                    <div className="image">
                        <img src="image/slider1/home-1-rev-1.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h6>nautical company</h6>
                        <h1>yachting</h1>
                        <p>Embark on a new adventure! Luxury yacht booking for exclusive private cruises around the most exotic and tranquil islands in the Caribbean. For the perfect getaway!</p>
                        <div className="buttons">
                            <div className="btn1">view more</div>
                            <div className="btn2">explore</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                        <img src="image/slider1/home-1-rev-2.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h6>YACHT TYPE VARIETY</h6>
                        <h1>CRUISERS</h1>
                        <p>Modern design sports cruisers for those who crave adventure & grandeur yachts for relaxing travels with your loved ones. We offer diverse and fully equipped yachts. </p>
                        <div className="buttons">
                            <div className="btn1">view more</div>
                            <div className="btn2">explore</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                        <img src="image/slider1/home-1-rev-3.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h6>NEW OPEN YACHTS</h6>
                        <h1>JOURNEY</h1>
                        <p>Our high tech open yachts are ideal for summer day adventures. Explore the Caribbean shores with the newest edition of our yachts. Start your new journey with us!</p>
                        <div className="buttons">
                            <div className="btn1">view more</div>
                            <div className="btn2">explore</div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MainSlider
