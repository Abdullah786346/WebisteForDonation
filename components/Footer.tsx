import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className='bg-[#202020] text-white p-4'>
      <div className='flex flex-col'>
        {/* Top */}
        <div className='container mx-auto py-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
          <p className='font-bold md:text-3xl text-2xl mb-4 md:mb-0'>
            Subscribe and receive our weekly newsletter
          </p>
          <Button variant='white' type='button' disabled={false}>
            Subscribe
          </Button>
        </div>

        {/* Middle */}
        <div className='bg-gray-700'>
          <div className='container mx-auto py-8 flex flex-wrap justify-evenly gap-8 md:flex-row md:justify-between'>
            {/* Contact Info*/}
            <div className='flex flex-col gap-4'>
              <Image
                src='/assets/heal-me-white.png'
                alt='Heal Me Loog'
                width={70}
                height={70}
              />

              <div className=' flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                  <IoLocationOutline size={20} /> Maseru 11, Belarus
                </div>
                <div className='flex items-center gap-2'>
                  <FaPhoneAlt size={20} /> +615 4640 3304
                </div>
                <div className='flex items-center gap-2'>
                  <MdMailOutline size={20} /> support.healme.com
                </div>
              </div>

              <div className='flex items-center gap-5'>
                <a href='/' target='_blank' className='border rounded-full p-2'>
                  <FaFacebookF size={18} />
                </a>
                <a href='/' target='_blank' className='border rounded-full p-2'>
                  <FaXTwitter size={18} />
                </a>
                <a href='/' target='_blank' className='border rounded-full p-2'>
                  <FaGooglePlusG size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className='font-bold text-xl mb-6'>Quick Links</p>
              <div className='flex flex-col gap-4'>
                <Link href='/main'>Home Page</Link>
                <Link href='/main/about'>Who We Are</Link>
                <Link href='/donation'>Make a Donation</Link>
                <Link href='/main/charity-homes'>Charity Homes</Link>
                <Link href='/main/contact'>Contact Us</Link>
                <Link href='/main/events/upcoming-events'>Events</Link>
              </div>
            </div>

            {/* World Map */}
            <div>
              <p className='font-bold text-xl mb-6'>Worldwide Organizations</p>
              <Image
                src='/assets/map.png'
                alt='Worldwide Organizations'
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='container mx-auto py-8 text-center'>
          &copy; {new Date().getFullYear()} Heal Me | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
