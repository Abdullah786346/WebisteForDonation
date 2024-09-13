import React from "react";

const NotificationsSettings = () => {
  return (
    <section>
      <h3 className='font-bold'>Notifications</h3>
      <div className='py-4'>
        <div className='py-2 flex item-center justify-between gap-7'>
          <div className='w-full'>
            <p className='text-gray-500 font-semibold mb-1'>
              Turn on notification
            </p>
          </div>
          <div className='w-14 rounded-full  h-6 bg-gray-300 flex items-center px-1'>
            <div className='h-5 w-5 rounded-full bg-white'></div>
          </div>
        </div>
        <div className='py-2 flex item-center justify-between gap-7'>
          <div className='w-full'>
            <p className='text-gray-500 font-semibold mb-1'>
              Turn on email notification
            </p>
          </div>
          <div className='w-14 rounded-full  h-6 bg-gray-300 flex items-center px-1'>
            <div className='h-5 w-5 rounded-full bg-white'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSettings;
