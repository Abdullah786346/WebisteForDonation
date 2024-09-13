import React from "react";
import { FaChevronDown, FaSearch, FaUser } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { LuAlignJustify } from "react-icons/lu";

const SettingsNav = () => {
  return (
    <header className='bg-white col-span-2 px-6 py-5 '>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between gap-5'>
        <LuAlignJustify className='text-3xl ' />
        <form className='bg-gray-200 rounded-full px-3 py-2 w-1/3 md:w-1/4 md:flex hidden items-center gap-3 '>
          <FaSearch className='text-gray-500' />

          <input
            type='text'
            placeholder='Search..'
            className='placeholder:text-gray-500 w-full bg-transparent text-sm'
          />
        </form>
        <div className='flex items-center gap-3 text-blue-800'>
          <FiBell />
          <FaUser className='bg-blue-800 rounded-full w-8 h-8 text-white p-2' />
          <FaChevronDown className='text-gray-500' />
        </div>
      </div>
    </header>
  );
};

export default SettingsNav;
