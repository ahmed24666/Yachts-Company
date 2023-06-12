import './parallex.scss'
import React from 'react'

const Parallex = ({id}) => {
    return (
        <div className='Parallex' id={id}>
            <h1>DISCOVER NEW YACHTS</h1>
            <div className="buttons">
                <div className="btn1">view more</div>
                <div className="btn2">explore</div>
            </div>
        </div>
    )
}

export default Parallex
