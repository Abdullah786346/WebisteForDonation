"use client";

import { usePathname } from "next/navigation";
import Step1 from "./step-1";
import Step2 from "./step-2/page";

const RegisterOrg = () => {
  const pathname = usePathname();

  return (
    <>{pathname === "/register-organization/step-2" ? <Step2 /> : <Step1 />}</>
  );
};

export default RegisterOrg;
