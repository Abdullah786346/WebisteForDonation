"use client";
import { CharityCardType } from "@/constants/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CharityCard = ({
  _id,
  title,
  description,
  images,
  amountNeeded,
  amountRaised,
}: CharityCardType) => {
  const progress = ((amountRaised / amountNeeded) * 100).toFixed();
  const router = useRouter();

  return (
    <div className='w-full max-w-[500px] mx-auto bg-red-100 flex flex-col'>
      <Image
        onClick={() => {
          router.push(`/main/charities/${_id}`);
        }}
        src={images[0]}
        alt={title}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: "100%", height: "350px", objectFit: "cover" }}
      />
      <div className='p-4'>
        <div className='mb-4'>
          <p className='text-lg font-bold text-blue-800'>{title}</p>
          <p className='text-[#AEABAB] text-sm'>{description}</p>
        </div>

        {/* Progress bar */}
        <div className='text-sm flex flex-col gap-2'>
          <p className='text-blue-800 font-semibold'>{progress}%</p>

          <div className='w-full relative'>
            <div className='bg-[#DDDDDD] w-full h-2 rounded-md' />
            <div
              className='bg-orange-800 h-2 rounded-md absolute top-0 left-0 z-10'
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className='flex items-center justify-between'>
            <p className='text-[#AEABAB]'>
              Raised:{" "}
              <span className='text-blue-800 font-semibold'>
                ${amountRaised.toLocaleString()}
              </span>
            </p>
            <p className='text-[#AEABAB]'>
              Goal:{" "}
              <span className='text-blue-800 font-semibold'>
                ${amountNeeded.toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityCard;
