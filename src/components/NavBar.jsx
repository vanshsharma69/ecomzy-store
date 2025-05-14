import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import logo from "../assets/Ecomzy.png"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {

  const {cart}=useSelector((state) =>state)


  return (
    <div className='bg-gray-800 w-full h-16 shadow-md '> 
      <nav className='flex justify-between items-center h-16 max-w-6xl mx-auto'>
        <NavLink to="/">
          <img className='ml-5' src={logo} height={40} width={100} alt="Logo" />
        </NavLink >
        <div className="flex  items-center space-x-6 mr-5">
          <NavLink to="/" className='text-xl font-bold text-gray-100 hover:text-blue-300'>Home</NavLink>
          <NavLink to="/cart" className='font-bold text-gray-100'>
            <div className='relative'>
              <FaShoppingCart className='text-2xl' />
            {
              cart.length > 0 && (
              <span className='absolute -top-1 -right-2 text-[11px] bg-green-600  w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white '>{cart.length} </span>
              )
            }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
