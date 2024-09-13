import { useMutation } from "@tanstack/react-query";
import { signInOrg, signInUser } from "@/services/authApi";

import { toast } from "react-toastify";
import { useAppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import axios from "axios";
import { clearState } from "@/features/auth/userSlice";

export function useSignIn() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { mutate: signIn, isPending: isLoading } = useMutation({
    mutationFn: (data: { email: string; password: string }) => signInUser(data),

    onSuccess: (res) => {
      console.log(res);
      toast.success(res.data.message);
      dispatch(clearState());
      router.push("/main");
    },

    onError: (err) => {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.error.message || err.message);
      } else {
        toast.error(err.message);
      }
    },
  });

  return { signIn, isLoading };
}
