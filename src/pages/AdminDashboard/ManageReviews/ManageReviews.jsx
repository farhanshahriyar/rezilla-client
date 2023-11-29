// import { useEffect, useState } from "react";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const ManageReviews = () => {
//     const [reviews, setReviews] = useState([]);
//     const userId = 'loggedInUserId'; // eita dynamically set based korbe for the logged-in user's actual ID
//     const {user} = useAuth();
//     const axios = useAxiosSecure();
//     useEffect(() => {
//       // Fetch the reviews for the logged-in user
//           axios.get(`/reviews?userId=${userId}`)
//         .then(response => setReviews(response.data))
//         .catch(error => console.error('Error fetching reviews:', error));
//     }, [userId]);

//     const handleDelete = (reviewId) => {
//       // Call to backend to delete review
//       axios.delete(`/reviews/${reviewId}`)
//         .then(() => {
//           setReviews(reviews.filter(review => review._id !== reviewId));
//         })
//         .catch(error => console.error('Error deleting review:', error));
//     };
//   return (
//     <div>
//         <div className="flex flex-col">
//           <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">My Reviews</h2>
//           <p className="mt-1 max-w-2xl text-base text-gray-500">Total Reviews from <span className="font-bold">{user.displayName}</span></p>
//           <div className="-m-1.5 overflow-x-auto">
//             <div className="p-1.5 min-w-full inline-block align-middle">
//               <div className="overflow-hidden">
//                 <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                   <thead>
//                     <tr>
//                       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Sl</th>
//                       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Property Title</th>
//                       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Agent Name</th>
//                       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Review Time</th>
//                       <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Review Description</th>
//                       <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

//                     {reviews.map((review, index) => (
//                       <tr key={review._id}>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">{index+1}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">{review.title}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">{review.agentName}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">{review.date}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">{review.review}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap font-bold text-right text-sm ">
//                           <button onClick={() => handleDelete(review._id)} className="text-red-600 hover:text-red-900">Delete</button>
//                         </td>
//                       </tr>
//                     ))}

//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default ManageReviews

import * as React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ManageReviewCard from "./ManageReviewCard";

const ManageReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const userId = 'loggedInUserId'; // eita dynamically set based korbe for the logged-in user's actual ID

//   useEffect(() => {
//     // Fetch all reviews if the user is an admin
//     if (user.isAdmin) {
//       axios
//         .get("/reviews")
//         .then((response) => setReviews(response.data))
//         .catch((error) => console.error("Error fetching reviews:", error));
//     }
//   }, [user, axios]);

//     useEffect(() => {
//         // Only run if user.isAdmin is not undefined
//         if (user.isAdmin !== undefined) {
//             if (user.isAdmin) {
//                 axios.get('/reviews')
//                     .then(response => setReviews(response.data))
//                     .catch(error => console.error('Error fetching reviews:', error));
//             } else {
//                 // Handle the case where the user is not an admin
//             }
//         }
//     }, [user.isAdmin, axios]); // Run useEffect when user.isAdmin changes

//   const handleDelete = (reviewId) => {
//     if (!user.isAdmin) {
//       // Call to backend to delete review with admin check
//       axios
//         .delete(`/reviews/${reviewId}`)
//         .then(() => {
//           // Remove the deleted review from the state
//           setReviews(reviews.filter((review) => review._id !== reviewId));
//         })
//         .catch((error) => console.error("Error deleting review:", error));
//     }
//   };

        useEffect(() => {
            // Fetch the reviews for the logged-in user
                axios.get(`/reviews?userId=${userId}`)
            .then(response => setReviews(response.data))
            .catch(error => console.error('Error fetching reviews:', error));
        }, [userId]);

        const handleDelete = (reviewId) => {
            // Call to backend to delete review
            axios.delete(`/reviews/${reviewId}`)
            .then(() => {
                setReviews(reviews.filter(review => review._id !== reviewId));
            })
            .catch(error => console.error('Error deleting review:', error));
        };
  return (
    <div className="flex flex-wrap justify-center">
      {reviews.map((review) => {
        console.log("Rendering review:", review);
        return (
          <ManageReviewCard
            key={review._id}
            review={review}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default ManageReviews;
