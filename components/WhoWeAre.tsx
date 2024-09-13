import React from "react";
import OrangeButtonLine from "./OrangeButtonLine";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className='px-3 max-container  mx-auto py-10 flex flex-col items-center gap-4'>
      <h2 className='font-bold text-2xl text-blue-800'>Who We Are</h2>
      <p className='text-center text-blue-100 max-w-xl'>
        Organization set up to provide comprehensive support and assistance to
        vulnerable individuals and communities
      </p>
      <OrangeButtonLine />

      <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center md:flex-nowrap  flex-wrap gap-8 mt-4'>
        <Image
          src='/assets/who-we-are/who-we-are-1.jpeg'
          alt='Who We Are 1'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        />
        <Image
          src='/assets/who-we-are/who-we-are-2.jpeg'
          alt='Who We Are 2'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        />
        <Image
          src='/assets/who-we-are/who-we-are-3.jpeg'
          alt='Who We Are 3'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
