import React from "react";

function index() {
  return (
    <div className="bg-primary py-3 items-center justify-center  hidden md:flex">
      <div className="max-w-6xl w-full grid grid-cols-8 text-sm">
        <div className="col-span-2 text-left">
          <span className=" font-semibold">Free Call:</span> (073) 123-12-12
        </div>
        <div className="col-span-4 text-left">
          <p>
            <span className="font-semibold">Opening Hours:</span> Mn-Fr: 10 am-8
            pm
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-3">
          <span>ig</span>
          <span>fb</span>
          <span>tw</span>
        </div>
      </div>
    </div>
  );
}

export default index;
