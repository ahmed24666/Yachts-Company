import './about.scss'
import React from 'react'
import MainHead from './../../Components/MainHead/MainHead'
import First from '../../Components/ABOUT/First/First'
import Parallex from '../../Components/Parallex/Parallex'
import Section1 from './../../Components/Section1/Section1'
import Offer from '../../Components/ABOUT/Offer/Offer'
import Crew1 from '../../Components/Crew1/Crew1'
import { RxDoubleArrowUp } from 'react-icons/rx';

const About = () => {
    
    return (
        <div className='About'>
            <Parallex id='about'/>
            <First/>
            <Section1/>
            <Offer img='/image/About-img-2.png' direction='ltr'/>
            <MainHead trans='people' img='/image/Sidebar-img.png' h6=' OUR PROFESSIONALS ' h1='meet our crew' p={' Thvme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhonc usaecenastem pus, tellus eget...'}/>
            <Crew1/>
            <div className="scrollToTop">
                <a href={`#about`}>
                    <RxDoubleArrowUp/>
                </a>
            </div>
        </div>
    )
}

export default About
