import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <section className=' grid place-content-center w-screen h-screen'>
      <div id='loading-spinner'>
        <div className='spinner outer'>
          <div className='spinner inner'>
            <div className='spinner eye'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
