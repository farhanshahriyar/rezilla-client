import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useParams, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const MakeOfferForm = () => {
  const property = useLoaderData();
  const axios = useAxiosPublic();
  const {user} = useAuth();
    const { id } = useParams(); 
    const [offer, setOffer] = useState({
        propertyId: property._id,
        title: property.title, // to be fetched or passed via props
        location: property.location, 
        agentName: property.agentName, 
        offeredAmount: '',
        buyerEmail: user.email,
        buyerName: user.displayName,
        buyingDate: new Date().toISOString().slice(0, 10), // Default to today's date
    });
    console.log(offer)
    const [error, setError] = useState('');


    // TODO: Fetch the property details using propertyId and set initial state

    // const handleChange = (e) => {
    //     setOffer({ ...offer, [e.target.name]: e.target.value(parseInt) });
    // };
    const handleChange = (e) => {
      const value = e.target.name === 'offeredAmount' ? parseInt(e.target.value, 10) : e.target.value;
      setOffer({ ...offer, [e.target.name]: value });
    };
  

    const handleOfferSubmit = async (e) => {
        e.preventDefault();
        // console.log(handleOfferSubmit)

        try {
            const response = await axios.post('/offers', offer);
            Swal.fire('Success!', 'Offer has been made. Please wait for agent acceptation', 'success', 1500);
            console.log(response.data);
        } catch (err) {
            Swal.fire('Error!', 'Could not make offer.', 'error');
            setError(err.response.data.message);
        }
    };
   
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700"> Make Offer on Title Id {property._id}</h2>

      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <form onSubmit={handleOfferSubmit}>
          <div className="bg-white rounded-xl shadow dark:bg-slate-900">
            
            <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700">
            Make Offer on Title Name
            </h2>
           
            <div className="mt-3 p-4 sm:pt-0 sm:p-7">
              <div className="space-y-4 sm:space-y-6">
             
                
                <div className="space-y-2">
                  <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                    Property Title
                  </label>

                  <input
                    id="af-submit-app-project-name"
                    readOnly
                    disabled
                    value={property.title}
                    type="text"
                    name="title"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Enter Property Title."
                  />
                </div>

                <div className="space-y-2">
                  <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                    Property Location
                  </label>

                  <input
                   readOnly
                   disabled
                   value={property.location}
                    id="af-submit-app-project-name"
                    type="text"
                    name="location"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Enter Property Location"
                  />
                </div>
                <div className="space-y-2">
                  <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                    Property Agent Name
                  </label>

                  <input
                   readOnly
                   disabled
                   value={property.agentName}
                    id="af-submit-app-project-name"
                    type="text"
                    name="location"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Enter Property Location"
                  />
                </div>

            
                <div className="space-y-2">
                  <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Buyer Name
                  </label>

                  <input
                    id="af-submit-project-url"
                    readOnly
                    disabled
                    type="text"
                    name="uname"
                    value={user.displayName}
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Logged User. Example : MD.FARHAN SHAHRIYAR"
                  />
                </div>

                <div className="space-y-2">
                  <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                    Buyer Email
                  </label>

                  <input
                    id="af-submit-project-url"
                    readOnly
                    disabled
                    type="text"
                    value={user.email}
                    name="email"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Logged User. Example : MD.FARHAN SHAHRIYAR"
                  />
                </div>

            
                <div className="space-y-2">
                  <label className=" inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                    Enter Offer Amount
                  </label>
                  <input
                  className='py-2 px-3 w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                    type="number"
                    name="offeredAmount"
                    value={offer.offeredAmount}
                    onChange={handleChange}
                    placeholder="Enter Offered Amount"
                />
                </div>
              </div>

              <div className="mt-5 flex justify-center gap-x-2">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-900 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Make Offer to Agent
                </button>
              </div>
            </div>
          </div>
        </form>
        {error && <p className='text-base text-red-700 font-bold'>{error}</p>}
      </div>
    </div>
  )
}

export default MakeOfferForm
