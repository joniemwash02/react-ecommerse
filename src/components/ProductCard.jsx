import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const NewProducts = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg border relative group transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <div className="w-full h-52 flex items-center justify-center mb-4 overflow-hidden rounded">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Name */}
      <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>

      {/* Price */}
      <p className="text-red-600 text-lg font-bold mt-1">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center mt-2 space-x-1">
        {[...Array(4)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        <FaStar className="text-gray-300" />
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={(e) => handleAddToCart(e, product)}
        className="absolute bottom-4 right-4 flex items-center justify-center bg-red-600 text-white w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden group-hover:w-32 hover:bg-red-700"
      >
        <span className="group-hover:hidden text-lg">+</span>
        <span className="hidden group-hover:block px-2">Add to Cart</span>
      </button>
    </div>
  );
};

export default NewProducts;
