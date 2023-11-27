// /* eslint-disable react-hooks/rules-of-hooks */
// import { Fragment, useState, useMemo } from 'react';
// import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
// import { XMarkIcon, ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
// import { Helmet } from 'react-helmet-async';
// import PropertiesCard from '../../components/PropertiesCard/PropertiesCard';
// import useProperties from '../../hooks/useProperties';
// import Loading from '../Shared/LoadingSpinner/Loading';

// const sortOptions = [
//   { name: 'Newest', current: false },
//   { name: 'Price: Low to High', current: false },
//   { name: 'Price: High to Low', current: false },
// ];

// const filters = [
//   {
//     id: 'city',
//     name: 'City',
//     options: [
//       { value: 'austin', label: 'Austin', checked: false },
//       { value: 'san-francisco', label: 'San Francisco', checked: false },
//       { value: 'new-york', label: 'New York', checked: true },
//       { value: 'denver', label: 'Denver', checked: false },
//       { value: 'los-angels', label: 'Los Angels', checked: false },
//     ],
//   },
//   {
//     id: 'price-range',
//     name: 'Price Range',
//     options: [
//       { value: '1200$-1800$', label: '1200$-1800$', checked: false },
//       { value: '1900$-2500$', label: '1900$-2500$', checked: false },
//       { value: '2600$-3600$', label: '2600$-3600$', checked: false },
//       { value: '3700$-5000$', label: '3700$-5000$', checked: true },
//     ],
//   },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function AllProperties() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const [properties, loading] = useProperties();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [gridView, setGridView] = useState(true);
//   const [sortType, setSortType] = useState('Newest');

//   // search functionality
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };


//   const sortedProperties = useMemo(() => {
//       switch (sortType) {
//         case 'Price: Low to High':
//           return [...properties].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//         case 'Price: High to Low':
//           return [...properties].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//         case 'Newest':
//         default:
//           return properties;
//       }
//     }, [properties, sortType]);


  

//     const filteredProperties = useMemo(() => {
//       if (selectedCities.length === 0) {
//         return properties;
//       } else {
//         return properties.filter(property => selectedCities.includes(property.city.toLowerCase()));
//       }
//     }, [properties, selectedCities]);
    
    
//     if (loading) return <Loading/>; // Render loading state 

//   return (
//     <div className="bg-white">
//         <Helmet>
//                 <title>Rezilla | All Properties</title>
//             </Helmet>
//       <div>
//         {/* Mobile filter dialog */}
//         <Transition.Root show={mobileFiltersOpen} as={Fragment}>
//           <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
//             <Transition.Child
//               as={Fragment}
//               enter="transition-opacity ease-linear duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="transition-opacity ease-linear duration-300"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <div className="fixed inset-0 bg-black bg-opacity-25" />
//             </Transition.Child>

//             <div className="fixed inset-0 z-40 flex">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transition ease-in-out duration-300 transform"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transition ease-in-out duration-300 transform"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//                   <div className="flex items-center justify-between px-4">
//                     <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                     <button
//                       type="button"
//                       className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                       onClick={() => setMobileFiltersOpen(false)}
//                     >
//                       <span className="sr-only">Close menu</span>
//                       <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>

//                   {/* Filters */}
//                   <form className="mt-4 border-t border-gray-200">
//                    {/* Search */}
//                   <div className="mt-4 border-t border-gray-200">
//                     <div className="px-4 flex items-center sm:px-6">
//                       <label htmlFor="search" className="sr-only">
//                         Search
//                       </label>
//                       <div className="flex-1 rounded-md shadow-sm">
//                         {/* <input
//                           type="search"
//                           name="search"
//                           id="search"
//                           className="focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
//                           placeholder="Search by property title"
//                         /> */}
//                         <input
//                             type="search"
//                             name="search"
//                             id="search"
//                             className="block w-full border-black rounded-md shadow-sm focus:ring-[#143C38] focus:border-[#143C38] sm:text-sm"
//                             placeholder="Search by title, city, or neighborhood"
//                             onChange={handleSearchChange}
//                           />

