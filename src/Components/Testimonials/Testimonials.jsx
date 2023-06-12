import './Testimonials.scss'
import React from 'react'
import { BsArrowBarLeft } from 'react-icons/bs';
import { BsArrowBarRight} from 'react-icons/bs';
import { useRef } from 'react';
const Testimonials = () => {
    const scrollRef = useRef(null)
    const scroll =(direction)=>{
        const {current} =scrollRef
        if (direction==='left') {
            current.scrollLeft -= 1000
        }else{
            current.scrollLeft += 1000
        }
    }
    return (
        <div className='Testimonials'>
            <div className="cards" ref={scrollRef}>
                <div className="card">
                    <p>Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus auguevelit cursus augu evelit cursus et ante tincidunt llam quis ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, aenean commodo ligula </p>
                    <div className="name">
                        <h3>Edvard Tord <span>/ Skipper</span></h3>
                    </div>
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eg etdolor aenean massa Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus augue velit cursus augue velit cursus et ante tincidunt.</p>
                    <div className="name">
                        <h3>Cristofer Dalas <span>/ First Captan</span></h3>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <div className="btn" onClick={()=>scroll('left')}><BsArrowBarLeft/></div>
                <div className="btn" onClick={()=>scroll('right')}><BsArrowBarRight/></div>
            </div>
        </div>
    )
}

export default Testimonials
