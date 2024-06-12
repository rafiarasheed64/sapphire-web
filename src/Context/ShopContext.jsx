import React, { createContext, useState}  from "react";
import Data from '../Components/Assets/Data'

export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
    let cart ={}
    for (let index = 0; index < Data.length - 1; index++) {
        cart[index] = 0; 
        
        console.log(index, "indexx");

    }
    return cart
}



const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart())

    console.log(cartItems);

    // const [ cartQuantity, setCartQuantity ] = useState(1)


    // function increment_quantity() {
    //     setCartQuantity( cartQuantity + 1  )
    // }
    // function decrement_quantity() {
    //     setCartQuantity( cartQuantity - 1  )
    // }

    const addtoCart = (itemId)=>{
        setCartItems((prev)=> ({...prev,[itemId]: prev[itemId] + 1 }))



        console.log(cartItems, "cart Itemsss");
        console.log(Data, "Data Itemsss");

    }
    const removefromCart = (itemId)=>{
        setCartItems((prev)=>   ({...prev,[itemId]: prev[itemId] - 1}))
    }
    const getTotalCartAmount = () =>{
        let totalAmount = 0
        for (const item in cartItems){
            if(cartItems[item]> 0){
                let itemInfo = Data.find((product)=> product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }
    const getTotalCartItem = () =>{
        let totalItem = 0
        for(const item in cartItems){
            if (cartItems[item]>0) {
                totalItem += cartItems[item]     
            }
        }
        return totalItem
    }
    const contextvalue = {Data,cartItems,addtoCart,removefromCart,getTotalCartAmount,getTotalCartItem}
    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider