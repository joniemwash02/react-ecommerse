import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/Images/empty-cart.jpg";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("176 Kangari Road, Makomboki, Kenya");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cart.products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <img src={EmptyCart} alt="Empty Cart" className="w-64 md:w-80 mb-6" />
        <h2 className="text-xl font-semibold text-gray-600">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mt-2">Start shopping to fill it up!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-16">
      <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🛒 Your Shopping Cart
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-4 md:p-6">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-5 font-semibold text-gray-700 border-b pb-3 mb-4 uppercase text-sm">
            <p>Product</p>
            <p className="text-center">Price</p>
            <p className="text-center">Quantity</p>
            <p className="text-center">Subtotal</p>
            <p className="text-center">Remove</p>
          </div>

          {/* Cart Items */}
          {cart.products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-1 md:grid-cols-5 items-center border-b py-4 gap-4 text-gray-700"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-contain rounded-lg border"
                />
                <div>
                  <h3 className="font-medium text-gray-800 text-base">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {product.description?.slice(0, 40)}...
                  </p>
                </div>
              </div>

              <p className="text-center text-gray-600 font-medium">
                ${product.price.toFixed(2)}
              </p>

              <div className="flex items-center justify-center gap-3">
                <button
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                >
                  -
                </button>
                <span className="font-semibold text-gray-700">
                  {product.quantity}
                </span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => dispatch(increaseQuantity(product.id))}
                >
                  +
                </button>
              </div>

              <p className="text-center font-semibold text-gray-800">
                ${(product.price * product.quantity).toFixed(2)}
              </p>

              <div className="flex justify-center">
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN - ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
          <h4 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">
            Order Summary
          </h4>

          <div className="flex justify-between text-gray-700 mb-3">
            <span>Total Items:</span>
            <span>{cart.totalQuantity}</span>
          </div>

          <div className="flex flex-col text-gray-700 mb-6">
            <p className="font-medium mb-1">Shipping Address:</p>
            <p className="text-gray-600 text-sm mb-2">{address}</p>
            <button
              className="self-start text-blue-600 text-sm hover:underline"
              onClick={() => setIsModalOpen(true)}
            >
              Change Address
            </button>
          </div>

          <div className="border-t pt-3">
            <div className="flex justify-between text-gray-900 font-semibold text-lg mb-2">
              <span>Total Price:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button
            className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition duration-300 shadow"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>

          <button
            className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 rounded-full transition duration-300"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>

          <p className="text-sm text-gray-500 mt-3 text-center">
            Secure checkout — all payments are encrypted 🔒
          </p>
        </div>

        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <ChangeAddress
            setAddress={setAddress}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Cart;
