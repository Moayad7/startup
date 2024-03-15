import React from "react";
import "./cards.css";

const Cards = (props) => {
  return (
    <div className="">
      <div className="container cursor-pointer bg-gradient-to-l from-[#0A2744] to-[#0A588A] relative h-full">
        <div className="card grid items-start h-full card-background">
          <div className="grid gap-4 p-12">
            <div className="flex py-4 gap-4 items-center h-full ">
              <span className="card-icon text-[#6DCCDE] text-7xl  duration-500 material-symbols-outlined">
                {props.icon}
              </span>
              <p className="text-[#fff] font-bold text-xl lg:text-3xl card-title duration-300">{props.title}</p>
            </div>
            <div className="text-[#fff] gap-2 grid">
              
              <p className=" font-bold">"{props.subtitle}"</p>
              <p className=" text-[#ccc]">{props.description}</p>
            </div>
          </div>
        </div>
      </div>


      {/* <section className="container">
        <div className="card h-full overflow-hidden ">
          <div className="content pb-8 overflow-hidden">
            <div className="h-12 bg-gradient-to-l from-[#0A2744] to-[#0A588A] overflow-hidden ">
              <div className="card-banner">
              
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <span className="item-icon  text-[#fff] text-7xl absolute rotate-12 top-0  duration-500 material-symbols-outlined">
                  {props.icon}
                </span>
              </div>
              <div>
                
              </div>
            </div>
            <p className="title px-8 pt-2 text-xl lg:text-2xl font-[pnu-medium] text-[#0A588A]">
              عنوان
            </p>
            <div className="hover_content px-8 ">
              <p className="text-[#0A2744] text-sm">{props.description}</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Cards;
