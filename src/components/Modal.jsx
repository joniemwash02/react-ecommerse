import React from "react";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => setIsModalOpen(true)} // Close when clicking outside
    >
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
