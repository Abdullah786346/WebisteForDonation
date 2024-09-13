"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PastEventPage = () => {
  const pathname = usePathname();

  return (
    <section className='container mx-auto py-3 flex flex-col gap-4'>
      {/* List of past events */}
      <section className='px-4 py-2 grid grid-cols-1 md:grid-cols-2 gap-10 '>
        <div className='h-fit w-full'>
          <Image
            src='/assets/events/WomanWithKids.png'
            alt='Woman with kids'
            width='570'
            height='100'
            className='w-full object-cover mb-3  max-h-96 h-full'
          />
          <div className='flex flex-col space-y-4'>
            <h2 className='text-blue-800 text-2xl md:text-3xl font-semibold  leading-10 capitalize'>
              Bought a new school bag for Lenza
            </h2>
            <p className='text-gray-500 font-normal text-base   leading-5'>
              Chariter is the number one nonprofit organization website template
              solution to spread your causes with style. This modern,
              easy-to-use, and all-around site canvas equips you with many
              practical amenities to start
            </p>
            <Button variant='outlinedWhite'>Read More</Button>
          </div>
        </div>
        <div className='h-fit w-full'>
          <Image
            src='/assets/events/WomanWithKids.png'
            alt='Woman with kids'
            width='570'
            height='100'
            className='w-full object-cover mb-3  max-h-96 h-full'
          />
          <div className='flex flex-col space-y-4 '>
            <h2 className='text-blue-800 text-2xl md:text-3xl font-semibold  leading-10 capitalize'>
              Bought a new school bag for Lenza
            </h2>
            <p className='text-gray-500 font-normal text-base   leading-5'>
              Chariter is the number one nonprofit organization website template
              solution to spread your causes with style. This modern,
              easy-to-use, and all-around site canvas equips you with many
              practical amenities to start
            </p>
            <Button variant='outlinedWhite'>Read More</Button>
          </div>
        </div>
        <div className='h-fit w-full'>
          <Image
            src='/assets/events/WomanWithKids.png'
            alt='Woman with kids'
            width='570'
            height='100'
            className='w-full object-cover mb-3  max-h-96 h-full'
          />
          <div className='flex flex-col space-y-4 '>
            <h2 className='text-blue-800 text-2xl md:text-3xl font-semibold  leading-10 capitalize'>
              Bought a new school bag for Lenza
            </h2>
            <p className='text-gray-500 font-normal text-base   leading-5'>
              Chariter is the number one nonprofit organization website template
              solution to spread your causes with style. This modern,
              easy-to-use, and all-around site canvas equips you with many
              practical amenities to start
            </p>
            <Button variant='outlinedWhite'>Read More</Button>
          </div>
        </div>
      </section>

      {/* View all Button */}
      <section className='container mx-auto py-8 flex flex-col items-center'>
        <Button variant='blue' size='lg'>
          View All
        </Button>
      </section>
    </section>
  );
};

export default PastEventPage;
