"use client";
import OrangeButtonLine from "@/components/OrangeButtonLine";
import Footer from "@/components/Footer";
import CenteredHero from "@/components/CenteredHero";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <section>
      {/* Hero section */}
      <CenteredHero
        title='Our Events'
        desc='We are dedicated to providing comprehensive support and assistance to vulnerable individuals and communities.'
        btnText='Donate now'
        btnLink=''
        bgImage='/assets/about-us/about-page-hero.png'
      />

      {/* Events */}
      <section className='container mx-auto pt-8  flex flex-col items-center gap-4'>
        <h2 className='font-bold text-2xl text-blue-800'>
          Past & Upcoming Events
        </h2>
        <OrangeButtonLine />
      </section>
      <section className='container mx-auto py-2'>
        <div className='flex text-gray-500 font-semibold text-md mb-4 px-3 justify-center sm:justify-start '>
          <Link
            href='/main/events/upcoming-events'
            className={`px-1 py-3  ${
              pathname === "/main/events/upcoming-events"
                ? "border-b-4 border-blue-800 text-blue-800"
                : ""
            }`}
          >
            Upcoming Events
          </Link>
          <Link
            href='/main/events/past-events'
            className={`px-2 py-3 ${
              pathname === "/main/events/past-events"
                ? "border-b-4 border-blue-800 text-blue-800"
                : ""
            }`}
          >
            Past Events
          </Link>
        </div>
      </section>
      {children}
      {/* Footer Section */}
      <Footer />
    </section>
  );
}
