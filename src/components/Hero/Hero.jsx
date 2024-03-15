import React from "react";
import Header from "../Header/Header";
import logo2 from "../../assets/logo/ahmad website2-12.svg";
import Button from "../button/Button";

function Hero() {
  return (
    <div className="relative h-screen">
      <Header />
      <div className="py-8 md:px-32 z-10 grid lg:grid-cols-2 relative overflow-hidden">
        <div className="flex flex-col px-20 justify-center">
          <h2 className="mb-4 text md:text-2xl font-[pnu-medium] text-[#0A588A]">
            {" "}
            عنوان فرعي للقسم الأساسي في الصفحة الرئيسية
          </h2>
          <p className="text-sm">
            من الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين الرياضية التي
            نمارسها.من الحكمة أن لا نمارس أي تمرين من خلال ممارسة التمارين
            الرياضية التي نمارسها.من الحكمة أن لا نمارس أي تمرين من خلال ممارسة
            التمارين الرياضية التي نمارسها.
          </p>
          <Button name="المزيد" url="#" />
        </div>
        <div className="w-full px-4 py-8 md:py-20">
          <img className="" width="100%" height="100%" src={logo2} alt="logo2" />
        </div>
      </div>

      <a
        href="#first-section"
        className="z-10 mb-2 arrow w-5 h-5 absolute left-[50%] bottom-0 animate-bounce"
      ></a>
    </div>
  );
}

export default Hero;
