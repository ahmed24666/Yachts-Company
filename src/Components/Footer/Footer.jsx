import './footer.scss'
import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiTwitch } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';


const Footer = () => {
    return (
        <div className='Footer'>
            <div className="top">
                <div className="image">
                    <img src="/image/logo-f.png" alt="" />
                </div>
                <p>Seafarer, a WP theme equipped with the utmost practical features for your yacht & boat rental business.</p>
            </div>
            <div className="icons">
                <div className="icon"><FiFacebook/></div>
                <div className="icon"><FiInstagram/></div>
                <div className="icon"><FiTwitter/></div>
                <div className="icon"><FiTwitch/></div>
                <div className="icon"><FiYoutube/></div>
            </div>
        </div>
    )
}

export default Footer
