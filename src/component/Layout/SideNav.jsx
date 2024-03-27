import React from "react";
import dashboard from "../../assets/dashboard.svg";
import claims from "../../assets/claims.svg";
import biller from "../../assets/biller.svg";
import subscription from "../../assets/subscription.svg";
import health from "../../assets/health.svg";
import upgrade from "../../assets/upgrade.png";

const SideNav = () => {
  return (
    <div className="rounded-l-[1rem] w-[17%] ">
      <div className="mx-[2rem] mt-[3rem]">
        <div className="flex relative">
          <div className="bg-[#FF8057] w-[2rem] h-[2rem] rounded-full"></div>
          <div className="bg-yellow-400  w-[3rem] h-[3rem] rounded-full absolute left-4 top-[-0.5rem]"></div>
          <div className="absolute left-6 font-bold text-white text-[1.8rem] top-[-0.5rem]">
            <h1>VENTES</h1>
          </div>
        </div>
        <div className="border-b border-gray-400 mt-[3rem]"></div>
        <div>
          <ul className=" text-white font-medium tex">
            <li className="flex mt-6 gap-6 bg-white text-[#5041BC] py-2 px-4 rounded-lg mx-0">
              <img src={dashboard} alt="Dashboard" /> Dashboard
            </li>
            <li className="flex mt-6 gap-6">
              <img src={claims} alt="Claims" /> Claims
            </li>
            <li className="flex mt-6 gap-6">
              <img src={biller} alt="Biller" />
              Biller Queue
            </li>
            <li className="flex mt-6 gap-6">
              <img src={subscription} alt="Subscription" />
              Subscription
            </li>
            <li className="flex mt-6 gap-6">
              <img src={health} alt="Health" />
              Health
            </li>
          </ul>
        </div>
        <div className="w-[15rem] relative right-16 mt-[12rem] ">
          <img src={upgrade} alt="Upgrade" className="" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
