import './services.scss'
import React from 'react'
import Header from '../../Components/Header/Header'
import Logos from '../../Components/Logos/Logos'
import Offer from './../../Components/ABOUT/Offer/Offer'
import Company from '../../Components/Company/Company'
import Super from '../../Components/Super/Super'
import { RxDoubleArrowUp } from 'react-icons/rx';

const Services = () => {
    
    return (
        <div className='Services' >
            <Header id='service' h1='Our Services' img='/image/Header/Services-title-img-1536x880.jpg'/>
            <Logos/>
            <Offer img='/image/Services-img-1.png' direction='rtl' other='ltr'/>
            <Company h1='All About' img='/image/Services-img-2.png'/>
            <Super/>
            <div className="scrollToTop">
                <a href={`#service`}>
                    <RxDoubleArrowUp/>
                </a>
            </div>
        </div>
    )
}

export default Services
