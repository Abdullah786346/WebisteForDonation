"use client";
import Loading from "@/utils/Loading";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/main");
  }, [router]);

  return <Loading />;
};

export default Page;
