import './shop.scss'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiTwitch } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { RxDoubleArrowUp } from 'react-icons/rx';
import products from '../../context/Products'
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../../context/ShoppingCartContext';


const Shop = () => {
    const [sort, setSort] = useState('select')
    const [filter, setFilter] = useState(products)
    const [activeCategory, setActiveCategory] = useState('All')
    // Sort product 
    const sortedTripList = 
    sort==='low' ? filter.sort((a,b)=>a.price - b.price) 
    : sort==='high' ? filter.sort((a,b)=>b.price - a.price) 
    : filter.sort((a,b)=>(a.name > b.name ? 1 : -1))
    //filter  
    useEffect(() => {
        
        if (activeCategory==='All') {
            setFilter(products)
            return;
        }
        const filtered = products.filter((product)=>product.category.includes(activeCategory))
        setFilter(filtered)
    }, [activeCategory])
    //context
    const { increaseCartQuantity} = useShoppingCart()

    return (
        <div className='Shop'>
            <Header id='shop' img='/image/Header/Faq-title-area-img-1536x864.jpg' h1='Shop'/>
            <div className="products">
                <div className="right">
                    <div className="price">
                        <h1>Filter by price</h1>
                        <div className="sorting" onClick={()=>{setSort('select');}}>
                            <div className={sort==='select' ? 'doot show' : 'doot'}></div>
                            <h5>Name</h5>
                        </div>
                        <div className="sorting" onClick={()=>{setSort('high');}}>
                            <div className={sort==='high' ? 'doot show' : 'doot'}></div>
                            <h5>Price High to Low</h5>
                        </div>
                        <div className="sorting" onClick={()=>{setSort('low');}}>
                            <div className={sort==='low' ? 'doot show' : 'doot'}></div>
                            <h5>Price Low To High</h5>
                        </div>
                    </div>
                    <div className="category">
                        <h1>Category</h1>
                        <div className="spans">
                            <span onClick={()=>setActiveCategory('All')}>All</span>
                            <span onClick={()=>setActiveCategory('Superyachts')}>Superyachts</span>
                            <span onClick={()=>setActiveCategory('Details')}>Details</span>
                            <span onClick={()=>setActiveCategory('Grand Marina')}>Grand Marina</span>
                            <span onClick={()=>setActiveCategory('Luxory')}>Luxory</span>
                            <span onClick={()=>setActiveCategory('Sailing Cruise')}>Sailing Cruise</span>
                            <span onClick={()=>setActiveCategory('The Caribbean')}>The Caribbean</span>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/image/Shop-banner.jpg" alt="" />
                    </div>
                    <div className="follow">
                        <h1>Follow Us</h1>
                        <div className="icons">
                            <div className="icon"><FiFacebook/></div>
                            <div className="icon"><FiInstagram/></div>
                            <div className="icon"><FiTwitter/></div>
                            <div className="icon"><FiTwitch/></div>
                            <div className="icon"><FiYoutube/></div>
                        </div>
                    </div>
                </div>
                <div className="left">
                    {filter.map((item)=>{
                        return(
                            <div className="card">
                                    <div className="imageCon">
                                        <Link to={`/product/${item.id}`}>
                                            <div className="image">
                                                <img src={item.img} alt="" />
                                            </div>
                                        </Link>
                                        <div className="hide" onClick={()=>increaseCartQuantity(item.id)}>
                                            <div className="add">Add To Cart</div>
                                        </div>
                                    </div>
                                <div className="text">
                                    <p>{item.category}</p>
                                    <h2>{item.name}</h2>
                                    <h4>${item.price}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="scrollToTop">
                <a href={`#shop`}>
                    <RxDoubleArrowUp/>
                </a>
            </div>
        </div>
    )
}

export default Shop
