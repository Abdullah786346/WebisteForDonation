"use client";
import Input from "@/components/Input";
import { apiCaller } from "@/utils/apiCaller";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ResetPassword = ({ params }: { params: { token: string } }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const router = useRouter();
  const { mutate: resetPassword, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      console.log(password, params.token);

      let response = await apiCaller.post("/user/resetPassword", {
        password,
        token: params.token,
      });
      return response;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.data.message);
      setPassword("");
      setPassword2("");
      router.push("/signin");
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
    <section className='flex items-center justify-center h-[70vh]'>
      <form
        className='max-w-96 w-full'
        onSubmit={(e) => {
          e.preventDefault();
          if (password !== password2) {
            toast.warn("Passwords do not match");
            return;
          }
          resetPassword();
        }}
      >
        <h1 className='text-blue-800 text-start font-bold text-3xl'>
          Enter your new password
        </h1>
        <p className='text-blue-100 text-start text-xs  ml-1'>
          Enter your new password below
        </p>
        <div className='mt-4'>
          <Input
            type={"password"}
            name='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder='Enter new password'
          />
        </div>

        <div className='my-2'>
          <Input
            type={"password"}
            name='confirm-password'
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            placeholder='Confirm new password'
            value={password2}
          />
        </div>
        <button
          type='submit'
          disabled={isLoading}
          className=' px-5 py-3 text-center text-white bg-blue-800 mt-8  text-xs   rounded-md  tracking-wide'
        >
          {isLoading ? "Loading..." : "Reset password"}
        </button>
      </form>
    </section>
  );
};

export default ResetPassword;
