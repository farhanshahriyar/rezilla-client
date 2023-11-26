import React from 'react';
import { IoLocationSharp } from "react-icons/io5";

// Dummy data for the properties
const propertyData = [
    {
        "id": 1,
        "imageUrl": "https://s3-alpha-sig.figma.com/img/f922/bb62/7048af1a1292dbac7c45b5c9014a1e82?Expires=1701648000&Signature=jVwKY3kFZXnRHkEZZZ0s4WKjVuL5u39gJsE2RWNvrMTbs3CuA43B9tems9gyZ~DMkK3OnZ-XPiQOAQnQc8Juq-Yt2diWBSL66o3rHxT4lx6eUyUMbwStkKDf398iamBso1SnTHhgX5A~dHO8sX8053hJqddtHuEt4kWJoHvJSyDkchy3eADZEtQvexIKv66c9DxOq9tpeDxPDy5~RzNZPMwBfRQemkT2gxEMWXP9DLPoxzvwbj1iohoKfkZ6efaRDTG53gUAQws~azpS3E26lC6~f5-IcRwc8kI4~4qeh4bVOXQjamZDflYGa-NrQyH7SvfNg5JN90A5Dode-KCKUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "title": "The Most Luxurious House",
        "location": "4059 Waterview Texico, NM 88135",
        "price": "1,560/night",
        "verified": true,
        "status": "For Sale"
    },
    {
        "id": 2,
        "imageUrl": "https://s3-alpha-sig.figma.com/img/bc36/25fe/c29a6fdfc56f1281691b64cd6d326273?Expires=1701648000&Signature=o9tGbq3UwYzgnI4VKXv95cRCY6amQdJB9LsgyiyToDKcelTzRC5zfQDEqtkyuqzGsLJu9H2S-BHue4FmKs-PG5s~u7e6zkQ4TwBsDeXNAwPcQKfsQ7P8uhwHf-Soal~LeD3TxSFrmav9vDT39KpZUBtl0EHsGKKRpOT8eWxvLaBLcYLLQvOwg~bY1T5SGiqkE~ITqB9fjaKKdGBORAxgsroxlGydfewIw4SeoCgXu-mgSMmX1zeREQXkIl9qhhLlT3fN7-g6SGEB6NajTlNvz~roLoPELccnE9F71MzogPcDDk-lPbmS0IpVKApJlHJJmh7cAVXkz1N1W7x7ASAVaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "title": "Flint Hill Luxurious House",
        "location": "470 Lost Creek Road, PA 19103",
        "price": "2,500/night",
        "verified": true,
        "status": "For Sale"
    },
    {
        "id": 3,
        "imageUrl": "https://s3-alpha-sig.figma.com/img/5e62/9abe/0b400da94167cf8762b5195d14d33edf?Expires=1701648000&Signature=Q51J9XZ4LPwUfEDluPs~XcXtpk9rBUa3mdLfPj2443VRBkkZ9bD-N9woyvgWojmKaTLsL4LeMGHQBdMBvGXxd~cLGOSgcIa6SuvagAoJdZ4cTztFlKp7DRqwSs37P8~YMzkyeB6sQ2WWu6Dv8s2a8bGoIxk2SvFK2I2AXKeNIsKpS1-K8bGrh9~FavZkCeFv9FoH37meMqziErIKw~DY9mn0AEXRoKBt8CrOWYxF6ydEMWm460kcgwuuo5ZNrq7YlYeBcixIbv1d8JYdTSzfLf19gDR1w002HD~yHVF~bwtrYH2BBbhvFvknxAOrqJkTtdtQlpWtT~VUIkFypgPU~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "title": "The Skay View Farm House",
        "location": "4033 Cyan Piscataway, NJ 08854",
        "price": "1,600/night",
        "verified": true,
        "status": "For Sale"
    },
    {
        "id": 4,
        "imageUrl": "https://s3-alpha-sig.figma.com/img/c518/d245/ee559e82e9cffdd11e1005362ee567b1?Expires=1701648000&Signature=IAHjb2HPX33GtjlbOBq4hpX7I3BcObaXNYZq6Dzp8NBxXL7M6rI8Co4RiZwtIVSE9IVahcy8rPjsc1L8NLoY3nkhE5Pj4xjGEyfzChnrmdI-LHkZvZCrWF6xgtQrmw6bA7j9bWyAGoK4MlgyYok3~U06E7NJy7aq38LRYX2ygRUnqnELvdmI41zziO1NS9wpynbRCoR4Nc-UFtP2YMGrb8c-Tvazr7Z6ZvYVq2gHAwY1mRBK33jYq1DbHCHWPunCf2vvf19FbUHybASjnjBKaicaW0D3dnVCTT1NqajQFGroDrRykKw19aoNAFaGqmis7~SlmgxNWj22OG0Tmr8vBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "title": "Modern Capital House",
        "location": "298 Barrington Court, AR 72601",
        "price": "4,200/night",
        "verified": true,
        "status": "For Sale"
    },
    {
        "id": 5,
        "imageUrl": "https://s3-alpha-sig.figma.com/img/bcf0/b9e2/02c9304a1715e6d88ad31514a1d3e760?Expires=1701648000&Signature=PeRi~ngUUOe5NqXsyQQ2K9svr8NPAXRgVlwoSHGwTzoVJwvHajf5CRY4-aLgk1o2TapMwJTNHyCTbeoWE-g64yDtp6jFueJClyUVSO97VbFZlMG4Rmua3KikVaSHcrxIPhRikHkmmvDK0wgCngBhcDfLhwism3t103cMg6NzW2T2JxH37aoK0RJuaoQIOMp5eTUCfx5mtWlFGdh~AuELAZ~jNLmrBvbo0muc3oGMaW0qmvHNbT34lO06-UwRS9fPxFJB8XzxenyDBXaJdpK5~~1PWdL6NLgQrCo7DNMeqE0atId4sF5vkWJPLJQDVEwa-yNBTBhLDsPnXZAbDIbYhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "title": "Tranquil Haven in the Woods",
        "location": "103 Wright CourtBurien, WA 98168",
        "price": "5,970",
        "verified": true,
        "status": "Popular"
    },
    {
        "id": 6,
        "imageUrl": "https://www.cio.com/wp-content/uploads/2023/07/shutterstock_676661263.jpg?quality=50&strip=all&w=1024",
        "title": "Serene Retreat by the Lake",
        "location": "1964 Jehovah Drive, VA 22408",
        "price": "1,970",
        "verified": true,
        "status": "New Listing"
    },
    {
        "id": 7,
        "imageUrl": "https://i2.au.reastatic.net/800x600/fa4d32403f4e081539cf6b9bc838c08b08f1da24658170583b54078236b2d309/main.jpg",
        "title": "Charming Cottage in the Meadow",
        "location": "1508 Centennial Farm RoadHartlan, 51537",
        "price": "3,450",
        "verified": true,
        "status": "Discounted Price"
    }
];

const Properties = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-8 text-[#143C38] ">Popular Property Deals</h2>
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
  );
};

export default Properties;
