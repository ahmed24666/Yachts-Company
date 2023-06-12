import React, { useState } from 'react'
import './modal.scss'
import { GiCrossedSabres } from 'react-icons/gi';

const Modal = () => {
    const [open, setOpen] = useState(false)
    const [choose, setChoose] = useState('1')
    return (
        <div className='Modal'>
            <div className="imageCon"onClick={()=>setOpen(!open)}>
                <div className="image" onClick={()=>setChoose('1')}>
                    <img src="image/modal/home-1-gallery-1.jpg" alt="" />
                </div>
            </div>
            <div className="imageCon2" onClick={()=>setOpen(!open)}>
                <div className="image" onClick={()=>setChoose('2')}>
                    <img src="image/modal/home-1-gallery-2.jpg" alt="" />
                </div>
            </div>
            <div className="imageCon" onClick={()=>setOpen(!open)}>
                <div className="image" onClick={()=>setChoose('3')}>
                    <img src="image/modal/home-1-gallery-3.jpg" alt="" />
                </div>
            </div>
            {open&&(
                <div className="hide">
                    <div className="icon" onClick={()=>setOpen(!open)}><GiCrossedSabres/></div>
                    <div className="image">
                        <img src={`image/modal/home-1-gallery-${choose}.jpg`} alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal
