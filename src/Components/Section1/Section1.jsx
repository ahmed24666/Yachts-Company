import './section1.scss'
import React from 'react'
import { GiCompass } from 'react-icons/gi';
import { GiBattleship } from 'react-icons/gi';
import { GiShipWheel } from 'react-icons/gi';
import { GiAnchor } from 'react-icons/gi';


const Section1 = () => {
    return (
        <div className='Section1'>
            <div className="cards">
                <div className="card">
                    <div className="icon"><GiCompass/></div>
                    <div className="text">
                        <h1> 99s of yachts </h1>
                        <p>Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon"><GiBattleship/></div>
                    <div className="text">
                        <h1>  Professional Crew  </h1>
                        <p>Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon"><GiShipWheel/></div>
                    <div className="text">
                        <h1>  Amazing Ports </h1>
                        <p>Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon"><GiAnchor/></div>
                    <div className="text">
                        <h1> Discover new places </h1>
                        <p>Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
