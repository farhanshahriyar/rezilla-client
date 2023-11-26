// /* eslint-disable no-unused-vars */
// import React, { useContext, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { AuthContext } from '../../../providers/AuthProvider';
// import Swal from 'sweetalert2';

// const Header = () => {
//     const {user, logOut} = useContext(AuthContext);
//     const { pathname } = useLocation();
//     const isActive = (path) => pathname === path;

//      // State for controlling dropdown visibility
//      const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//      // Toggle dropdown
//      const toggleDropdown = () => {
//          setIsDropdownOpen(!isDropdownOpen);
//      };
//      console.log(isDropdownOpen)

//     // logout functionalities
//   const handleLogout = () => {
//     logOut()
//     .then((result) => {
//       Swal.fire({
//         icon: 'success',
//         title: 'Logout Successful',
//         text: 'You are logged out successfully!',
//       });
//     })
//     .catch((error) => {
//       console.log(error)
//     });
//   }


//   return (
//     <div>
//             <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
//                 <nav className="mt-6 relative max-w-7xl w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
//                     <div className="flex items-center justify-between">
//                     <Link to="/">
//                         {/* <img className="h-8 w-auto sm:h-10" src={logoHead} alt="Job World" /> */}
//                         <svg width="124" height="50" viewBox="0 0 124 50" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <circle cx="25" cy="25" r="25" fill="#143C38"/>
//                         <g clipPath="url(#clip0_8_2)">
//                         <path d="M36.715 22.165L25.465 13.165C25.332 13.0585 25.1667 13.0005 24.9963 13.0005C24.8258 13.0005 24.6605 13.0585 24.5275 13.165L13.2775 22.165C13.1561 22.2624 13.0681 22.3951 13.0255 22.5447C12.9829 22.6944 12.9879 22.8536 13.0398 23.0002C13.0917 23.1469 13.188 23.2738 13.3152 23.3634C13.4425 23.4529 13.5944 23.5006 13.75 23.5H15.25V36.25C15.25 36.4489 15.329 36.6397 15.4697 36.7803C15.6103 36.921 15.8011 37 16 37H31V35.5H28V28.75C28 28.5511 27.921 28.3603 27.7803 28.2197C27.6397 28.079 27.4489 28 27.25 28H22.75C22.5511 28 22.3603 28.079 22.2197 28.2197C22.079 28.3603 22 28.5511 22 28.75V35.5H16.75V23.5H29.5V22H15.8875L25 14.71L34.1125 22H34C33.8011 22 33.6103 22.079 33.4697 22.2197C33.329 22.3603 33.25 22.5511 33.25 22.75V27.25H34.75V23.5H36.25C36.405 23.4991 36.5558 23.4502 36.6819 23.3601C36.8079 23.27 36.903 23.143 36.9539 22.9967C37.0049 22.8504 37.0093 22.6918 36.9665 22.5429C36.9237 22.394 36.8359 22.262 36.715 22.165ZM23.5 29.5H26.5V35.5H23.5V29.5Z" fill="white"/>
//                         <path d="M31.75 32.9425L30.7825 31.975L29.725 33.0325L31.225 34.5325C31.3655 34.6722 31.5556 34.7506 31.7537 34.7506C31.9519 34.7506 32.142 34.6722 32.2825 34.5325L36.7825 30.0325L35.725 28.975L31.75 32.9425Z" fill="white"/>
//                         </g>
//                         <path d="M66.78 22.38C66.78 23.64 66.08 24.46 64.52 24.46H62.18V20.36H64.52C66.08 20.36 66.78 21.14 66.78 22.38ZM59.38 18.04V32H62.18V26.56H63.5L66.58 32H69.82L66.48 26.34C68.72 25.74 69.66 24.02 69.66 22.32C69.66 19.98 67.98 18.04 64.62 18.04H59.38ZM76.9525 23.04C78.3925 23.04 79.5525 23.96 79.5925 25.42H74.3325C74.5525 23.9 75.6125 23.04 76.9525 23.04ZM82.2125 28.52H79.1925C78.8325 29.26 78.1725 29.86 76.9725 29.86C75.5725 29.86 74.4525 28.94 74.3125 27.3H82.4125C82.4725 26.94 82.4925 26.58 82.4925 26.22C82.4925 22.92 80.2325 20.74 77.0325 20.74C73.7525 20.74 71.4725 22.96 71.4725 26.46C71.4725 29.94 73.8125 32.18 77.0325 32.18C79.7725 32.18 81.6125 30.56 82.2125 28.52ZM91.9763 20.92H83.9363V23.22H88.7563L83.9163 29.74V32H92.0363V29.7H87.0963L91.9763 23.18V20.92ZM94.2042 32H97.0042V20.92H94.2042V32ZM95.6242 19.6C96.6042 19.6 97.3442 18.88 97.3442 17.96C97.3442 17.04 96.6042 16.32 95.6242 16.32C94.6242 16.32 93.9042 17.04 93.9042 17.96C93.9042 18.88 94.6242 19.6 95.6242 19.6ZM99.7706 32H102.571V17.2H99.7706V32ZM105.337 32H108.137V17.2H105.337V32ZM110.183 26.42C110.183 29.88 112.423 32.18 115.223 32.18C116.983 32.18 118.243 31.34 118.903 30.38V32H121.723V20.92H118.903V22.5C118.243 21.58 117.023 20.74 115.243 20.74C112.423 20.74 110.183 22.96 110.183 26.42ZM118.903 26.46C118.903 28.56 117.503 29.72 115.963 29.72C114.463 29.72 113.043 28.52 113.043 26.42C113.043 24.32 114.463 23.2 115.963 23.2C117.503 23.2 118.903 24.36 118.903 26.46Z" fill="#1E1E1E"/>
//                         <defs>
//                         <clipPath id="clip0_8_2">
//                         <rect width="24" height="24" fill="white" transform="translate(13 13)"/>
//                         </clipPath>
//                         </defs>
//                         </svg>
//                     </Link>
//                     <div className="md:hidden">
//                         <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
//                         <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                             <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
//                         </svg>
//                         <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//                         </svg>
//                         </button>
//                     </div>
//                     </div>
//                     <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
//                     <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
//                         <Link
//                         to="/"
//                         className={`font-medium md:py-6 ${
//                             isActive('/') ? 'text-[#143C38] dark:text-[#143C38]' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
//                         }`}
//                         >
//                         Home
//                         </Link>
//                         <Link
//                             to="/about-us"
//                             className={`font-medium md:py-6 
//                             ${isActive('/about-us') ? 'text-[#143C38] dark:text-[#143C38]' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
//                             }`}
//                         >
//                             About Us
//                         </Link>
//                         <Link to="/all-properties"
//                             className={`font-medium md:py-6
//                             ${isActive('/all-properties') ? 'text-[#143C38] dark:text-[#143C38]' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
//                             }`}
//                         >
//                             All Properties
//                         </Link>
//                         <Link to="/services"
//                             className={`font-medium md:py-6
//                             ${isActive('/services') ? 'text-[#143C38] dark:text-[#143C38]' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
//                             }`}
//                         >
//                             Services
//                         </Link>
//                         <Link to="/pricing"
//                             className={`font-medium md:py-6
//                             ${isActive('/pricing') ? 'text-[#143C38] dark:text-[#143C38]' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
//                             }`}
//                         >
//                             Pricing
//                         </Link>
//                         <Link to="/contact"
//                             className={`font-medium md:py-6
//                             ${isActive('/contact') ? 'text-[#143C38] dark:text-[#143C38]' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
//                             }`}
//                         >
//                             Contact
//                         </Link>
                            

