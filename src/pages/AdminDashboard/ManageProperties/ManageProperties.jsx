import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const ManageProperties = () => {
    const [properties, setProperties] = useState([]);
    const {user} = useAuth()
    const navigate = useNavigate();

  useEffect(() => {
    // Fetch properties when component mounts
    if (!user?.email) return;
    axios.get(`http://localhost:5000/properties?email=${user?.email}`)
      .then(response => setProperties(response.data))
      .catch(error => {
        console.error('Error fetching properties:', error)
        navigate('/');
      });
  }, [user?.email]);

  const approveProperty = (propertyId) => {
    axios.patch(`http://localhost:5000/properties/approve/${propertyId}`)
      .then(response => {
        // Update the properties state
        setProperties(properties.map(property => property._id === propertyId ? { ...property, status: "approved" } : property));
        Swal.fire('Approved!', response.data.message, 'success');
      })
      .catch(error => {
        console.error('Error approving property:', error);
        Swal.fire('Error!', 'Could not approve property.', 'error');
      });
  };

  const rejectProperty = (propertyId) => {
    axios.patch(`http://localhost:5000/properties/reject/${propertyId}`)
      .then(() => {
        // Remove the property from state
        setProperties(properties.filter(property => property._id !== propertyId));
        Swal.fire('Rejected!', 'The property has been rejected.', 'success');
      })
      .catch(error => {
        console.error('Error rejecting property:', error);
        Swal.fire('Error!', 'Could not reject property.', 'error');
      });
  };

    const handleDelete = (propertyId) => {  
    // Call to backend to delete property
    axios.delete(`http://localhost:5000/properties/${propertyId}`)
      .then(() => {
        // Remove the property from state
        setProperties(properties.filter(property => property._id !== propertyId));
        Swal.fire('Deleted!', 'The property has been deleted.', 'success');
      })
      .catch(error => {
        console.error('Error deleting property:', error);
        Swal.fire('Error!', 'Could not delete property.', 'error');
      });
    }

  return (
    <div>
        <div className="flex flex-col">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">Manage Properties</h2>
            <p className="mt-1 max-w-2xl text-base text-gray-500">Total Properties {properties.length}</p>
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                        <tr>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Location</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Agent Name</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Agent Image</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Agent Email</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Price</th>
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {properties.map((property) => (
                          <tr key={property._id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{property.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{property.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{property.agentName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"> 
                            <img className="w-10 h-10 rounded-full object-cover" src={property.agentImg} alt={property.agentName} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{property.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{property.price}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                                {property.status === "pending" && (
                                <div className='flex gap-5'>
                                    <button onClick={() => approveProperty(property._id)} type='button' className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 '>Verify</button>
                                    <button onClick={() => rejectProperty(property._id)} type='button' className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 '>Reject</button>
                                </div>
                                  )}
                                
                                  {property.status === "verified" && <span className='text-green-800 text-lg'>Verified</span>
                                  }
                                
                                  {property.status === "reject" && <span className='text-red-800 text-lg'>Rejected</span>
                                  }
                            </td>
                    
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button onClick={() => handleDelete(property._id)}
                             type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
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
  )
}

export default ManageProperties
