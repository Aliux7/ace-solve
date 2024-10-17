"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { GoProjectTemplate } from "react-icons/go";
import CountUp from "@/app/components/ui/CountUp";
import { TextBoxReveal } from "@/app/components/ui/TextBoxReveal";
import LocomotiveScroll from "locomotive-scroll";
import splitStringUsingRegex from "@/app/utlis/splitStringUsingRegex";

const page = () => {
  const controls = useAnimation();
  const locomotiveScroll = new LocomotiveScroll();
  const firstHeading = splitStringUsingRegex("Elevate");
  const secondHeading = splitStringUsingRegex("your business");
  const thirdHeading = splitStringUsingRegex("success");
  const fourthHeading = splitStringUsingRegex("with our");
  const fifthHeading = splitStringUsingRegex("best services");
  const firstSubHeading = splitStringUsingRegex("pilihan utama");
  const secondSubHeading = splitStringUsingRegex("Layanan Website");
  const [selectedWebsiteType, setSelectedWebsiteType] =
    useState("Landing Page");

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, x: 0 });

      controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        },
      });
    };

    sequence();
  }, [controls]);

  return (
    <motion.main className={`w-full min-h-screen flex flex-col gap-60 px-10`}>
      <section className="relative w-full h-screen flex justify-center items-center gap-24 py-10">
        <div className="relative">
          <motion.img
            variants={{
              hidden: { opacity: 0, x: 25 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1, delay: 0.5 }}
            src="Mockup2.png"
            className="h-[55vh]"
          />
          <div className="absolute -bottom-[10rem] h-[15vh] w-full opacity-10 animate-float">
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              viewport={{ once: true }}
              transition={{ duration: 3, delay: 1.5 }}
              src="Mockup2.png"
              className="h-full w-full object-cover object-bottom -scale-y-100"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>
        <div className="absolute top-24 right-0">
          <motion.h1
            className="font-helveticaLight text-5xl pb-1 text-end text-gray-500"
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.035 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden text-gray-500 py-1">
              {firstHeading.map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    reveal: { opacity: 1, y: 0 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}{" "}
              <span className="text-gray-900">
                {secondHeading.map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      reveal: { opacity: 1, y: 0 },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </div>
            <div className="overflow-hidden text-gray-900 py-1">
              {thirdHeading.map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    reveal: { opacity: 1, y: 0 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}{" "}
              <span className="text-gray-500">
                {fourthHeading.map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      reveal: { opacity: 1, y: 0 },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </div>
            <div className="overflow-hidden text-gray-900 py-1">
              {fifthHeading.map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    reveal: { opacity: 1, y: 0 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}{" "}
            </div>
          </motion.h1>
        </div>
        <div className="absolute bottom-5 left-0">
          <motion.h1
            className="font-helveticaLight"
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden py-1 text-xl px-1.5">
              {firstSubHeading.map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    reveal: { opacity: 1, y: 0 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <div className="overflow-hidden font-helveticaLight text-8xl pb-1">
              {secondSubHeading.map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    reveal: { opacity: 1, y: 0 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </motion.h1>
        </div>
      </section>
      <section className="relative w-full min-h-screen h-full flex flex-col justify-start items-start gap-5">
        <div className="text-sm font-medium text-center mx-5 w-[calc(100%-2.5rem)] text-gray-500 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <div
                className={`inline-block p-4 ${
                  selectedWebsiteType == "Landing Page"
                    ? "text-purple-600 border-purple-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                } border-b-2 rounded-t-lg cursor-pointer`}
                onClick={() => setSelectedWebsiteType("Landing Page")}
              >
                Landing Page
              </div>
            </li>
            <li className="me-2">
              <div
                className={`inline-block p-4 ${
                  selectedWebsiteType == "Company Profile"
                    ? "text-purple-600 border-purple-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                } border-b-2 rounded-t-lg cursor-pointer`}
                onClick={() => setSelectedWebsiteType("Company Profile")}
              >
                Company Profile
              </div>
            </li>
            <li className="me-2">
              <div
                className={`inline-block p-4 ${
                  selectedWebsiteType == "Portofolio"
                    ? "text-purple-600 border-purple-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                } border-b-2 rounded-t-lg cursor-pointer`}
                onClick={() => setSelectedWebsiteType("Portofolio")}
              >
                Portofolio
              </div>
            </li>
            <li className="me-2">
              <div
                className={`inline-block p-4 ${
                  selectedWebsiteType == "Blog / News Website"
                    ? "text-purple-600 border-purple-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                } border-b-2 rounded-t-lg cursor-pointer`}
                onClick={() => setSelectedWebsiteType("Blog / News Website")}
              >
                Blog / News Website
              </div>
            </li>
            <li className="me-2">
              <div
                className={`inline-block p-4 ${
                  selectedWebsiteType == "Restaurant Website"
                    ? "text-purple-600 border-purple-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                } border-b-2 rounded-t-lg cursor-pointer`}
                onClick={() => setSelectedWebsiteType("Restaurant Website")}
              >
                Restaurant Website
              </div>
            </li>
            <li className="me-2">
              <div
                className={`inline-block p-4 ${
                  selectedWebsiteType == "Custom"
                    ? "text-purple-600 border-purple-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                } border-b-2 rounded-t-lg cursor-pointer`}
                onClick={() => setSelectedWebsiteType("Custom")}
              >
                Custom
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full h-screen rounded-3xl shadow-xl bg-gray-50"></div>
      </section>
    </motion.main>
  );
};

export default page;
