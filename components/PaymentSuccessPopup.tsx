import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const PaymentPopup = ({ message }: { message: string }) => {
  return (
    <div className='flex flex-col justify-center bg-white text-center h-screen w-screen'>
      <div className='flex justify-center items-center mb-5 w-full'>
        <div className='w-[10%] bg-[#4BB543] rounded-[50%] border'>
          <FaCircleCheck className='text-white p-2 w-full h-full' />
        </div>
      </div>
      <div>
        <h2 className='text-xl md:text-2xl mb-3 text-gray-800'>{message}</h2>
        <p className='text-sm md:text-base text-gray-600'>
          Thanks for your donation
        </p>
      </div>
    </div>
  );
};

export default PaymentPopup;
