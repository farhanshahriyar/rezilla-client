import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

// eslint-disable-next-line no-unused-vars
const useAdmin = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const { data: isAdmin } = useQuery({
//     queryKey: ["isAdmin", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.length(`/users/admin/${user.email}`);
//       console.log(res.data);
//       return res.data?.admin;
//     },
//   });
//   return [isAdmin];
// };

// export default useAdmin;

// const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isLoading, isError } = useQuery({
      queryKey: ["isAdmin", user?.email],
      queryFn: async () => {
        try {
          const res = await axiosSecure.get(`/users/admin/${user.email}`);
          // console.log("Admin data:", res.data);
          return res.data?.admin;
        } catch (error) {
          console.error("Error fetching admin data:", error);
          throw error;
        }
      },
    });
    console.log("Is Admin:", isAdmin);
  
    if (isLoading) {
      console.log("Loading...");
    }
  
    if (isError) {
      console.error("Error fetching admin data");
    }
  
    return [isAdmin];
  };
  
export default useAdmin;