//                       </div>
//                       <button
//                     type="submit"
//                     className="mt-3 w-full px-2 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-[#143C38] hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
//                   >
//                     Search
//                   </button>
//                     </div>
//                   </div>

//                     {filters.map((section) => (
//                       <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
//                         {({ open }) => (
//                           <>
//                             <h3 className="-mx-2 -my-3 flow-root">
//                               <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                                 <span className="font-medium text-gray-900">{section.name}</span>
//                                 <span className="ml-6 flex items-center">
//                                   {open ? (
//                                     <MinusIcon className="h-5 w-5" aria-hidden="true" />
//                                   ) : (
//                                     <PlusIcon className="h-5 w-5" aria-hidden="true" />
//                                   )}
//                                 </span>
//                               </Disclosure.Button>
//                             </h3>
//                             <Disclosure.Panel className="pt-6">
//                               <div className="space-y-6">
//                                 {section.options.map((option, optionIdx) => (
//                                   <div key={option.value} className="flex items-center">
//                                     <input
//                                       id={`filter-mobile-${section.id}-${optionIdx}`}
//                                       name={`${section.id}[]`}
//                                       defaultValue={option.value}
//                                       type="checkbox"
//                                       defaultChecked={option.checked}
//                                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                     />
//                                     <label
//                                       htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                                       className="ml-3 min-w-0 flex-1 text-gray-500"
//                                     >
//                                       {option.label}
//                                     </label>
//                                   </div>
//                                 ))}
//                               </div>
//                             </Disclosure.Panel>
//                           </>
//                         )}
//                       </Disclosure>
//                     ))}
//                   </form>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </Dialog>
//         </Transition.Root>

//         <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Properties</h1>

//             <div className="flex items-center">
//               <Menu as="div" className="relative inline-block text-left">
//                 <div>
//                   <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                     Sort
//                     <ChevronDownIcon
//                       className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                       aria-hidden="true"
//                     />
//                   </Menu.Button>
//                 </div>

//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-100"
//                   enterFrom="transform opacity-0 scale-95"
//                   enterTo="transform opacity-100 scale-100"
//                   leave="transition ease-in duration-75"
//                   leaveFrom="transform opacity-100 scale-100"
//                   leaveTo="transform opacity-0 scale-95"
//                 >
//                   <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
//                     <div className="py-1">
//                       {sortOptions.map((option) => (
//                         // <Menu.Item key={option.name}>
//                         //   {({ active }) => (
//                         //     <a
//                         //       href={option.href}
//                         //       className={classNames(
//                         //         option.current ? 'font-medium text-gray-900' : 'text-gray-500',
//                         //         active ? 'bg-gray-100' : '',
//                         //         'block px-4 py-2 text-sm'
//                         //       )}
//                         //     >
//                         //       {option.name}
//                         //     </a>
//                         //   )}
//                         // </Menu.Item>
//                         <Menu.Item key={option.name}>
//                             {({ active }) => (
//                               <button
//                                 type="button"
//                                 onClick={() => setSortType(option.name)}
//                                 className={classNames(
//                                   sortType === option.name ? 'font-medium text-gray-900' : 'text-gray-500',
//                                   active ? 'bg-gray-100' : '',
//                                   'block px-4 py-2 text-sm w-full text-left'
//                                 )}
//                               >
//                                 {option.name}
//                               </button>
//                             )}
//                           </Menu.Item>
//                       ))}
//                     </div>
//                   </Menu.Items>
//                 </Transition>
//               </Menu>

//               {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
//                 <span className="sr-only">View grid</span>
//                 <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
//               </button> */}
//               {/* // Button to toggle view */}
//               <button type="button" onClick={() => setGridView(!gridView)} className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
//                 <span className="sr-only">Toggle view</span>
//                 <Squares2X2Icon className={`h-5 w-5 ${gridView ? 'text-gray-900' : 'text-gray-400'}`} aria-hidden="true" />
//               </button>
//               <button
//                 type="button"
//                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//                 onClick={() => setMobileFiltersOpen(true)}
//               >
//                 <span className="sr-only">Filters</span>
//                 <FunnelIcon className="h-5 w-5" aria-hidden="true" />
//               </button>
//             </div>
//           </div>

