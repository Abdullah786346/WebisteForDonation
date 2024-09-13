import { CharityCardType } from "@/constants/types";
import apiCaller from "@/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const OnGoingCharity = ({ orgId }: { orgId: string }) => {
  const { data, isLoading, error, isSuccess, isError } = useQuery({
    queryKey: ["charities"],
    queryFn: async () => {
      const resp = await apiCaller.get(
        `/charity?completed=${false}&organization=${orgId}`
      );
      console.log(resp);
      return resp;
    },
  });
  return (
    <div className='hidden md:block space-y-4 py-10  '>
      <h3 className='text-2xl font-bold text-blue-800'>Ongoing Charity</h3>
      <div className='grid md:grid-cols-2 lg:block lg:space-y- gap-5'>
        {data?.data.charities.map((charity: CharityCardType) => (
          <div key={charity._id}>
            <div className='grid lg:grid-cols-2 gap-3 rounded p-3'>
              <Image
                src={charity.images[0]}
                width='150'
                height='150'
                className='my-auto w-full'
                alt='Charity Home Image'
              />
              <div className='py-2'>
                <h3 className='text-sm font-bold text-blue-800 '>
                  {charity.title}
                </h3>
                <p className='text-xs text-blue-100 w-full'>
                  {charity.description.slice(0, 500)}
                </p>
                <p className='text-xs'>
                  <span className='font-bold text-blue-800'>
                    Amount Raised:{" "}
                  </span>
                  <span className='text-blue-100'>
                    {charity.amountRaised}/{charity.amountNeeded}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnGoingCharity;
