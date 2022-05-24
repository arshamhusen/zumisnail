import React from "react";

function index() {
  return (
    <div className="w-full flex justify-center items-center flex-col text-center  ">
      <div className="max-w-6xl font-light my-10 md:my-20 flex p-10 items-center flex-col">
        <h1 className="md:text-6xl text-4xl">Pricing</h1>
        <div className="border-b-4 border-b-primary w-1/12 my-5 md:my-10" />
        <h3 className="text-xl md:text-2xl">
          We provide a wide variety of affordable nail and skin treatments for
          you. Below you can learn more about the price range of our services.
        </h3>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 w-full my-10 md:my-20 gap-x-10">
          <div className="border-b-gray border-b pb-2 md:pb-5 my-5 grid grid-cols-6 text-left">
            <div className="col-span-4">
              <h1 className="md:text-2xl sm:text-xl">Gel Polish</h1>
              <p className="md:text-xl sm:text-base text-darkgray my-2">
                90 – 120 Minute Sessions
              </p>
            </div>
            <div className="col-span-2 text-center text-2xl font-medium flex items-center justify-center">
              <p>$40.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
