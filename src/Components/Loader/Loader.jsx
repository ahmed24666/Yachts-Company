import React from 'react'
import './loader.scss'
import { GiShipWheel } from 'react-icons/gi';
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import AOS from 'aos'
const Loader = () => {
    useEffect(() => {
      AOS.init();
    }, [])
    return (
        <div className='Loader'>
            <div className="icon" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <GiShipWheel/>
            </div>
        </div>
    )
}

export default Loader
