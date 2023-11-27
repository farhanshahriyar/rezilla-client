/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Shared/LoadingSpinner/Loading';
import { AuthContext } from '../providers/AuthProvider';


const PrivateRoute = ({children}) => {
    const  { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading/>
    }
    if (user) {
        return children;
    }
  return <Navigate to="/login" state={{from:location}} replace/>
}

export default PrivateRoute