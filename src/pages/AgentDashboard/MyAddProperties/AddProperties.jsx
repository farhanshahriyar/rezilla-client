import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddProperties = () => {
    const [properties, setProperties] = useState([]);
    console.log(properties)
    const {user} = useAuth()
    const navigate = useNavigate();

  useEffect(() => {
    // Fetch properties when component mounts
    if (!user?.email) return;
    axios.get(`http://localhost:5000/properties-approved?email=${user?.email}`)
      .then(response => setProperties(response.data))
      .catch(error => {
        console.error('Error fetching properties:', error)
        navigate('/');
      });
  }, [user?.email]);

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
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700"> My Added Properties are : {properties.length}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map(property => (
                <div key={property.id} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <img className="h-52 w-full object-cover rounded-t-xl" src={property.imageUrl} alt={property.title} />
                    <div className="p-4 md:p-6">
                        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                            {property.location}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                            {property.title}
                        </h3>
                        <p className="mt-3 text-gray-500">
                            Agent: {property.agentName}
                        </p>
                        <p className="text-gray-500">
                            Status: {property.status}
                        </p>
                        <p className="text-gray-500">
                            Price: {property.price}
                        </p>
                    </div>
                    <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700">
                        {property.status !== 'reject' && (
                          <Link to={`/dashboard/update-myaddedproperty/${property._id}`} className='w-full'>
                            <button className="w-full py-3 px-4 text-sm font-medium text-gray-800 dark:text-white hover:bg-green-900 hover:text-white">
                                Update
                            </button>
                            </Link>
                        )}
                        <button onClick={() => handleDelete(property._id)}
                         className="w-full py-3 px-4 text-sm font-medium text-gray-800 dark:text-white hover:bg-red-800 hover:text-white">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default AddProperties