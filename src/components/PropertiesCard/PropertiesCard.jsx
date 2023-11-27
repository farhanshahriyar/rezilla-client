/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const PropertiesCard = ({ property }) => { 
  const { _id, imageUrl, title, location, price, agentName, agentImg, verified } = property;

  return (
    <div key={_id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
      <div className='flex items-center mt-2 gap-4 ml-3'>
          <img className="w-10 h-10 rounded-full object-cover" src={agentImg} alt={agentName} />
          <p className="text-sm font-bold text-[#737D8C]">{agentName}</p>
        </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#2A323C]">{title}</h3>
        <div className='flex'>
          <IoLocationSharp className='text-xl text-[#737D8C]' />
          <p className="text-sm text-[#737D8C]">{location}</p> 
        </div>
        {/* <div className='flex items-center mt-2 gap-4'>
          <img className="w-10 h-10 rounded-full object-cover" src={agentImg} alt={agentName} />
          <p className="text-sm font-bold text-[#737D8C]">{agentName}</p>
        </div> */}
        <hr className='mt-5' />
          {verified && (
            <span className="text-[#143C38] text-xs font-semibold">Verified</span>
            )}
        <div className="flex items-center justify-between mt-4 mb-4">
            <p className="text-lg font-bold text-[#143C38] mt-2">${price}</p>
            <Link to={`/properties/${_id}`}>
          <button className="bg-[#010202] text-white text-xs py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">View More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertiesCard;
