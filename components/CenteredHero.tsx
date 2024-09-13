import React from "react";
import Button from "./Button";
import Image from "next/image";

const CenteredHero = ({
  title,
  desc,
  btnText,
  btnLink,
  bgImage,
}: {
  title: string;
  desc: string;
  btnText?: string;
  btnLink?: string;
  bgImage: string;
}) => {
  return (
    <section className='w-full h-[90vh] flex flex-col justify-center pb-20 relative'>
      <Image
        src={bgImage}
        alt='siblings'
        className='absolute  brightness-50'
        layout='fill'
        objectFit='cover'
      />
      <div className='container flex flex-col z-10 items-center mx-auto px-3'>
        <div className='gap-4 text-white mb-4'>
          <h1 className='capitalize text-4xl md:text-5xl font-bold flex justify-center text-center'>
            {title}
          </h1>
          <p className='text-md md:text-lg w-full max-w-[500px] mx-auto flex justify-center my-2 text-center'>
            {desc}
          </p>
        </div>
        {btnText && (
          <a href={btnLink}>
            <Button variant='orange' disabled={false}>
              {btnText}
            </Button>
          </a>
        )}
      </div>
    </section>
  );
};

export default CenteredHero;
