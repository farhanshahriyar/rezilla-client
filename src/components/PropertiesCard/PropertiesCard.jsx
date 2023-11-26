/* eslint-disable no-unused-vars */
import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const PropertiesCard = () => {
  return (
    <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {propertyData.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-56 object-cover" src={property.imageUrl} alt={property.title} />
            <div className="p-4">
              <h3 className="font-semibold text-[#2A323C]">{property.title}</h3>
              <div className='flex'>
                <IoLocationSharp className='text-xl text-[#737D8C]' />
                <p className="text-sm text-[##737D8C]">{property.location}</p>
              </div>
              <hr className='mt-5'></hr>
              <p className="text-lg font-bold text-[#143C38] mt-2">${property.price}</p>
              <div className="flex items-center justify-between mt-4">
                {property.verified && (
                  <span className="text-[#143C38] text-xs font-semibold">Verified</span>
                )}
                <button className="bg-[#010202] text-white text-xs py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertiesCard
