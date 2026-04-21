"use client";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TextBoxReveal } from "../ui/TextBoxReveal";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-end items-center h-full px-3 sm:px-6 lg:px-10 mt-60">
      <div className="border-t w-full py-3 pb-5 sm:py-5 flex flex-col ">
        <div className="flex flex-col-reverse sm:flex-row gap-3 justify-between items-center text-base md:text-lg text-gray-500">
          <p>© 2024 AceSolve. All rights reserved.</p>
          <ul className="flex justify-start items-center gap-5 md:gap-10 text-base md:text-lg">
            <li>
              <Link
                href={"https://www.instagram.com/acesolvetech"}
                className="text-gray-500 hover:text-gray-900 relative py-1 flex justify-center items-center gap-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
              >
                <FaInstagram className="w-5 h-5" /> Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=6285173135780"
                className="text-gray-500 hover:text-gray-900 relative py-1 flex justify-center items-center gap-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
              >
                <FaWhatsapp className="w-5 h-5" /> Whatsapp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
