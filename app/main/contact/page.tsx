"use client";

import React from "react";
import Form from "@/components/Form";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//images & icons
import CenteredHero from "@/components/CenteredHero";
import ContactForm from "@/components/ContactForm";
import AddressBox from "@/components/AddressBox";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      {/* About Intro */}
      <CenteredHero
        bgImage='/assets/siblings.jpeg'
        title='Contact Us'
        desc='Give a helping hand for the poor
     
'
      />

      {/*Contact box*/}
      <section className='bg-white bg-center  w-full flex md:flex-col items-center'>
        <div className='flex md:flex-col flex-col gap-4 bg-white bg-brightness-115 text-blue-800 p-10 '>
          <div className='w-full'>
            <span className='flex flex-row items-center'>
              Get In Touch
              <span>
                <hr className='border-blue-800 w-10 ml-1' />{" "}
              </span>
            </span>
          </div>
          <div className='w-full'>
            <h2 className='font-playfair text-3xl font-bold'>
              Send Us A Message
            </h2>
          </div>
          <div className='container grid lg:grid-cols-3 md:grid-cols-4 items-start gap-10'>
            <div className='col-span-4 md:col-span-2'>
              <ContactForm />
            </div>
            <div className='w-full md:col-span-2 col-span-4 lg:col-span-1'>
              <AddressBox
                info={{ address: "wwe", phone: "dwiwe", email: "ieiqeo" }}
              />

              <div className='mt-3'>
                <h3 className='text-blue-800 font-semibold '>Follow Us</h3>
                <div className='flex-item-center-gap-4 flex items-center gap-4 mt-3'>
                  <div className='w-10 border-blue-800 grid place-content-center border-[1px] aspect-square rounded-full'>
                    <FaFacebookF />
                  </div>
                  <div className='w-10 border-blue-800 grid place-content-center border-[1px] aspect-square rounded-full'>
                    <FaInstagram />
                  </div>
                  <div className='w-10 border-blue-800 grid place-content-center border-[1px] aspect-square rounded-full'>
                    <FaTwitter />
                  </div>
                  <div className='w-10 border-blue-800 grid place-content-center border-[1px] aspect-square rounded-full'>
                    <FaYoutube />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
