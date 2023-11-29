import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import uploadImgToImgBB from "../../../utils/imgbbUpload";
import Swal from "sweetalert2";
import axios from "axios";

const AddPropery = () => {
  const {user} = useAuth()
  const [imageFile, setImageFile] = useState(null);


  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };


  const propertyPostHandler = async (e) => {
    e.preventDefault();
    console.log('button e tip porse mama')
    if (imageFile) {
      try {
        const imageUrl = await uploadImgToImgBB(imageFile);
        const finalPropertyData = {
          title: e.target.title.value,
          location: e.target.location.value,
          imageUrl,
          agentImg: user.photoURL,
          agentName: e.target.uname.value,
          email: e.target.email.value,
          price: parseInt(e.target.price.value),
          bedrooms: parseInt(e.target.bedrooms.value),
          bathrooms: parseInt(e.target.bathrooms.value),
          purpose: e.target.purpose.value,
          description: e.target.description.value,
        };
        console.log(finalPropertyData);
        
        // axios post request
        axios.post('http://localhost:5000/properties', finalPropertyData)
        .then((response) => {
          console.log(response);
          Swal.fire({
            title: "Success!",
            text: "Property Added Successfully sent!" + " " + "Please wait for admin approval!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong!",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
      } catch (error) {
        console.error('Error uploading image:', error);
        Swal.fire({ 
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
    // form reset
    e.target.reset();
  };

  return (
    <div>
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <form onSubmit={propertyPostHandler}>
          <div className="bg-white rounded-xl shadow dark:bg-slate-900">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700">Welcome {user.displayName}</p>
            <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700">
              Add Property
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 px-4 py-5 sm:px-6">
              Please fill in the information below to add a new property.
            </p>
            <div className="mt-3 p-4 sm:pt-0 sm:p-7">
              <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                  <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                    Logged in Agent Image
                  </label>
                  <img src={user.photoURL} alt={user.displayName} className="w-32 h-32 rounded-full" name='agentImg' />
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
                    Property Image Link or Upload Image
                  </label>

                  <input disabled
                    id="af-submit-app-project-name"
                    type="text"
                    name="imageUrl"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Enter Property Image link"
                  />
   
                     <hr className="text-sm text-black font-bold dark:text-gray-400"></hr>
 
                  
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="py-2 px-3 block w-full text-sm rounded-lg"
                    accept="image/*"
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
                  Submit Property Details
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPropery;
