import './tourList.scss'
import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import data from './data'
import { RxDoubleArrowUp } from 'react-icons/rx';
const TourList = () => {
    
    const [sort, setSort] = useState('select')
    // Sort product 
    const sortedTripList = 
    sort==='low' ? data.sort((a,b)=>a.h6 - b.h6) 
    : sort==='high' ? data.sort((a,b)=>b.h6 - a.h6) 
    : data.sort((a,b)=>(a.h1 > b.h1 ? 1 : -1))
    return (
        <div className='TourList'>
            <Header id='tour' h1=' Tour List Standard ' img='/image/Header/book-title.jpg'/>
            <div className="sort">
                <h5 className='sort1' onClick={()=>{setSort('select');}}>
                    <div className={sort==='select' ? 'dot show' : 'dot'} ></div>
                    Name
                </h5>
                <h5 className='sort2' onClick={()=>{setSort('high');}}>
                    <div className={sort==='high' ? 'dot show' : 'dot'}></div>
                    Price High to Low
                </h5>
                <h5 className='sort3' onClick={()=>{setSort('low');}}>
                    <div className={sort==='low' ? 'dot show' : 'dot'}></div>
                    Price Low To High
                </h5>
            </div>
            <div className="last">
                {sortedTripList.map((item)=>{
                    return(
                        <div className="card">
                            <div className="left">
                                <div className="image">
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                            <div className="right">
                                <h5>${item.h6} / per day </h5>
                                <h1>{item.h1}</h1>
                                <p>{item.p}</p>
                                <div className="info">
                                    <div className="text">{item.type}</div>
                                    <div className="text">{item.guests}</div>
                                    <div className="text">{item.cabins}</div>
                                    <div className="text">{item.km}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="scrollToTop">
                <a href={`#tour`}>
                    <RxDoubleArrowUp/>
                </a>
            </div>
        </div>
    )
}

export default TourList
