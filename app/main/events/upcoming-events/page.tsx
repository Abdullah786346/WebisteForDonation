"use client";

import Button from "@/components/Button";
import UpcomingEventsCard from "@/components/UpcomingEventsCard";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EventPage = () => {
  const pathname = usePathname();
  return (
    <>
      {/* Upcoming Events */}
      <section className='container mx-auto py-3 flex flex-col gap-4'>
        {/* List of Upcoming Events */}
        {/* <div className="md:w-2/3 py-5 space-y-5"> */}
        <div>
          <section className='grid grid-cols-1 lg:grid-cols-2 gap-4  px-4'>
            <UpcomingEventsCard />
            <UpcomingEventsCard />
            <UpcomingEventsCard />
            <UpcomingEventsCard />
          </section>
        </div>

        {/* View all Button */}
        <section className='container mx-auto py-8 flex flex-col items-center'>
          <Button variant='blue' size='lg'>
            View All
          </Button>
        </section>
      </section>
    </>
  );
};

export default EventPage;
