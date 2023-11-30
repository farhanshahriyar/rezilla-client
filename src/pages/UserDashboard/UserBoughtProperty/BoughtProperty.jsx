import React, { useState, useEffect } from 'react';

const BoughtProperty = () => {
  const [boughtProperties, setBoughtProperties] = useState([]);

  useEffect(() => {
    // Fetch the bought properties from the backend
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/bought-record'); // 265 index.js
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setBoughtProperties(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchProperties();
  }, []);

  const handlePayment = async (propertyId) => {
    // Here you would integrate with the Stripe payment
    // Redirect the user to the payment page or open a payment modal
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <h2 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700">
      My Bought Properties are : {boughtProperties.length}
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {boughtProperties.map(property => (
          <div key={property._id} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          {/* <img className="h-52 w-full object-cover rounded-t-xl" src={property.imageUrl} alt={property.title} /> */}
          <div className="p-4 md:p-6">
          <h2 className='text-gray-800 font bold'>Property Title : <br></br>
          <span className='text-black font-medium'>{property.title}</span></h2>
          <p className='text-gray-800 font bold'>Location: <br></br>
          <span className='text-black font-medium'>{property.location}</span></p>
          {/* You would display the property image here */}
          <p>Agent: {property.agentName}</p>
          <p className='text-gray-800 font bold'>Offered Amount: $<span className='text-green-600 font-medium'>{property.offeredAmount}</span></p>
          <p className='text-green-600 font-medium'>Status: {property.status}</p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700">
          {property.status === 'accepted' && (
            <button onClick={() => handlePayment(property._id)} className='w-full py-3 px-4 text-sm font-medium text-white bg-green-900 dark:text-white hover:bg-black hover:text-white'>Pay</button>
          )}
          {/* Display transaction ID if status is 'bought' */}
        </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default BoughtProperty;
