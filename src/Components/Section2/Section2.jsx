import './Section2.scss'
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';

const Section2 = () => {
    return (
        <div className='Section2'>
            <div className="text">
                <h1>YACHT VARIETY</h1>
                <p>Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur luctus ridiculus sodales mus.</p>
                <div className="view">
                    <span>View More</span>
                    <div className="icon">
                        <BsArrowRightShort/>
                    </div>
                </div>
            </div>
            <div className="text">
                <h1>LUXURY CABINS</h1>
                <p>Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur luctus ridiculus sodales mus.</p>
                <div className="view">
                    <span>View More</span>
                    <div className="icon">
                        <BsArrowRightShort/>
                    </div>
                </div>
            </div>
            <div className="text">
                <h1>NEW CRUISE OFFERS</h1>
                <p>Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur luctus ridiculus sodales mus.</p>
                <div className="view">
                    <span>View More</span>
                    <div className="icon">
                        <BsArrowRightShort/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
