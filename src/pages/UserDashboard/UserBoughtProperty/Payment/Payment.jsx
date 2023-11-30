import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';



const Payment = () => {
     // add publish key from stripe
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  return (
    <div>
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    </div>
  )
}

export default Payment
