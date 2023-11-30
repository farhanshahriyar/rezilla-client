import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
    const [error , setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        return;
        }
        const card = elements.getElement(CardElement);
        if (!card === null){
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message);
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }
        // Send paymentMethod.id to your server
        const response = await fetch('charge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
        });

        const paymentResult = await response.json();
        console.log(paymentResult);
        // Handle paymentResult here (e.g., display success message, update UI)
        if (paymentResult.error) {
            setError(paymentResult.error.message);
        } else {
            setError('');
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className="w-full py-3 px-4 text-sm font-medium text-white bg-green-900 dark:text-white hover:bg-black hover:text-white" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-500 text-xs mt-2">{error}</p>
    </form>
  )
}

export default CheckoutForm