//                     {/* TODO: condition */}
//                     {user && (
//                     <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-2">
//                         <div className="flex flex-shrink-0 items-center" onClick={toggleDropdown}>
                        
//                         <img className="h-9 w-9 rounded-full" src={user?.photoURL}  alt=""/>
//                         </div>
//                         {isDropdownOpen && (
//                         <div className="hs-dropdown-menu transition-[opacity,margin] duration-150 hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-[100000] bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full md:border before:-top-1 before:left-0 before:w-full before:h-5">
//                             <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
//                                 {user?.displayName}
//                             </a>
//                             <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/profile-settings">
//                                 Profile Settings
//                             </a>
//                             <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/dashboard">
//                                 Dashboard
//                             </a>
//                             <a onClick={handleLogout}
//                             className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
//                             Logout
//                             </a>
//                         </div>
//                     )}
                
//                     </div>


//                     ) || (
                        
//                     <a className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-[#143C38] md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-[#143C38]" href="/login">
//                             <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                             <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
//                             </svg>
//                             Log in
//                         </a>
//                     )}
//                     </div>
//                     </div>
//                 </nav>
//             </header>
//     </div>
//   )
// }

// export default Header

import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AuthContext } from '../../../providers/AuthProvider'
import Swal from 'sweetalert2';

const navigation = [
  { name: 'Home', href: '/', current: false},
  { name: 'About', href: '/about-us', current: false },
  { name: 'All Properties', href: '/all-properties', current: false },
  { name: 'Price', href: '/pricing', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const {user, logOut} = useContext(AuthContext);

// logout functionalities
  const handleLogout = () => {
    logOut()
    .then((result) => {
      Swal.fire({
        icon: 'success',
        title: 'Logout Successful',
        text: 'You are logged out successfully!',
      });
    })
    .catch((error) => {
      console.log(error)
    });
  }
  return (
    <Disclosure as="nav" className="bg-[#143C38]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="h-8 w-auto"
                    src={logoHead}
                    alt="Your Company"
                  /> */}
                    <p className="text-white font-bold text-2xl">Rezilla</p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                {user && (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={handleLogout}
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                ) || (
                        
                    <a className="flex items-center gap-x-2 font-medium text-white hover:text-gray-300 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-[#143C38]" href="/login">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                            Log in
                        </a>
                    )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

