import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import { MdOutlineDelete } from "react-icons/md";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 border p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 mb-4 bg-white">

      {/* Product Image */}
      <div className="w-[150px] h-[150px] flex items-center justify-center">
        <img src={item.image} alt={item.title} className="h-full object-contain" />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        <p className="text-sm text-gray-600">{item.description.split(" ").slice(0, 20).join(" ") + "..."}</p>

        <div className="flex items-center justify-between mt-2">
          <p className="text-green-600 font-bold text-lg">₹{item.price}</p>

          <button
            onClick={removeFromCart}
            className="text-red-500 hover:text-red-700 transition"
            title="Remove Item"
          >
            <MdOutlineDelete size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
