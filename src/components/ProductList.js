import React from 'react'
import Product from './Product.js'

export default function ProductList(props){
  // console.log(props);
  return(
    props.productlist.length > 0 ?
    props.productlist.map((product, i)=>{
      return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} DecrementQuantity={props.DecrementQuantity} removeItem={props.removeItem} />
       })
       : <h1>No products found.</h1>
  )
}