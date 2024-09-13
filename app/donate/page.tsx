"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Select from "@/components/Select";
import { CharityCardType } from "@/constants/types";
import useApiCallerWithToken from "@/hooks/useApiCallerWithToken";
import MiniLoader from "@/utils/MiniLoader";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const [selectedCharity, setSelectedCharity] = useState("");
  const router = useRouter();
  const apiCallerWithToken = useApiCallerWithToken();
  const { data, isLoading, error, isSuccess, isError } = useQuery({
    queryKey: ["charities"],
    queryFn: async () => {
      const resp = await apiCallerWithToken.get(`/charity`);
      console.log(resp);
      return resp;
    },
  });
  return (
    <>
      <Header />
      <div className="relative bg-[url('/assets/donate/close-up-smiley-kids-posing-together.png')] bg-cover bg-no-repeat h-[80vh] w-full flex  justify-center items-center">
        <div className='rounded text-center text-stone-100 space-y-5 w-full'>
          <h1 className='text-4xl font-bold'>Make a donation</h1>
          <div className='bg-white text-stone-500 rounded-md p-12 space-y-5 w-11/12 md:w-1/3 m-auto'>
            <h3 className='text-2xl font-semibold'>Support Now!</h3>
            <form
              className='space-y-5'
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Select
                onChange={(e) => {
                  console.log("ok");

                  setSelectedCharity(e.target.value);
                }}
                id='charity-homes'
              >
                <Select.Option selected disabled value={""}>
                  Select a Charity
                </Select.Option>
                {isLoading ? (
                  <MiniLoader ratio='40px' />
                ) : (
                  data?.data.charities.map((charity: CharityCardType) => {
                    return (
                      <Select.Option value={charity._id} key={charity._id}>
                        {charity.title}
                      </Select.Option>
                    );
                  })
                )}
              </Select>

              <div
                className='text-center'
                onClick={() => {
                  if (!selectedCharity) {
                    return toast.warning("Select a charity to donate to");
                  }
                  console.log("dams");

                  router.push(`/donate/${selectedCharity}`);
                }}
              >
                <Button
                  disabled={!selectedCharity ? true : false}
                  margin='auto'
                >
                  Next
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
