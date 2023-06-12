import './navbar.scss'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CgMenuRight } from 'react-icons/cg';
import { GiCrossedSabres } from 'react-icons/gi';
import { useShoppingCart } from '../../context/ShoppingCartContext';

const Navbar = () => {
    const {cartQuantity} = useShoppingCart()
    const [open, setOpen] = useState(false)
    const [color, setColor] = useState(false)
    const changeColor=()=>{
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }
        window.addEventListener('scroll',changeColor)
    return (
        <div className={color ? "Navbar header-bg" : "Navbar"}>
            <div className="list">
                <div className="item">
                <NavLink to='/'>
                    <h4>home</h4>
                </NavLink>
                </div>
                <div className="item">
                <NavLink to='/about'>
                    <h4>about us</h4>
                </NavLink>
                </div>
                <div className="item">
                <NavLink to='/crew'>
                    <h4>our crew</h4>
                </NavLink>
                </div>
                <div className="item">
                    <NavLink to='/tour'>
                        <h4>tour list</h4>
                    </NavLink>
                </div>
                <div className="image">
                    <img src="/image/Logo-light.png" alt="" />
                </div>
                <div className="icon" onClick={()=>setOpen(!open)}>
                    {open ?<GiCrossedSabres/> : <CgMenuRight/>}
                </div>
                <div className="item">
                    <NavLink to='/services'>
                        <h4>our services</h4>
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink to='/pricing'>
                        <h4>pricing plans</h4>
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink to='/shop'>
                        <h4>shop</h4>
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink to='/cart'>
                        <h4>{`Cart (${cartQuantity})`}</h4>
                    </NavLink>
                </div>
            </div>
            {open &&(
                <div className="vlist">
                    <div className="item" onClick={()=>setOpen(!open)}>
                    <NavLink to='/'>
                        <h4>home</h4>
                    </NavLink>
                    </div>
                    <div className="item" onClick={()=>setOpen(!open)}>
                    <NavLink to='/about'>
                        <h4>about us</h4>
                    </NavLink>
                    </div>
                    <div className="item" onClick={()=>setOpen(!open)}>
                    <NavLink to='/crew'>
                        <h4>our crew</h4>
                    </NavLink>
                    </div>
                    <div className="item" onClick={()=>setOpen(!open)}>
                        <NavLink to='/tour'>
                            <h4>tour list</h4>
                        </NavLink>
                    </div>
                    <div className="item" onClick={()=>setOpen(!open)}>
                        <NavLink to='/services'>
                            <h4>our services</h4>
                        </NavLink>
                    </div>
                    <div className="item" onClick={()=>setOpen(!open)}>
                        <NavLink to='/pricing'>
                            <h4>pricing plans</h4>
                        </NavLink>
                    </div>
                    <div className="item" onClick={()=>setOpen(!open)}>
                        <NavLink to='/shop'>
                            <h4>shop</h4>
                        </NavLink>
                    </div>
                    <div className="item" onClick={()=>setOpen(!open)}>
                        <NavLink to='/cart'>
                            <h4>{`Cart (${cartQuantity})`}</h4>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
