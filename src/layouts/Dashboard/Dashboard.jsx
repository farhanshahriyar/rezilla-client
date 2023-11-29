import React from 'react'
import { FaAddressBook, FaHome, FaShoppingBag, FaUsers } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'
import {MdOutlinePayments} from 'react-icons/md'
import {MdRateReview} from 'react-icons/md'
import useWishList from '../../hooks/useWishList'
import useAdmin from '../../hooks/useAdmin'
import useAgent from '../../hooks/useAgent'


const Dashboard = () => {
  // const isAdmin = true; 
  // const isAgent = false; 
  const [wishList] = useWishList();
  // custom hook for admin panel
  const [isAdmin] = useAdmin()
  // custom hook for agent panel
  const [isAgent] = useAgent()

  return (
    <div>
         <div className='flex'>
        <div className="w-64 min-h-screen min-w-fit bg-green-900">
            <h1 className="text-2xl text-center text-white mt-5">Dashboard</h1>
            <ul className="mt-10 p-4">
            {isAdmin && (
            // Admin specific routes
            <>
            <li className="mb-2"><Link to="/dashboard" className="px-4 py-2 text-white bg-green-700 rounded flex"><FaHome className='text-xl' />Admin Home</Link></li>
            <li className="mb-2"><Link to="/dashboard/admin-profile" className="px-4 py-2 text-white bg-green-700 rounded flex"><FaHome className='text-xl' />Admin Profile</Link></li>
            <li className="mb-2"><Link to="/dashboard/manage-properties" className="px-4 py-2 text-white bg-green-700 rounded flex"><FaHome className='text-xl' />Manage Properties</Link></li>
            <li className="mb-2"><Link to="/dashboard/all-users" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaHome className='text-xl' />Manage User</Link></li>
            <li className="mb-2"><Link to="/dashboard/manage-reviews" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaUsers className='text-xl' />Manage Reviews</Link></li>
            </>
          )}
          {isAgent && (
            <>
              {/* Agent specific routes */}
              <li className="mb-2"><Link to="/dashboard/my-profile" className="px-4 py-2 text-white bg-green-700 rounded flex"><FaUsers className='text-xl' />Agent Profile</Link></li>
              <li className="mb-2"><Link to="/dashboard/add-property" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaHome className='text-xl' />Add Property</Link></li>
              <li className="mb-2"><Link to="/dashboard/my-added-properties" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaShoppingBag className='text-xl' />My Added Properties</Link></li>
              <li className="mb-2"><Link to="/dashboard/my-sold-properties" className="px-4 py-2 flex text-white bg-green-700 rounded"><MdOutlinePayments className='text-xl' />My Sold Properties</Link></li>
              <li className="mb-2"><Link to="/dashboard/requested-properties" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaAddressBook className='text-xl' />Requested Properties</Link></li>
            </>
          )}
          {!isAdmin && !isAgent && (
            // User specific routes
            <>
            <li className="mb-2"><Link to="/dashboard" className="px-4 py-2 text-white bg-green-700 rounded flex"><FaHome className='text-xl' />Home</Link></li>
                    <li className="mb-2"><Link to="/dashboard/my-profile" className="px-4 py-2 text-white bg-green-700 rounded flex"><FaHome className='text-xl' />My Profile</Link></li>
                    <li className="mb-2"><Link to="/dashboard/wishlist" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaShoppingBag className='text-xl' />Wishlist ({wishList.length})</Link></li>
                    {/* <li className="mb-2"><Link to="/dashboard/payment" className="px-4 py-2 flex text-white bg-green-700 rounded"><MdOutlinePayments className='text-xl' />Payment</Link></li> */}
                    <li className="mb-2"><Link to="/dashboard/property-bought" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaAddressBook className='text-xl' />Property Bought</Link></li>
                    <li className="mb-2"><Link to="/dashboard/add-review" className="px-4 py-2 flex text-white bg-green-700 rounded"><MdRateReview className='text-xl' />My Reviews</Link></li>
            </>
          )}
                {/* shared */}
                <div className="py-3 flex items-center text-xs text-white uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-700 dark:before:border-gray-600 dark:after:border-gray-600">More Options</div>
              
                <li className="mb-2"><Link to="/all-properties" className="px-4 py-2 flex text-white bg-green-700 rounded"><FaHome  className='text-xl' />Properties</Link></li>
                <li className="mb-2"><Link to="/contact" className="px-4 py-2 flex text-white bg-green-700 rounded">Contact</Link></li>
                <li className="mb-2"><Link to="/" className="px-4 py-2 flex text-white bg-green-700 rounded">Back To Home</Link></li>
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
