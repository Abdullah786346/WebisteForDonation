import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "@/store";
import { setUser } from "@/features/auth/userSlice";
import { setOrgDetails } from "@/features/auth/orgSlice";
import apiCaller from "@/utils/apiCaller";
import useApiCallerWithToken from "./useApiCallerWithToken";
import { setId } from "@/features/auth/idSlice";

export default function useSession() {
  const apiCallerWithToken = useApiCallerWithToken();
  const dispatch = useAppDispatch();

  const { data, isLoading, error, isSuccess, isError } = useQuery({
    queryKey: ["userDetails"],
    retry: 1,
    queryFn: async () => {
      const resp = await apiCallerWithToken.get(`/user/details`);
      console.log(resp);
      dispatch(setUser(resp?.data?.user || resp?.data?.organization || null));

      return resp;
    },
  });

  return { isLoading, data, error, isSuccess, isError };
}
