import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAgent = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAgent } = useQuery({
      queryKey: ["isAgent", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/agent/${user.email}`);
        console.log(res.data?.agent);
        return res.data?.agent;
      } 
    });
    return [isAgent];
}

export default useAgent
