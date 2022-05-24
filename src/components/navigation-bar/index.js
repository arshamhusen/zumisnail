import React from "react";
import logo from "../../assets/logo/logo.svg";

function index() {
  return (
    <div className="bg-white sticky z-50 drop-shadow-md top-0 py-4 items-center justify-center  hidden md:flex">
      <div className="max-w-6xl w-full grid grid-cols-6 text-xl text-primary font-medium">
        <div className="flex justify-center items-center">Home</div>
        <div className="flex justify-center items-center">Home</div>
        <div className="col-span-2 items-center justify-center flex">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
        <div className="flex justify-center items-center">Home</div>
        <div className="flex justify-center items-center">Home</div>
      </div>
    </div>
  );
}

export default index;
