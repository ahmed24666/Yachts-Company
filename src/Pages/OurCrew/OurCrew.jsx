import React from 'react'
import Header from '../../Components/Header/Header'
import MainHead from './../../Components/MainHead/MainHead'
import Crew1 from '../../Components/Crew1/Crew1'
import Testimonials from '../../Components/Testimonials/Testimonials'
import { RxDoubleArrowUp } from 'react-icons/rx';
import './ourCrew.scss'

const OurCrew = () => {
    
    return (
        <div className="OurCrew">
            <Header id='crew' h1='Our Crew' img='/image/Header/Crew-title-img.jpg'/>
            <MainHead trans='explore' img='/image/Sidebar-img.png' h6=' OUR PROFESSIONALS ' h1='meet our crew' p={' Thvme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhonc usaecenastem pus, tellus eget...'}/>
            <Crew1/>
            <MainHead h6='Testimonials' h1='Peaple About Us'/>
            <Testimonials/>
            <div className="scrollToTop">
                <a href={`#crew`}>
                    <RxDoubleArrowUp/>
                </a>
            </div>
        </div>
    )
}

export default OurCrew
