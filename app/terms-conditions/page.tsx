"use client";
import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
const printStyles = `
  @media print {
    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
export default function TermsAndConditions() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(
      date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    );
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDone = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.close();
  };

  return (
    <>
      <style jsx global>
        {printStyles}
      </style>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-8'>
          <div className='flex items-center'>
            <Link href='/' className='w-16 mr-4'>
              <Image
                src='/assets/heal-me-logo.png'
                alt='Heal Me logo'
                width={100}
                height={100}
              />
            </Link>
            <div>
              <h1 className='text-3xl text-blue-800 font-bold'>
                Terms and Conditions
              </h1>
              <p className='text-sm text-gray-500'>
                Last updated {currentDate}
              </p>
            </div>
          </div>
          <button
            onClick={handlePrint}
            aria-label='Print this page'
            className='print:hidden'
          >
            <Image
              src='/assets/terms-conditions/print-icon.png'
              alt='Print this page'
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className='space-y-5 text-[rgba(47,46,65,1)]'>
          <p>
            It is long established fact that reader will distract by the
            readable content a page when looking atten layout. The point of
            using and that it has a normal distribution of letters.It is long
            established fact that reader will distract by the readable content a
            page when looking atten layout. The point of using and that it has a
            normal distribution of letters
          </p>

          <p>
            It is long established fact that reader will distract by the
            readable content a page when looking atten layout. The point of
            using and that it has a normal distribution of letters.
          </p>

          <p>
            It is long established fact that reader will distract by the
            readable content a page when looking atten layout. The point of
            using and that it has a normal distribution of letters
          </p>

          <p>
            It is long established fact that reader will distract by the
            readable content a page when looking atten layout. The point of
            using and that it has a normal distribution of letters.It is long
            established fact that reader will distract by the readable content a
            page when looking atten layout. The point of using and that it has a
            normal distribution of letters
          </p>

          <p>
            It is long established fact that reader will distract by the
            readable content a page when looking atten layout. The point of
            using and that it has a normal distribution of letters.
          </p>

          <p>
            It is long established fact that reader will distract by the
            readable content a page when looking atten layout. The point of
            using and that it has a normal distribution of letters
          </p>
        </div>

        <div className='mt-8 text-center'>
          <button
            onClick={handleDone}
            className='bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-200 print:bg-blue print:text-white-800 print:border print:border-blue-800'
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}
