import { useAppSelector } from "@/store";
import apiCaller from "@/utils/apiCaller";
import { Medal } from "@/utils/Icon";
import MiniLoader from "@/utils/MiniLoader";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FiShare2 } from "react-icons/fi";

const Achievements = ({ user }: { user: string }) => {
  const { _id } = useAppSelector((store) => store.userSlice);
  const { data, isLoading, error, isSuccess, isError } = useQuery({
    queryKey: ["badges"],
    queryFn: async () => {
      console.log(_id);

      const resp = await apiCaller.get(`/badge/user/${user}`);
      console.log(resp);

      return resp;
    },
  });
  return (
    <aside className='flex justify-start items-center w-full'>
      <div className='w-[60%]'>
        <h1 className='text-gray-600  font-semibold text-2xl mb-4'>
          Achievements
        </h1>
        {isLoading ? (
          <MiniLoader ratio='100px' />
        ) : data?.data.badges.length < 1 ? (
          <p>Donate do get badges</p>
        ) : (
          data?.data.badges.map((item: any) => {
            const { badge, _id } = item;

            return (
              <div
                key={_id}
                className='w-full border my-3 border-gray-500 py-4 px-4 flex justify-between items-center rounded-lg'
              >
                <aside className='flex justify-center items-center'>
                  <div className='mr-4'>
                    <Medal />
                  </div>
                  <div>
                    <h1 className=' text-gray-600 font-semibold text-xl'>
                      {badge.name}
                    </h1>
                    <p className='text-[rgba(0,0,0,0.8)]  font-medium'>
                      {badge.description}
                    </p>
                  </div>
                </aside>
                <aside>
                  <button className='bg-blue-800 rounded-lg px-6 py-2 text-white flex justify-center items-center '>
                    <FiShare2 className='mr-2' size={16} /> Share on Social
                    Media
                  </button>
                </aside>
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
};

export default Achievements;
