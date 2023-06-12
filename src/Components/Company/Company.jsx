import React from 'react'
import './company.scss'
const Company = ({img,h1}) => {
    return (
        <div className='Company'>
            <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <h1>{h1}</h1>
                    <p> Thvme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhonc usaecenast</p>
                    <div className="progress">
                        <div className="info">
                            <span>Yachting</span>
                            <span>78%</span>
                        </div>
                        <div className="progressCon">
                            <div className="bar" style={{width:'calc(78% - 10px)'}}></div>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="info">
                            <span>DIVERSE YACHT TYPES</span>
                            <span>90%</span>
                        </div>
                        <div className="progressCon">
                            <div className="bar" style={{width:'calc(90% - 10px)'}}></div>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="info">
                            <span>destination</span>
                            <span>57%</span>
                        </div>
                        <div className="progressCon">
                            <div className="bar" style={{width:'calc(57% - 10px)'}}></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Company
