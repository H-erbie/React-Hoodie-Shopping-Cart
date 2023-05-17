import { useState } from 'react'
import './App.css'
import Products from './Components/Products'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import { useGlobalContext } from './Context'

function App() {
  const {closeCart} = useGlobalContext();
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
      <main onClick={closeCart}>
        <Products/>
      </main>
      
    </div>
  )
}

export default App
