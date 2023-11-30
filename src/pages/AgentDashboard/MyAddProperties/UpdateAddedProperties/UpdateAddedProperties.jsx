/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../../../../hooks/useAuth";
import uploadImgToImgBB from '../../../../utils/imgbbUpload';

const UpdateAddedProperties = ({ propertyId }) => {
  const { user } = useAuth();
  const [propertyData, setPropertyData] = useState({
    title: '',
    location: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    purpose: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    // Fetch the property data
    axios.get(`http://localhost:5000/properties/${propertyId}`)
      .then(response => {
        setPropertyData(response.data);
      })
      .catch(error => console.error('Error fetching property:', error));
  }, [propertyId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const imageFile = e.target.files[0];
    try {
      const imageUrl = await uploadImgToImgBB(imageFile);
      setPropertyData(prevData => ({ ...prevData, imageUrl }));
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleUpdateDetailsSubmit = (e) => {
    e.preventDefault();
    // Call backend to update the property
    axios.patch(`http://localhost:5000/properties/${propertyId}`, propertyData)
      .then(() => {
      })
      .catch(error => {
        console.error('Error updating property:', error);
      });
  };


  return (
    <div>
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <form onSubmit={handleUpdateDetailsSubmit}>
        <div className="bg-white rounded-xl shadow dark:bg-slate-900">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700">Welcome Agent {user.displayName}</p>
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700">
            Update Property Details for Property ID: { propertyId}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 px-4 py-5 sm:px-6">
            Please fill in the information below to update your property.
          </p>
          <div className="mt-3 p-4 sm:pt-0 sm:p-7">
            <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
          <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
            Property Image
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-green-50 file:text-green-700
              hover:file:bg-green-100"
          />
          {propertyData.imageUrl && <img src={propertyData.imageUrl} alt="Property" className="w-32 h-32 rounded-full" />}
        </div>
              

              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Property Title
                </label>

                <input
                  id="af-submit-app-project-name"
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
                  id="af-submit-app-project-name"
                  type="text"
                  name="location"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter Property Location"
                />
              </div>

            

              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Logged in Agent Name
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
                  Logged in Agent Email
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
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Price Range
                </label>

                <input
                  id="af-submit-project-url"
                  type="number"
                  name="price"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder=" Enter Price Range"
                />
              </div>
          
              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Bed Rooms
                </label>

                <input
                  id="af-submit-project-url"
                  type="number"
                  name="bedrooms"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder=" Enter Bed Rooms"
                />
              </div>
          
              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Bath Rooms
                </label>

                <input
                  id="af-submit-project-url"
                  type="number"
                  name="bathrooms"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder=" Enter Bath Rooms"
                />
              </div>
              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Purpose
                </label>

                <input
                  id="af-submit-project-url"
                  type="text"
                  name="purpose"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder=" Enter Purpose Example : For Sale, For Rent, Sold"
                />
              </div>
              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Description
                </label>

                <input
                  id="af-submit-project-url"
                  type="text"
                  name="description"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder=" Enter Property Details"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-x-2">
              <button
                type="submit"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-900 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Submit Update Property Details
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default UpdateAddedProperties
