"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import OrangeButtonLine from "./OrangeButtonLine";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const HomeHelpSection = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='container mx-auto py-8 flex flex-col items-center gap-4'>
      <h2 className='font-bold text-2xl text-blue-800'>How Could You Help?</h2>
      <OrangeButtonLine />
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8 w-[90%] p-5 '>
        <div className='p-8'>
          <div className='space-y-5 m-auto text-center'>
            <div className='relative w-16 aspect-square mx-auto'>
              <Image
                src='/assets/home/icon_become-volunteer.png'
                alt='become volunteer icon'
                fill
                objectFit='contain'
              />
            </div>
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold text-gray-600'>
                Become volunteer
              </h3>
              <p className='text-md text-stone-800'>
                You can contribute your time, skills and knowledge through
                volunteering with the UN.
              </p>
            </div>
            <Button
              variant='outlinedWhite'
              disabled={false}
              size='sm'
              margin='auto'
              onClick={() => {
                router.push("/details/volunteer");
              }}
            >
              Read More
            </Button>
          </div>
        </div>

        <div className='p-8'>
          <div className='space-y-5 m-auto text-center'>
            <div className='relative w-16 aspect-square mx-auto'>
              <Image
                src='/assets/home/icon_call-for-donation.png'
                alt='become volunteer icon'
                fill
                objectFit='contain'
              />
            </div>
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold text-gray-600'>
                Call for donation
              </h3>
              <p className='text-md text-stone-800'>
                You can contribute your time, skills and knowledge through
                volunteering with the UN.
              </p>
            </div>
            <Button
              margin='auto'
              variant='outlinedWhite'
              disabled={false}
              size='sm'
              onClick={() => {
                router.push("/details/call-donation");
              }}
            >
              Read More
            </Button>
          </div>
        </div>

        <div className='p-8'>
          <div className='space-y-5 m-auto text-center'>
            <div className='relative w-16 aspect-square mx-auto'>
              <Image
                src='/assets/home/icon_send-donation.png'
                alt='become volunteer icon'
                fill
                objectFit='contain'
              />
            </div>
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold text-gray-600'>
                Send donation
              </h3>
              <p className='text-md text-stone-800'>
                You can contribute your time, skills and knowledge through
                volunteering with the UN.
              </p>
            </div>
            <Button
              margin='auto'
              variant='outlinedWhite'
              disabled={false}
              size='sm'
              onClick={() => {
                router.push("/details/send-donation");
              }}
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHelpSection;
