"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store";
import { clearState, handleChange } from "@/features/auth/userSlice";
import Input from "@/components/Input";
import { useSignIn } from "@/hooks/useSignIn";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/services/firebase";
// common styles
const flexColCenter = "flex flex-col items-center justify-center";
const flexColStart = "flex flex-col items-start w-full";
const flexRow = "flex items-center w-full";

const SignIn = () => {
  // password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { signIn, isLoading } = useSignIn();

  const handleSubmit = async () => {
    signIn({
      email: value.email,
      password: value.password,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleOAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user, "ioo");

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error);

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  useEffect(() => {
    dispatch(clearState());
  }, []);
  return (
    <section className={`${flexColCenter} h-screen w-screen`}>
      <div className='grid lg:grid-cols-2 bg-white w-full h-full  gap-4 rounded-md '>
        {/* banner image */}
        <div className='relative w-full h-full'>
          <Image
            className='h-full w-full object-cover lg:rounded-l-md'
            src='/assets/donor/banner.png'
            fill
            alt='banner-image'
          />
        </div>
        {/* contact form */}
        <div className=' m-5 space-y-5 px-6'>
          <div className='space-y-2 text-center'>
            <h1 className='text-4xl font-bold text-blue-800 text-center'>
              Welcome To Heal Me
            </h1>
            <p className='text-sm text-gray-400 text-center'>
              Sign in as a donor or charity organization
            </p>
          </div>

          {/* Panel */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className={`${flexColCenter}`}
          >
            <div className={`gap-4 ${flexColStart} `}>
              {/* email PasswordI */}
              <Input
                type='email'
                label='Email Address:'
                placeholder='Enter Email'
                name='email'
                required
                value={value.email}
                onChange={handleChangeEvent}
              />
              {/* password PasswordI */}
              <div className='relative w-full'>
                <Input
                  type='password'
                  label='Password:'
                  placeholder='Enter password'
                  name='password'
                  required
                  value={value.password}
                  onChange={handleChangeEvent}
                />
              </div>
              <Link
                href='/forgot-password'
                className='text-gray-500 self-end mt-2 text-[0.8rem]'
              >
                Forgot Password ?
              </Link>
            </div>
            <div className={`${flexColCenter} w-full gap-4 h-max py-4`}>
              <button
                type='submit'
                disabled={isLoading}
                className='w-full p-3 bg-blue-800 text-white rounded-md text-sm'
              >
                {isLoading ? "LOADING..." : "SIGN IN"}
              </button>
            </div>
          </form>
          {/* <div className={`${flexRow} gap-3 my-3 `}>
                <div className='w-full h-[2px] bg-gray-300'></div>
                <p className='text-xs text-gray-400 font-semibold'>OR</p>
                <div className='w-full h-[2px] bg-gray-300'></div>
              </div> */}
          {/* <button
            onClick={() => {
              handleOAuth();
            }}
            className='w-full border-2 border-red-700 text-red-700 p-3 rounded-md text-sm font-medium'
          >
            Sign In with Google
          </button> */}
          <p className='text-sm text-gray-400 mt-1 text-center'>
            Don't have an account?
            <Link className='text-blue-800 font-semibold ml-1' href='/signup'>
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
