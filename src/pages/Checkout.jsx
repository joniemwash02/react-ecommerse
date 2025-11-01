import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = ({setOrder}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (
      !shippingInfo.fullName ||
      !shippingInfo.email ||
      !shippingInfo.phone ||
      !shippingInfo.address
    ) {
      alert("⚠️ Please fill out all required fields.");
      return;
    }

    alert("✅ Order placed successfully!");
    dispatch(clearCart());

    const neworder={
      products:cart.products,
      orderNumber:'1234',
      shippingInformation: shippingInfo,
      totalPrice:  cart.totalPrice
    }
    setOrder(neworder);
    navigate("/order-confirmation");
  };

  return (//
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        🧾 Checkout
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN - SHIPPING DETAILS */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            🚚 Shipping Information
          </h3>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={shippingInfo.fullName}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={shippingInfo.email}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Phone Number *
              </label>
              <input
                type="text"
                name="phone"
                value={shippingInfo.phone}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Street Address *
              </label>
              <textarea
                name="address"
                rows="3"
                value={shippingInfo.address}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  City / Town
                </label>
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={shippingInfo.postalCode}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition"
                />
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN - ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-fit">
          <h3 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
            🧺 Order Summary
          </h3>

          <div className="space-y-4">
            {cart.products.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
              cart.products.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-gray-700"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">x{item.quantity}</p>
                  </div>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="border-t pt-5 mt-6">
            <div className="flex justify-between text-lg font-semibold text-gray-900">
              <span>Total:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button
            className="w-full mt-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Secure checkout — payments are encrypted 🔒
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
