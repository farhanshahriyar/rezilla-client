/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import axios from 'axios';
import Loading from '../../Shared/LoadingSpinner/Loading';
import Swal from 'sweetalert2';

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch korbe user details from the backend
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${user.email}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    if (user.email) {
      fetchProfile();
    }
  }, [user]);

  // jodi profile na pay tahole load nibe
  if (!profile) {
    return <Loading/>;
  }

  const handleProfileEdit = (id) => {
    console.log(id);
    // just show id using swal 
    Swal.fire({
      title: `Profile Edit${id}`,
      text: 'Profile edit page is under construction',
      icon: 'warning',
    })
  };

  return (
    <div>
   
      <div className="px-4 sm:px-0">
    <h3 className="text-base font-semibold leading-7 text-gray-900">Profile Information</h3>
    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and Other Settings</p>
  </div>
  <div className="mt-6 border-t border-gray-100">
    <dl className="divide-y divide-gray-100">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <img src={user.photoURL} alt={profile.name} className="w-32 h-32 rounded-full" />
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profile.name}</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Role</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">   {profile.role && <p className="text-sm text-gray-600">{profile.role}</p>}</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profile.email}</dd>
      </div>
      {/* button action */}
      <button onClick = {() => handleProfileEdit(profile._id)}
       className="px-4 py-2 text-sm font-medium text-white bg-green-800 rounded">Edit Profile</button>
    </dl>
  </div>

    </div>
  );
};

export default AdminProfile;
