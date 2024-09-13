import React from "react";
import Button from "./Button";
import Input from "./Input";

const ContactForm = () => {
  return (
    <form action='' className='flex w-full flex-col gap-4'>
      <div className='grid lg:grid-cols-2 gap-4'>
        <div className='flex flex-col'>
          <label
            htmlFor='first_name'
            className='font-semibold text-blue-800 text-lg '
          >
            First Name{" "}
          </label>
          <Input placeholder='Enter First name' name='first_name' type='text' />
        </div>
        <div className='flex flex-col'>
          <label
            htmlFor='last_name'
            className='font-semibold text-blue-800 text-lg'
          >
            Last Name{" "}
          </label>
          <Input placeholder='Enter Last name' name='last_name' type='text' />
        </div>
        <div className='flex flex-col'>
          <label
            htmlFor='E-mail'
            className='font-semibold text-blue-800 text-lg'
          >
            E-mail{" "}
          </label>
          <Input placeholder='Enter E-mail' name='E-mail' type='text' />
        </div>
        <div className='flex flex-col'>
          <label
            htmlFor='phone'
            className='font-semibold text-blue-800 text-lg'
          >
            Phone Number{" "}
          </label>
          <Input placeholder='Enter Phone Number' name='phone' type='text' />
        </div>
      </div>
      <div className=''>
        <label
          htmlFor='message'
          className='font-semibold text-blue-800 text-lg'
        >
          Message{" "}
        </label>
        <textarea
          name='message'
          placeholder='Type Your Message Here...'
          rows={5}
          className='w-full rounded-md p-3 px-5 bg-slate-200 text-main-800 border-none text-sm mt-1  outline-none'
        />
      </div>
      <Button type='submit'>Send Message</Button>
    </form>
  );
};

export default ContactForm;
