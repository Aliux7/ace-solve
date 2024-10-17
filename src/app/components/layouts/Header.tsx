"use client";
import { useViewportScroll } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoArrowUp, GoArrowUpRight } from "react-icons/go";

const Header = () => {
  const { scrollY } = useViewportScroll();
  const [onTop, setOnTop] = useState(true);
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  scrollY.onChange((y) => {
    if (y > 10) setOnTop(false);
    else if (y <= 10) setOnTop(true);
  });

  return (
    <header
      className={`backdrop-blur-sm bg-white/90 fixed z-50 flex justify-between items-center px-10 w-full h-20 ${
        onTop ? "border-none" : "border-b shadow-md"
      } transition-all duration-700 ease-in-out`}
    >
      <Link href={"/"} className=" flex justify-center items-center gap-4 ">
        {/* <img
          src="/logo/BrandLogo.png"
          alt="Brand Logo"
          className="h-10 w-auto"
        /> */}
        <h1 className="text-2xl font-semibold leading-6">
          AceSolve<span className="text-purple-600">.</span>
        </h1>
      </Link>
      <ul className="flex justify-center items-center gap-10 text-lg ">
        <li>
          <Link
            href={"/"}
            className={` ${
              isActive("/") ? "text-gray-900" : "text-gray-600"
            } relative py-1 px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/layanan"}
            className={` ${
              isActive("/layanan") ? "text-gray-900" : "text-gray-600"
            } relative py-1 px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left`}
          >
            Layanan
          </Link>
        </li>
        <li>
          <Link
            href={"/portofolio"}
            className={` ${
              isActive("/portofolio") ? "text-gray-900" : "text-gray-600"
            } relative py-1 px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left`}
          >
            Portofolio
          </Link>
        </li>
        <li>
          <Link
            href={"/template"}
            className={` ${
              isActive("/template") ? "text-gray-900" : "text-gray-600"
            } relative py-1 px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left`}
          >
            Template
          </Link>
        </li>
      </ul>
      <button className=" group flex justify-center items-center gap-1 text-gray-800 text-xl w-fit whitespace-nowrap relative py-1 pl-3 px-1 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left">
        Hubungi Kami{" "}
        <div className="h-5 overflow-hidden">
          <div className="flex flex-col rotate-45 -translate-x-3 -translate-y-1 gap-3 group-hover:translate-x-3 group-hover:-translate-y-7 transition-all duration-500 ease-in">
            <GoArrowUp className="w-5 h-5 text-purple-600 stroke-1" />
            <GoArrowUp className="w-5 h-5 text-purple-600 stroke-1" />
          </div>
        </div>
      </button>
    </header>
  );
};

export default Header;
