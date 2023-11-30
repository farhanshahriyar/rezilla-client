import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RequestedProperties = () => {
  const {user} = useAuth()
  const [properties, setProperties] = useState([]);
  console.log(properties)
  const axios = useAxiosPublic();
  // const navigate = useNavigate();

  useEffect(() => {
    // Fetch properties when component mounts
    if (!user?.email) return;
    axios.get(`http://localhost:5000/properties-requested?email=${user?.displayName}`)
      .then(response => setProperties(response.data))
      .catch(error => {
        console.error('Error fetching properties:', error)
        // navigate('/');
      });
  }, [user?.email]);

  // handle offer accept and reject from agent what user requested
  // Function to handle accept
const handleOfferAccept = (propertyId) => {
  axios.patch(`http://localhost:5000/offerproperties/accept/${propertyId}`)
    .then(response => {
      // Update your state here to reflect changes
      Swal.fire('Accepted!', 'The property has been accepted.', 'success');
      // This might involve filtering the properties array and updating the status of the accepted property
      setProperties(properties.map(property => property._id === propertyId ? { ...property, status: "accepted" } : property));
    })
    .catch(error => console.error('Error accepting property:', error));
};

// Function to handle reject
const handleOfferReject = (propertyId) => {
  axios.patch(`http://localhost:5000/offerproperties/reject/${propertyId}`)
    .then(response => {
      Swal.fire('Rejected!', 'The property has been rejected.', 'success');
      // This might involve filtering the properties array and removing the rejected property
      setProperties(properties.filter(property => property._id !== propertyId));
    })
    .catch(error => console.error('Error rejecting property:', error));
};

  return (
    <div>
      <h2 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700">Requested Property</h2>
      <p className="mt-1 max-w-2xl text-base text-gray-700">Total Requested Property : <span className="font-bold">{properties.length}</span> </p>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Property Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Property Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Buyer Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Buyer Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Offer Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action 1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action 2
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {/* map */}
                  {properties.map((property, index) => (
                  <tr key={property._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {property.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {property.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {property.buyerEmail}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {property.buyerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-bold dark:text-gray-200">
                      ${property.offeredAmount}
                    </td>
                    <td aria-readonly className="px-6 py-4 whitespace-nowrap text-sm text-white bg-gray-700 dark:text-gray-200">
                      {
                        property.status === "pending" ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Pending
                          </span>
                        ) : property.status === "accepted" ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Accepted
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Rejected
                          </span>
                        )
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        onClick={() => handleOfferAccept(property._id)}
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Accept
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button 
                      onClick={() => handleOfferReject(property._id)}
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestedProperties;
