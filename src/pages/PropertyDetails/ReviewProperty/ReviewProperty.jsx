import React from 'react'
import { useContext, useEffect, useState } from 'react';
import avatar from '../../assets/images/avatar-icon.png';
import { formateDate } from '../../utils/formateDate';
import { AiFillStar } from 'react-icons/ai';
import ReviewForm from './ReviewForm/ReviewForm';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const ReviewProperty = () => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const { id: name } = useParams();
  const axios = useAxios();
  useEffect(() => {
    try {
      (async function fasd() {
        const { data } = await axios.get(`get-feedback/${name.split('-').join(' ')}`);
        console.log(data);
        setFeedbacks(data);
      })();
    } catch (err) {
    //   toast.error(err.response.data.error);

      console.log({ err });
    }
  }, [name, refetch]);

  return (
    <div>
    <div className="mb-[50px]">
      <h3 className='text-[20px] leading-[30px] text-headingColor font-bold'>All Reviews {feedbacks.length}</h3>
    </div>

    {feedbacks.map(i => <div className='flex justify-between gap-10 mb-[30px]'>
      <div className='flex gap-3'>
        <figure className='w-10 h-10 rounded-full'>
          <img className='w-full' src={i.user.photo} alt='avatar' />
        </figure>
        <div>
          <h4 className='text-[16px] leading-6 text-primaryColor font-bold'>{i.user.name}</h4>
          <p className='text-[14px] leading-5 text-textColor font-medium'>{i.date.split('/').join('-')}</p>
          <p className='text__para mt-3 font-medium text-[15px] text-textColor'>{i.review}</p>
        </div>
      </div>
      <div className='flex gap-1'>
        {
          [...Array(i.rating).keys()].map((_, index) =>
            <AiFillStar key={index} color='#0067FF' />)

        }
      </div>
    </div>
    )}
    {/* <div className='text-center'>
          <button className='bg-irisBlueColor text-white rounded-full px-10 py-3 font-bold' onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
      </div> */}

    {!showFeedbackForm && (
      <div className='text-center'>
        <button className='bg-irisBlueColor text-white rounded-full px-10 py-3 font-bold' onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>
      </div>
    )}

    {showFeedbackForm && <FeedbackForm setRefetch={setRefetch} />}
  </div>
  )
}

export default ReviewProperty
