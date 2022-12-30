import React from "react";
import pic from "../../images/hand.jpg";
interface HearProps {}

const Hear: React.FC<HearProps> = () => {
  return (
    <div className="bg-[#082244] py-8 lg:px-24 px-6">
      <div className="text-white mb-6">Hear From us</div>
      <div className="md:flex">
        <img
          src={pic}
          alt="sbf logo"
          className="w-1/2 bg-white h-[522px] md:block hidden"
        />
        <p className="md:w-1/2 bg-[#F9F5E8] text-[#082244] flex items-center flex-col pt-14 my-6 px-6 mb:pb-0 pb-6">
          The principle doctrine behind the Street bridge Foundation is social
          impact. To empower the marginalized 'Street Kids' who have been for
          long been flagged as the scape goats of every wrong doing on the
          streets; been denied a chance to school, or a fun life deserved by
          every Rwandan kid; and been for long not listened to, regarding
          challenges affecting them personally. With the mobilized resources,
          and access to a plethora of opportunities, the Street Bridge
          Foundation devotes itself to light, empower and elevate the kid along
          with his or her family. We are aware of how immerse and self demanding
          it is, but we are curious of what the future holds for us. Just like
          us, so long as fellow youth immerse themselves in similar initiatives
          to impact the lives of those who deserve it most, so long Africa will
          never stop moving forward. Viva Africa!
          <p className="mt-3">By Herman Niyorurema, MD and Founder</p>
        </p>
      </div>
    </div>
  );
};

export default Hear;
