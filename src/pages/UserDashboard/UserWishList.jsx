// /* eslint-disable no-unused-vars */
import useWishList from '../../hooks/useWishList';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Button from '@mui/material/Button';
import { FaTrash } from 'react-icons/fa';
import { usePDF } from 'react-to-pdf';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


const UserWishList = () => {
    const [wishList, refetch] = useWishList();
    // const { user } = useContext(AuthContext);
    // const ref = useRef();
    const axiosSecure = useAxiosSecure();
    const { toPDF, targetRef } = usePDF({filename: 'wishlists.pdf'});
     //calculate total price in user dashboard cart
     const totalPrice = wishList.reduce((total, item) => {
      const price = parseFloat(item.price);
      return total + price;
    }, 0);
    
    

    // Handle delete from wishlist
    const handleDelete = (id) => {
        // Confirm deletion with the user
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to undo this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/wishlists/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            "Removed!",
                            "The property has been removed from your wishlist.",
                            "success"
                        );
                    }
                }).catch((error) => {
                    Swal.fire(
                        "Error!",
                        "There was a problem removing the property from your wishlist.",
                        "error"
                    );
                });
            }
        });
    };




    return (

<div className="flex flex-col">
  <Helmet>
    <title>Dashboard | Wishlist</title>
  </Helmet>
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-200 uppercase text-center">
        My Wishlist
      </h1>

      <div className="flex justify-evenly mt-4">
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-200 uppercase">
          Total Items: {wishList.length}
        </h2>
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-200 uppercase">
        Total Price: ${totalPrice.toFixed(2)}
        </h2>
        <Button onClick={() => toPDF()} 
        variant="contained" >
         Download Summary
      </Button>
      </div>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-4" ref={targetRef}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Property Image
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Property Title
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Agent
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Agent Image
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Offer
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white text-right text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                          {wishList.map((property, index) => (
                              <tr key={property._id}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                      {index + 1}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <img
                                          src={property.imageUrl}
                                          alt={property.title}
                                          className="w-10 h-10 rounded-full"
                                      />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                      {property.title}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                      {property.location}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap ">
                                  <img
                                          src={property.agentImg}
                                          alt={property.agentName}
                                          className="w-10 h-10 rounded-full"
                                      />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                      {property.agentName}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-gray-800">{property.status ? "pending" : "verified"}
                                </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                      ${property.price}
                                  </td>
                                 

                                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                  <Link to={`/dashboard/make-offer/${property.propertyId}`} className="inline-block">
                                    <Button variant="outlined">
                                      Make Offer
                                    </Button>
                                  </Link>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                      <Button onClick={() => handleDelete(property._id)} variant="outlined">
                                          <FaTrash className="text-xl text-red-500" /> Delete
                                      </Button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
     
  </div>
);
};

export default UserWishList;

// // Material UI
// import useWishList from "../../hooks/useWishList";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import Button from "@mui/material/Button";
// import { FaTrash } from "react-icons/fa";
// import CustomizedTables from "../../components/CustomizedTables/CustomizedTables";


// const UserWishList = () => {
//   const [wishList, refetch] = useWishList();
//   const axiosSecure = useAxiosSecure();

//   // Calculate total price in user dashboard cart
//   let totalPrice = wishList
//     .reduce((total, item) => total + parseFloat(item.price), 0)
//     .toFixed(2); // Ensure you convert to a number and fix to 2 decimal places

//   // Handle delete from wishlist
//   const handleDelete = (id) => {
//     // Confirm deletion with the user
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to undo this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure
//           .delete(`/wishlists/${id}`)
//           .then((res) => {
//             if (res.data.deletedCount > 0) {
//               refetch();
//               Swal.fire(
//                 "Removed!",
//                 "The property has been removed from your wishlist.",
//                 "success"
//               );
//             }
//           })
//           .catch((error) => {
//             Swal.fire(
//               "Error!",
//               "There was a problem removing the property from your wishlist.",
//               "error"
//             );
//           });
//       }
//     });
//   };

//   // Transform wishlist data to fit the CustomizedTables structure
//   const createData = (property, index) => {
//     return {
//       id: index + 1,
//       imageUrl: property.imageUrl,
//       title: property.title,
//       location: property.location,
//       agentImg: property.agentImg,
//       agentName: property.agentName,
//       status: property.verified ? "Verified" : "Unverified",
//       price: `${property.price}$`,
//       actions: (
//         <Button onClick={() => handleDelete(property._id)} variant="outlined">
//           <FaTrash className="text-xl text-red-500" />
//           Delete
//         </Button>
//       ),
//       offer: <Button variant="outlined">Make Offer</Button>,
//     };
//   };

//   // Transform the wishlist for CustomizedTables
//   const rows = wishList.map(createData);

//   return (
//     <>
//            <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-200 uppercase text-center">
//            My Wishlist
//          </h1>

//          <div className="flex justify-evenly">
//          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-200 uppercase">
//            Total Items: {wishList.length}
//          </h2>
//          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-200 uppercase">
//            Total Price: {totalPrice}$
//          </h2>
//         <Button variant="contained" >
//           Pay Now
//        </Button>
//       </div>
//       <CustomizedTables rows={rows} /> 
//     </>
//   );
// };

// export default UserWishList;
