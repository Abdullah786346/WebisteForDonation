"use client";
import BasicNav from "@/components/BasicNav";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const JoinUs = () => {
  const navigate = useRouter();
  return (
    <>
      <BasicNav />

      <div className='w-full text-center font-Raleway font-medium tracking-wider p-3'>
        <h1 className='text-orange-800 uppercase  md:text-4xl text-2xl font-semibold  '>
          Join us as a donor or a beneficiary home
        </h1>
        <p className='text-center text-gray-500 text-sm my-2'>
          Beneficiary homes include orphanage homes, disabled people's homes or
          hospitals{" "}
        </p>
        <div className='flex mt-9 place-content-center gap-10 my-6 mx-auto cursor-pointer'>
          <div
            onClick={() => navigate.push("/signup")}
            className='max-w-[350px] border-solid border-2 aspect-square border-orange-800 rounded-xl p-7 flex flex-col  items-center justify-evenly  w-full '
          >
            <Image
              src='/assets/donor/donor-indiv.png'
              alt='donor card'
              width={350}
              height={350}
              className='shrink-0'
            />
            <h2 className='text-orange-800 text-3xl mt-4 uppercase font-semibold  text-center'>
              Donor
            </h2>
          </div>
          <div
            onClick={() => navigate.push("/register-organization")}
            className='max-w-[350px] border-solid border-2 aspect-square border-orange-800 rounded-xl p-7 flex flex-col  items-center justify-evenly  w-full '
          >
            <Image
              src='/assets/donor/donor-charity.png'
              alt='donor charity'
              width={200}
              height={200}
              className='shrink-0 -mt-11'
            />
            <div>
              <h2 className='text-orange-800 text-3xl mt-3 uppercase font-semibold  text-center'>
                Beneficiary Home
              </h2>
            </div>
          </div>
        </div>
        <div className='w-full font-Raleway'>
          <span className='text-blue-100'>
            Already have an account?{" "}
            <Link href={"/signin"} className='text-orange-800 cursor-pointer'>
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
