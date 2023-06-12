import './single.scss'
import React from 'react'
import products from './../../context/Products'
import Header from '../../Components/Header/Header'
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { useParams } from 'react-router';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

const Single = () => {
    
    const { Id } = useParams()
    const choosen = products.find((item)=>item.id == Id)
    const {getItemsQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()
    const quantity = getItemsQuantity(choosen.id)
    return (
        <div className='Single'>
            <Header id='single' h1={choosen.name} img='/image/Header/Faq-title-area-img-1536x864.jpg' />
            <div className="product">
                <div className="left">
                    <div className="image">
                        <img src={choosen.img} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>{choosen.name}</h1>
                    <div className="icons">
                        {[...Array(5)].map((_,i)=>(
                            choosen.rating>i ? (<AiFillStar/> ): (<AiOutlineStar/>)
                        )
                        )}
                    </div>
                    <h4>$ {choosen.price}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massas. Cum sociis Theme natoque penatibus… Donec sodales sagittis magna. Sed consequat,… Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Maecenas tempus, tellus eget condimentum rhoncus?</p>
                    <div className="buttons">
                        <div className={quantity===0 ? "none" : "num"}>
                            <div className="quantity">{quantity}</div>
                            <div className="action">
                                <div className="inc" onClick={()=>increaseCartQuantity(choosen.id)}><FiPlus/></div>
                                <div className="dec" onClick={()=>decreaseCartQuantity(choosen.id)}><FiMinus/></div>
                            </div>
                        </div>
                        <div className={quantity!==0 ? "none" : "add"} onClick={()=>increaseCartQuantity(choosen.id)}>
                            ADD TO CART
                        </div>
                        {quantity!==0 &&(
                            <Link to='/cart'>
                                <div className="add">
                                    Go TO CART
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="scrollToTop">
                <a href={`#single`}>
                    <RxDoubleArrowUp/>
                </a>
            </div>
        </div>
    )
}

export default Single
