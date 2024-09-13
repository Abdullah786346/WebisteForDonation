import useApiCallerWithToken from "@/hooks/useApiCallerWithToken";
import apiCaller from "@/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const useUpdateOrg = () => {
  const queryClient = useQueryClient();
  const apiCallerWithToken = useApiCallerWithToken();
  const { isPending: isUpdating, mutate: updateOrg } = useMutation({
    mutationFn: async (data: object) => {
      const res = await apiCallerWithToken
        .patch("/organization/update", data)
        .catch((err) => {
          throw err;
        });
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userDetails"] });
      toast.success("Details Updated");
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.error.message || err.message);
      } else {
        toast.error(err.message);
      }
    },
  });

  return { isUpdating, updateOrg };
};

export default useUpdateOrg;
