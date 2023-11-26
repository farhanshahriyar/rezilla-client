import React from 'react';
import overlayDec from '../../../../public/assets/images/clientsay/Ellipse16.svg';

const CTA = () => {
  return (
    <div className="relative bg-[#143C38] rounded-3xl overflow-hidden shadow-lg flex items-center p-6 mt-10 mb-10">
      <div className="z-10 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="text-white text-center md:text-left md:px-6 flex-1">
          <h2 className="text-2xl font-bold">Become an Agent.</h2>
          <p className="mt-2">
            Fusce venenatis tellus a felis scelerisque, venenatis tellus a felis scelerisque.
          </p>
        </div>
        <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default CTA;
