import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import {BiX} from 'react-icons/bi'
import './CartItems.css'

const CartItems = () => {
  const {Data,cartItems,removefromCart,getTotalCartAmount} = useContext(ShopContext)

  return (
    <div className='m-5'>
        <div className='cartitem'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-3' />
       {Data.map((e)=>{
        if(cartItems[e.id]>0){
            return (
                <div>
                <div className='cartitem'>
                    <img style={{height: '62px'}} src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>PKR{e.new_price}</p>
                    <button className='btn'>{cartItems[e.id]}</button>
                    <p>{e.new_price* cartItems[e.id]}</p>
                    <BiX onClick={()=>{removefromCart(e.id)}}/>
                </div>
            </div>
            )
        }
        return null
       })}
       <div className='d-flex justify-content-between p-5'>
        <div className='d-flex flex-1 flex-column mr-5 gap-4  w-50'>
            <div >
            <h1>Cart Totals</h1>
        </div>
        <div className='d-flex justify-content-between'>
            <p>Subtotal</p>
            <p>PKR{getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
            <p>Shipping Fee</p>
            <p>Free</p>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
            <h3>Total</h3>
            <h3>PKR{getTotalCartAmount()}</h3>
        </div>
       <button className='proceedbutton'>PROCEED TO CHECKOUT</button>
       </div>
       {/* </div> */}
       <div>
        <h6>If you a promo code,Enter it here</h6>
        <div>
            <input type="text" placeholder='promo code' />
            <button className='bg-dark text-light'>Submit</button>
        </div>
       </div>
       </div>
    </div>
  )
}

export default CartItems