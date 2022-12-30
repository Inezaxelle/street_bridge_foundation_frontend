import React from "react";
import Methods from "./Methods";
import Package from "./Package";

interface DonateJoinProps {}

const DonateJoin: React.FC<DonateJoinProps> = () => {
  return (
    <div className="w-full lg:px-24 px-6 mb-8">
      <div>
        <span className="text-[#082244] mt-8 mb-6 text-2xl flex flex-col">Donation to Street Bridge Foundation</span>
        <span className="">
          Your donation to Street Bridge Organisation helps us in our mission in
          transforming the lives of vulnerable kids on streets back to their
          homes and prepare them for their future careers{" "}
        </span>
      </div>
      <div className="md:flex justify-between">
        <Package />
        <Methods />
      </div>
    </div>
  );
};

export default DonateJoin;
