"use client";
import Button from "@/components/Button";
import useApiCallerWithToken from "@/hooks/useApiCallerWithToken";
import { useAppSelector } from "@/store";
import Loading from "@/utils/Loading";
import MiniLoader from "@/utils/MiniLoader";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const DeleteAccount = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const apiCallerWithToken = useApiCallerWithToken();
  const user = useAppSelector((store) => store.userSlice);
  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const resp = await apiCallerWithToken.delete(`/user/delete/${user._id}`);
      console.log(resp);

      if (resp.status === 200) {
        toast.success(resp.data.message);
        router.push("/main");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return <MiniLoader ratio='150px' />;
  }
  return (
    <div className='space-y-3  relative'>
      <h3 className='font-bold mb-6'>Delete Account</h3>
      <p className='text-gray-600'>Are you sure to delete your account?</p>
      <button
        className='text-red-600'
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Delete account
      </button>
      {openModal && (
        <div className=' absolute top-0 left-0 bottom-0 right-0 grid place-content-center '>
          <div className='mx-auto bg-white shadow-md ring-2 ring-blue-100  w-2/3 h-fit px-3 py-8 rounded-md'>
            <p className='font-semibold text-center'>
              Are you sure you want to delete your account?
              {user.role !== "organization"
                ? " Click continue to proceed"
                : "Send an email to our staff"}
            </p>
            <div className='flex item-center mt-5 gap-4 justify-center'>
              <Button
                variant='outlinedWhite'
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant='blue'
                onClick={(e) => {
                  if (user.role !== "organization") {
                    handleDelete(e);
                  }
                  setOpenModal(false);
                }}
              >
                {user.role !== "organization" ? "Continue" : "Send"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
