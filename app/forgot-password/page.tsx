'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { apiCaller } from '@/utils/apiCaller';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { mutate: requestForgotPassword, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      let response = await apiCaller.post('/user/forgotPassword', { email });
      return response;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.data.message);
      setEmail('');
    },

    onError: (err) => {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.error.message || err.message);
      } else {
        toast.error(err.message);
      }
    },
  });

  return (
    <section className="flex items-center justify-center h-[70vh]">
      <form
        className="max-w-96 w-full space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          requestForgotPassword();
        }}
      >
        <h1 className="text-blue-800 text-start font-bold text-2xl">
          Reset Password
        </h1>
        <p className="text-blue-100 text-start text-xs  ml-1">
          Enter your account email address
        </p>

        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter email address"
        />

        <div className="flex items-center justify-between">
          <Link href="/signin">
            <button
              type="button"
              className="text-blue-800 bg-transparent text-sm font-bold"
            >
              Back to sign in
            </button>
          </Link>
          <Button
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Loading..' : 'Enter'}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ForgotPassword;
