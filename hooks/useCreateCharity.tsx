import { useMutation } from "@tanstack/react-query";
import React from "react";
import useApiCallerWithToken from "./useApiCallerWithToken";
import { useAppDispatch } from "@/store";
import { clearState } from "@/features/charity/charitySlice";
import { toast } from "react-toastify";
import axios from "axios";
import { createCharityType } from "@/constants/types";

const useCreateCharity = () => {
  const apiCallerWithToken = useApiCallerWithToken();
  const dispatch = useAppDispatch();
  const { mutate: createCharity, isPending: isLoading } = useMutation({
    mutationFn: async (data: createCharityType) => {
      const response = await apiCallerWithToken.post("/charity/create", data);
      return response;
    },
    onSuccess: (res) => {
      dispatch(clearState());
      toast.success(res.data.message);
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.error.message || err.message);
      } else {
        toast.error(err.message);
      }
    },
  });
  return { createCharity, isLoading };
};

export default useCreateCharity;
