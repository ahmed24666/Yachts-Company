import './home.scss'
import React from 'react'
import MainSlider from '../../Components/MainSlider/MainSlider'
import MainHead from '../../Components/MainHead/MainHead'
import Modal from '../../Components/Modal/Modal'
import Section1 from '../../Components/Section1/Section1'
import Parallex from '../../Components/Parallex/Parallex'
import OurLatest from '../../Components/Ourlatest/OurLatest'
import Section2 from '../../Components/Section2/Section2'
import Crew1 from '../../Components/Crew1/Crew1'
import PP from '../../Components/PP/PP'
import Video from '../../Components/Video/Video'
import PopularNews from '../../Components/PopularNews/PopularNews'
import Testimonials from '../../Components/Testimonials/Testimonials'
import LastPart from '../../Components/LastPart/LastPart'
import { RxDoubleArrowUp } from 'react-icons/rx';

const Home = () => {
    
    return (
        <div className='Home' >
           <MainSlider id='home'/>
           <MainHead trans=' EXPLORE ' h6=' YACHTING COMPANY ' h1=' DAILY SAILING SINCE 1971. ' p='Thvme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhonc usaecenastem pus, tellus eget…' img='/image/Sidebar-img.png'/>
           <Modal/>
           <Section1/>
           <Parallex/>
           <MainHead trans='  CRUISES  ' h6=' FOR DAILY RENTING ' h1=' OUR LATEST MODELS '  img='/image/Sidebar-img.png'/>
           <OurLatest/>
           <Section2/>
           <MainHead h6=' OUR PROFESSIONALS ' h1='meet our crew' p={' Thvme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhonc usaecenastem pus, tellus eget...'}/>
           <Crew1/>
           <PP pr1='896' pr2='1386' pr3='1250' h1=' PRICING PLANS '/>
           <Video/>
           <MainHead trans='Magazine' h6=' LATEST BLOG POSTS ' h1=' Popular News ' img='/image/Sidebar-img.png'/>
           <PopularNews/>
           <MainHead h6='Testimonials' h1='Peaple About Us'/>
           <Testimonials/>
           <LastPart/>
           <div className="scrollToTop">
                <a href={`#home`}>
                    <RxDoubleArrowUp/>
                </a>
            </div>
        </div>
    )
}

export default Home
