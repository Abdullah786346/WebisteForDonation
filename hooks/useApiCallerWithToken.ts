"use client";
import { apiCallerWithToken } from "@/utils/apiCaller";
import { useRefreshToken } from "./useRefreshToken";
import { useEffect } from "react";
import { useAppSelector } from "@/store";

const useApiCallerWithToken = () => {
  const refresh = useRefreshToken();
  useEffect(() => {
    // const requestIntercept = apiCallerWithToken.interceptors.request.use(
    //   (config) => {
    //     if (sessionStorage.getItem("info")) {
    //       let token = sessionStorage.getItem("info");
    //       if (!config.headers["Authorization"]) {
    //         if (token) {
    //           config.headers["Authorization"] = `Bearer ${token}`;
    //         }
    //       }
    //     }
    //     return config;
    //   },
    //   (error) => Promise.reject(error)
    // );
    const responseIntercept = apiCallerWithToken.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        console.log(error);

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          await refresh();
          return apiCallerWithToken(prevRequest);
        }
        console.log(error);

        return Promise.reject(error);
      }
    );
    return () => {
      // Removes the interceptor instances on clean up
      apiCallerWithToken.interceptors.response.eject(responseIntercept);
      // apiCallerWithToken.interceptors.response.eject(requestIntercept);
    };
  }, [refresh]);
  return apiCallerWithToken;
};
export default useApiCallerWithToken;
