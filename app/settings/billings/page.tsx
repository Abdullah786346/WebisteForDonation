import React from "react";
import { MdMoreVert, MdOutlineFileDownload } from "react-icons/md";

const Billings = () => {
  return (
    <>
      <section className='px-4 py-3'>
        {/* Payment Details */}
        <div>
          <div className=' grid grid-cols-5 gap-4'>
            {/* Payment details section */}
            <div className='col-span-2  w-full'>
              <h2 className='font-semibold'>Payment Details</h2>
              <p className='text-sm text-gray-500 leading-9'>
                Edit your payment details
              </p>
              <p className='text-sm text-gray-500'>Last edited 12 Sept, 2024</p>
            </div>

            {/* Card details section */}
            <div className='flex flex-col gap-7 col-span-3'>
              <div>
                <h2 className='font-semibold mb-2'>Name on Card</h2>
                <input
                  type='text'
                  className='border border-gray-300 rounded-md px-3 w-full py-1'
                  placeholder='Fasina Ayomikun'
                />
              </div>

              {/* Card Info */}
              <div className='grid grid-cols-8 gap-2  items-center'>
                <div className='col-span-6'>
                  <h2 className='font-semibold mb-2'>Card Number</h2>
                  <input
                    type='number'
                    className='border border-gray-300 rounded-md px-2 w-full py-1'
                    placeholder='000 000 000'
                  />
                </div>
                <div className='col-span-1'>
                  <h2 className='font-semibold mb-2 '>CVV</h2>
                  <input
                    type='text'
                    className='border border-gray-300 rounded-md px-2 w-full py-1'
                    placeholder='000'
                  />
                </div>
                <div className='col-span-1'>
                  <h2 className='font-semibold mb-2'>Expiry</h2>
                  <input
                    type='text'
                    className='border border-gray-300 rounded-md px-2 w-full py-1'
                    placeholder='12/24'
                  />
                </div>
              </div>
              {/* Buttons */}
              <div className='flex gap-3 items-center justify-end'>
                <button className='rounded-lg flex font-medium items-center text-sm justify-center gap-2 w-fit bg-gray-400 text-gray-800 hover:bg-gray-800/70 px-5 py-2 '>
                  Cancel
                </button>{" "}
                <button className='rounded-lg flex font-medium items-center text-sm justify-center gap-2 w-fit bg-blue-800 text-white hover:bg-blue-800/90 px-5 py-2 '>
                  Save Changes
                </button>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Payment history section */}
        <div className='mt-12'>
          <div>
            <h2 className='font-semibold'>Payment History</h2>
            <p className='text-sm text-gray-500 leading-9'>
              View all payment invoices
            </p>
          </div>

          {/* table */}
          <div className='w-full mt-5'>
            <div className='flex bg-gray-300 font-bold text-sm leading-normal rounded-md'>
              <div className='w-1/4 py-3 px-6'>Invoice date</div>
              <div className='w-1/4 py-3 px-6'>Amount</div>
              <div className='w-1/4 py-3 px-6'>Status</div>
              <div className='w-1/4 py-3 px-6 flex items-center justify-center'>
                <MdMoreVert className='text-xl' />
              </div>
            </div>
            <div className='flex hover:bg-gray-100 font-semibold text-sm leading-normal rounded-md'>
              <div className='w-1/4 py-3 px-6'>12 May 2024</div>
              <div className='w-1/4 py-3 px-6'>$100</div>
              <div className='w-1/4 py-3 px-6'>Failed</div>
              <div className='w-1/4 py-3 px-6 flex items-center justify-center'>
                <MdOutlineFileDownload className='text-xl' />
              </div>
            </div>
            <div className='flex bg-gray-100 font-semibold text-sm leading-normal rounded-md'>
              <div className='w-1/4 py-3 px-6'>12 May 2024</div>
              <div className='w-1/4 py-3 px-6'>$100</div>
              <div className='w-1/4 py-3 px-6'>Failed</div>

              <div className='w-1/4 py-3 px-6 flex items-center justify-center'>
                <MdOutlineFileDownload className='text-xl' />
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Billings;
