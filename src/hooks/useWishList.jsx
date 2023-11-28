import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"


const useWishList = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
        const { refetch, data: wishList = [] } = useQuery({
            queryKey: ["wishList", user?.email],
            queryFn: async () => {
                const res = await axiosSecure.get(`/wishlists?email=${user.email}`);
                return res.data;
            },
        });
  return  [wishList, refetch]
}

export default useWishList

    
