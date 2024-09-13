"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";
import { MouseEvent, useEffect, useState } from "react";
import { navigationLinks } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/store";
import { FaBell } from "react-icons/fa";
import useSession from "@/hooks/useSession";
import { toast } from "react-toastify";
import MiniLoader from "@/utils/MiniLoader";
import useApiCallerWithToken from "@/hooks/useApiCallerWithToken";
import { setUser } from "@/features/auth/userSlice";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openDropDown, setOpenDropDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const apiCallerWithToken = useApiCallerWithToken();
  let details: any = [];
  const { isLoading, data: result, error, isSuccess } = useSession();
  if (isSuccess) {
    if (result?.data) {
      details = Object.values(result.data);
      console.log(details);
    }
  }
  const LogoutFunction = async (e: MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const resp = await apiCallerWithToken.get("/user/logout");
      console.log(resp);

      if (resp.status === 200) {
        toast.success("Logout successful");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className='w-full bg-white py-2 px-5 lg:px-16 shadow border-b sticky top-0 z-50 '>
      <div className='container m-auto flex justify-between items-center '>
        <Link href='/' className='w-16 lg:w-20'>
          <Image
            src='/assets/heal-me-logo.png'
            alt='Heal Me logo'
            className='w-full h-full'
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop  Nav*/}
        <nav className='hidden lg:flex flex-1 justify-center'>
          <ul className='flex gap-4 md:gap-8 lg:gap-12'>
            {navigationLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className={`text-lg font-semibold  ${
                    pathname === link.href
                      ? "text-orange-800 active-nav active-nav"
                      : "text-blue-800"
                  }`}
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Interaction Buttons (Desktop) */}
        <div className='lg:flex hidden items-center gap-3 '>
          {details.length > 1 && details[1] ? (
            <>
              <div className='mr-4'>
                {details[1].role === "organization" ? (
                  <Button
                    variant='orange'
                    disabled={false}
                    size='md'
                    onClick={() => {
                      router.push("/create-charity");
                    }}
                  >
                    New Charity
                  </Button>
                ) : (
                  <Button
                    variant='orange'
                    disabled={false}
                    size='md'
                    onClick={() => {
                      router.push("/donate");
                    }}
                  >
                    Donate
                  </Button>
                )}
              </div>
              <FaBell className='cursor-pointer text-blue-800' />
              <div className='relative'>
                <Image
                  onClick={() => {
                    setOpenDropDown(!openDropDown);
                  }}
                  src={
                    details[1].anonymous ? "/assets/hero.png" : details[1].image
                  }
                  alt={
                    details[1].anonymous
                      ? details[1].anonymousEmail
                      : details[1].email
                  }
                  height={500}
                  width={500}
                  className='size-12  border rounded-full cursor-pointer object-cover'
                />
                {openDropDown && (
                  <ul className='absolute cursor-pointer top-16 -right-7 px-1 py-3 rounded-md min-w-40 bg-white shadow-md  shadow-black sha'>
                    <li
                      onClick={() => {
                        setOpenDropDown(false);
                        if (details[1].role === "organization") {
                          router.push(`/main/charity-homes/${details[1]._id}`);
                        } else {
                          router.push(`/main/profile/donor/${details[1]._id}`);
                        }
                      }}
                      className='px-3 py-1 border-b font-medium text-md '
                    >
                      View Profile
                    </li>
                    <li
                      onClick={() => {
                        setOpenDropDown(false);
                        if (details[1].role === "organization") {
                          router.push(`/settings/organization-profile`);
                        } else {
                          router.push(`/settings/profile-settings`);
                        }
                      }}
                      className='px-3 py-1 border-b font-medium text-md '
                    >
                      Settings
                    </li>
                    <li
                      onClick={(e: any) => {
                        setOpenDropDown(false);
                        LogoutFunction(e);
                      }}
                      className='px-3 py-1 border-b font-medium text-md '
                    >
                      Logout
                    </li>
                  </ul>
                )}
              </div>
            </>
          ) : isLoading ? (
            <MiniLoader ratio='40px' />
          ) : (
            <>
              <Button
                variant='outlinedWhite'
                disabled={false}
                size='lg'
                onClick={() => router.push("/signin")}
              >
                Log In
              </Button>
              <Button
                variant='orange'
                disabled={false}
                size='lg'
                onClick={() => router.push("/join-us")}
              >
                Join Us
              </Button>
            </>
          )}
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <>
            <nav
              className={`m-auto space-y-3 absolute lg:hidden bg-stone-400/90 overflow-hidden p-5 py-10 left-0 right-0 top-20 z-50  ${
                isOpen && "slide-down"
              }`}
            >
              <ul
                className={`flex m-auto bg-gray-200 w-[90%] p-5 rounded flex-col gap-4 md:gap-8 lg:gap-12`}
              >
                {navigationLinks.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className={`text-lg font-semibold  ${
                        pathname === link.href
                          ? "text-orange-800 active-nav active-nav"
                          : "text-blue-800"
                      }`}
                    >
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  );
                })}
              </ul>

              <div className='flex items-center justify-center gap-2 m-auto'>
                {details.length > 1 && details[1] ? (
                  <>
                    <FaBell className='cursor-pointer text-blue-800' />
                    <Image
                      src={details[1].image}
                      alt={details[1].email}
                      height={500}
                      width={500}
                      className='size-12  border rounded-full cursor-pointer'
                    />
                  </>
                ) : (
                  <>
                    <Button variant='white' disabled={false}>
                      Log In
                    </Button>
                    <Button variant='orange' disabled={false}>
                      <Link href={"/join-us"}>Join Us</Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </>
        )}

        {/* Mobile Navigation Button */}
        <button
          className='lg:hidden bg-stone-200'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='sr-only'>menu</span>
          MENU
        </button>
      </div>
    </header>
  );
};

export default Header;
