import React from "react";
import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate();

  if (!order || !order.products) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700">
          No order details found 😕
        </h2>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-md"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            🎉 Thank You for Your Order!
          </h2>
          <p className="text-gray-600 text-lg">
            Your order has been placed successfully. A confirmation email has
            been sent to <span className="font-semibold">{order.shippingInformation.email}</span>.
          </p>
        </div>

        {/* ORDER SUMMARY */}
        <div className="border-t border-gray-200 pt-6 mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            🧾 Order Summary
          </h3>
          <div className="flex flex-col md:flex-row justify-between text-gray-700 mb-6">
            <div>
              <p>
                <span className="font-medium">Order Number:</span> #{order.orderNumber}
              </p>
              <p>
                <span className="font-medium">Total Price:</span> $
                {order.totalPrice.toFixed(2)}
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">Full Name:</span>{" "}
                {order.shippingInformation.fullName}
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                {order.shippingInformation.phone}
              </p>
            </div>
          </div>
        </div>

        {/* SHIPPING INFO */}
        <div className="border-t border-gray-200 pt-6 mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            🚚 Shipping Information
          </h3>
          <div className="text-gray-700 space-y-2">
            <p>{order.shippingInformation.address}</p>
            <p>
              {order.shippingInformation.city}, {order.shippingInformation.postalCode}
            </p>
          </div>
        </div>

        {/* PRODUCTS ORDERED */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            🛍️ Products Ordered
          </h3>
          <div className="space-y-4">
            {order.products.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
                </div>
                <p className="font-semibold text-gray-900">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
