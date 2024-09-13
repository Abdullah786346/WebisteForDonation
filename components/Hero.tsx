import React from "react";
import Button from "./Button";

const Hero = ({
  title,
  desc,
  btnText,
}: {
  title: string;
  desc: string;
  btnText: string;
}) => {
  return (
    <section className="bg-[url('/assets/hero.png')] bg-cover bg-no-repeat bg-left md:bg-center  h-[90vh] w-full flex flex-col justify-center">
      <div className='container mx-auto px-5'>
        <div className='flex flex-col gap-4 text-white mb-10 w-full'>
          <h1 className='capitalize text-4xl md:text-5xl font-bold  md:w-11/12 lg:w-1/2'>
            {title}
          </h1>
          <p className='text-md md:text-lg font-normal max-w-sm '>{desc}</p>
        </div>

        <Button variant='orange' type='button' disabled={false}>
          {btnText}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
