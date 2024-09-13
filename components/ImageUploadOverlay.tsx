import useUpdate from "@/app/settings/profile-settings/useUpdate";
import { useUploadImage } from "@/hooks/useUploadImage";
import { useAppSelector } from "@/store";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import React from "react";
import { FaUpload } from "react-icons/fa";

const ImageUploadOverlay = ({
  updateData,
  isUpdating,
}: {
  updateData: UseMutateFunction<
    AxiosResponse<any, any>,
    Error,
    object,
    unknown
  >;
  isUpdating: boolean;
}) => {
  const data = useAppSelector((state) => state.userSlice);

  const { uploadImage, isUploadingImage } = useUploadImage();
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (!e.target.files[0] || isUpdating || isUploadingImage) return;

    uploadImage(e.target.files[0], {
      onSuccess: (imageUrl) => {
        console.log(imageUrl, data);
        updateData({ ...data, image: imageUrl });
      },
    });
  };
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-full transition-opacity duration-300 ${
        isUploadingImage || isUpdating
          ? "opacity-0"
          : "opacity-0 group-hover:opacity-100"
      }`}
    >
      <label
        className={`cursor-pointer size-full flex items-center justify-center ${
          isUploadingImage || isUpdating ? "cursor-not-allowed" : ""
        }`}
      >
        <FaUpload className='text-white' />
        <input
          type='file'
          className='hidden'
          accept='image/*'
          readOnly={isUploadingImage || isUpdating}
          onChange={(e) => handleImageUpload(e)}
        />
      </label>
    </div>
  );
};

export default ImageUploadOverlay;
