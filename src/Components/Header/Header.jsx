import React from 'react'
import './header.scss'
const Header = ({img,h1,id}) => {
    return (
        <div id={id} className='Header' style={{backgroundImage:`url('${img}')`}}>
            <h1>{h1}</h1>
        </div>
    )
}

export default Header
