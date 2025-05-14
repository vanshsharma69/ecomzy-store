import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, item) => acc + item.price, 0));
  }, [cart]);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 md:p-8">
      {
        cart.length > 0 ? (
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">

            {/* Left: Cart Items */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
              {
                cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>

            {/* Right: Summary */}
            <div className="w-full lg:w-1/3 bg-white shadow-md rounded-md p-6 h-fit">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <p className="mb-2 text-gray-700">Total Items: <span className="font-semibold">{cart.length}</span></p>
              <p className="mb-4 text-gray-700">Total Amount: <span className="font-bold text-green-600">₹{totalAmount.toFixed(2)}</span></p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                Checkout Now
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[70vh] text-center">
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <Link to="/">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
