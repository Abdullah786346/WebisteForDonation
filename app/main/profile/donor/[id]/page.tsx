"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import Image from "next/image";
// import Button from "@/components/Button";
import { FaChevronRight, FaStar } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { Flag, Medal } from "@/utils/Icon";
import Button from "@/components/Button";
import apiCaller from "@/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store";
import moment from "moment";
import Achievements from "@/components/Achievements";
import Loading from "@/utils/Loading";
import { MdStarOutline } from "react-icons/md";

const DonorProfile = ({ params }: { params: { id: string } }) => {
  const [image, setImage] = useState(true);
  const router = useRouter();
  const { _id: loggedInUserId } = useAppSelector((store) => store.userSlice);
  const donationHistory = [
    { image: "/assets/donor/profile.png", title: "Heroes  Mother care" },
    { image: "/assets/donor/profile.png", title: "Childhood Development" },
  ];

  const { data, isLoading, error, isSuccess, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const resp = await apiCaller.get(`/user/profile/${params.id}`);
      console.log(resp);

      return resp;
    },
  });
  if (isError) {
    router.back();
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className=''>
      <main className='flex max-container justify-center items-center  w-full '>
        <main className='flex justify-center items-center flex-col w-[90%] py-20'>
          <aside className='flex  justify-between items-start w-full pb-10 flex-col md:flex-row gap-4'>
            <div className='flex  w-full justify-between items-start  flex-col md:flex-row gap-5'>
              <div className='flex justify-between  w-full md:w-fit  items-start flex-col '>
                <div className='md:mx-0 w-56 mx-auto min-h-56 h-full max-h-80   relative'>
                  {/* Change anonymous image later */}
                  <Image
                    src={
                      data?.data.user.anonymous
                        ? "/assets/hero.png"
                        : data?.data.user.image
                    }
                    alt='Profile Image'
                    fill
                    className='object-cover object-center rounded-lg mb-2'
                  />
                </div>
                <p className='md:text-start text-center w-full md:w-fit text-gray-700 font-medium text-md my-1  uppercase'>
                  {/*FIXME: Add createdAt to backend*/} MEMBER SINCE{" "}
                  {moment(data?.data.user.createdAt).format("MMM YYYY")}
                </p>
                {data?.data.user.stars > 0 && (
                  <span className='text-sm flex items-center d gap-1 '>
                    {data?.data.user.stars} <MdStarOutline />{" "}
                  </span>
                )}
              </div>
              <div className='w-full '>
                <aside className='mb-2'>
                  <p className='text-xs font-medium text-gray-500 '>
                    FULL NAME
                  </p>
                  <h1 className=' text-gray-600 break-all  text-lg font-semibold'>
                    {/* Change in backend */}
                    {data?.data.user.anonymous
                      ? `Anonymous User${data?.data.user.anonymousName}`
                      : data?.data.user.fullName}
                  </h1>
                </aside>
                <aside className='mb-2'>
                  <p className='text-xs font-medium text-gray-500 '>
                    EMAIL ADDRESS
                  </p>
                  <h1 className=' text-gray-600 break-all font-semibold text-lg'>
                    {data?.data.user.anonymous
                      ? data?.data.user.anonymousEmail
                      : data?.data.user.email}
                  </h1>
                </aside>
                <aside>
                  {/* FIXME: Add details to backend  */}
                  <p className='text-xs font-semibold text-gray-500 '>
                    NATIONALITY
                  </p>
                  <div className='flex justify-start items-center'>
                    <Flag />
                    <h1 className=' text-gray-600 font-semibold text-lg ml-2'>
                      Nigeria
                    </h1>
                  </div>
                </aside>
              </div>
            </div>
            {loggedInUserId === params.id && (
              <div
                onClick={() => {
                  router.push("/settings/profile-settings");
                }}
              >
                <button className='rounded-md  flex font-medium items-center justify-center  gap-2 w-fit  bg-blue-800 text-white hover:bg-blue-800/90 px-5 py-2 min-w-40'>
                  <FaPen className='mr-1' size={16} /> Edit Profile
                </button>
              </div>
            )}
          </aside>
          <aside className='flex justify-start items-center w-full'>
            <div className='w-[90%] pb-10'>
              <h1 className=' text-md text-gray-700 font-medium mb-4'>
                ABOUT ME
              </h1>
              <p className='text-gray-500 '>{data?.data.user.bio}</p>
            </div>
          </aside>

          <aside className='flex justify-start items-center w-full pb-10'>
            <div className='w-full md:w-[60%]'>
              <h1 className='font-semibold  text-gray-600 text-xl mb-4'>
                Donation History
              </h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full '>
                <div className='h-full w-full'>
                  <Image
                    src={"/assets/hero.png"}
                    alt={"ok"}
                    width={600}
                    height={600}
                    className='min-h-56 w-full rounded-md object-cover object-center'
                  />
                  <p className=' text-lg break-all text-gray-600 font-medium mt-1'>
                    Help the poor
                  </p>
                </div>
              </div>
              <div className='flex justify-end items-center w-full  mt-6'>
                <button className='bg-blue-800 rounded-lg px-6 py-2 text-white flex justify-center items-center '>
                  View All <FaChevronRight className='ml-2' size={16} />
                </button>
              </div>
            </div>
          </aside>
          {loggedInUserId && <Achievements user={loggedInUserId} />}
        </main>
      </main>
      <Footer />
    </section>
  );
};

export default DonorProfile;
