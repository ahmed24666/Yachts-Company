import React from 'react'
import './first.scss'
import MainHead from './../../MainHead/MainHead'
const First = () => {
    return (
        <div className='First'>
           <MainHead trans=' EXPLORE ' h6=' YACHTING COMPANY ' h1='SuperYacht Since 1971.' p='Thvme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhonc usaecenastem pus, tellus eget…' img='/image/Sidebar-img.png'/>
           <div className="images">
               <img src="/image/About-img-1.png" alt="" />
           </div>
        </div>
    )
}

export default First
