import React, { useState } from 'react'
import { useContext } from 'react'
import {createContext} from 'react'

const ShoppingCartContext = createContext({})

const ShoppingCartProvidor = ({children}) => {
    const [cartItem, setCartItem] = useState([])
    const getItemsQuantity =(id)=>{
        return(
            cartItem.find((item)=>item.id=== id)?.quantity ||0
        )
    }
    const increaseCartQuantity =(id)=>{
        return(
            setCartItem((currItems)=>{
                if (currItems.find((item)=>item.id === id) == null) {
                    return [...currItems, {id, quantity: 1}]
                }else{
                    return currItems.map((item)=>{
                        if (item.id===id) {
                            return {...item , quantity: item.quantity + 1}
                        }else{
                            return item
                        }
                    })
                }
            })
        )
    }
    const decreaseCartQuantity =(id)=>{
        return(
            setCartItem((currItems)=>{
                if (currItems.find((item)=>item.id === id) == null) {
                    return currItems.filter((item)=>item.id !== id)
                }else{
                    return currItems.map((item)=>{
                        if (item.id===id) {
                            return {...item , quantity: item.quantity===0 ? 0 : item.quantity - 1}
                        }else{
                            return item
                        }
                    })
                }
            })
        )
    }
    const removeItemFromCart=(id)=>{
        setCartItem((currItems)=>currItems.filter((item)=>item.id !==id))
    }
    const cartQuantity = cartItem.reduce((q,item)=>(item.quantity + q),0)
    
    return (
        <ShoppingCartContext.Provider value={{cartItem ,cartQuantity,getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvidor

export const useShoppingCart=()=>{
    return useContext(ShoppingCartContext)
}

