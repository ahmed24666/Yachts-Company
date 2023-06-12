import React, { useState } from 'react'
import './video.scss'
import { FiPlay } from 'react-icons/fi';
import { GiCrossedSabres } from 'react-icons/gi';

const Video = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='Video'>
            {open&&(
                <div className="hide" >
                    <div className="button" onClick={()=>setOpen(!open)}><GiCrossedSabres/></div>
                    <iframe src="https://player.vimeo.com/video/115758738?dnt=1&app_id=122963&autoplay=1" frameborder="0"></iframe>
                </div>
            )}
            <div className="iconcon">
                <div className="icon" onClick={()=>setOpen(!open)}><FiPlay/></div>
            </div>
        </div>
    )
}

export default Video
