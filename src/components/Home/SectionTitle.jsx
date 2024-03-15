import React from "react";
import Button from "../button/Button";

const SectionTitle = () => {
  return (
    <div className="flex justify-center text-center mt-16">
      <div className="relative ">
        <div className="flex flex-col items-center justify-center">
          <h3 className=" text-[#0A588A] ">01. ماذا نقدم</h3>
          <h3 className="text-3xl lg:text-6xl text-[#0A588A] font-black">
            أبرز <span className="has-gradient">الخدمات</span>
          </h3>
        </div>
        <p className="lg:text-xl mt-4 text-[#0A588A]">
          من الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي
          نمارسها.
        </p>
        <div className="mt-4">
          <Button name="المزيد" />
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
