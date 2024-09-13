"use client";
import CenteredHero from "@/components/CenteredHero";
import CharityCard from "@/components/CharityCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OrangeButtonLine from "@/components/OrangeButtonLine";
import { latestDonations } from "@/constants";
import { CharityCardType } from "@/constants/types";
import { apiCaller } from "@/utils/apiCaller";
import MiniLoader from "@/utils/MiniLoader";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ListOfCharities = () => {
  const { data, isLoading, error, isSuccess, isError } = useQuery({
    queryKey: ["charities"],
    queryFn: async () => {
      const resp = await apiCaller.get(`/charity`);
      console.log(resp);
      return resp;
    },
  });
  return (
    <section>
      <CenteredHero
        title='Available Charities'
        desc='We dedicated to provide comprehensive support and assistance to vulnerable individuals and communities'
        btnText='Donate now'
        bgImage='/assets/about-us/about-page-hero.png'
        btnLink={`/donate`}
      />
      <section className='container mx-auto py-8 flex flex-col items-center gap-4'>
        <h2 className='font-bold text-2xl text-blue-800'>
          Available Charities
        </h2>
        <OrangeButtonLine />
        <form className='flex justify-end w-11/12'>
          <label className='text-blue-200 ' htmlFor='category'>
            category:
          </label>
          <select
            name='category'
            id='category'
            className='text-blue-800 font-semibold mx-2 mr-4 outline-none'
          >
            <option value='health'>health</option>
            <option value='health'>health</option>
            <option value='health'>health</option>
          </select>
          <label className='text-blue-200 ' htmlFor='sort'>
            sort:
          </label>
          <select
            name='sort'
            id='sort'
            className='text-blue-800 mx-2 font-semibold outline-none'
          >
            <option value='oldest'>oldest</option>
            <option value='oldest'>oldest</option>
            <option value='oldest'>oldest</option>
          </select>
        </form>

        {isLoading ? (
          <MiniLoader ratio='100px' />
        ) : (
          <div className='flex flex-col md:flex-row md:flex-nowrap flex-wrap gap-8 px-4'>
            {data?.data.charities.length < 1 ? (
              <p>No charities available</p>
            ) : (
              data?.data.charities.map((charity: CharityCardType) => {
                console.log(charity);

                return <CharityCard key={charity._id} {...charity} />;
              })
            )}
          </div>
        )}
      </section>
      <Footer />
    </section>
  );
};

export default ListOfCharities;
