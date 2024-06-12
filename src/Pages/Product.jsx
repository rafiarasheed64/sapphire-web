import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import Productdisplay from '../Components/Productdisplay/Productdisplay'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
  const {Data} = useContext(ShopContext)
  const {productId} = useParams()
  const product = Data.find((e)=> e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      
    </div>
  )
}

export default Product