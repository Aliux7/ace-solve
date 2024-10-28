"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import { GoArrowUpRight, GoProjectTemplate } from "react-icons/go";
import CountUp from "@/app/components/ui/CountUp";
import { TextBoxReveal } from "@/app/components/ui/TextBoxReveal";
import LocomotiveScroll from "locomotive-scroll";
import splitStringUsingRegex from "@/app/utlis/splitStringUsingRegex";

const page = () => {
  const controls = useAnimation();
  const firstHeading = splitStringUsingRegex("Portofolio Kami");
  const secondHeading = splitStringUsingRegex("Berikut");
  const thirdHeading = splitStringUsingRegex(
    "Karya terbaik dalam setiap project"
  );

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
        {/* <div className="relative z-10"> */}
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
          <div className="overflow-hidden font-helveticaLight text-4xl sm:text-7xl lg:text-8xl pb-1">
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
          <div className="overflow-hidden py-1 sm:text-xl px-0.5 sm:px-1.5 text-end">
            {thirdHeading.map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                transition={{ duration: 0.25 }}
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

        {/* <img src="Mockup4.png" className="h-[70vh]" /> */}
        {/* </div> */}
      </section>
    </motion.main>
  );
};

export default page;
