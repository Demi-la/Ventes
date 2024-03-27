import React from "react";
import notification from "../../assets/notification.svg";
import profilePic from "../../assets/profilePic.png";
import arrow from "../../assets/arrow.svg";
import searchIcon from "../../assets/searchIcon.svg";
import { report, saleRepresentatives } from "../Data";
import menu from "../../assets/menu.svg";
import arrowUp from "../../assets/arrowUp.svg";
import lineGraph from "../../assets/lineGraph.png";
import card from "../../assets/card.png";

const Dashboard = () => {
  return (
    <div className="bg-white w-[83%] rounded-l-[1rem]">
      <div className="mx-6">
        <div className="flex mt-8 gap-[20%]">
          <h1 className="text-[#1F192F] font-semibold text-[1.5rem]">
            Overview
          </h1>
          <div className="flex gap-[2rem]">
            <div class="relative text-[#5041BC]">
              <input
                type="text"
                placeholder="Search"
                className="w-[27rem] px-4  py-2  outline-none  bg-[#F5F3FF] rounded-[5rem] text-[#5041BC]   placeholder-[#5041BC]"
              />
              <img
                src={searchIcon}
                alt="Search"
                className="absolute right-6 top-[0.5rem]"
              />
            </div>
            <div className="mt-[0.8rem]">
              <img src={notification} alt="Notifications" />
            </div>
            <div className="flex gap-6">
              <div className="mt-2">
                <img src={profilePic} alt="Profile " />
              </div>
              <div className="mt-2">
                <p>Danielle Campbell </p>
              </div>
              <div className="mt-4">
                <img src={arrow} alt="Arrow " />
              </div>
            </div>
          </div>
        </div>
        {/* completed header */}
        <div>
          <p className="text-[#04103B] font-medium mt-6">
            Top Sales Representative
          </p>
          <div className="">
            {saleRepresentatives.map((item, index) => (
              <div
                key={index}
                className=" border border-gray-300 rounded-[0.8rem] mt-4 px-10 py-2"
              >
                <div className="flex justify-between text-start text-[#797D8C] text-[14px] font-medium">
                  <div className="flex gap-10">
                    <img src={item.profile} alt="profile" />
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <p className="text-[#04103B] font-bold ">{item.amount}</p>
                  </div>
                  <div>
                    <p>{item.totalProducts}</p>
                  </div>
                  <div>
                    <p>{item.totalPremium}</p>
                  </div>
                  <div
                    className={`text-center ${
                      item.status === "+Gold"
                        ? "text-orange-500"
                        : "text-green-500"
                    }`}
                  >
                    <p>{item.status}</p>
                  </div>
                  <div className="">
                    <img src={menu} alt="Menu " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* sales report section */}
        <div className="flex text-[14px] justify-between ">
          {report.map((item, index) => (
            <div
              key={index}
              className=" border border-gray-300 rounded-[0.8rem] mt-4 px-5 py-5 w-[15rem]"
            >
              <div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#797D8C] ">{item.title}</p>
                    <p className="text-[#04103B] font-bold text-[2rem]">
                      {item.amount}
                    </p>
                  </div>
                  <img src={item.ReportIcon} alt="status" className="" />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <img src={item.statusIcon} alt="status" />
                    <p
                      className={
                        item.statusIcon === arrowUp
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {item.percentage}
                    </p>
                  </div>
                  <p className="text-[#5041BC] underline">{item.link}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex mt-6"
          style={{
            verticalAlign: "bottom",
          }}
        >
          <div>
            <img src={lineGraph} alt="Line Graph" className="" />
          </div>
          <div className="">
            <img src={card} alt="Analytics" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
