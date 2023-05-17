import React from 'react'
import {GiShoppingCart} from 'react-icons/gi'
import { useGlobalContext } from '../Context'

const Navbar = () => {
    
    const {amount, openCart} = useGlobalContext();
  return (
    <nav className='nav-container'>
        <h1 className='app-name'>Herbie's Kloding</h1>
        <button className="btn cart-icon" onClick={openCart}><GiShoppingCart/><span className='cart-items-num'>{amount}</span></button>
    </nav>
  )
}

export default Navbar