import React from 'react'
import { useGlobalContext } from '../Context'

const Products = () => {
    const {products, addItem, cartItems} = useGlobalContext();
  return (
   <>
        <h2 className='products-title'>We deliver at lightning speed⚡</h2>
     <div className='products-container'>
        {
        products.map((product) => {
            const {id, img, price, name, amount} = product;
            return <article key={id} className='product-card'>
                <div className="product-img"><img src={img} alt={name} /></div>
                <div className="product-info">
                    <p className="product-name">{name}</p>
                    <p className="product-price">${price}</p>
                </div>
                <button className="btn add" onClick={() => addItem(product)}>
                    
                    Add to cart {(0) ? '' : cartItems.map(item =>{
                     if(item.id === product.id )
                     return  `(${item.amount })`
                     }) } </button>
            </article>
        })
    }</div>
   </>
  )
}

export default Products