import './pp.scss'
import React from 'react'
import MainHead from './../MainHead/MainHead'
import Logos from './../Logos/Logos'
import { BsArrowRightShort } from 'react-icons/bs';
const PP = ({h1,pr1,pr2,pr3}) => {
    return (
        <div className='PP'>
           <MainHead  h6=' OUR COMPANY OFFERS ' h1={h1} p='Thvme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhonc usaecenastem pus, tellus eget…' />
           <div className="ppCon">
               <div className="itemCon">
                   <div className="item">
                       <h2>Standard</h2>
                       <h1> ${pr1}</h1>
                       <span> /per month </span>
                       <p>Lorem ipsum dolor sit amet, adipiscing elit ligula</p>
                       <p>Aenean commodo ligula eget dolor. Cum sociis Theme.</p>
                       <p>Lorem ipsum dolor sit amet, adipiscing elit ligula</p>
                       <div className="view">
                           <h5>View More</h5>
                           <div className="icon"><BsArrowRightShort/></div>
                       </div>
                   </div>
               </div>
               <div className="itemCon2">
                   <div className="item">
                       <h2>  PREMIUM  </h2>
                       <h1> ${pr2}</h1>
                       <span> /per month </span>
                       <p>Lorem ipsum dolor sit amet, adipiscing elit ligula</p>
                       <p>Aenean commodo ligula eget dolor. Cum sociis Theme.</p>
                       <p>Lorem ipsum dolor sit amet, adipiscing elit ligula</p>
                       <div className="view">
                           <h5>View More</h5>
                           <div className="icon"><BsArrowRightShort/></div>
                       </div>
                   </div>
               </div>
               <div className="itemCon">
                   <div className="item">
                       <h2> DELUXE </h2>
                       <h1> ${pr3}</h1>
                       <span> /per month </span>
                       <p>Lorem ipsum dolor sit amet, adipiscing elit ligula</p>
                       <p>Aenean commodo ligula eget dolor. Cum sociis Theme.</p>
                       <p>Lorem ipsum dolor sit amet, adipiscing elit ligula</p>
                       <div className="view">
                           <h5>View More</h5>
                           <div className="icon"><BsArrowRightShort/></div>
                       </div>
                   </div>
               </div>
           </div>
           <Logos/>
        </div>
    )
}

export default PP
