"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import OnGoingCharity from "@/components/OnGoingCharity";
import { useAppSelector } from "@/store";
import apiCaller from "@/utils/apiCaller";
import Loading from "@/utils/Loading";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPen } from "react-icons/fa";

const SingleCharityHome = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { _id: loggedInUserId } = useAppSelector((store) => store.userSlice);

  const { data, isLoading, error, isSuccess, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const resp = await apiCaller.get(`/organization/${params.id}`);
      console.log(resp);

      return resp;
    },
  });
  if (isError) {
    router.back();
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="relative bg-[url('/assets/hero.png')] bg-cover bg-no-repeat bg-center h-[20vh] md:h-[40vh] w-full flex flex-col col-span-full justify-center">
        <div className='absolute inset-0 bg-white opacity-80'></div>
        <div className='container mx-auto text-center text-white relative z-10 space-y-5 px-2'>
          <h1 className='capitalize md:text-5xl text-3xl text-blue-800 m-auto font-bold'>
            {data?.data.organization.name}
          </h1>
          <Button type='button' margin='auto'>
            Our Story
          </Button>
        </div>
      </section>

      <div className='m-auto p-8 container lg:grid grid-cols-[3fr,1.8fr]  gap-4'>
        {/* Description */}
        <section className='container lg:space-y-0 space-y-5 lg py-10'>
          <div className='space-y-5'>
            <Image
              className='w-full '
              src={data?.data.organization.image}
              width='300'
              height='300'
              alt='Charity Home Image'
            />
            <div className='space-y-5'>
              <h2 className='font-bold md:text-4xl text-3xl text-blue-800'>
                {data?.data.organization.name}
              </h2>
              <p className='text-md text-blue-100'>
                {data?.data.organization.mission}
              </p>

              <div className='space-y-2'>
                <p>
                  <span className='font-bold text-blue-800'>
                    Number of Residents:{" "}
                  </span>
                  <span className='text-blue-100'>
                    {data?.data.organization.residents}{" "}
                    {data?.data.organization.residents > 1
                      ? "people"
                      : "person"}
                  </span>
                </p>
                <p>
                  <span className='font-bold text-blue-800'>Location: </span>
                  <span className='text-blue-100'>
                    {data?.data.organization.address}
                  </span>
                </p>
              </div>
              {loggedInUserId === params.id && (
                <div
                  className='flex justify-end'
                  onClick={() => {
                    router.push("/settings/organization-profile");
                  }}
                >
                  <button className='rounded-md flex font-medium items-center justify-center gap-2 w-fit bg-blue-800 text-white hover:bg-blue-800/90 px-5 py-2 min-w-32'>
                    <FaPen className='mr-2' size={16} /> Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Ongoing Charities */}
        <OnGoingCharity orgId={params.id} />

        {/* Success Stories */}
        <section className='py-4 lg:-mt-14 '>
          <h4 className='text-3xl py-3 font-bold text-blue-800'>
            Success Stories
          </h4>

          <div className='grid gap-5'>
            {[1, 2].map((story) => (
              <div key={story} className='space-y-5 py-5 rounded'>
                <Image
                  className='w-full rounded'
                  src={"/assets/charity-homes/Mask group (1).png"}
                  width='200'
                  height='700'
                  alt='Charity Home Image'
                />
                <h3 className='text-xl font-bold text-blue-800'>
                  Bought a new school bag for Lenza
                </h3>
                <p className='text-sm text-blue-100'>
                  Chariter is the number one nonprofit organization website
                  template solution to spread your causes with style. This
                  modern, easy-to-use, and all-around site canvas equips you
                  with many practical amenities to start{" "}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact and Subscribe to Mail */}
        <section className='py-1 lg:-mt-5 space-y-5 '>
          {/* Subscribe  News Letter */}
          <div className='space-y-5 rounded p-5'>
            <h3 className='text-2xl py-3 font-bold text-blue-800'>
              Subscribe to our Newsletter
            </h3>
            <p className='text-blue-100'>
              al amenities to start working on your charity website right away.
              It is an HTML template,
            </p>
            <div>
              <Input type='email' name='email' placeholder='Enter your email' />
            </div>
            <Button variant='orange' type='button' disabled={false}>
              Subscribe
            </Button>
          </div>

          {/* Contact Details */}
          <div className='space-y-2 rounded p-5'>
            <h6 className='text-2xl py-3 font-bold text-blue-800'>
              Contact Info
            </h6>
            <p>
              <b className='font-bold text-blue-800'>Email: </b>
              <span className='text-blue-100'>hopeorphanage@gmail.com</span>
            </p>
            <p>
              <b className='font-bold text-blue-800'>Phone: </b>
              <span className='text-blue-100'>+234 812 323 234 5678</span>
            </p>
          </div>
        </section>

        {/* Photos And Videos */}
        <section className='container py-10'>
          <h3 className='text-3xl py-3 font-bold text-blue-800'>
            Photos and Videos
          </h3>

          <div className='grid grid-cols-4 py-3 gap-5 md:gap-10 px-5'>
            <div className='col-span-3 row-span-3 '>
              <Image
                src={"/assets/charity-homes/p&v1.png"}
                className='w-full'
                width='200'
                height='700'
                alt='Charity Home Image'
              />
            </div>
            {[1, 2, 3, 4, 5, 6, 7].map((el) => (
              <div key={el} className='w-full'>
                <Image
                  src={`/assets/charity-homes/p&v${el + 1}.png`}
                  width='200'
                  height='700'
                  alt='Charity Home Image'
                />
              </div>
            ))}
          </div>
        </section>

        <div></div>

        {/* Testimonials */}
        <section className=' container py-10'>
          <h3 className='text-3xl py-3 font-bold text-blue-800'>
            Testimonials
          </h3>

          <div className='space-y-8 p-5 md:w-5/6'>
            {[1, 2, 3, 4].map((testimonial) => (
              <div
                key={testimonial}
                className='flex gap-8 flex-col md:flex-row'
              >
                <Image
                  className='h-32 w-32 rounded-full'
                  src={`/assets/charity-homes/testimonial1.png`}
                  width='500'
                  height='500'
                  alt='Charity Home Image'
                />
                <div className='text-sm space-y-3'>
                  <h4 className='font-bold text-xl text-blue-800'>
                    Falade Adekoni
                  </h4>
                  <p className='text-blue-100'>
                    Chariter is the number one nonprofit organization website
                    template solution to spread your causes with style. This
                    modern, easy-to-use, and all-around site canvas equips you
                    with many practical amenities to start{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SingleCharityHome;
