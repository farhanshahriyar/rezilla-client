
import React, { useContext, useRef, useState } from 'react';
import Loading from '../../../Shared/LoadingSpinner/Loading';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../../providers/AppProvider';
import { format } from 'date-fns';

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const { id: name } = useParams();

    const { user } = useContext(AppContext);
    // const [reviewText, setReviewText] = useState("");
    const reviewRef = useRef();
    const [loading, setLoading] = useState(false);
    const handleSubmitReview = async (e) => {

        const review = reviewRef.current.value;
        if (!user) {
            // toast.error('Please login to give review');
            return;
        }
        if (!review || rating == 0) {
            // toast.error('Please write review with rating');
            return;
        }
        setLoading(true);
        try {
            (async function f() {
                const { data } = await axionsInstance.post('add-review', { date: format(new Date(), 'P'), name: name.split('-').join(' '), review, user, rating });
                // toast.success('Review added successfully');
                setRefetch(p => !p);
                setLoading(false);
                setRating(9);
                reviewRef.current.value = '';
            })();
        }
        catch (err) {
            console.log({ err });
            setLoading(false);
        }
    };

  return (
    <>
    {loading && <Loading />}
    <div>
        <div>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>How would you rate the overall experience? *</h3>
            <div>
                {
                    [...Array(5).keys()].map((_, index) => {
                        index += 1;

                        return (
                            <button key={index} type='button'
                                className={`${index <= ((rating && hover) || hover) ? 'text-yellowColor' : 'text-gray-400'
                                    } bg-transparent border-none outline-none text-xl cursor-pointer`}
                                onClick={
                                    () => setRating(index)
                                } onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                onDoubleClick={() => {
                                    setHover(0);
                                    setRating(0);
                                }
                                }
                            >
                                <span>
                                    <AiFillStar />
                                </span>
                            </button>
                        );
                    })
                }
            </div>
        </div>

        <div className='mt-8'>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>Share your feedback or suggestions*</h3>

            <textarea ref={reviewRef} className='w-full border border-solid border-gray-300 ficus:outline-primaryColour px-4 py-3
    rounded-md' rows='5' placeholder='Write your feedback here' ></textarea>
        </div>
        <button type='submit' className='bg-irisBlueColor text-white rounded-full px-10 py-3 font-bold mt-8' onClick={handleSubmitReview}>Submit</button>
    </div>
</>
  )
}

export default ReviewForm
