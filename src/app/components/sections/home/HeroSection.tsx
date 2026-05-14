import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import splitStringUsingRegex from "@/app/utlis/splitStringUsingRegex";
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowUp, GoProjectTemplate } from "react-icons/go";
import CountUp from "../../ui/CountUp";

const HeroSection = () => {
  const controls = useAnimation();
  const firstLineHeading = splitStringUsingRegex("We Solve Your");
  const secondLineHeading = splitStringUsingRegex("Digital Challenges");
  const subHeading = splitStringUsingRegex(
    "Dari Ide ke Layar: Ciptakan Website Impian Anda",
  );

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, x: 0 });

      controls.start({
        y: [0, -12, 0],
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
    <section className="relative w-full min-h-screen sm:pt-[calc(50vh-50%+5rem)] pb-14 lg:py-0 lg:max-h-screen h-full flex flex-col lg:flex-row justify-center items-center gap-24 lg:gap-0 xl:gap-24">
      <div className="flex flex-col gap-2 justify-center items-center lg:items-start font-helveticaLight z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
          className="flex justify-center items-center gap-5 bg-gray-100 py-1 px-3 rounded-xl w-fit"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <h1 className="text-sm">Accepting Projects </h1>
        </motion.div>
        <motion.h1
          className="text-[2.5rem] leading-[2.5rem] sm:text-7xl md:text-[5rem] sm:leading-[1] lg:text-6xl xl:text-7xl text-center lg:text-start"
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.05 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden">
            {firstLineHeading.map((char, index) => (
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
          <div className="overflow-hidden pb-1">
            {secondLineHeading.map((char, index) => (
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
        <motion.h3
          className="text-sm sm:text-xl md:text-2xl lg:text-xl xl:text-2xl px-1 text-center lg:text-start"
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.05 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden">
            {subHeading.map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                transition={{ duration: 0.25 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  reveal: { opacity: 1, y: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.h3>
        <div className="flex justify-center lg:justify-start items-center gap-2 sm:gap-5 my-1">
          <motion.a
            href="https://api.whatsapp.com/send?phone=6285173135780"
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-sm sm:text-base flex justify-center items-center gap-2 border-b font-semibold relative py-1 px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
          >
            <FaWhatsapp className="fill-gray-600 stroke-1" /> Gratis Konsultasi
          </motion.a>
          <motion.a
            href="/layanan"
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-sm sm:text-base flex justify-center items-center gap-2 border-b font-semibold relative py-1 px-5 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
          >
            <GoProjectTemplate className="fill-gray-600 stroke-1" /> Pesan
            Layanan
          </motion.a>
        </div>
      </div>
      <motion.img
        src="/Mockup3.webp"
        alt="Hero_Mockup"
        variants={{
          hidden: { opacity: 0, x: -25 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, delay: 1 }}
        className="hidden lg:block max-h-[100vh] h-auto w-auto max-w-[45vw] object-cover rounded-md"
      />
      <motion.img
        src="/Mockup1.webp"
        variants={{
          hidden: { opacity: 0, x: 25 },
          visible: { opacity: 0.1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute lg:hidden max-h-[80vh] lg:max-h-[100vh] h-auto w-auto maw-w-[70vw] lg:max-w-[45vw] object-cover rounded-md animate-float pt-10 sm:pt-0"
      />
      <div className="absolute bottom-5 right-1 text-end flex justify-center items-end gap-44">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl">
            <CountUp from={0} to={35} />
            <span className="text-purple-600">+</span>
          </h1>
          <h1 className="text-sm">Projects Terselesaikan</h1>
        </motion.div>
      </div>
      <div className="absolute bottom-5 left-1 text-start flex justify-center items-end gap-44">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {" "}
          <motion.a
            href="/CompanyProfile.pdf"
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="group text-lg sm:text-xl flex justify-center items-center gap-2 border-b relative py-1 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
          >
            {" "}
            Download PDF
            <div className="h-3 sm:h-5 overflow-hidden">
              <div className="flex flex-col rotate-45 -translate-x-2 sm:-translate-x-3 -translate-y-1 gap-3 group-hover:translate-x-2 sm:group-hover:translate-x-3 group-hover:-translate-y-5 sm:group-hover:-translate-y-7 transition-all duration-500 ease-in">
                <GoArrowUp className="w-3 h-3 sm:w-5 sm:h-5 text-purple-600 stroke-1" />
                <GoArrowUp className="w-3 h-3 sm:w-5 sm:h-5 text-purple-600 stroke-1" />
              </div>
            </div>
          </motion.a>
          <h1 className="text-sm">Profil Perusahaan</h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
