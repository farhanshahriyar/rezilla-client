import * as React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ManageReviewCard from "./ManageReviewCard";

const ManageReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useAuth();
  const axios = useAxiosSecure();
  // const userId = 'loggedInUserId'; // eita dynamically set based korbe for the logged-in user's actual ID


        // useEffect(() => {
        //     // Fetch the reviews for the logged-in user
        //         axios.get(`/all-reviews?userId=${userId}`)
        //     .then(response => setReviews(response.data))
        useEffect(() => {
          axios.get('/all-reviews')
            .then(response => setReviews(response.data))
            .catch(error => console.error('Error fetching reviews:', error));
        // }, [userId]);
      }, []);

        const handleDelete = (reviewId) => {
            // Call to backend to delete review
            axios.delete(`/reviews/${reviewId}`)
            .then(() => {
                setReviews(reviews.filter(review => review._id !== reviewId));
            })
            .catch(error => console.error('Error deleting review:', error));
        };
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-lg text-center font-bold text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700"> Total Reviews are : {reviews.length}</h2>
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
  </div>
  );
};

export default ManageReviews;
