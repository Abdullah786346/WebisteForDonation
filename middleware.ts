import { NextRequest, NextResponse } from "next/server";
import { toast } from "react-toastify";
import { apiCaller } from "./utils/apiCaller";

export const middleware = (request: NextRequest) => {};
export const config = {
  matcher: ["/charities/:path", "/donation", "/"],
};
