import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import Loading from '../Shared/LoadingSpinner/Loading';

const MakeOfferPage = () => {
    const { propertyId } = useParams(); 
//   const { user } = useContext(AuthContext);

  const [property, setProperty] = useState(null);
//   const [offerAmount, setOfferAmount] = useState('');
//   const [offerDate, setOfferDate] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch the property details when the component is mounted
    fetch(`http://localhost:5000/properties/${propertyId}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        //  API returns a price range, you may need to adjust based on your API response
        // setPriceRange([data.minPrice, data.maxPrice]); 
      })
      .catch((error) => {
        console.error('Error fetching property details:', error);
      });
  }, [propertyId]);

//   const handleOfferChange = (e) => {
//     setOfferAmount(e.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Validate offered amount
//     if (offerAmount < property.priceRange[0] || offerAmount > property.priceRange[1]) {
//       setErrorMessage('Offered amount must be within the specified range.');
//       return;
//     }

//     // Implement the offer submission logic here
//     // If successful, redirect the user or update the UI accordingly
//   };

  if (!property) {
    return <Loading/>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold text-center my-4">Make an Offer</h1>
      <h2 className="text-2xl font-semibold text-center my-4">Property Id {property._id}</h2>
      {/* <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <TextField
          label="Property Title"
          value={property.title}
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          label="Property Location"
          value={property.location}
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          label="Agent Name"
          value={property.agentName}
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          label="Offered Amount"
          type="number"
          value={offerAmount}
          onChange={handleOfferChange}
          helperText={errorMessage || `Offer must be between $${property.priceRange[0]} and $${property.priceRange[1]}`}
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!errorMessage}
        />
        <TextField
          label="Buyer Email"
          value={user.email} 
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          label="Buyer Name"
          value={user.displayName} 
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          label="Buying Date"
          type="date"
          value={offerDate}
          onChange={(e) => setOfferDate(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-4"
        >
          Make Offer
        </Button>
      </form> */}
     
    </div>
  );
};

export default MakeOfferPage;