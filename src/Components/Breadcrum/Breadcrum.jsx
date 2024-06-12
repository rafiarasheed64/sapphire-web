import React from 'react'
import {BiChevronRight} from 'react-icons/bi'

const Breadcrum = (props) => {
    const {product} = props
  return (
    <div style={{fontWeight: '600',margin: '40px 50px',textTransform: 'capitalize',fontSize: '16px',display: 'flex',alignItems: 'center'}}>
        HOME <BiChevronRight/> SHOP <BiChevronRight/> {product.category} <BiChevronRight/>{product.name}
    </div>
  )
}

export default Breadcrum