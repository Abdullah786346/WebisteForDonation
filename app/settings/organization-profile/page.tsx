"use client";
import { useAppSelector } from "@/store";
import React, { useState } from "react";
import { FaRegEdit, FaUpload, FaUser } from "react-icons/fa";
import Image from "next/image";
import { useUploadImage } from "@/hooks/useUploadImage";
import { OrganizationInterface } from "@/constants/types";
import useUpdateOrg from "./useUpdateOrg";
import ImageUploadOverlay from "@/components/ImageUploadOverlay";
import MiniLoader from "@/utils/MiniLoader";

const inputClassName =
  "text-gray-800 w-96 focus:border-blue-500 font-semibold border rounded p-2 read-only:border-none readOnly:bg-transparent read-only:p-0";

const ProfileSettingsOrg = () => {
  const [currentlyEditing, setCurrentlyEditing] = useState<
    "profile-info" | "address" | null
  >(null);
  const organization = useAppSelector((state) => state.userSlice);
  const { updateOrg, isUpdating } = useUpdateOrg();
  const { isUploadingImage } = useUploadImage();

  const handleSaveChanges = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const prevName = (organization as OrganizationInterface)?.name;
    const newName = formData.get("name");

    const name = `${prevName === newName ? prevName : newName}`;
    console.log(organization);

    updateOrg({
      ...organization,
      name,
      address: formData.get("address"),
      residents: formData.get("residents"),
      phone: formData.get("phone"),
      country: formData.get("country"),
      zipCode: formData.get("zipCode"),
      city: formData.get("city"),
      mission: formData.get("mission"),
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
                {organization.image ? (
                  <Image
                    src={organization.image}
                    alt={`${
                      (organization as OrganizationInterface)?.name
                    }'s profile image`}
                    width={1000}
                    height={1000}
                    className='size-full rounded-full object-cover'
                  />
                ) : (
                  <FaUser className='bg-blue-800 size-full rounded-full p-2' />
                )}

                {/* Upload Overlay */}
                <ImageUploadOverlay
                  updateData={updateOrg}
                  isUpdating={isUpdating}
                />
              </div>
            </div>

            <div className='space-y-2'>
              <span className='block font-bold'>
                {(organization as OrganizationInterface)?.name}
              </span>
              <span className='block'>
                {(organization as OrganizationInterface)?.category}
              </span>
              <span className='block'>{organization?.address}</span>
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
                <p className='text-gray-500'>Name</p>
                <input
                  name='name'
                  defaultValue={(organization as OrganizationInterface)?.name}
                  readOnly={currentlyEditing !== "profile-info"}
                  className={inputClassName}
                />
              </div>
              <div>
                <p className='text-gray-500'>Residents</p>
                <input
                  type='number'
                  name='residents'
                  defaultValue={
                    (organization as OrganizationInterface)?.residents
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
                  disabled={true}
                  defaultValue={organization.email}
                  readOnly={currentlyEditing !== "profile-info"}
                  className='w-96 focus:border-blue-500 font-semibold border rounded p-2 disabled:border-none disabled:bg-transparent read-only:p-0 '
                />
              </div>

              <div>
                <p className='text-gray-500'>Phone</p>
                <input
                  name='phone'
                  type='phone'
                  defaultValue={organization?.phone}
                  readOnly={currentlyEditing !== "profile-info"}
                  className={inputClassName}
                />
              </div>
              <div>
                <p className='text-gray-500'>Mission</p>
                <input
                  name='mission'
                  type='text'
                  defaultValue={
                    (organization as OrganizationInterface)?.mission
                  }
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
                  defaultValue={organization?.country}
                  readOnly={currentlyEditing !== "address"}
                  className={inputClassName}
                />
              </div>
              <div>
                <p className='text-gray-500'>State</p>
                <input
                  name='state'
                  type='text'
                  defaultValue={
                    (organization as OrganizationInterface).state
                      ? (organization as OrganizationInterface).state
                      : "..."
                  }
                  readOnly={currentlyEditing !== "address"}
                  className={inputClassName}
                />
              </div>

              <div>
                <p className='text-gray-500'>Postal Code</p>
                <input
                  name='zipCode'
                  type='text'
                  defaultValue={
                    (organization as OrganizationInterface)?.zipCode
                      ? (organization as OrganizationInterface)?.zipCode
                      : "..."
                  }
                  readOnly={currentlyEditing !== "address"}
                  className={inputClassName}
                />
              </div>

              <div>
                <p className='text-gray-500'>City</p>
                <input
                  name='city'
                  type='text'
                  defaultValue={(organization as OrganizationInterface).city}
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

export default ProfileSettingsOrg;
