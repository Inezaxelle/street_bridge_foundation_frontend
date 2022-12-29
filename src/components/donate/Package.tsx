import React from "react";
interface PackageProps {}

const Package: React.FC<PackageProps> = () => {
  return (
    <div className="bg-white w-1/2 flex justify-start mt-8">
      <div className="w-full bg-[#F9F5E8] flex flex-col p-7">
        <div className="bg-[#082244] text-white py-2 flex justify-center mt-4 text-[1.6vw]">
          Here is our Donation Package
        </div>
        <span className="my-6">
          With your help, more Street kids can get back to their homes and be
          able to chase their life dreams again
        </span>

        <div className="flex mx-auto mb-8">
          <button className="text-white bg-[#082244] p-2 cursor-pointer hover:text-[#082244] hover:bg-white">One-time</button>
          <button className="text-[#082244] bg-white p-2 hover:text-white hover:bg-[#082244] cursor-pointer">Monthly</button>
        </div>

        <div className="grid grid-cols-3 xl:gap-x-24 gap-y-8 lg:gap-x-12 mb-8">
          <div className="border border-[#082244] py-2 text-[#082244] flex justify-center hover:text-white hover:bg-[#082244] cursor-pointer">
            $ 10
          </div>
          <div className="border border-[#082244] py-2 text-[#082244] flex justify-center hover:text-white hover:bg-[#082244] cursor-pointer">
            $ 25
          </div>
          <div className="border border-[#082244] py-2 text-[#082244] flex justify-center hover:text-white hover:bg-[#082244] cursor-pointer">
            $ 50
          </div>
          <div className="border border-[#082244] py-2 text-[#082244] flex justify-center hover:text-white hover:bg-[#082244] cursor-pointer">
            $ 100
          </div>
          <div className="border border-[#082244] py-2 text-[#082244] flex justify-center hover:text-white hover:bg-[#082244] cursor-pointer">
            $ 200
          </div>
          <div className="border border-[#082244] py-2 text-[#082244] flex justify-center hover:text-white hover:bg-[#082244] cursor-pointer">
            $ 500
          </div>
        </div>

        <div className="text-[#082244] bg-white p-2 hover:text-white hover:bg-[#082244] cursor-pointer mb-6 flex justify-center border border-[#082244]">
          Custom Amount
        </div>
        <div className="text-white bg-[#082244] p-2 cursor-pointer hover:text-[#082244] hover:bg-white flex justify-center border border-[#082244]">
          Donate via our accounts &rarr;
        </div>
      </div>
    </div>
  );
};

export default Package;
