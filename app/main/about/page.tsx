"use client";
import Button from "@/components/Button";
import DonationCard from "@/components/CharityCard";
import OrangeButtonLine from "@/components/OrangeButtonLine";
import { charityHomes, latestDonations, teamMembers } from "@/constants";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CenteredHero from "@/components/CenteredHero";
import { useEffect } from "react";
import apiCaller from "@/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import MiniLoader from "@/utils/MiniLoader";
import { useRouter } from "next/navigation";
import { OrganizationInterface } from "@/constants/types";
export default function About() {
  const router = useRouter();
  const { data, isLoading, error, isSuccess, isError } = useQuery({
    queryKey: ["charity-homes"],
    queryFn: async () => {
      const resp = await apiCaller.get(`/organization`);
      console.log(resp);
      return resp;
    },
  });

  return (
    <>
      {/* Hero */}
      <CenteredHero
        title='About Us'
        desc='We dedicated to provide comprehensive support and assistance to vulnerable individuals and communities.'
        btnText='Donate now'
        btnLink=''
        bgImage='/assets/about-us/about-page-hero.png'
      />

      {/* Who We Are */}
      <section className='container px-6 mx-auto py-8 flex flex-col items-center gap-4'>
        <h2 className='text-center font-bold text-2xl text-blue-800 pb-10 w-full md:w-2/5'>
          We are an Global non-profit organization that{" "}
          <span className=' text-orange-800 '>supports</span> good causes and
          positive change all over the world.
        </h2>

        <div className='flex flex-row lg:flex-nowrap flex-wrap justify-between gap-8'>
          <div className='flex flex-col w-full bg-red-100 mb-4 h-64 rounded-xl mx-auto items-center px-8'>
            <div className='-mt-5 bg-orange-800 rounded-full w-[50px] mb-10'>
              {" "}
              <Image
                src='/assets/about-us/mission1.png'
                alt='Team Member 1'
                width={50}
                height={50}
              />
            </div>
            <p className='text-lg font-bold text-blue-800 pb-3'>Our Mission</p>
            <p className='text-blue-100 text-sm text-center'>
              Our mission is to empower and uplift orphaned children, hospitals
              patients, new mothers, and individual with disabilities through
              various support services and initiatives
            </p>
          </div>
          <div className='flex flex-col w-full bg-red-100 mb-4 h-64 rounded-xl mx-auto items-center px-8'>
            <div className='-mt-5 bg-orange-800 rounded-full w-[50px] mb-10'>
              {" "}
              <Image
                src='/assets/about-us/vision1.png'
                alt='Team Member 1'
                width={50}
                height={50}
              />
            </div>
            <p className='text-lg font-bold text-blue-800 pb-3'>Our Vision</p>
            <p className='text-blue-100  text-center text-sm'>
              Our vision propels us to tirelessly pursue a better world, where
              kindness, generosity, and empathy form the foundation of society.
              Join us as we work towards transforming this vision into a
              tangible reality.
            </p>
          </div>
          <div className='flex flex-col w-full bg-red-100 mb-4 h-64 rounded-xl mx-auto items-center px-8'>
            <div className='-mt-5 bg-orange-800 rounded-full w-[50px] mb-10'>
              {" "}
              <Image
                src='/assets/about-us/volunteer1.png'
                alt='Team Member 1'
                width={50}
                height={50}
              />
            </div>
            <p className='text-lg font-bold text-blue-800 pb-3'>Volunteering</p>
            <p className='text-blue-100 text-sm text-center'>
              Together, we can achieve more. Together, we can create a better
              world. Volunteer today and be the change you wish to see.
            </p>
          </div>
        </div>
      </section>

      {/* List of homes */}
      <section className='container px-6 mx-auto py-8 flex flex-col items-center gap-4'>
        <h2 className='font-bold text-2xl text-center text-blue-800'>
          List of Homes Under Heal Me
        </h2>
        <OrangeButtonLine />
        <div className='flex flex-col md:flex-row flex-wrap gap-8'>
          <div className='flex flex-col md:flex-row items-center justify-center md:flex-nowrap  flex-wrap gap-8'>
            {isLoading ? (
              <MiniLoader ratio='100px' />
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {data?.data.organizations.map((home: OrganizationInterface) => (
                  <div
                    key={home._id}
                    className='flex w-full flex-col items-center'
                  >
                    <Image
                      src={home.image}
                      alt={home.name}
                      width={0}
                      height={0}
                      onClick={() => {
                        router.push(`/main/charity-homes/${home._id}`);
                      }}
                      sizes='100vw'
                      style={{
                        width: "350px",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                    <p className='text-lg font-bold text-blue-800 py-3 flex justify-center'>
                      {home.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className='container  mx-auto py-8 flex flex-col items-center gap-4'>
        <div className='flex flex-col md:flex-row w-4/5'>
          <div className='md:w-1/2'>
            <Image
              src='/assets/about-us/services.png'
              alt='Volunteers'
              width={0}
              height={0}
              sizes='100%'
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className='md:w-1/2'>
            <Image
              src='/assets/about-us/service-list.png'
              alt='Volunteers'
              width={0}
              height={0}
              sizes='100%'
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Meet Out Team */}
      <section className='container px-6 mx-auto py-8 flex flex-col items-center gap-4'>
        <h2 className='font-bold text-2xl text-blue-800'>Meet Our Team</h2>
        <OrangeButtonLine />

        <div className='flex items-center justify-center gap-4 md:flex-nowrap flex-wrap'>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className='flex flex-col items-center text-blue-800'
            >
              <Image
                src={`/assets/meet-our-team/${member.image}`}
                alt='Team member 1'
                width={0}
                height={0}
                sizes='100vw'
                style={{
                  width: "350px",
                  height: "350px",
                  objectFit: "cover",
                  marginBottom: "0.5rem",
                }}
              />
              <p className='font-semibold'>{member.name}</p>
              <p className='text-sm font-light'>{member.title}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