//           <section aria-labelledby="products-heading" className="pb-24 pt-6">
//             <h2 id="products-heading" className="sr-only">
//               Products
//             </h2>

//             <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
//                {/* Filters */}
//                <form className="hidden lg:block">
//                 {/* Search */}
//               <div className="lg:col-span-1">
//                 <form className="flex flex-col sm:flex-row">
//                   <label htmlFor="search" className="sr-only">
//                     Search
//                   </label>
//                   <input
//                     type="search"
//                     name="search"
//                     id="search"
//                     className="block w-full border-black rounded-md shadow-sm focus:ring-[#143C38] focus:border-[#143C38] sm:text-sm"
//                     placeholder="Search by properity title"
//                   />
//                   <button
//                     type="submit"
//                     className="mt-3 w-full px-2 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-[#143C38] hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
//                   >
//                     Search
//                   </button>
//                 </form>
//               </div>

//                 {filters.map((section) => (
//                   <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
//                     {({ open }) => (
//                       <>
//                         <h3 className="-my-3 flow-root">
//                           <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
//                             <span className="font-medium text-gray-900">{section.name}</span>
//                             <span className="ml-6 flex items-center">
//                               {open ? (
//                                 <MinusIcon className="h-5 w-5" aria-hidden="true" />
//                               ) : (
//                                 <PlusIcon className="h-5 w-5" aria-hidden="true" />
//                               )}
//                             </span>
//                           </Disclosure.Button>
//                         </h3>
//                         <Disclosure.Panel className="pt-6">
//                           <div className="space-y-4">
//                             {section.options.map((option, optionIdx) => (
//                               <div key={option.value} className="flex items-center">
//                                 <input
//                                   id={`filter-${section.id}-${optionIdx}`}
//                                   name={`${section.id}[]`}
//                                   defaultValue={option.value}
//                                   type="checkbox"
//                                   defaultChecked={option.checked}
//                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                 />
//                                 <label
//                                   htmlFor={`filter-${section.id}-${optionIdx}`}
//                                   className="ml-3 text-sm text-gray-600"
//                                 >
//                                   {option.label}
//                                 </label>
//                               </div>
//                             ))}
//                           </div>
//                         </Disclosure.Panel>
//                       </>
//                     )}
//                   </Disclosure>
//                 ))}
//               </form>

//               {/* Product grid */}
//               <div className="lg:col-span-3">
//                 {/* <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
//                   {properties.map((property) => (
//                     <PropertiesCard key={property._id} property={property} /> // Passed a single property object as props
//                   ))}
//                 </div> */}
//                  <div className={classNames(gridView ? 'grid md:grid-cols-2 lg:grid-cols-3' : 'grid md:grid-cols-1', 'gap-4')}>
//                       {filteredAndSearchedProperties.map((property) => (
//                         <PropertiesCard key={property._id} property={property} />
//                       ))}
//                     </div>

//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   )
// }




import { Fragment, useMemo, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Helmet } from 'react-helmet-async'
import PropertiesCard from '../../components/PropertiesCard/PropertiesCard'
import useProperties from '../../hooks/useProperties'
import Loading from '../Shared/LoadingSpinner/Loading'

