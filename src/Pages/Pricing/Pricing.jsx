import './pricing.scss'
import React from 'react'
import Header from './../../Components/Header/Header'
import PP from '../../Components/PP/PP'
import { RxDoubleArrowUp } from 'react-icons/rx';

const Pricing = () => {
    
    return (
        <div className='Pricing'>
            <Header id='pricing' img='image/Header/Coming-soon-img.jpg' h1='Pricing Plans'/>
            <PP pr1='1380' pr2='2380' pr3='1880' h1='Special Offers'/>
            <div className="scrollToTop">
                <a href={`#pricing`}>
                    <RxDoubleArrowUp/>
                </a>
            </div>
        </div>
    )
}

export default Pricing
