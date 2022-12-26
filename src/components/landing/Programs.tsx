import React from "react";
const Programs: React.FC = () => {
  return (
    <div className="w-full px-6">
      <div>IMPACT AREAS</div>
      <div className="flex w-full">
        <div className="flex flex-col w-1/4 bg-pink-200">
          <span className="text-[#082244]">Scholar Support Program</span>
          <span className="text-[#696969]">
            With priority #1 of indicting a significant impact in the life,
            Street Bridge Foundation initiated this program to help the kids
            re-enroll back in school, get sufficient scholastic, support and
            also competent follow up in the academic life of the kid...
          </span>
          <button className="text-white bg-[#082244] py-1 px-3">
            Learn More
          </button>
        </div>
        <div className="flex flex-col w-1/4 bg-pink-300">
          <span className="text-[#082244]">Earn2Save Program:</span>
          <span className="text-[#696969]">
            Street Bridge Foundation never makes its service beneficiaries
            dependents. Instead, we want to empower them so that they will even
            further support themselves in future. In this light, #Earn2Save
            Program was instilled to equip ...
          </span>
          <button className="text-white bg-[#082244] py-1 px-3">
            Learn More
          </button>
        </div>
        <div className="flex flex-col w-1/4 bg-pink-400">
          <span className="text-[#082244]"> AB-Youth Empowerment:</span>
          <span className="text-[#696969]">
            Asset Base Youth Empowerment Program activates after the incubation
            and trainings of Earn2Save. The kids and their guardians are
            equipped with life survival skills and helped to apply what they
            have trained...
          </span>
          <button className="text-white bg-[#082244] py-1 px-3">
            Learn More
          </button>
        </div>
        <div className="flex flex-col w-1/4 bg-pink-500">
          <span className="text-[#082244]">
            Career guidance & <br /> Psychosocial Support:
          </span>
          <span className="text-[#696969]">
            Street Bridge Foundation understands and values that due to the
            perils suffered at the street, the kids same as their parent have
            phycological needs and thus, will need phycological attention...
          </span>
          <button className="text-white bg-[#082244] py-1 px-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Programs;
