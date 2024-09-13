import { setUser } from "@/features/auth/userSlice";
import useApiCallerWithToken from "@/hooks/useApiCallerWithToken";
import { useAppDispatch } from "@/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const useUpdate = () => {
  const queryClient = useQueryClient();
  const apiCallerWithToken = useApiCallerWithToken();
  const dispatch = useAppDispatch();
  const { isPending: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: async (data: object) => {
      const res = await apiCallerWithToken.patch("/user/update-profile", data);
      dispatch(setUser(res?.data?.user));
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userDetails"] });
      toast.success("Details Updated");
    },
    onError: (err) => {
      console.log(err);

      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.error.message || err.message);
      } else {
        toast.error(err.message);
      }
    },
  });

  return { isUpdating, updateUser };
};

export default useUpdate;
