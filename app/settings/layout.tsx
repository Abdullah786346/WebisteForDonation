"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuAlignJustify } from "react-icons/lu";

import { FaBell, FaChevronDown, FaSearch, FaUser } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import SettingsNav from "@/components/SettingsNav";
import useSession from "@/hooks/useSession";
import Loading from "@/utils/Loading";
const NAV_LINKS = [
  {
    path: "/security",
    text: "Security",
  },
  {
    path: "/notifications-settings",
    text: "Notifications",
  },
  {
    path: "/billings",
    text: "Billings",
  },
  {
    path: "/dashboard",
    text: "Dashboard",
  },
];
export default function Layout({ children }: { children: React.ReactNode }) {
  const currentPath = usePathname();
  let details: any = [];
  const { isLoading, data, error, isSuccess } = useSession();
  if (isSuccess) {
    if (data?.data) {
      details = Object.values(data.data);
      console.log(details);
    }
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='grid h-screen grid-cols-[16rem] bg-gray-100 grid-rows-[70px,55px] w-full'>
      <SettingsNav />
      <div className='col-span-2 flex items-center py-2  max-h-full h-full px-7'>
        <h1 className='text-xl font-semibold'>Account Settings</h1>
      </div>

      <aside className='px-5 py-3 bg-white'>
        <ul className='space-y-8 list-none py-5 font-medium'>
          <li>
            <Link
              className={`hover:bg-gray-100 px-4 py-1  rounded-full  ${
                currentPath === `/settings/profile-settings` ||
                currentPath === "/settings/organization-profile"
                  ? "bg-blue-50 text-blue-300"
                  : "text-gray-500"
              }`}
              //TODO: fixes the href
              href={
                details[1]?.role !== "organization"
                  ? `/settings/profile-settings`
                  : "/settings/organization-profile"
              }
            >
              My Profile
            </Link>
          </li>
          {NAV_LINKS.map(({ path, text }) => (
            <li key={path}>
              <Link
                className={`hover:bg-gray-100 px-4 py-1  rounded-full  ${
                  currentPath === `/settings${path}`
                    ? "bg-blue-50 text-blue-300"
                    : "text-gray-500"
                }`}
                href={`/settings${path}`}
              >
                {text}
              </Link>
            </li>
          ))}

          <li>
            <Link
              className={`hover:bg-red-100 px-3 py-1 text-gray-500 rounded-full ${
                currentPath === "/settings/delete-account"
                  ? "bg-red-300 text-red-500"
                  : ""
              }`}
              href={"/settings/delete-account"}
            >
              Delete Account
            </Link>
          </li>
        </ul>
      </aside>

      <main className='overflow-y-auto bg-white '>
        <div className='border h-fit rounded-3xl m-5 p-5'>{children}</div>
      </main>
    </div>
  );
}
