import Image from "next/image";
import React from "react";

const UpcomingEventsCard = () => {
  return (
    <div className='flex gap-4 items-center flex-col sm:flex-row'>
      <Image
        src='/assets/events/children.png'
        alt='children smiling'
        width='400'
        height='450'
        className='w-full sm:w-1/2 max-h-40  object-cover'
      />
      <div className='space-y-5 w-full'>
        <h3 className='font-bold'>Use Hashtags To Support Online</h3>
        <p className='text-sm'>
          JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM
        </p>
      </div>
      <div className='sm:w-[1px] sm:h-12 w-2/3 h-[1px] bg-gray-300'></div>
      <div className='space-y-2  w-full'>
        <h3 className='font-bold'>Event Location:</h3>
        <p className='text-sm'>Mitchell, 57301 United States</p>
      </div>
    </div>
  );
};

export default UpcomingEventsCard;
