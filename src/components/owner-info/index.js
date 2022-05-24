import React from "react";
import handPic from "../../assets/images/lady.jpg";

function index() {
  return (
    <div className="flex justify-center">
      <div className="relative bg-white gap-y-10 grid gap-x-56 sm:grid-cols-1 md:grid-cols-2 w-full sm:p-10 md:p-40 mb-10 max-w-7xl">
        <div className="relative">
          <img className="h-full " src={handPic} />
        </div>
        <div className="flex flex-col text-left ">
          <h1 className="text-3xl font-thin md:text-6xl leading-tight border-b-4 pb-4 border-b-primary">
            Hello My Name is{" "}
            <span className="text-primary text-5xl md:text-7xl font-medium">
              Zumi
            </span>
          </h1>
          <h3 className="my-6 font-thin text-xl md:text-2xl">
            Our salon aims to deliver the best nail design experience and
            top-notch customer service.
          </h3>
          <button className="bg-white uppercase text-primary font-medium text-sm md:text-lg border-2 border-primary rounded-full py-2 px-6 w-1/2">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
