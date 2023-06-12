import React from 'react'
import './lastPart.scss'
import Company from '../Company/Company'
import Super from '../Super/Super'
const LastPart = () => {
    return (
        <div className='LastPart'>
            <div className="top">
                <div className="card card1">
                    <div className="text">
                        <h1> Lorem Ipsum </h1>
                        <p>Aenean commodo ligulaet eget dolor. Cum sociis khe me velit cursus utroi</p>
                    </div>
                    <div className="num">
                        <h2>01</h2>
                    </div>
                </div>
                <div className="card card2">
                    <div className="text">
                        <h1> Lorem Ipsum </h1>
                        <p>Aenean commodo ligulaet eget dolor. Cum sociis khe me velit cursus utroi</p>
                    </div>
                    <div className="num">
                        <h2>02</h2>
                    </div>
                </div>
                <div className="card card1">
                    <div className="text">
                        <h1> Lorem Ipsum </h1>
                        <p>Aenean commodo ligulaet eget dolor. Cum sociis khe me velit cursus utroi</p>
                    </div>
                    <div className="num">
                        <h2>03</h2>
                    </div>
                </div>
                <div className="card card2">
                    <div className="text">
                        <h1> Lorem Ipsum </h1>
                        <p>Aenean commodo ligulaet eget dolor. Cum sociis khe me velit cursus utroi</p>
                    </div>
                    <div className="num">
                        <h2>04</h2>
                    </div>
                </div>
            </div>
            <Company h1='COMPANY' img='image/last one/home-1-img-2.jpg'/>
            <Super/>
        </div>
    )
}

export default LastPart
