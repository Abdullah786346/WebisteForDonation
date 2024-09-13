"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import preview from "../../public/assets/preview.png";
import { useState } from "react";
import Image from "next/image";
import OrangeButtonLine from "@/components/OrangeButtonLine";
import Button from "@/components/Button";
import { useAppDispatch, useAppSelector } from "@/store";
import { handleChange } from "@/features/charity/charitySlice";
import Input from "@/components/Input";
import { useUploadImage } from "@/hooks/useUploadImage";
import useCreateCharity from "@/hooks/useCreateCharity";
import moment from "moment";
import { toast } from "react-toastify";

const CreateCharity = () => {
  const [preview, setPreview] = useState([]);
  const [images, setImages] = useState<File[]>([]);
  const { title, description, deadline, amountNeeded } = useAppSelector(
    (store) => store.charitySlice
  );
  const { uploadImage, isUploadingImage } = useUploadImage();
  const { isLoading, createCharity } = useCreateCharity();
  const dispatch = useAppDispatch();
  const handleChangeEvent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name || e.target.id;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const handleImagePreview = (files: FileList) => {
    for (let i in files) {
      let reader = new FileReader();
      reader.onload = (result) => {
        console.log(result);
        setPreview((prev): any => {
          return [...prev, reader.result as string];
        });
      };
      reader.onerror = (err) => {
        console.log(err);
      };
      reader.readAsDataURL(files[i]);
    }
  };
  const handleSubmit = async () => {
    if (images && !(images.length > 1))
      return toast.warning("Upload at least 2 images");
    uploadImage(images[0], {
      onSuccess: (image) => {
        uploadImage(images[1], {
          onSuccess: (image2) => {
            createCharity({
              title,
              description,
              deadline,
              amountNeeded,
              images: [image, image2],
            });
          },
        });
      },
    });
  };

  return (
    <section className=''>
      <Header />
      <main className="bg-cover bg-no-repeat bg-center h-[40vh] w-full flex flex-col px-5 justify-center items-center bg-[url('/assets/create-charity.svg')]">
        <h1 className='font-bold md:text-3xl text-2xl text-blue-800'>
          Givest Charity Home | Create Charity
        </h1>
      </main>
      <main className='flex justify-center items-center w-full'>
        <div className='flex justify-center items-center lg:w-[60%] w-[90%] flex-col py-[3rem]'>
          <div className='flex justify-center items-center flex-col mb-16'>
            <h1 className='text-blue-800 font-bold md:text-3xl text-2xl'>
              Create New Charity
            </h1>
            <p className='text-blue-100 text-md mb-5'>
              Please enter the charity details
            </p>
            <OrangeButtonLine />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className='w-full'
          >
            <div className='flex justify-center items-start flex-col mb-8'>
              <Input
                onChange={handleChangeEvent}
                label='Title:'
                required
                value={title}
                name='title'
                placeholder='Enter charity title'
              />
            </div>
            <div className='flex justify-center items-start flex-col mb-8'>
              <label htmlFor='' className='text-blue-800 font-semibold mb-1'>
                Description: <span className='text-red-700'>*</span>
              </label>
              <p className='text-gray-500 text-sm mb-3'>
                Tell us a little about the charity
              </p>
              <textarea
                value={description}
                name='description'
                id=''
                rows={6}
                cols={10}
                onChange={handleChangeEvent}
                placeholder='Enter charity description'
                className='bg-slate-200 p-3 text-sm outline-none w-full rounded-md transition-all duration-300 placeholder:text-stone-400 text-stone-700 focus:text-black focus:outline-none focus:ring-2 focus:ring-blue-800 disabled:bg-gray-200 pr-10'
              ></textarea>
            </div>
            <div className={`flex mb-5 items-center w-full justify-between`}>
              <p className=' text-blue-800 font-semibold'>
                Upload Charity Images{" "}
                <span className='text-red-500 text-xl'>*</span>
                <br />
                <span className='font-normal text-gray-400 text-sm'>
                  Select at least 2 images
                </span>
              </p>
              <label
                htmlFor='image'
                className='p-2 px-4 text-sm cursor-pointer border border-blue-800 rounded-md text-blue-800 font-semibold'
              >
                Choose File
              </label>
              <input
                type='file'
                id='image'
                name='image'
                accept='image/*'
                multiple
                max={2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files) {
                    console.log(e.target.files);
                    for (let i in e.target.files) {
                      console.log(i);

                      setImages((prev) => {
                        if (e.target.files && e.target.files[i]) {
                          return [...prev, e.target.files[i]];
                        }
                        return [];
                      });
                    }
                    handleImagePreview(e.target.files);
                  }
                }}
                hidden
              />
            </div>
            {preview.length > 1 && (
              <div
                className={`flex items-center w-full justify-center gap-4 mt-2`}
              >
                <p className='text-sm text-blue-800 font-semibold'>Preview:</p>
                {preview.map((img, index) => {
                  return (
                    <Image
                      key={index}
                      className='h-[70px] w-[70px] object-cover'
                      src={img}
                      width={100}
                      height={100}
                      alt='banner-image'
                    />
                  );
                })}
              </div>
            )}
            <div className='my-4'>
              <Input
                onChange={handleChangeEvent}
                type='number'
                placeholder='Enter amount needed'
                required
                value={amountNeeded}
                label='Amount Needed'
                name='amountNeeded'
                id=''
              />
            </div>
            <div className='my-4'>
              <Input
                onChange={handleChangeEvent}
                type='date'
                placeholder='Enter deadline'
                name='deadline'
                label='Deadline'
                required
                value={deadline}
                id=''
              />

              {moment(deadline).isSameOrBefore(
                new Date(Date.now() + 72 * 60 * 60 * 1000)
              ) && (
                <p className='text-red-700 text-sm mt-2 font-medium'>
                  *Pick a date at least 4 days ahead
                </p>
              )}
            </div>
            <div className='flex mt-6 justify-center items-center w-full'>
              <Button
                variant='blue'
                disabled={isUploadingImage || isLoading}
                size='md'
                type='submit'
                margin='auto'
              >
                {isUploadingImage || isLoading ? "Loading.." : "Create"}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </section>
  );
};
CreateCharity.isOrgRoute = true;
export default CreateCharity;
