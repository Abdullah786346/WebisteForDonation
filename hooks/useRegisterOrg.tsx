import { RegisterOrgDataInterface } from '@/constants/types';
import { clearState } from '@/features/auth/orgSlice';
import { registerOrg } from '@/services/authApi';
import { useAppDispatch } from '@/store';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const useRegisterOrg = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isPending: isLoading, mutate: orgRegister } = useMutation({
    mutationFn: (data: RegisterOrgDataInterface) => registerOrg(data),
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.data.message);
      dispatch(clearState());
      router.push('/signin');
    },

    onError: (err) => {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.error.message || err.message);
      } else {
        toast.error(err.message);
      }
    },
  });
  return { orgRegister, isLoading };
};
