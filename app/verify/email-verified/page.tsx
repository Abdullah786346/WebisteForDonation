import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Verification: React.FC = () => {
  return (
    <div className='flex flex-col justify-center h-screen items-center'>
      <div className='w-[10%] bg-[#4BB543] rounded-[50%] border'>
        <FaCircleCheck className='text-white p-2 w-full h-full' />
      </div>
      <br />
      <div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-xl md:text-2xl font-bold mb-2 '>
            Email Verified
          </h3>

          <p className='sm: text-sm'>
            Your email is verified you can log in now
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Verification;
