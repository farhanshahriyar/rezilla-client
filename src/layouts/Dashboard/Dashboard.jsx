import React from 'react'
import { FaAddressBook, FaHome, FaPhone, FaUsers } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'
import {MdOutlinePayments} from 'react-icons/md'
import {MdRateReview} from 'react-icons/md'


const Dashboard = () => {
    // admin panel works
  const isAdmin = true; // true for admin panel and false for user panel
  // const isAgent = false; // true for agent panel and false for user panel
  return (
    <div>
         <div className='flex'>
        <div className="w-64 min-h-screen bg-green-900">
            <h1 className="text-2xl text-center text-white mt-5">Dashboard</h1>
            <ul className="mt-10 p-4">
                {
                  isAdmin ? <>
                  {/* dedicated */}
                <li className="mb-2"><Link to="/dashboard" className="px-4 py-2 text-white bg-green-700 rounded flex"><FaHome className='text-xl' />Admin Home</Link></li>
                <li className="mb-2"><Link to="/dashboard/add-property" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaHome className='text-xl' />Add Property</Link></li>
                <li className="mb-2"><Link to="/dashboard/all-users" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaUsers className='text-xl' />All Users</Link></li>
        
                {/* <li className="mb-2"><Link to="/dashboard/order" className="px-4 py-2 flex text-white bg-green-700 rounded"><MdFindInPage className='text-xl' />Track Order</Link></li> */}
                  </> : 
                  <>
                    {/* dedicated */}
                    <li className="mb-2"><Link to="/" className="px-4 py-2 text-white bg-green-700 rounded flex"><FaHome className='text-xl' />Home</Link></li>
                    {/* <li className="mb-2"><Link to="/dashboard/carts" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaShoppingCart className='text-xl' />My Cart ({cart.length})</Link></li> */}
                
                    <li className="mb-2"><Link to="/dashboard/payment" className="px-4 py-2 flex text-white bg-green-700 rounded"><MdOutlinePayments className='text-xl' />Payment</Link></li>
                    <li className="mb-2"><Link to="/dashboard/add-review" className="px-4 py-2 flex text-white bg-green-700 rounded"><MdRateReview className='text-xl' />Add Review</Link></li>
                    <li className="mb-2"><Link to="/dashboard/booking" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaAddressBook className='text-xl' />My Booking</Link></li>
                   
                  </>
                }
                {/* shared */}
                <div className="py-3 flex items-center text-xs text-white uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-700 dark:before:border-gray-600 dark:after:border-gray-600">More Options</div>
              
                <li className="mb-2"><Link to="/order/salad" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaHome  className='text-xl' />Properties</Link></li>
                <li className="mb-2"><Link to="/contact-us" className="px-4 py-2 flex text-white bg-green-700 rounded">Contact</Link></li>
            </ul>
        </div>
        <div className='flex-1 p-8'>
            <Outlet />
        </div>
    </div>
    </div>
  )
}

export default Dashboard
