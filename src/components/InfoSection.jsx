import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-4xl text-red-600 mb-3" />,
      title: "Free Shipping",
      description: "Get your order delivered fast at no extra cost.",
    },
    {
      icon: <FaHeadset className="text-4xl text-red-600 mb-3" />,
      title: "24/7 Support",
      description: "We're here to help you anytime.",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-red-600 mb-3" />,
      title: "Secure Payments",
      description: "Your payment information is safe with us.",
    },
    {
      icon: <FaLock className="text-4xl text-red-600 mb-3" />,
      title: "Secure Checkout",
      description: "Your information is protected with us.",
    },
    {
      icon: <FaTag className="text-4xl text-red-600 mb-3" />,
      title: "Special Offers",
      description: "Check out our latest promotions.",
    },
  ]

  return (
    <div className="w-full bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-5 rounded-lg shadow-sm hover:shadow-lg transition transform hover:scale-105 duration-300 cursor-pointer"
          >
            {item.icon}
            <h3 className="text-base md:text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoSection
