import React from "react";
import { ReactComponent as SVG } from "../../assets/images/manicure.svg";
function index() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid bg-lightgray font-thin  grid-cols-1 md:grid-cols-2 ">
        <div className="flex items-center p-16 md:p-10 justify-center flex-col px-20 border-b border-b-white border-r border-r-white">
          <SVG style={{ height: 80 }} />
          <h1 className="text-2xl mt-10">Manicure</h1>
          <p>
            Our manicure treatments stimulate nail growth and soften dry, dull
            skin.
          </p>
        </div>
        <div className="flex items-center p-16 md:p-10 justify-center flex-col px-20 border-b border-b-white border-r border-r-white">
          <SVG style={{ height: 80 }} />
          <h1 className="text-2xl">Manicure</h1>
          <p>
            Our manicure treatments stimulate nail growth and soften dry, dull
            skin.
          </p>
        </div>
        <div className="flex items-center p-16 md:p-10 justify-center flex-col px-20 border-b border-b-white border-r border-r-white">
          <SVG style={{ height: 80 }} />
          <h1 className="text-2xl">Manicure</h1>
          <p>
            Our manicure treatments stimulate nail growth and soften dry, dull
            skin.
          </p>
        </div>
        <div className="flex items-center p-16 md:p-10 justify-center flex-col px-20 border-b border-b-white border-r border-r-white">
          <SVG style={{ height: 80 }} />
          <h1 className="text-2xl">Manicure</h1>
          <p>
            Our manicure treatments stimulate nail growth and soften dry, dull
            skin.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(http://192.168.1.218:3003//images/bg.png)`,
        }}
        className="md:h-bannerItem hidden h-0 bg-cover bg-center md:flex items-center justify-center"
      />
    </div>
  );
}

export default index;
