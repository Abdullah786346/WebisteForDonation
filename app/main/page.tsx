"use client";
import Button from "@/components/Button";
import CharityCard from "@/components/CharityCard";
import OrangeButtonLine from "@/components/OrangeButtonLine";
import { latestDonations, teamMembers } from "@/constants";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import HomeHelpSection from "@/components/HomeHelpSection";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaChevronRight,
} from "react-icons/fa";
import {
  IoChevronBackCircleOutline,
  IoChevronBackOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { useRefreshToken } from "@/hooks/useRefreshToken";
import useApiCallerWithToken from "@/hooks/useApiCallerWithToken";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "@/store";
import { setOrgDetails } from "@/features/auth/orgSlice";
import Loading from "@/utils/Loading";
import MiniLoader from "@/utils/MiniLoader";
import UpcomingEventsCard from "@/components/UpcomingEventsCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import apiCaller from "@/utils/apiCaller";
import { CharityCardType } from "@/constants/types";
export default function Home() {
  // Use this as the axios base url for every api request that requires access token
  // const apiCallerWithToken = useApiCallerWithToken();
  // const dispatch = useAppDispatch();
  // const { data, isLoading, error, isSuccess, isError } = useQuery({
  //   queryKey: ["details"],
  //   queryFn: async () => {
  //     const resp = await apiCallerWithToken.get(`/user/details`);
  //     console.log(resp);
  //     if (resp.data?.user) {
  //       dispatch(setUserDetails(resp.data.user));
  //     } else {
  //       dispatch(setOrgDetails(resp.data.organization));
  //     }
  //     return resp;
  //   },
  // });
  const { data, isLoading, error, isSuccess, isError } = useQuery({
    queryKey: ["charities"],
    queryFn: async () => {
      const resp = await apiCaller.get(`/charity`);
      console.log(resp);
      return resp;
    },
  });
  const router = useRouter();
  return (
    <>
      {/* Hero */}
      {/* <p>{data?.data?.user?.email || data?.data?.organization.email}</p> */}
      <Hero
        btnText='Donate now'
        title='Join us in making a difference today!'
        desc='Every action counts, and your support can transform lives.'
      />

      {/* Who We Are */}
      <WhoWeAre />

      {/* How Could you help */}
      <HomeHelpSection />

      {/* Latest Donations */}
      <section className='container mx-auto px-6 py-8 flex flex-col items-center gap-4'>
        <h2 className='font-bold text-2xl text-blue-800'>Latest Charities</h2>
        <OrangeButtonLine />

        <div className='grid grid-cols-1 w-full   lg:grid-cols-3 gap-8 mt-4'>
          {isLoading ? (
            <MiniLoader ratio='100px' />
          ) : (
            data?.data.charities
              .slice(0, 3)
              .map((charity: CharityCardType) => (
                <CharityCard key={charity._id} {...charity} />
              ))
          )}
        </div>
      </section>

      {/* Numbers */}
      <section className='max-container m-auto p-10 text-gray-700'>
        <div className='flex flex-col-reverse md:flex-row gap-6 justify-center md:p-10'>
          <div className='md:w-1/3 space-y-5'>
            <h2 className='text-3xl font-semibold text-gray-700'>
              Multiple Event & <br /> Conference
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry ore
            </p>
            <Button variant='blue' margin='none'>
              <Link
                href='/main/events/upcoming-events'
                className='flex items-center gap-1'
              >
                View All Event <FaChevronRight />{" "}
              </Link>
            </Button>
          </div>

          <div className='md:w-2/3 py-5 space-y-5'>
            <UpcomingEventsCard />
            <UpcomingEventsCard />
          </div>
        </div>
      </section>
      <section className=' bg-gray-200 py-12 text-gray-700'>
        <div className='container  flex items-center justify-around flex-wrap mx-auto'>
          <div className='font-bold flex flex-col justify-items-center items-center gap-2'>
            <span className=' text-2xl md:text-4xl'>1250+</span>
            <span className='text-sm md:text-xl'>Donations</span>
          </div>
          <div className='font-bold flex flex-col justify-items-center items-center gap-2'>
            <span className='font-bold text-2xl md:text-4xl'>700M</span>
            <span className='text-sm md:text-xl'>Fund Raise</span>
          </div>
          <div className='font-bold flex flex-col justify-items-center items-center gap-2'>
            <span className='font-bold text-2xl md:text-4xl'>24k</span>
            <span className='text-sm md:text-xl'>Active Members</span>
          </div>
        </div>
      </section>

      {/* Fundraising Plans */}
      <section className='max-container mx-auto py-10 my-10 flex flex-col items-center gap-4'>
        <h2 className='font-bold text-2xl text-blue-800'>Fundraising Plans</h2>
        <OrangeButtonLine />

        <div className='flex flex-col md:flex-row w-4/5'>
          <div className='bg-orange-800 text-white p-8 flex flex-col gap-4 justify-center items-center md:w-1/2'>
            <h3 className='text-3xl font-bold text-center'>
              Become a Volunteer
            </h3>
            <p className='text-center'>
              Your journey as a volunteer is just a few clicks away. Sign up now
              to become a part of our community. Let’s work together to make a
              lasting impact. Your time, your passion, and your dedication can
              change lives. Are you ready to step up and join us?
            </p>

            <Button
              variant='white'
              type='button'
              disabled={false}
              onClick={() => {
                router.push("/details/volunteer");
              }}
            >
              Read More
            </Button>
          </div>

          <div className='md:w-1/2'>
            <Image
              src='/assets/volunteer.jpeg'
              alt='Volunteers'
              width={0}
              height={0}
              sizes='100%'
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className=' bg-gray-200 w-full'>
        <div className=' py-14  justify-between lg:grid grid-cols-2 gap-10 items-center'>
          <div className='w-full hidden lg:flex h-96 bg-[url("/assets/who-we-are/who-we-are-3.jpeg")] bg-no-repeat bg-cover  '>
            <div className='bg-blue-800 bg-opacity-70 w-full h-full flex items-center justify-center'>
              <h3 className='text-5xl text-start text-white font-[Playfair-Display] font-semibold max-w-xs '>
                What People Say About Us
              </h3>
            </div>
          </div>
          <div className='w-full px-10 lg:px-0  space-y-10'>
            <Image
              src='/assets/home/what-people-say-about-us-image.png'
              alt='What People Say About us Image'
              width='100'
              height='100'
            />
            <p className='font-semibold max-w-lg text-gray-700'>
              It is long established fact that reader will distract by the
              readable content a page when looking atten layout. The point of
              using and that it has a normal distribution of letters
            </p>
            <div className='w-full  flex items-center justify-between gap-6'>
              <div>
                <h3 className='font-[Playfair-Display] font-bold text-2xl text-gray-700'>
                  Adam Holand
                </h3>
                <p className='text-sm capitalize font-medium'>
                  Senior Volunteer
                </p>
              </div>
              <div className='flex items-center justify-start gap-2  w-2/4 bg-blue-800 py-2 px-8 '>
                <IoChevronBackCircleOutline className='text-white text-4xl' />
                <IoChevronForwardCircleOutline className='text-white text-4xl' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
