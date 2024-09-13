"use client";
import Loading from "@/utils/Loading";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  router.replace("/main");
  return <Loading />;
};

export default Page;
