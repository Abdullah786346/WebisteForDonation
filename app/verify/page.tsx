"use client";
import useApiCallerWithToken from "@/hooks/useApiCallerWithToken";
import { apiCaller } from "@/utils/apiCaller";
import Loading from "@/utils/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const apiCallerWithToken = useApiCallerWithToken();
  const searchParams = useSearchParams();
  const verifyToken = searchParams.get("token");
  const router = useRouter();

  const { data, isLoading, error, isSuccess, isError } = useQuery({
    queryKey: ["verify", verifyToken],
    queryFn: async () => {
      const resp = await apiCaller.get(
        `/user/verifyEmail?verificationToken=${verifyToken}`
      );
      return resp;
    },
  });

  if (isSuccess) {
    toast.success(data.data.message);
    router.push("/verify/email-verified");
  }
  if (isError) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data.error.message || error.message);
    } else {
      toast.error(error.message);
    }
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <p>Done</p>
        {isLoading && <p>Loading</p>}
        {data?.data.success && <p>Verified</p>}
      </div>
    </Suspense>
  );
};

export default VerifyEmail;
