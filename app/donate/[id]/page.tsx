"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Select from "@/components/Select";
import useApiCallerWithToken from "@/hooks/useApiCallerWithToken";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState({
    donor: "",
    amount: 0,
    currency: "",
    charity: params?.id,
  });
  const apiCallerWithToken = useApiCallerWithToken();
  const router = useRouter();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const { mutate: initiateDonation, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      console.log({ ...data, amount: +data.amount });

      let response = await apiCallerWithToken.post(
        `/donations/initiate-payment`,
        { ...data, amount: +data.amount }
      );
      return response;
    },

    onSuccess: (res) => {
      console.log(res);
      router.push(res.data.payment_link);
    },

    onError: (err) => {
      console.log(err);
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.error.message || err.message);
      } else {
        toast.error(err.message);
      }
    },
  });
  return (
    <>
      <Header />
      <div className="relative bg-[url('/assets/donate/close-up-smiley-kids-posing-together.png')] bg-cover bg-no-repeat h-[80vh] w-full flex  justify-center items-center">
        <div className='rounded text-center text-stone-100 space-y-5 w-full'>
          <h1 className='text-4xl font-bold'>Make a donation</h1>
          <div className='bg-white text-stone-500 rounded-md p-12 space-y-5 w-11/12 md:w-1/3 m-auto'>
            <p className='font-semibold'>
              Make a donation to Galaxy Foundation
            </p>
            <form
              className='space-y-5'
              onSubmit={(e) => {
                e.preventDefault();
                initiateDonation();
              }}
            >
              <Input
                placeholder='Your Name'
                onChange={handleChange}
                name='donor'
              />
              <Input
                placeholder='Amount'
                name='amount'
                type='number'
                required
                onChange={handleChange}
              />
              <Input placeholder='Phone Number' />

              <Select
                required
                defaultValue='select'
                id='currency'
                name='currency'
                onChange={handleChange}
              >
                <Select.Option value='' disabled>
                  Select a Currency
                </Select.Option>
                <Select.Option value='USD'>USD</Select.Option>
                <Select.Option value='NGN'>NGN</Select.Option>
                <Select.Option value='GHC'>GHC</Select.Option>
              </Select>

              <div className='text-center'>
                <Button size='full'>{isLoading ? "Loading..." : "Next"}</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
