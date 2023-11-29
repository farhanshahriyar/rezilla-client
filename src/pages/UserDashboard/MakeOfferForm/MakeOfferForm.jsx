import React from 'react'
import useAuth from '../../../hooks/useAuth'

const MakeOfferForm = () => {
    const {user} = useAuth()
  return (
    <div>
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <form>
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
                  <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                    Enter
                  </label>

                  <input
                    id="af-submit-project-url"
                    type="number"
                    name="price"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder=" Enter Price Range"
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
  )
}

export default MakeOfferForm
