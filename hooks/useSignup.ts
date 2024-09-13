import { useMutation } from '@tanstack/react-query';
import { registerOrg, signUpUser } from '@/services/authApi';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { SignUpUserInterface } from '@/constants/types';
import axios from 'axios';
import { useAppDispatch } from '@/store';
import { clearState } from '@/features/auth/userSlice';

export function useSignUp() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: (data: SignUpUserInterface) => signUpUser(data),

    onSuccess: (res) => {
      console.log(res);
      dispatch(clearState());
      toast.success(res.data.message);
      router.push('/signin');
    },

    onError: (err) => {
      console.log(err);
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.error.message || err.message);
      } else {
        toast.error(err.message);
      }
    },
  });

  return { signUp, isSigningUp };
}
