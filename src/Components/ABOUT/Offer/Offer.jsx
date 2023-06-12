import React from 'react'
import './offer.scss'
import MainHead from './../../MainHead/MainHead'
const Offer = ({img,direction,other}) => {
    return (
        <div className='Offer' style={{direction:`${direction}`}}>
            <div className="left" >
                <div className="image">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="right" style={{direction:`${other}`}}>
                <MainHead h6=' Nautical Company ' h1=' What We Offer '/>
                <div className="line" style={{direction:`${other}`}}>
                    <div className="dot"></div>
                    <p>Lorem ipsum proin gravida velit auctor aliquet aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                </div>
                <div className="line" style={{direction:`${other}`}}>
                    <div className="dot"></div>
                    <p>Lorem ipsum proin gravida velit auctor aliquet aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                </div>
                <div className="line" style={{direction:`${other}`}}>
                    <div className="dot"></div>
                    <p>Lorem ipsum proin gravida velit auctor aliquet aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default Offer
