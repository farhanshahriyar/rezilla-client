/* eslint-disable no-unused-vars */
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useWishList from '../../hooks/useWishList';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'
import Loading from '../Shared/LoadingSpinner/Loading';

export default function PropertyDetails() {
  
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useWishList();
  // const navigation = useNavigation();
  const location1 = useLocation();
  const property = useLoaderData(); //  data returned from the loader function in router.jsx

  const form = location1.state?.form?.pathname || '/';


     // Handle undefined property
      if (!property) {
        return <Loading />;
      }
      

  // Wishlist function
  const handleAddToWishList = () => {
    if (user && user.displayName && user.email) {
      // Constructing the wishItem object from the property details
      const wishItem = {
        propertyId: property._id,
        email: user.email,
        title: property.title,
        price: property.price,
        location: property.location,
        imageUrl: property.imageUrl,
        agentName: property.agentName,
        agentImg: property.agentImg,
        verified: property.verified
      };

      
      axiosSecure.post('/wishlists', wishItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `${property.title} Added to Wishlist`,
            text: "Your item has been added to the wishlist successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      }).catch(error => {
        // Handle any error here
        console.error("Error adding to wishlist:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } else {
      // Handle not logged in scenario
       // redirect to login page
       Swal.fire({
        tite: "Please Login First to add items to Wishlist",
        title: "You are not logged in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to login page
          Navigate("/login", { state: { form: location } });
        }
      });
    }
  };


  //  end of wishlist functions


  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}

              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Property Details</h2>
            <div className="lg:max-w-lg">
                <div className='flex items-center'>
            <img className="w-10 h-10 rounded-full object-cover mt-5" src={property.agentImg} alt={property.agentName} />
            <span className="text-[#143C38] text-xs font-semibold ml-3">Status : {property.status}</span>
                </div>
              <p className="text-base font-semibold leading-7 text-indigo-600">Agent Name : {property.agentName}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{property.title}</h1>
              <p className="text-sm text-[#737D8C]">{property.location}</p> 
              <div className=' items-center gap-4 mb-5'>
                <span className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">${property.price}</span>
              </div>
              {/* wishlist functions */}

              <button onClick={handleAddToWishList}
              className="bg-[#010202] text-white text-base py-4 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">Add to Wishlist</button>

              {/*  */}
              <p className="text-xl leading-8 text-gray-700">
                {property.description}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={property.imageUrl}
            alt="property image"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                 
                  <FaBed className="mt-1 h-5 w-5 flex-none text-[#143C38]" aria-hidden="true"/>
                  <span>
                    <strong className="font-semibold text-gray-900">Bedrooms :</strong> {property.bedrooms}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaBath className="mt-1 h-5 w-5 flex-none text-[#143C38]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Bathrooms : </strong>{property.bathrooms}
                  </span>
                </li>
                
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Not Budget Friendly? No problem.</h2>
              <p className="mt-6">
                Rezilla have a wide range of properties that will suit your budget. We have properties that are
                budget-friendly and also properties that are luxurious. We have properties that are budget-friendly and also properties that are luxurious. Contact us today to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

