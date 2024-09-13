"use client";
import useSession from "@/hooks/useSession";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, ReactElement } from "react";
import { toast } from "react-toastify";
import Protect from "./Protect";

export default function AuthProvider({
  children,
}: {
  children: React.ReactElement; // Notice that  is changed to ReactElement
}) {
  const params = useParams();
  const pathname = usePathname();

  const routeWithParams = `${Object.values(params).join("/")}`;

  const organizationRoutes = [
    "/create-charity",
    "/settings/organization-profile",
    // '/settings/profile-settings'
    // add organization routes here....
  ];

  const userRoutes = [
    "/donate",
    `/donate/${routeWithParams}`,
    "/settings/profile-settings",
    // add user routes here....
  ];
  const protectedRoutes = [...organizationRoutes, ...userRoutes];

  const isProtectedPath = protectedRoutes.includes(pathname);
  const isOrgRoute = organizationRoutes.includes(pathname);
  const isUserRoute = userRoutes.includes(pathname);

  if (!isProtectedPath) return children;

  return (
    <Protect isOrgRoute={isOrgRoute} isUserRoute={isUserRoute}>
      {children}
    </Protect>
  );
}
