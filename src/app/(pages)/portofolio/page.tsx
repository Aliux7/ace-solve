"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  GoArrowDown,
  GoArrowUp,
  GoArrowUpRight,
  GoProjectTemplate,
} from "react-icons/go";
import LocomotiveScroll from "locomotive-scroll";
import splitStringUsingRegex from "@/app/utlis/splitStringUsingRegex";

const page = () => {
  const controls = useAnimation();
  const firstHeading = splitStringUsingRegex("Portofolio Kami");
  const secondHeading = splitStringUsingRegex("Berikut");
  const thirdHeading = splitStringUsingRegex(
    "Karya terbaik dalam setiap project"
  );

  const portofolios = [
    {
      image: "/porto/porto1.webp",
      title: "Bitlearn",
      description: "Website Akademik Kustom",
      link: "https://www.bitlearn.site/",
    },
    {
      image: "/porto/porto2.webp",
      title: "Wash 24",
      description: "Website Profil Perusahaan Laundry",
      link: "https://wash24laundry.com/",
    },
    {
      image: "/porto/porto3.webp",
      title: "ShowBest",
      description: "Website Showcase Project Kustom",
      link: "Unpublish",
    },
    {
      image: "/porto/porto4.webp",
      title: "AbsenKu",
      description: "Website Kustom Absensi Perusahaan",
      link: "https://www.absenku.site/",
    },
  ];

  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll;

    if (typeof window !== "undefined") {
      import("locomotive-scroll").then((LocomotiveScrollModule) => {
        locomotiveScroll = new LocomotiveScrollModule.default();
      });
    }

    return () => {
      locomotiveScroll?.destroy();
    };
  }, []);

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
    <motion.main
      className={`w-full min-h-screen flex flex-col gap-60 px-3 sm:px-6 lg:px-10`}
    >
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center gap-10 py-28">
        <motion.h1
          className="font-helveticaLight"
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.05 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden py-1 sm:text-xl px-0.5 sm:px-1.5">
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
          </div>
          <div className="overflow-hidden font-helveticaLight text-[2.5rem] leading-8 sm:text-7xl lg:text-8xl pb-1">
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
            ))}
          </div>
          <div className="overflow-hidden py-1 text-xs sm:text-xl text-end">
            {thirdHeading.map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                transition={{ duration: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  reveal: { opacity: 1, y: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.h1>
        <motion.a
          href="#content"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#content")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute group bottom-10 text-sm sm:text-base flex justify-center items-center gap-5 border-b font-semibold py-1 px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
        >
          <div className="h-3 sm:h-5 overflow-hidden mr-0.5">
            <div className="flex flex-col -translate-y-6 sm:-translate-y-8 gap-3 group-hover:translate-y-0 transition-all duration-500 ease-in">
              <GoArrowDown className="w-3 h-3 sm:w-5 sm:h-5 text-purple-600 stroke-1" />
              <GoArrowDown className="w-3 h-3 sm:w-5 sm:h-5 text-purple-600 stroke-1" />
            </div>
          </div>
          Scroll Down
          <div className="h-3 sm:h-5 overflow-hidden">
            <div className="flex flex-col -translate-y-6 sm:-translate-y-8 gap-3 group-hover:translate-y-0 transition-all duration-500 ease-in delay-100">
              <GoArrowDown className="w-3 h-3 sm:w-5 sm:h-5 text-purple-600 stroke-1" />
              <GoArrowDown className="w-3 h-3 sm:w-5 sm:h-5 text-purple-600 stroke-1" />
            </div>
          </div>
        </motion.a>
        <img
          src="/logo/LogoWhite.png"
          className="absolute -z-10 opacity-15 w-48 animate-float"
        />
      </section>
      <section
        id="content"
        className="relative w-full min-h-screen flex flex-col gap-10 py-28"
      >
        <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          {portofolios.map((portofolio, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 125 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: (index / 4) % 0.5 }}
              className="border flex flex-col rounded-md overflow-hidden"
            >
              <img
                src={portofolio.image}
                className="w-full h-80 sm:h-[30rem] md:h-80 lg:h-96 xl:h-[30rem] object-cover"
              />
              <div className="relative flex flex-col p-5 justify-center items-start pb-16 sm:pb-5 md:pb-16 lg:pb-5">
                <h1 className="text-3xl font-semibold">{portofolio.title}</h1>
                <h3 className="text-sm">{portofolio.description}</h3>
                {portofolio.link !== "Unpublish" ? (
                  <a
                    href={portofolio.link}
                    className="absolute bottom-3.5 right-5 md:right-3 lg:right-5 group flex justify-center items-center gap-1 text-gray-800 text-base sm:text-lg md:text-base lg:text-lg xl:text-xl w-fit whitespace-nowrap py-1 pl-3 px-1 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
                  >
                    Lihat Website{" "}
                    <div className="h-3 sm:h-5 overflow-hidden">
                      <div className="flex flex-col rotate-45 -translate-x-2 sm:-translate-x-3 -translate-y-1 gap-3 group-hover:translate-x-2 sm:group-hover:translate-x-3 group-hover:-translate-y-5 sm:group-hover:-translate-y-7 transition-all duration-500 ease-in">
                        <GoArrowUp className="w-3 h-3 sm:w-5 sm:h-5 text-purple-600 stroke-1" />
                        <GoArrowUp className="w-3 h-3 sm:w-5 sm:h-5 text-purple-600 stroke-1" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <p className="absolute bottom-4 right-5 group flex justify-center items-center gap-1 text-gray-600 text-base sm:text-lg md:text-base lg:text-lg xl:text-xl w-fit whitespace-nowrap py-1 pl-3 px-1">
                    Tidak Tersedia{" "}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 125 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="cursor-pointer w-full flex justify-center items-center mt-10 xl:mt-20"
        >
          <p className="flex justify-start items-center gap-1 text-xl text-purple-600 pl-4 px-3 py-1 rounded-md relative before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left">
            Lihat Lebih Banyak
            <GoArrowUpRight className="w-5 h-5 text-purple-600 stroke-1" />
          </p>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default page;
