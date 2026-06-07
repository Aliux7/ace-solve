"use client";
import { useViewportScroll } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoArrowUp, GoArrowUpRight } from "react-icons/go";
import { useTrafficSource } from "@/app/hooks/useTrafficSource";
import { buildWALink } from "@/app/utils/waLink";

const Header = () => {
  const { scrollY } = useViewportScroll();
  const [onTop, setOnTop] = useState(true);
  const pathname = usePathname();
  const [openHamburger, setOpenHamburger] = useState(false);
  const source = useTrafficSource();

  const isActive = (route: string) => pathname === route;

  scrollY.onChange((y) => {
    if (y > 10) setOnTop(false);
    else if (y <= 10) setOnTop(true);
  });
  +9;
  return (
    <header
      className={`backdrop-blur-sm bg-white/90 fixed z-50 flex justify-between items-start lg:items-center px-3 sm:px-6 lg:px-10 py-4 sm:py-5 lg:py-0 w-full ${
        openHamburger ? "h-full" : "h-16 sm:h-20"
      } lg:h-20 ${
        onTop ? "border-none" : "border-b shadow-md"
      } transition-all duration-700 ease-in-out`}
    >
      <Link href={"/"} className=" flex justify-center items-center gap-2 ">
        <img
          src="/logo/LogoWhite.png"
          alt="AceSolve Logo"
          width={36}
          height={32}
          className="h-7 sm:h-9 w-auto"
        />
        <span className="text-lg sm:text-2xl font-semibold leading-6">
          AceSolve<span className="text-purple-600">.</span>
        </span>
      </Link>
      <ul
        className={`${
          openHamburger
            ? "right-0 transition-all duration-500 delay-300 ease-in-out"
            : "-right-full"
        } lg:right-auto absolute top-20 h-[calc(100%-10rem)] w-1/2 lg:w-auto lg:top-auto lg:relative flex flex-col lg:flex-row justify-center items-center lg:items-center lg:gap-5 xl:gap-10 text-lg`}
      >
        <li
          className={`${
            openHamburger
              ? "ml-0 transition-all duration-300 ease-in-out"
              : "ml-96"
          } lg:ml-0 w-full text-end lg:w-auto lg:border-none lg:py-0 lg:text-center`}
        >
          <Link
            href={"/"}
            onClick={() => setOpenHamburger(false)}
            className={` ${
              isActive("/") ? "text-gray-900" : "text-gray-600"
            } w-full h-full py-10 block relative lg:py-1 px-3 sm:px-6 lg:px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left`}
          >
            Home
          </Link>
        </li>
        <li
          className={`${
            openHamburger
              ? "ml-0 transition-all duration-300 ease-in-out delay-[600ms]"
              : "ml-96"
          } lg:ml-0 w-full text-end lg:w-auto lg:border-none lg:py-0 lg:text-center`}
        >
          <Link
            href={"/layanan"}
            onClick={() => setOpenHamburger(false)}
            className={` ${
              isActive("/layanan") ? "text-gray-900" : "text-gray-600"
            } w-full h-full py-10 block relative lg:py-1 px-3 sm:px-6 lg:px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left`}
          >
            Layanan
          </Link>
        </li>
        <li
          className={`${
            openHamburger
              ? "ml-0 transition-all duration-300 ease-in-out delay-700"
              : "ml-96"
          } lg:ml-0 w-full text-end lg:w-auto lg:border-none lg:py-0 lg:text-center`}
        >
          <Link
            href={"/portofolio"}
            onClick={() => setOpenHamburger(false)}
            className={` ${
              isActive("/portofolio") ? "text-gray-900" : "text-gray-600"
            } w-full h-full py-10 block relative lg:py-1 px-3 sm:px-6 lg:px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left`}
          >
            Portofolio
          </Link>
        </li>
        {/* <li
          className={`${
            openHamburger
              ? "ml-0 transition-all duration-300 ease-in-out delay-[900ms]"
              : "ml-96"
          } lg:ml-0 w-full text-end lg:w-auto lg:border-none lg:py-0 lg:text-center`}
        >
          <Link
            href={"/template"}
            onClick={() => setOpenHamburger(false)}
            className={` ${
              isActive("/template") ? "text-gray-900" : "text-gray-600"
            } w-full h-full py-10 block relative lg:py-1 px-3 sm:px-6 lg:px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left`}
          >
            Template
          </Link>
        </li> */}
      </ul>
      <div className="flex justify-center items-center w-fit gap-1 sm:gap-4">
        <Link
          href={buildWALink("Halo, saya ingin konsultasi gratis dengan AceSolve.", source)}
          target="_blank"
          rel="noopener noreferrer"
          className=" group flex justify-center items-center gap-1 text-gray-800 sm:text-xl w-fit whitespace-nowrap relative py-1 pl-3 px-1 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
        >
          Hubungi Kami{" "}
          <div className="h-3 sm:h-5 overflow-hidden">
            <div className="flex flex-col rotate-45 -translate-x-2 sm:-translate-x-3 -translate-y-1 gap-3 group-hover:translate-x-2 sm:group-hover:translate-x-3 group-hover:-translate-y-5 sm:group-hover:-translate-y-7 transition-all duration-500 ease-in">
              <GoArrowUp className="w-3 h-3 sm:w-5 sm:h-5 text-purple-600 stroke-1" />
              <GoArrowUp className="w-3 h-3 sm:w-5 sm:h-5 text-purple-600 stroke-1" />
            </div>
          </div>
        </Link>
        <div
          className="w-5 sm:w-7 lg:hidden flex flex-col gap-[0.225rem] sm:gap-[0.3rem] justify-end items-end"
          onClick={() => setOpenHamburger(!openHamburger)}
        >
          <span
            className={`transition-all duration-300 ease-in-out w-full h-[0.12rem] sm:h-[0.2rem] bg-gray-700 rounded-lg ${
              openHamburger
                ? "rotate-45 translate-y-[0.35rem] sm:translate-y-2"
                : "rotate-0 translate-y-0"
            }`}
          />
          <span
            className={`transition-all duration-300 ease-in-out w-3/4 h-[0.12rem] sm:h-[0.2rem] bg-purple-600 rounded-lg ${
              openHamburger ? "opacity-0" : ""
            }`}
          />
          <span
            className={`transition-all duration-300 ease-in-out w-full h-[0.12rem] sm:h-[0.2rem] bg-gray-700 rounded-lg ${
              openHamburger
                ? "-rotate-45 -translate-y-[0.35rem] sm:-translate-y-2 bg-purple-600"
                : "rotate-0 translate-y-0"
            }`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
