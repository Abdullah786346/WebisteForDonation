"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useSignUp } from "../../hooks/useSignup";
import { useAppDispatch, useAppSelector } from "@/store";
import { clearState, handleChange } from "@/features/auth/userSlice";
import { useUploadImage } from "@/hooks/useUploadImage";
import Input from "@/components/Input";
import countries from "@/constants/countries.json";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";
import { SignUpUserInterface, UserInterface } from "@/constants/types";

// common styles
const flexColCenter = "flex flex-col items-center justify-center";
const flexColStart = "flex flex-col items-start w-full";
const flexRow = "flex items-center w-full";

function DonorSignUp() {
  const [checkBox, setCheckBox] = useState("");
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false); // State for terms agreement

  const dispatch = useAppDispatch();
  const handleChangeEvent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name || e.target.id;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const signUpDetails = useAppSelector((store) => store.userSlice);

  const { signUp, isSigningUp } = useSignUp();
  const { uploadImage, isUploadingImage } = useUploadImage();

  const handleSubmit = async () => {
    uploadImage(image, {
      onSuccess: (image) => {
        signUp({
          ...(signUpDetails as UserInterface),
          anonymous: checkBox === "yes",
          image,
        });
      },
    });
  };

  const handleImagePreview = (file: File) => {
    const reader = new FileReader();

    reader.onload = (result) => {
      console.log(reader.result);
      setPreview(reader.result as string);
    };
    reader.onerror = (err) => {
      console.log(err);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className={`${flexColCenter} max-h-screen w-screen`}>
      <div className='grid lg:grid-cols-2  bg-white w-full h-screen justify-center  rounded-md '>
        <div className='relative h-full'>
          <Image
            className='object-cover w-full lg:rounded-l-md'
            src='/assets/donor/banner.png'
            fill
            alt='banner-image'
          />
        </div>

        <div className=' m-5 space-y-5'>
          <div className='space-y-2 text-center'>
            <h1 className='text-3xl md:text-4xl font-bold text-blue-800'>
              Welcome To Heal Me
            </h1>
            <p className='text-sm text-gray-400'>
              Join us at in creating a better world for everyone.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className={` h-[70vh] overflow-y-scroll scrollbarStyle px-3 my-4  rounded-md`}
          >
            <div className='space-y-3'>
              {/* Input fields */}
              <Input
                label='Full Name:'
                placeholder='Surname first e.g  Doe John'
                name='fullName'
                required
                value={(signUpDetails as UserInterface).fullName}
                onChange={handleChangeEvent}
              />

              <Input
                type='email'
                label='Email Address:'
                placeholder='e.g john@gmail.com'
                name='email'
                required
                value={signUpDetails.email}
                onChange={handleChangeEvent}
              />

              <Input
                type='password'
                label='Password:'
                placeholder='Enter password'
                name='password'
                required
                value={(signUpDetails as UserInterface).password}
                onChange={handleChangeEvent}
              />

              <Input
                label='Confirm Password:'
                type='password'
                placeholder='Confirm password'
                required
                name='confirmPassword'
                value={(signUpDetails as SignUpUserInterface).confirmPassword}
                onChange={handleChangeEvent}
              />

              <Input
                label='Bio:'
                placeholder='e.g software developer'
                name='bio'
                value={(signUpDetails as UserInterface).bio}
                onChange={handleChangeEvent}
              />

              <Select
                onChange={handleChangeEvent}
                value={signUpDetails.country}
                name='country'
                label='Country'
                required
              >
                <Select.Option selected disabled>
                  Select a Country
                </Select.Option>

                {countries.map((country) => (
                  <Select.Option value={country.name} key={country.name}>
                    {country.name}
                  </Select.Option>
                ))}
              </Select>

              <Input
                label='Phone No:'
                placeholder='e.g (123) 5670 890'
                name='phone'
                type='text'
                required={false}
                value={signUpDetails.phone}
                onChange={handleChangeEvent}
              />

              <div className={`${flexRow} justify-between`}>
                <p className='text-sm text-blue-800 font-semibold'>
                  Upload Profile Image
                  <span className='text-red-500 text-xl'>*</span>
                </p>
                <label
                  htmlFor='image'
                  className='p-2 px-4 text-sm cursor-pointer border border-blue-800 rounded-md'
                >
                  Choose File
                </label>
                <input
                  type='file'
                  id='image'
                  name='image'
                  accept='image/*'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files) {
                      setImage(e.target.files[0]);
                      handleImagePreview(e.target.files[0]);
                    }
                  }}
                  hidden
                />
              </div>

              {preview && (
                <div className={`${flexRow} justify-center gap-4 mt-2`}>
                  <p className='text-sm text-blue-800 font-semibold'>
                    Preview:
                  </p>
                  <Image
                    className='h-[70px] w-[70px] object-cover'
                    src={preview}
                    width={100}
                    height={100}
                    alt='banner-image'
                  />
                </div>
              )}

              <div className='text-sm text-blue-800 font-semibold flex justify-between'>
                <p>
                  Would you like to be anonymous?{" "}
                  <span className='text-red-400 text-sm'>*</span>{" "}
                </p>

                <div className='flex gap-5'>
                  <div className='flex items-center gap-2'>
                    <Input
                      onChange={handleChangeEvent}
                      type='checkbox'
                      name='yes'
                      onClick={() => setCheckBox("yes")}
                      checked={checkBox === "yes"}
                    />
                    <label htmlFor='yes'>Yes</label>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Input
                      onChange={handleChangeEvent}
                      type='checkbox'
                      name='no'
                      onClick={() => setCheckBox("no")}
                      checked={checkBox === "no"}
                    />
                    <label htmlFor='no'>No</label>
                  </div>
                </div>
              </div>

              <Checkbox
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms(!agreedToTerms)}
                label='I agree to the '
                link='/terms-conditions'
                required
                isAgreement
              />
            </div>

            <div className={`${flexColCenter} w-full gap-2 h-max py-4`}>
              <button
                type='submit'
                disabled={isSigningUp || isUploadingImage}
                className='w-full p-3 bg-blue-800 text-white rounded-md text-sm'
              >
                {isSigningUp || isUploadingImage
                  ? "LOADING..."
                  : "CREATE AN ACCOUNT"}
              </button>
              <div className={`${flexRow} gap-3 my-3 `}>
                <div className='w-full h-[2px] bg-gray-300'></div>
                <p className='text-xs text-gray-400 font-semibold'>OR</p>
                <div className='w-full h-[2px] bg-gray-300'></div>
              </div>
              <button className='w-full border-2 border-red-700 text-red-700 p-3 rounded-md text-sm'>
                Sign Up with Google
              </button>
            </div>
          </form>
          <p className='text-sm text-gray-400 text-center'>
            Already have an account?{" "}
            <Link className='text-blue-800 font-semibold' href='/signin'>
              Sign In
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default DonorSignUp;
