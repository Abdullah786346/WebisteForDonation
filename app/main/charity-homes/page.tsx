"use client";
import Button from "@/components/Button";
import DonationCard from "@/components/CharityCard";
import OrangeButtonLine from "@/components/OrangeButtonLine";
import { charityHomes, latestDonations, teamMembers } from "@/constants";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CenteredHero from "@/components/CenteredHero";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import apiCaller from "@/utils/apiCaller";
import { OrganizationInterface } from "@/constants/types";
import MiniLoader from "@/utils/MiniLoader";
export default function CharityHomes() {
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
        btnLink='/donate'
        title='Charity Homes Under Us'
        desc='We dedicated to provide comprehensive support and assistance to vulnerable individuals and communities.'
        btnText='Donate now'
        bgImage='/assets/about-us/about-page-hero.png'
      />

      {/* List of homes */}
      <section className='px-3 max-container mx-auto my-6 py-8 flex flex-col items-center gap-4'>
        <h2 className='font-bold text-center text-2xl text-blue-800'>
          List of Homes Under Heal Me
        </h2>
        <OrangeButtonLine />
        <div className='grid lg:block lg:space-y gap-8 px-4'>
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
                    alt='Who We Are 1'
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
      </section>
      {/* pagination */}
      <section>
        <div className='flex justify-center gap-6 my-6 mb-20 font-bold text-gray-500'>
          <span>Prev</span>
          <span className='text-black'>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>Next</span>
        </div>
      </section>

      <Footer />
    </>
  );
}
