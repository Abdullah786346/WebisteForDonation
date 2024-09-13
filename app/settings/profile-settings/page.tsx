"use client";
import { useAppSelector } from "@/store";
import React, { useState } from "react";
import { FaRegEdit, FaUpload, FaUser } from "react-icons/fa";
import useUpdate from "./useUpdate";
import Image from "next/image";
import { useUploadImage } from "@/hooks/useUploadImage";
import { UserInterface } from "@/constants/types";
import ImageUploadOverlay from "@/components/ImageUploadOverlay";

const inputClassName =
  "text-gray-800 disabled:bg-transparent w-96 focus:border-blue-500 font-semibold border rounded p-2 read-only:border-none readOnly:bg-transparent read-only:p-0";

const ProfileSettings = () => {
  const [currentlyEditing, setCurrentlyEditing] = useState<
    "profile-info" | "address" | null
  >(null);
  const user = useAppSelector((state) => state.userSlice);
  const { updateUser, isUpdating } = useUpdate();
  const { uploadImage, isUploadingImage } = useUploadImage();

  const handleSaveChanges = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const prevFirstName = (user as UserInterface)?.fullName?.split(" ")[1];
    const prevLastName = (user as UserInterface)?.fullName?.split(" ")[0];
    const newFirstName = formData.get("firstName");
    const newLastName = formData.get("lastName");

    const fullName = `${
      prevFirstName === newFirstName ? prevFirstName : newFirstName
    } ${prevLastName === newLastName ? prevLastName : newLastName}`;

    updateUser({
      ...user,
      fullName,
      phone: formData.get("phone"),
      bio: formData.get("bio"),
      country: formData.get("country"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
    });
    setCurrentlyEditing(null);
  };

  return (
    <form onSubmit={handleSaveChanges} className='space-y-8'>
      <div className='space-y-2'>
        <h3 className='font-bold'>My Profile</h3>
        <div className='w-full px-5 py-3 gap-5 border rounded'>
          <div className='flex items-center gap-5'>
            <div className='relative cursor-pointer size-20 p-1 ring-1 ring-gray-400 rounded-full group'>
              {/* User Image or Icon */}
              <div className='relative size-full'>
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={`${(user as UserInterface)?.fullName}'s profile image`}
                    width={1000}
                    height={1000}
                    className='size-full rounded-full object-cover'
                  />
                ) : (
                  <FaUser className='bg-blue-800 size-full rounded-full p-2' />
                )}

                {/* Upload Overlay */}
                <ImageUploadOverlay
                  updateData={updateUser}
                  isUpdating={isUpdating}
                />
              </div>
            </div>

            <div className='space-y-2'>
              <span className='block font-bold'>
                {(user as UserInterface)?.fullName}
              </span>
              <span className='block'>{user?.role}</span>
              <span className='block'>{user?.address}</span>
            </div>
          </div>
          {(isUpdating || isUploadingImage) && (
            <p className='text-sm animate-pulse py-2'>Uploading Image...</p>
          )}
        </div>
      </div>

      <div className='space-y-3'>
        <div className='w-full flex px-5 border rounded justify-between items-center gap-5 py-5 '>
          <div className='w-full'>
            <h3 className='font-bold'>Personal Information</h3>
            <div className='grid grid-cols-2 w-full justify-evenly gap-5 py-5'>
              <div>
                <p className='text-gray-500'>First Name</p>
                <input
                  name='firstName'
                  defaultValue={
                    (user as UserInterface)?.fullName?.split(" ")[0]
                  }
                  readOnly={currentlyEditing !== "profile-info"}
                  className={inputClassName}
                />
              </div>
              <div>
                <p className='text-gray-500'>Last Name</p>
                <input
                  name='lastName'
                  defaultValue={
                    (user as UserInterface)?.fullName?.split(" ")[1]
                  }
                  readOnly={currentlyEditing !== "profile-info"}
                  className={inputClassName}
                />
              </div>

              <div>
                <p className='text-gray-500'>Email Address</p>
                <input
                  name='email'
                  type='email'
                  disabled
                  defaultValue={user.email}
                  readOnly={currentlyEditing !== "profile-info"}
                  className={inputClassName}
                />
              </div>

              <div>
                <p className='text-gray-500'>Phone</p>
                <input
                  name='phone'
                  type='phone'
                  defaultValue={user?.phone}
                  readOnly={currentlyEditing !== "profile-info"}
                  className={inputClassName}
                />
              </div>
              <div>
                <p className='text-gray-500'>Bio</p>
                <input
                  name='bio'
                  type='text'
                  defaultValue={(user as UserInterface)?.bio}
                  readOnly={currentlyEditing !== "profile-info"}
                  className={inputClassName}
                />
              </div>
            </div>
            {currentlyEditing === "profile-info" && (
              <div className='flex item-center gap-4'>
                <button className='text-blue-300'>Save Changes</button>
                <button
                  className='text-red-500'
                  onClick={() => {
                    setCurrentlyEditing(null);
                  }}
                >
                  Cancel Changes
                </button>
              </div>
            )}
            {isUpdating &&
              currentlyEditing === "profile-info" &&
              "Updating...."}
          </div>

          {currentlyEditing !== "profile-info" && (
            <button
              type='button'
              onClick={() => setCurrentlyEditing("profile-info")}
              className={"settings-btn"}
            >
              Edit
              <FaRegEdit className='-mt-1' />{" "}
            </button>
          )}
        </div>
      </div>

      <div className='space-y-3'>
        <div className='w-full flex justify-between px-5  border rounded items-center gap-5  py-3 '>
          <div className='w-full'>
            <h3 className='font-bold'>Address</h3>
            <div className='grid grid-cols-2 w-full justify-evenly py-5 gap-5'>
              <div>
                <p className='text-gray-500'>Country</p>
                <input
                  name='country'
                  type='text'
                  defaultValue={user?.country}
                  readOnly={currentlyEditing !== "address"}
                  className={inputClassName}
                />
              </div>
              <div>
                <p className='text-gray-500'>State</p>
                <input
                  name='state'
                  type='text'
                  defaultValue={user?.state}
                  readOnly={currentlyEditing !== "address"}
                  className={inputClassName}
                />
              </div>

              <div>
                <p className='text-gray-500'>City</p>
                <input
                  name='city'
                  type='text'
                  defaultValue={
                    (user as UserInterface)?.city
                      ? (user as UserInterface)?.city
                      : "..."
                  }
                  readOnly={currentlyEditing !== "address"}
                  className={inputClassName}
                />
              </div>

              <div>
                <p className='text-gray-500'>Address</p>
                <input
                  name='address'
                  type='text'
                  defaultValue={user?.address}
                  readOnly={currentlyEditing !== "address"}
                  className={inputClassName}
                />
              </div>
            </div>
            {currentlyEditing === "address" && (
              <div className='flex item-center gap-4'>
                <button className='text-blue-300'>Save Changes</button>
                <button
                  className='text-red-500'
                  onClick={() => {
                    setCurrentlyEditing(null);
                  }}
                >
                  Cancel Changes
                </button>
              </div>
            )}
            {isUpdating && "Updating...."}
          </div>

          {currentlyEditing !== "address" && (
            <button
              type='button'
              onClick={() => setCurrentlyEditing("address")}
              className={"settings-btn"}
            >
              Edit
              <FaRegEdit className='-mt-1' />{" "}
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default ProfileSettings;
