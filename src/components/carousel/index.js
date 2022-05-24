import React from "react";
import handPic from "../../assets/images/hand.png";

function index() {
  return (
    <div style={{ height: "70%" }}>
      <div
        style={{
          backgroundImage: `url(http://192.168.1.218:3003//images/bg.png)`,
        }}
        className="h-banner bg-cover bg-center flex items-center justify-center"
      >
        <div className="grid pt-10 grid-cols-1 md:grid-cols-2  h-full gap-x-16 max-w-6xl text-left  ">
          <div className="flex p-10 md:p-0  justify-center flex-col font-medium  gap-y-10">
            <h1 className="text-4xl md:text-5xl font-normal ">
              Blameless Nail Salon Creating Beauty
            </h1>
            <p className="my-4 font-thin text-xl md:text-2xl">
              We are dedicated to bring you the best nail care services combined
              with expert techniques used in the nail salon industry.
            </p>
            <button className="bg-white uppercase text-primary font-medium text-base md:text-xl rounded-full py-2 px-6 w-1/2">
              Book now
            </button>
          </div>
          <div className="flex items-end justify-center h-full">
            <img
              className="h-bannerItem p-20 md:p-0 w-bannerItem "
              src={handPic}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