const sortOptions = [
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

const filters = [
  {
    id: 'city',
    name: 'City',
    options: [
      { value: 'austin', label: 'Austin', checked: false },
      { value: 'san-francisco', label: 'San Francisco', checked: false },
      { value: 'new-york', label: 'New York', checked: true },
      { value: 'denver', label: 'Denver', checked: false },
      { value: 'los-angels', label: 'Los Angels', checked: false },
    ],
  },
  {
    id: 'price-range',
    name: 'Price Range',
    options: [
      { value: '1200$-1800$', label: '1200$-1800$', checked: false },
      { value: '1900$-2500$', label: '1900$-2500$', checked: false },
      { value: '2600$-3600$', label: '2600$-3600$', checked: false },
      { value: '3700$-5000$', label: '3700$-5000$', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AllProperties() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [properties, loading] = useProperties(); // used custom hook here
  const [searchQuery, setSearchQuery] = useState('');
  const [gridView, setGridView] = useState(true); // true for grid, false for list
  // const [sortType, setSortType] = useState('Newest'); // sort by Newest, Price: Low to High, Price: High to Low
  // Event handler for search input field
  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

   // Function to filter properties by title search query
   const filteredProperties = useMemo(() => {
    return properties.filter((property) =>
      property.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [properties, searchQuery]);



  if (loading) return <Loading/>; // Render loading state 

  // search functionality
  const handleSearchSubmit = (event) => {
    event.preventDefault(); 
  };

  // sort functionalities
  // const sortedProperties = useMemo(() => {
  //   switch (sortType) {
  //     case 'Price: Low to High':
  //       return [...properties].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  //     case 'Price: High to Low':
  //       return [...properties].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  //     case 'Newest':
  //     default:
  //       return properties;
  //   }
  // }, [properties, sortType]);
  // console.log(sortedProperties);

 

  return (
    <div className="bg-white">
        <Helmet>
                <title>Rezilla | All Properties</title>
            </Helmet>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                   {/* Search */}
                  <div onSubmit={handleSearchSubmit} className="mt-4 border-t border-gray-200">
                    <div className="px-4 flex items-center sm:px-6">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="flex-1 rounded-md shadow-sm">
                      <input
                          type="search"
                          name="search"
                          id="search"
                          className="block w-full px-2 py-2 border-black rounded-md shadow-sm focus:ring-[#143C38] focus:border-[#143C38] sm:text-sm"
                          placeholder="Search by property title"
                          onChange={handleSearchInput} // Attach the event handler here
                        />
                      </div>
                      <button 
                            type="submit"
                            className="mt-3 w-full px-2 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-[#143C38] hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                          >
                            Search
                          </button>
                    </div>
                  </div>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Properties</h1>
            <p className="text-sm font-medium text-gray-500"> Searching {filteredProperties.length} results </p>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                        // <Menu.Item key={option.name}>
                        //     {({ active }) => (
                        //       <button
                        //         type="button"
                        //         onClick={() => setSortType(option.name)}
                        //         className={classNames(
                        //           sortType === option.name ? 'font-medium text-gray-900' : 'text-gray-500',
                        //           active ? 'bg-gray-100' : '',
                        //           'block px-4 py-2 text-sm w-full text-left'
                        //         )}
                        //       >
                        //         {option.name}
                        //       </button>
                        //     )}
                        //   </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button> */}

              {/* // Button to grid to toggle view */}
              <button
                  type="button"
                  onClick={() => setGridView(!gridView)}
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">Toggle view</span>
                  <Squares2X2Icon className={`h-5 w-5 ${gridView ? 'text-gray-900' : 'text-gray-400'}`} aria-hidden="true" />
              </button>

              {/*  */}

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
               {/* Filters */}
               <form className="hidden lg:block">
                {/* Search */}
              <div className="lg:col-span-1">
                <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <input
                        type="search"
                        name="search"
                        id="search"
                        className="block w-full border-black rounded-md shadow-sm focus:ring-[#143C38] focus:border-[#143C38] sm:text-sm"
                        placeholder="Search by property title"
                        onChange={handleSearchInput} // Attach the event handler here
                      />
                  <button disabled
                        type="submit"
                        className="mt-3 w-full px-2 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-[#143C38] hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                      >
                        Search
                      </button>
                </form>
              </div>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
              <div className={classNames(
                  gridView ? 'grid md:grid-cols-1 lg:grid-cols-2' :  'grid md:grid-cols-1',
                  'gap-4'
                )}>
                  {filteredProperties.map((property) => (
                    <PropertiesCard key={property._id} property={property} /> // Use filteredProperties here
                  ))}
                </div>
                {/* see more */}
                {/* {displayLimit < properties.length && (
                  <button
                    className="rounded-md px-5 py-2.5 text-sm font-medium text-teal-600 border-spacing-2 border border-teal-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition mt-8"
                    onClick={handleShowMoreProperties}
                  >
                    Show More Properties
                  </button>
                )} */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}