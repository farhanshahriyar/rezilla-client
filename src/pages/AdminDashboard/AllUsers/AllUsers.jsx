/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // search term
  const { data: users = [], refetch } = useQuery({
    queryKey: ["/users", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/users?email=${user?.email}`);
        return res.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        navigate('/');
      }
    },
  });

  // search user using email functionality
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // search user using email functionality 
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // make admin functionallity
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire("Success!", `${user.name} has been made admin now.`, "success", 1500);
      } else {
        Swal.fire("Oops!", "User has not been made admin.", "error", 1500);
      }
    });
  };

  // make agent functionallity
  const handleMakeAgent = (user) => {
    axiosSecure.patch(`/users/agent/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire("Success!", `${user.name} has been made agent now.`, "success", 1500);
      } else {
        Swal.fire("Oops!", "User has not been made agent.", "error", 1500);
      }
    });
  };

  // make fraud functionallity
  const handleMakeFraud = (user) => {
    axiosSecure.patch(`/users/fraud/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire("Success!", `${user.name} has been made fraud now.`, "success", 1500);
      } else {
        Swal.fire("Oops!", "User has not been made fraud.", "error", 1500);
      }
    });
  };

  // delete user functionallity
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this user from list!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it!",
      confirmButtonColor: "#f87171",
      cancelButtonColor: "#60a5fa",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "User has been deleted from list.",
                "success"
              );
            } else {
              // Handle the case where the item may not exist or has already been deleted.
              Swal.fire(
                "Oops!",
                "The item you tried to delete was not found.",
                "error"
              );
            }
          })
          .catch((error) => {
            // This will catch any network errors, or errors thrown from the server side.
            console.error("Error deleting item:", error);
            Swal.fire(
              "Error!",
              "There was a problem deleting the item.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-2xl text-center text-gray-800 mt-5 uppercase">
        Manage All Users
      </h1>
      <div className="flex justify-evenly my-4">
        <h2 className="text-2xl text-center text-gray-800 mt-5">All Users</h2>
        <h2 className="text-2xl text-center text-gray-800 mt-5">
          Total Users: {users.length} Available
        </h2>
      </div>
      {/* Tables of users */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <div className="py-3 px-4">
                    <div className="relative max-w-xs">
                    <label className="sr-only">Search</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange} // Set the event handler here
                        className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Search for user"
                    />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="py-3 px-4 pe-0">
                        <div className="flex items-center h-5">
                          #
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Role Admin
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Role Agent
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Role Fraud
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {/* {users.map((user, index) => ( */}
                    {filteredUsers.map((user, index) => (
                      <tr key={user._id}>
                        <td className="py-3 ps-4">
                          <div className="flex items-center h-5">
                           { index + 1}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          { user.role === 'admin' ? 'Admin' :
                            <button
                            onClick={() => handleMakeAdmin(user)}
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            <FaUser className="text-xl text-teal-500" />
                          </button>
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          { user.role === 'agent' ? 'Agent' :
                            <button
                            onClick={() => handleMakeAgent(user)}
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            <FaUser className="text-xl text-sky-500" />
                          </button>
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          { user.role === 'fraud' ? 'Fraud' :
                            <button
                            onClick={() => handleMakeFraud (user)}
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            <FaUser className="text-xl text-gray-500" />
                          </button>
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button
                            onClick={() => handleDeleteUser(user)}
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            <FaTrash className="text-xl text-red-500" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;