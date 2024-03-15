import React, { useState, useEffect } from "react";
import { navbarListEn } from "./navbarListEn.js";
import { navbarListAr } from "./navbarListAr.js";
import logo from "../../assets/logo/ahmad website2-13.svg";
import call from "../../assets/icons/icons-16.svg";
import mail from "../../assets/icons/icons-17.svg";

function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(false);
  const [docDir, setdocDir] = useState(document.dir);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("navbar").classList.add("bg-[#0A2744]", "py-2");
        document.getElementById("navbar").classList.remove("py-4");
      } else {
        document.getElementById("navbar").classList.add("py-4");
        document
          .getElementById("navbar")
          .classList.remove("bg-[#0A2744]", "py-2");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className="fixed top-0 flex justify-around lg:justify-evenly w-full z-[999] duration-150 py-4"
    >
      <div className="order-first lg:order-last">
        <img className=" lg:mx-16 w-28" src={logo} alt="lo" />
      </div>
      <ul className="hidden lg:flex items-center gap-8 p-4">
        {document.dir === "rtl" &&
          navbarListAr.map((item) => (
            <a
              className="text-[#fff] hover:text-[#6DCCDE] duration-150 font-[pnu-medium]"
              href={item.href}
            >
              {item.name}
            </a>
          ))}

        {document.dir === "ltr" &&
          navbarListEn.map((item) => (
            <a
              className="text-[#fff] hover:text-[#6DCCDE] duration-150 font-[pnu-medium]"
              href={item.href}
            >
              {item.name}
            </a>
          ))}

        <div className="px-2 flex gap-4 items-center">
          <a href="#">
            <img className="w-6" src={call} alt="call" />
          </a>
          <a href="#">
            <img className="w-6" src={mail} alt="email" />
          </a>
        </div>
      </ul>

      <button
        className="block lg:hidden static right-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span class="material-symbols-outlined text-[#fff]">menu</span>
      </button>
      <ul
        id="mobile-navbar"
        className={
          docDir === "rtl"
            ? "left-0 w-full fixed flex-col top-0 bg-[#0A2744] items-center gap-4 py-8 text-center duration-200 "
            : "right-0 w-full fixed flex-col top-0 bg-[#0A2744] items-center gap-4 py-8 text-center duration-200 "
        }
        style={{ display: isOpen ? "flex" : "none" }}
      >
      <button
        className="block lg:hidden static right-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span class="material-symbols-outlined text-[#fff]">close</span>
      </button>

        {document.dir === "rtl" &&
          navbarListAr.map((item) => (
            <a
              className="text-[#fff] hover:text-[#6DCCDE] duration-150 font-[pnu-medium]"
              href={item.href}
            >
              {item.name}
            </a>
          ))}

        {document.dir === "ltr" &&
          navbarListEn.map((item) => (
            <a
              className="text-[#fff] hover:text-[#6DCCDE] duration-150 font-[pnu-medium]"
              href={item.href}
            >
              {item.name}
            </a>
          ))}

        <div className="px-2 flex gap-4 items-center">
          <a href="#">
            <img className="w-6" src={call} alt="call" />
          </a>
          <a href="#">
            <img className="w-6" src={mail} alt="email" />
          </a>
        </div>
      </ul>
    </div>
  );
}

export default index;
