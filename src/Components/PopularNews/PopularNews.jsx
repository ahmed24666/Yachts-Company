import React from 'react'
import './popularNews.scss'
import { BsArrowRightShort } from 'react-icons/bs';

const PopularNews = () => {
    return (
        <div className='PN'>
            <div className="item">
                <div className="imageCon">
                    <div className="image">
                        <img src="/image/popular news/Blog-list-img-1.jpg" alt="" />
                    </div>
                </div>
                <div className="text">
                    <span>July 23, 2021 / Superyachts</span>
                    <h1>Experiences</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit nean commodo ligula eget dol</p>
                    <div className="button">
                        <h5>Read More </h5>
                        <div className="icon"><BsArrowRightShort/></div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="imageCon">
                    <div className="image">
                        <img src="/image/popular news/Blog-list-img-2.jpg" alt="" />
                    </div>
                </div>
                <div className="text">
                    <span>July 23, 2021 / Superyachts</span>
                    <h1>Pure Joy</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit nean commodo ligula eget dol</p>
                    <div className="button">
                        <h5>Read More </h5>
                        <div className="icon"><BsArrowRightShort/></div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="imageCon">
                    <div className="image">
                        <img src="/image/popular news/Blog-list-img-3.jpg" alt="" />
                    </div>
                </div>
                <div className="text">
                    <span>July 23, 2021 / Superyachts</span>
                    <h1>Accessories</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit nean commodo ligula eget dol</p>
                    <div className="button">
                        <h5>Read More </h5>
                        <div className="icon"><BsArrowRightShort/></div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="imageCon">
                    <div className="image">
                        <img src="/image/popular news/Blog-list-img-4.jpg" alt="" />
                    </div>
                </div>
                <div className="text">
                    <span>July 23, 2021 / Superyachts</span>
                    <h1>Boat Rental</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit nean commodo ligula eget dol</p>
                    <div className="button">
                        <h5>Read More </h5>
                        <div className="icon"><BsArrowRightShort/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularNews
