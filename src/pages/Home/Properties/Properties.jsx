/* eslint-disable no-unused-vars */
// import React from 'react';
// import { IoLocationSharp } from "react-icons/io5";


// const Properties = ({properties}) => {
//   const {_id, imageUrl,title, location,price, verified } = properties
//   return (
//     <div className="bg-gray-100 p-8">
//       <h2 className="text-2xl font-bold mb-8 text-[#143C38] ">Popular Property Deals</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {properties.map((property) => (
//           <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img className="w-full h-56 object-cover" src={property.imageUrl} alt={property.title} />
//             <div className="p-4">
//               <h3 className="font-semibold text-[#2A323C]">{property.title}</h3>
//               <div className='flex'>
//                 <IoLocationSharp className='text-xl text-[#737D8C]' />
//                 <p className="text-sm text-[##737D8C]">{property.location}</p>
//               </div>
//               <hr className='mt-5'></hr>
//               <p className="text-lg font-bold text-[#143C38] mt-2">${property.price}</p>
//               <div className="flex items-center justify-between mt-4">
//                 {property.verified && (
//                   <span className="text-[#143C38] text-xs font-semibold">Verified</span>
//                 )}
//                 <button className="bg-[#010202] text-white text-xs py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">View More</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Properties;


import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import useProperties from '../../../hooks/useProperties';
import Loading from '../../Shared/LoadingSpinner/Loading'
import { Link } from 'react-router-dom';


const Properties = () => {
  const [properties, loading] = useProperties(); // used custom hook here

  if (loading) return <Loading/>; // Render loading state 

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-8 text-[#143C38] ">Popular Property Deals</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((property) => (
          <div key={property._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-56 object-cover" src={property.imageUrl} alt={property.title} />
            <div className="p-4">
              <h3 className="font-semibold text-[#2A323C]">{property.title}</h3>
              <div className='flex'>
                <IoLocationSharp className='text-xl text-[#737D8C]' />
                <p className="text-sm text-[#737D8C]">{property.location}</p>
              </div>
              <hr className='mt-5'></hr>
              <p className="text-lg font-bold text-[#143C38] mt-2">${property.price}</p>
              <div className="flex items-center justify-between mt-4">
                {property.verified && (
                  <span className="text-[#143C38] text-xs font-semibold">Verified</span>
                )}
                <Link to={`/properties/${property._id}`}>
                <button 
                 className="bg-[#010202] text-white text-xs py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">View More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;

