import Image from "next/image";
import Link from "next/link";
import React from "react";

const BasicNav = () => {
  return (
    <nav className='w-11/12 px-3 py-2 mx-auto'>
      <Link href={"/"}>
        <Image
          src='/assets/heal-me-logo.png'
          alt='Heal Me logo'
          width={100}
          height={100}
        />
      </Link>
    </nav>
  );
};

export default BasicNav;
