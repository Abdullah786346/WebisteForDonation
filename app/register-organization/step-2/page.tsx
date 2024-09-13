"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import { handleChange } from "@/features/auth/orgSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRegisterOrg } from "../../../hooks/useRegisterOrg";
import { useUploadImage } from "@/hooks/useUploadImage";
import { useState } from "react";
import Select from "@/components/Select";
import Link from "next/link";
const flexRow = "flex items-center w-full";

const Step2 = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    address,
    city,
    country,
    state,
    zipCode,
    email,
    phone,
    category,
    password,
    mission,
    residents,
    name,
  } = useAppSelector((store) => store.orgSlice);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [accreditationFile, setAccreditationFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const handleChangeEvent = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const { orgRegister, isLoading } = useRegisterOrg();
  const { uploadImage, isUploadingImage } = useUploadImage();
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

  const handleSubmit = () => {
    uploadImage(accreditationFile, {
      onSuccess: (accreditation) => {
        uploadImage(imageFile, {
          onSuccess: (image) => {
            orgRegister({
              name,
              address,
              city,
              password,
              country,
              state,
              zipCode,
              email,
              phone,
              category,
              mission,
              image,
              residents,
              accreditation,
            });
          },
        });
      },
    });
  };
  return (
    <section>
      <div className='flex flex-col gap-2'>
        <h4 className='text-gray-400 text-sm'>STEP 2 OF 2:</h4>
        <p className='text-blue-800 text-2xl'>Additional Information</p>
        <div className='w-full h-1.5 bg-green-400 rounded' />
      </div>

      <form
        className='mt-8 flex flex-col gap-4'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='mission'
            className='font-semibold text-blue-800 text-lg'
          >
            Organization Mission: <span className='text-red-400'>*</span>
          </label>
          <p className='text-gray-400 text-sm'>
            Tell us a little about what you do
          </p>
          <textarea
            name='mission'
            placeholder='Enter organization mission'
            rows={5}
            onChange={handleChangeEvent}
            value={mission}
            required
            className='w-full rounded-md p-3 px-5 bg-slate-200 text-main-800 border-none text-sm mt-1  outline-none'
          />
          <p className='self-end text-sm text-gray-400'>10/300 char</p>
        </div>
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='number-of-residents'
            className='font-semibold text-blue-800 text-lg'
          >
            Number of Residents/Patients
          </label>
          <p className='text-gray-400 text-sm'>
            How many people are under your care?
          </p>
          <Select
            required={true}
            name='residents'
            value={residents}
            onChange={handleChangeEvent}
          >
            <Select.Option selected disabled>
              Select a Range
            </Select.Option>
            <Select.Option value={10}>Less than 10</Select.Option>
            <Select.Option value={50}>10- 50</Select.Option>
            <Select.Option value={100}>50 - 100</Select.Option>
            <Select.Option value={500}>100 - 500</Select.Option>
            <Select.Option value={1000}>500 and above</Select.Option>
          </Select>
        </div>
        <div className={`${flexRow} gap-4`}>
          <p className='text-blue-800 font-semibold text-lg'>
            Upload Letter of Accreditation:{" "}
            <span className='text-red-400'>*</span>
          </p>
          <label
            htmlFor='accreditation'
            className='p-2 px-4 text-sm cursor-pointer border border-blue-800 rounded-md'
          >
            Choose File
          </label>
          <input
            type='file'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files) {
                setAccreditationFile(e.target.files[0]);
              }
            }}
            name='accreditation'
            className='hidden'
            id='accreditation'
          />
        </div>
        <div className={`${flexRow} gap-4`}>
          <p className='text-blue-800 font-semibold text-lg'>
            Upload Profile Image: <span className='text-red-400'>*</span>
          </p>
          <label
            htmlFor='image'
            className='p-2 px-4 text-sm cursor-pointer border border-blue-800 rounded-md'
          >
            Choose File
          </label>
          <input
            type='file'
            name='image'
            className='hidden'
            id='image'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files) {
                setImageFile(e.target.files[0]);
                handleImagePreview(e.target.files[0]);
              }
            }}
          />
        </div>
        {preview && (
          <div className={`${flexRow} justify-center gap-4 mt-2`}>
            <p className='text-lg text-blue-800 font-semibold'>Preview:</p>
            <Image
              className='h-[70px] w-[70px] object-cover'
              src={preview}
              width={100}
              height={100}
              alt='banner-image'
            />
          </div>
        )}
        <Checkbox
          checked={agreedToTerms}
          onChange={() => setAgreedToTerms(!agreedToTerms)}
          label='I agree to the '
          link='/terms-conditions'
          required
          isAgreement
        />
        {isLoading || isUploadingImage ? (
          <Button variant='blue' type='submit' margin='auto'>
            Loading...
          </Button>
        ) : (
          <div className='flex justify-center items-center gap-4 mt-8'>
            <Button variant='outlinedWhite' onClick={() => router.back()}>
              Previous
            </Button>
            <Button variant='blue' type='submit'>
              Next
            </Button>
          </div>
        )}
      </form>
    </section>
  );
};

export default Step2;
