"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ type = "text", ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='w-full '>
      {props.label && (
        <label
          className=' text-blue-800 font-semibold'
          htmlFor={props.id || props.name}
        >
          {props.label}{" "}
          {props.required ? (
            <span className='text-red-500 text-xl'>*</span>
          ) : (
            <span className='text-gray-400 text-xs'>(optional)</span>
          )}
        </label>
      )}
      <div className='relative my-1'>
        <input
          id={props.id || props.name}
          type={showPassword ? "text" : type}
          className={`${
            type === "checkbox"
              ? "flex items-center "
              : "bg-slate-200 p-3 text-sm outline-none w-full rounded-md transition-all duration-300 placeholder:text-stone-400 text-stone-700 focus:text-black focus:outline-none focus:ring-2 focus:ring-blue-800 disabled:bg-gray-200 pr-10"
          }`}
          {...props}
        />

        {type === "password" && (
          <button
            type='button'
            className='absolute right-2 top-1/2 transform -translate-y-1/2  px-3  capitalize underline text-blue-800 text-xs font-semibold'
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
}
