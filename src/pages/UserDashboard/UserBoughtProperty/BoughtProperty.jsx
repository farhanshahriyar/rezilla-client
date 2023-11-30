import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BoughtProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/bought-properties')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => console.error('Error fetching bought properties:', error));
  }, []);

  const handlePayment = (propertyId) => {
    // Logic to handle payment
    console.log('Redirect to payment for propertyId:', propertyId);
    // redirect to the payment page or open a payment modal
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700">
        My Bought Property
      </h2>
      <p className="mt-1 max-w-2xl text-base text-gray-700">
        Total Bought Property: {properties.length}
      </p>
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr className="divide-x divide-gray-200 dark:divide-gray-700">
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Property Title</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Property Location</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Agent Name</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Offered Amount</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {properties.map((property) => (
                  <tr key={property.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{property.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{property.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{property.agentName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{property.offeredAmount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{property.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      {property.status === 'accepted' && (
                        <button
                          type="button"
                          onClick={() => handlePayment(property.id)}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          Pay
                        </button>
                      )}
                      {property.status === 'bought' && (
                        <span>Transaction ID: {property.transactionId}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoughtProperty;
