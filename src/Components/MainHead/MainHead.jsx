import React from 'react'
import './mainHead.scss'
const MainHead = ({trans,h6,h1,p,img}) => {
    return (
        <div className='MainHead'>
            <div className="trans">
                <h1> {trans} </h1>
            </div>
            <div className="text">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <h6>{h6}</h6>
                <h1> {h1} </h1>
                <p> {p}</p>
            </div>
        </div>
    )
}

export default MainHead
