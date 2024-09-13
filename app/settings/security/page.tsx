"use client";
import Button from "@/components/Button";
import { UserInterface } from "@/constants/types";
import { useAppSelector } from "@/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegEdit, FaToggleOn } from "react-icons/fa";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import useUpdate from "../profile-settings/useUpdate";

const Security = () => {
  const user = useAppSelector((store) => store.userSlice);
  const [anonymous, setAnonymous] = useState((user as UserInterface).anonymous);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const { updateUser, isUpdating } = useUpdate();

  return (
    <section className='relative'>
      <h3 className='font-bold'>Security</h3>
      <div className='border-b py-8 flex item-center justify-between gap-7'>
        <div className='w-full flex items-center justify-between gap-4'>
          <div>
            <p className='font-semibold mb-1'>Email address</p>
            <p className='text-sm text-gray-500 '>
              The email address associated with your account
            </p>
          </div>
          <div>
            <p className='font-medium mb-1'>christian@gmail.com</p>
            <p className='text-red-600 text-sm'>Unverified</p>
          </div>
        </div>
        <button type='button' className={"settings-btn"}>
          Edit
          <FaRegEdit className='-mt-1' />{" "}
        </button>
      </div>
      <div className='border-b py-8 flex item-center justify-between gap-7'>
        <div className='w-full'>
          <p className='font-semibold mb-1'>Password</p>
          <p className='text-sm text-gray-500 '>
            Set a unique password to protect your account.{" "}
          </p>
        </div>
        <div className='w-1/4 self-center'>
          <button
            onClick={() => {
              router.push("/forgot-password");
            }}
            className='text-gray-500 px-2 py-1 rounded-3xl border border-gray-500 hover:bg-gray-200 w-full '
          >
            Change Password
          </button>
        </div>
      </div>
      <div className='border-b py-8 flex item-center justify-between gap-7'>
        <div className='w-full'>
          <p className='font-semibold mb-1'>2-step verification</p>
          <p className='text-sm text-gray-500 '>
            Make your account extra secure. Along with your password.{" "}
          </p>
        </div>
        <MdToggleOn className='text-green-600' size={60} />
      </div>
      {user.role !== "organization" && (
        <div className=' py-6 flex item-center justify-between gap-7'>
          <div className='w-full'>
            <p className='font-semibold mb-1'>Change Anonymous Status</p>
            <p className='text-sm text-gray-500 '>
              This will change your profile anonymous status{" "}
            </p>
          </div>
          {anonymous ? (
            <MdToggleOn
              onClick={() => {
                setOpenModal(true);
              }}
              className='text-green-600'
              size={60}
            />
          ) : (
            <MdToggleOff
              onClick={() => {
                setOpenModal(true);
              }}
              className='text-gray-400'
              size={60}
            />
          )}
        </div>
      )}
      {openModal && (
        <div className=' absolute top-0 left-0 bottom-0 right-0 grid place-content-center '>
          <div className='mx-auto bg-white shadow-md ring-2 ring-blue-100  w-2/3 h-fit px-3 py-8 rounded-md'>
            <p className='font-semibold text-center'>
              Are you sure you want to change your profile anonymous status?
              Click continue to proceed
            </p>
            <div className='flex item-center mt-5 gap-4 justify-center'>
              <Button
                variant='outlinedWhite'
                onClick={() => {
                  setOpenModal(false);
                  setAnonymous(!anonymous);
                }}
              >
                Cancel
              </Button>
              <Button
                variant='blue'
                onClick={() => {
                  console.log(anonymous);

                  updateUser({
                    ...user,
                    anonymous: !anonymous,
                  });

                  setAnonymous(!anonymous);
                  setOpenModal(false);
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Security;
