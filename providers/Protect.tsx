"use client";

import useSession from "@/hooks/useSession";
import Loading from "@/utils/Loading";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Protect({
  children,
  isOrgRoute,
  isUserRoute,
}: {
  children: any;
  isOrgRoute?: boolean;
  isUserRoute?: boolean;
}) {
  const router = useRouter();
  const { isLoading, data: result, error } = useSession();

  function redirectAndToast(path: string, message: string) {
    toast.error(message);
    router.push(path);
  }

  if (isLoading) return <Loading />;
  if (error)
    return redirectAndToast("/signin", "An error occurred, Kindly Login Again");

  console.log(result);
  if (result?.status !== 200) {
    return redirectAndToast("/signin", "You are not logged in, Kindly Login");
  }

  let details: any = Object.values(result.data); // got the values of the data object sent from backend
  console.log(details, result);

  if (details[1].role !== "organization" && isOrgRoute) {
    router.back();
    return <Loading />;
  }

  if (details[1].role === "organization" && isUserRoute) {
    console.log(isOrgRoute, isUserRoute);
    router.back();
    return <Loading />;
  }

  return children;
}
