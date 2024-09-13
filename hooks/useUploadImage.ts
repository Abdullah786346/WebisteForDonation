import { uploadImage as uploadImageFn } from "@/services/firebase";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useUploadImage() {
  const { mutate: uploadImage, isPending: isUploadingImage } = useMutation({
    mutationFn: (data: File | null) => uploadImageFn(data),

    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { uploadImage, isUploadingImage };
}
