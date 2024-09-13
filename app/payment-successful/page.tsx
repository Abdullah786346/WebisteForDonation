"use client";
import useApiCallerWithToken from "@/hooks/useApiCallerWithToken";
import { apiCaller } from "@/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";

import React, { useState, useEffect, Suspense } from "react"; //import useState and useEffect

import { toast } from "react-toastify";

import PaymentPopup from "@/components/PaymentSuccessPopup"; // import the Popup component
import Loading from "@/utils/Loading";

/* Successful Transaction
 card No: 5531886652142950
 exp date: 09/32
 cvv:564
 otp: 12345
 pin:3310
 */
/* Failed Transaction
 card No: 5143010522339965
 exp date: 08/32
 cvv:276
 otp: 12345
 pin:3310 */
const PaymentSuccessful = () => {
  const [showPopup, setShowPopup] = useState(false); // state to control popup visibility

  const apiCallerWithToken = useApiCallerWithToken();
  const searchParams = useSearchParams();
  const router = useRouter();
  const txRef = searchParams.get("tx_ref");
  const transactionId = searchParams.get("transaction_id");
  const { data, isLoading, isSuccess, error, isError } = useQuery({
    queryKey: ["verify-payment", txRef],
    queryFn: async () => {
      const resp = await apiCaller.get(
        `/donations/payment-callback?tx_ref=${txRef}&transaction_id=${transactionId}`
      );
      console.log(resp);
      return resp;
    },
  });

  if (isError) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data.error.message || error.message);
    } else {
      toast.error(error.message);
    }
  }
  if (isSuccess) {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        {isLoading && <p>Loading</p>}
        {isSuccess && <PaymentPopup message='Payment Successful' />}

        {/* Show the popup */}
      </div>
    </Suspense>
  );
};

export default PaymentSuccessful;
