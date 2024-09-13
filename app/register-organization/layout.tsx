import { ReactNode } from "react";
import Image from "next/image";

// common styles
const flexColCenter = "flex flex-col items-center justify-center";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className={`${flexColCenter} h-screen w-screen`}>
      <div className='grid lg:grid-cols-2  bg-white w-full h-full  gap-9 rounded-md '>
        {/* banner image */}
        <div className='relative w-full h-full'>
          <Image
            className='h-full w-full object-cover lg:rounded-l-md'
            src='/assets/donor/banner.png'
            fill
            alt='banner-image'
          />
        </div>

        {/* register form */}
        <div className='p-8'>
          <div className='mb-8'>
            <h1 className='text-4xl font-semibold text-blue-800 mb-2'>
              Beneficiary Home Registration
            </h1>
            <p className='text-sm text-gray-400'>
              Please fill out the following information to register
            </p>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
};

export default layout;
