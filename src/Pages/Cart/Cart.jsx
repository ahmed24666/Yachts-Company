import './cart.scss'
import React from 'react'
import Header from './../../Components/Header/Header'
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import products from './../../context/Products'

const Cart = () => {
    const {cartItem, increaseCartQuantity, decreaseCartQuantity,removeItemFromCart} = useShoppingCart()
    const total =cartItem.reduce((total,cartI)=>{
        const item=products.find((f)=>f.id===cartI.id)
        return total + cartI.quantity * (item?.price ||0)
    },0)
    return (
        <div className='Cart'>
            <Header id='cart' img='/image/slider1/home-1-rev-3.jpg' h1='Cart' />
            <div className="cartComponent">
                <div className="title">
                    <h4 className="product">Product</h4>
                    <h4 className="price">Price</h4>
                    <h4 className="quantity">Quantity</h4>
                    <h4 className='total'>Subtotal</h4>
                </div>
                {cartItem.length===0 ? (<div className="empty">Your cart is empty</div>) : (
                    <>
                    <div className="items">
                        {cartItem.map((item)=>{
                           const same = products.find((d)=>d.id===item.id)
                            return(
                                <div className="item" key={item.id}>
                                    <div className="details">
                                        <div className="image">
                                            <img src={same.img} alt="" />
                                        </div>
                                        <h1>{same.name}</h1>
                                    </div>
                                    <p> $ {same.price} </p>
                                    <div className='count'>
                                        <div className="num">{item.quantity}</div>
                                        <div className="action">
                                            <div className="inc" onClick={()=>increaseCartQuantity(item.id)}><FiPlus/></div>
                                            <div className="dec" onClick={()=>decreaseCartQuantity(item.id)}><FiMinus/></div>
                                        </div>
                                    <div className="button" onClick={()=>removeItemFromCart(item.id)}><MdDelete/></div>
                                    </div>
                                    <p> $ {item.quantity * same.price}</p>
                                </div>
                            )
                        })}
    
                    </div>
                    <div className="allprice">
                            <h1>Total Price :</h1>
                            <p>${total}</p>
                    </div>
                    </>
                )}
            </div>
            <div className="scrollToTop">
                <a href={`#cart`}>
                    <RxDoubleArrowUp/>
                </a>
            </div>
        </div>
    )
}

export default Cart
