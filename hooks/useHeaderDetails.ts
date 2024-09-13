import React, { useEffect, useState } from "react";
import useSession from "./useSession";

const useHeaderDetails = () => {
  const [firstVisit, setFirstVisit] = useState<boolean | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  let details: any = [];

  if (firstVisit !== null && firstVisit) {
    const { isLoading, data: result, error, isSuccess } = useSession();
    setIsLoading(isLoading);
    if (isSuccess) {
      if (result?.data) {
        details = Object.values(result.data);
        console.log(details, "ioioi");
      }
    }
  }
  useEffect(() => {
    if (window !== undefined) {
      setFirstVisit(window.document.referrer === "");
    }
  }, []);
  return {};
};

export default useHeaderDetails;
