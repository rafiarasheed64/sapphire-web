import React, { useContext } from 'react'
import { BiStar,BiSolidStar } from 'react-icons/bi'
import { ShopContext } from '../../Context/ShopContext'
import "./Productdisplay.css"

const Productdisplay = (props) => {
    const {product} = props
    const {addtoCart, removefromCart, getTotalCartItem } = useContext(ShopContext)
  return (
    <div className='d-flex px-5'>
        <div className='d-flex gap-3'>
            <div className='d-flex flex-column gap-2'>
                <img style={{height: '163px'}} src={product.image} alt="" />
                <img style={{height: '163px'}} src={product.image} alt="" />
                <img style={{height: '163px'}} src={product.image} alt="" />
                <img style={{height: '163px'}} src={product.image} alt="" />
            </div>
            <div>
            <img style={{height: '676px',width: '570px'}} src={product.image} alt="" />
            </div>
            <div>

        <div>
            <h1>{product.name}</h1>

        </div>
            <div style={{color: 'yellow'}}>
                <BiSolidStar/>
                <BiSolidStar/>
                <BiSolidStar/>
                <BiSolidStar/>
                <BiStar/>
            </div>
                <p>(125)</p>
            <div>
                <h4>PKR{product.new_price}</h4>
                <h6 style={{position: 'relative'}} className='text-danger'>PKR{product.old_price}
                <div style={{height: '1px', width: '70px',position: 'absolute',top: '10px',backgroundColor: 'red'}} className="line"></div>
                </h6>

            </div>
            <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an  undershirt or outer garments</p>
            <div>
                <h2>Select Size</h2>
                <div className='d-flex gap-4'>
                    <button style={{backgroundColor: 'gray',padding: '5px 14px',border: 'none', borderRadius: '3px',color: 'white',fontSize: '20px'}}>S</button>
                    <button style={{backgroundColor: 'gray',padding: '5px 14px',border: 'none', borderRadius: '3px',color: 'white',fontSize: '20px'}}>M</button>
                    <button style={{backgroundColor: 'gray',padding: '5px 14px',border: 'none', borderRadius: '3px',color: 'white',fontSize: '20px'}}>L</button>
                    <button style={{backgroundColor: 'gray',padding: '5px 14px',border: 'none', borderRadius: '3px',color: 'white',fontSize: '20px'}}>XL</button>
                    <button style={{backgroundColor: 'gray',padding: '5px 14px',border: 'none', borderRadius: '3px',color: 'white',fontSize: '20px'}}>XXL</button>
                </div>
            </div>

            <button className='mt-3 py-2 px-4 bg-danger border-0 text-light' onClick={()=>{addtoCart(product.id)}}>ADD TO CART</button>
            
            <button onClick={ ()=> removefromCart(product.id)  }>-</button>
            <input type="number" id='in' value={`${getTotalCartItem()}`} className='inpt' />
            <button onClick={()=>{addtoCart(product.id)}}>+</button>

            {/* if(  check == true  ){
                <button onClick={ ()=> removefromCart(product.id)  }>-</button>
                <input type="number" id='in' value={`${product.id}`} className='inpt' />
                
            } else {
                <button onClick={()=>{addtoCart(product.id)}}>+</button>
                <input type="number" id='in' value={`${product.id}`} className='inpt' />

            } */}




            </div>

            </div>
        </div>
    
  )
}

export default Productdisplay