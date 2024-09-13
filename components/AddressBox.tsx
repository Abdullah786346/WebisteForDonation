import React from "react";

const AddressBox = ({ info }: { info: any }) => {
  return (
    <div className='w-full h-max flex flex-col gap-3 bg-slate-200 p-4 rounded-md text-gray-700'>
      <h1 className='text-3xl font-bold font-[Playfair-Display]'>Address</h1>
      <p className='my-4'>
        Quam elementum pulvinar etiam non quam lacus suspendisse.A scelerisque
        purus semper eget duis at Lobortisscelerisque fermentum dui faucibus in
        ornare....
      </p>
      <p>
        <span className='font-bold'>Location: </span>
        {info?.address}
      </p>
      <p>
        <span className='font-bold'>Phone: </span>
        {info?.phone}
      </p>
      <p>
        <span className='font-bold'>Email: </span>
        {info?.email}
      </p>
    </div>
  );
};

export default AddressBox;
