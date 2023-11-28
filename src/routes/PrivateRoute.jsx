/* eslint-disable no-unused-vars */
// import React, { useContext } from 'react'
// import { Navigate, useLocation } from 'react-router-dom';
// import Loading from '../pages/Shared/LoadingSpinner/Loading';
// import { AuthContext } from '../providers/AuthProvider';


// const PrivateRoute = ({children}) => {
//     const  { user, loading } = useContext(AuthContext);
//     const location = useLocation();
//     if (loading) {
//         return <Loading/>
//     }
//     if (user) {
//         return children;
//     }
//   return <Navigate to="/login" state={{from:location}} replace/>
// }

// export default PrivateRoute


import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Shared/LoadingSpinner/Loading';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, loading, isAgent } = useContext(AuthContext); 
  const location = useLocation();

  if (loading) {
    return <Loading/>;
  }

  if (!user) {
    // User not logged in, redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else if (allowedRoles && allowedRoles.includes('agent') && !isAgent) {
    // User does not have the 'agent' role, redirect to an unauthorized page or home
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }


  return children;
}

export default PrivateRoute;
