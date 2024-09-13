"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Image from "next/image";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AddressBox from "@/components/AddressBox";
import { apiCaller } from "@/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { FaNairaSign } from "react-icons/fa6";
import { useAppSelector } from "@/store";
import Loading from "@/utils/Loading";

const SingleCharity = ({ params }: { params: { id: string } }) => {
  const [width, setWidth] = useState(0);
  const { role } = useAppSelector((store) => store.userSlice);

  const { data, isLoading, error, isSuccess, isError } = useQuery({
    queryKey: ["charities", params.id],
    queryFn: async () => {
      const resp = await apiCaller.get(`/charity/${params.id}`);
      console.log(resp);
      return resp;
    },
  });
  const { data: charityDonors } = useQuery({
    queryKey: ["charity-donors"],
    queryFn: async () => {
      const resp = await apiCaller.get(`/charity/get-all-donors/${params.id}`);
      console.log(resp);
      return resp;
    },
  });
  const router = useRouter();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <div className="relative bg-[url('/assets/who-we-are/who-we-are-2.jpeg')] bg-cover bg-no-repeat bg-center h-[20vh] md:h-[40vh] w-full flex flex-col col-span-full justify-center">
        <div className='absolute inset-0 bg-white opacity-80'></div>
        <div className='container mx-auto text-center text-white relative z-10 space-y-5'>
          <h1 className='capitalize md:text-5xl text-3xl text-blue-800 m-auto font-bold'>
            {data?.data.charity.organization.name}
          </h1>
        </div>
      </div>

      <div className='max-container container mx-auto mt-10 mb-6 grid lg:grid-cols-2  lg:p-24 p-4 gap-10'>
        <div className='relative lg:h-full max-h-[80vh] w-full'>
          <Image
            src={data?.data.charity.images[0]}
            alt='Donation for community center'
            width={500}
            height={500}
            sizes='100vw'
            style={{
              width: "70%",
              height: "80%",
              objectFit: "cover",
              top: "-75px",
              left: "-75px",
            }}
            className='z-20 relative lg:block hidden '
          />
          <Image
            src={data?.data.charity.images[1]}
            alt='Donation for community center'
            width={447}
            height={556}
            sizes='100vw'
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              top: 0,
            }}
            className='z-10 lg:absolute relative'
          />
        </div>
        <div className='h-full flex flex-col items-start  justify-center gap-4 '>
          <h1 className='md:text-4xl text-4xl capitalize text-blue-800 font-bold'>
            {data?.data.charity.title}
          </h1>
          <p className='text-gray-500 text-sm tracking-tighter leading-tight'>
            {data?.data.charity.description}
          </p>
          <div className='w-full flex flex-col gap-2'>
            <p className='text-end text-sm text-gray-500'>
              {(
                (data?.data.charity.amountRaised /
                  data?.data.charity.amountNeeded) *
                100
              ).toFixed()}
              %
            </p>
            <div className='w-full bg-gray-300 h-2 rounded-full'>
              <div
                className=' h-full rounded-full bg-blue-800'
                style={{
                  width: `${
                    (data?.data.charity.amountRaised /
                      data?.data.charity.amountNeeded) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='text-sm text-gray-500 flex items-center gap-1'>
                Raised:{" "}
                <span className='text-blue-800 font-semibold flex items-center '>
                  &#8358; {data?.data.charity.amountRaised}
                </span>{" "}
              </p>
              <p className='text-sm text-gray-500 flex items-center gap-1'>
                Goal:{" "}
                <span className='text-blue-800 font-semibold flex items-center '>
                  &#8358; {data?.data.charity.amountNeeded}
                </span>{" "}
              </p>
            </div>
          </div>
          {role !== "organization" && (
            <>
              <div className='w-full grid lg:grid-cols-4 gap-4'>
                <div
                  className='p-2 py-1 border hover:bg-gray-200 border-blue-800 rounded-md flex items-center justify-center cursor-pointer text-blue-800 font-medium '
                  onClick={() => {
                    router.push(`/donate/${params.id}`);
                  }}
                >
                  {" "}
                  &#8358; 20{" "}
                </div>
                <div
                  className='p-2 py-1 border  hover:bg-gray-200 border-blue-800 rounded-md flex items-center justify-center cursor-pointer text-blue-800 font-medium '
                  onClick={() => {
                    router.push(`/donate/${params.id}`);
                  }}
                >
                  {" "}
                  &#8358; 40{" "}
                </div>
                <div
                  className='p-2 py-1 border  hover:bg-gray-200 border-blue-800 rounded-md flex items-center justify-center cursor-pointer text-blue-800 font-medium '
                  onClick={() => {
                    router.push(`/donate/${params.id}`);
                  }}
                >
                  {" "}
                  &#8358; 50{" "}
                </div>
                <div
                  className='p-2 py-1 border  hover:bg-gray-200 border-blue-800 rounded-md flex items-center justify-center cursor-pointer text-blue-800 font-medium '
                  onClick={() => {
                    router.push(`/donate/${params.id}`);
                  }}
                >
                  {" "}
                  Custom{" "}
                </div>
              </div>
              <Button type='button' size='sm'>
                Donate Now
              </Button>
            </>
          )}
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-semibold text-gray-700'>
              Great Donors
            </h1>
            <div className='flex items-start flex-wrap  gap-4'>
              {charityDonors?.data.donors.slice(0, 5).map((item: any) => {
                const { donor } = item;
                return (
                  <Image
                    key={donor._id}
                    src={donor.image}
                    alt='donor'
                    onClick={() => {
                      router.push(`/profile/donor/${donor._id}`);
                    }}
                    height={50}
                    width={50}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                );
              })}

              {charityDonors?.data.donors.length - 5 > 0 && (
                <div className='w-12 h-12 aspect-square rounded-full bg-blue-800 text-white flex items-center justify-center font-semibold p-3 text-sm'>
                  {charityDonors?.data.donors.length - 5}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className='grid lg:grid-cols-2 lg:p-24 p-4 gap-10 mx-auto'>
        <div className='flex flex-col gap-4'>
          <h1 className='md:text-5xl text-4xl text-blue-800 font-bold'>
            We Need Your Powerful Hands To Change The World.
          </h1>
          <Button type='button'>Our Story</Button>
        </div>
        <Image
          src={`/assets/donor/afro-boy-making-heart-with-his-hand 1.png`}
          className='rounded-full'
          alt='donor'
          height={300}
          width={300}
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
      </div> */}

      <div className='px-4 w-full lg:flex lg:flex-row text-gray-700 flex flex-col lg:px-24 p-4 gap-8 max-container'>
        <div className='lg:w-2/3 flex flex-col gap-4 pb-10'>
          <p className='text-xl font-bold'>
            Get in Touch with {data?.data.charity.organization.name}
          </p>
          <h1 className='text-3xl font-bold'>Send A Message</h1>
          <ContactForm />
        </div>
        <AddressBox info={data?.data.charity.organization} />
      </div>

      <Footer />
    </section>
  );
};

export default SingleCharity;
