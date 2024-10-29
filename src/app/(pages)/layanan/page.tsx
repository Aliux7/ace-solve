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
  const firstHeading = splitStringUsingRegex("Elevate");
  const secondHeading = splitStringUsingRegex("your business");
  const thirdHeading = splitStringUsingRegex("success");
  const fourthHeading = splitStringUsingRegex("with our");
  const fifthHeading = splitStringUsingRegex("best services");
  const firstSubHeading = splitStringUsingRegex("pilihan utama");
  const secondSubHeading = splitStringUsingRegex("Layanan Website");
  const [openFaq, setOpenFaq] = useState(0);

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
      <section className="relative w-full h-screen flex justify-center items-center gap-24 py-10">
        <div className="relative z-10">
          <motion.img
            variants={{
              hidden: { opacity: 0, x: 25 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1, delay: 0.5 }}
            src="/Mockup2.png"
            className="h-[45vh] sm:h-[55vh] mt-5"
          />
          <div className="absolute -bottom-[40%] h-[15vh] w-full opacity-10 animate-float">
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              viewport={{ once: true }}
              transition={{ duration: 3, delay: 1.5 }}
              src="/Mockup2.png"
              className="h-full w-full object-cover object-bottom -scale-y-100 blur-[2px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>
        <div className="absolute top-24 right-0">
          <motion.h1
            className="font-helveticaLight text-2xl leading-5 sm:text-4xl lg:text-5xl pb-1 text-end text-gray-500"
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
        <div className="absolute bottom-5 left-0 z-20">
          <motion.h1
            className="font-helveticaLight"
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden py-1 sm:text-xl px-0.5 sm:px-1.5">
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
            <div className="overflow-hidden font-helveticaLight text-4xl sm:text-7xl lg:text-8xl pb-1">
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
      <section className="relative w-full min-h-screen h-full flex flex-col justify-start items-start">
        <div className="flex flex-col xl:flex-row gap-10">
          <div className="w-full xl:w-1/2">
            <TextBoxReveal>
              <h3 className="overflow-hidden sm:text-xl px-0.5 lg:px-1.5">
                layanan
              </h3>
            </TextBoxReveal>
            <TextBoxReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl  pb-1">
                Landing Page
              </h1>
            </TextBoxReveal>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 125 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full h-fit rounded-md px-5 py-7 flex my-5 justify-start items-start gap-5 border-purple-600 hover:bg-purple-50 border hover:shadow-md transition-colors duration-300 ease-in-out"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl">
                  Paket Landing Page
                </h1>
                <p className="p-0.5">
                  Layanan landing page website yang dirancang khusus untuk
                  mempromosikan produk, mengumpulkan data pengguna, atau
                  mendorong konversi. Cocok untuk pemasaran digital atau iklan
                  online yang fokus pada satu pesan atau ajakan (call-to-action)
                  yang jelas, seperti mengisi formulir, mendaftar, atau
                  melakukan pembelian.
                </p>
                <ul className="my-2 grid grid-cols-1 sm:grid-cols-2 ">
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Hosting
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Domain
                    (my.id)
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis SSL
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Logo
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Maintenance
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Wordpress / Non
                    Wordpress
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Integrasi Media
                    Sosial
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Whatsapp Message
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Responsif
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> SEO Friendly
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Copywriting
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Mulai Dari 1 Halaman
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Mulai Dari 2x Revisi
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Design Premium
                  </li>
                </ul>
                <div className="p-0.5 w-full pt-5 flex flex-col sm:flex-row xl:flex-col justify-between items-baseline">
                  <div>
                    <h3>Harga Mulai Dari</h3>
                    <h1 className="text-3xl sm:text-4xl my-2">
                      <sup className="text-xl">Rp</sup> 680.000
                      <sub className="text-sm"> / Tahun</sub>
                    </h1>
                  </div>
                  <button className="self-end flex justify-start items-center gap-1 text-base sm:text-lg bg-purple-600 text-white px-3 py-1 rounded-md">
                    Selengkapnya
                    <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full xl:w-1/2 xl:mt-[25%]">
            <TextBoxReveal>
              <h3 className="overflow-hidden sm:text-xl px-0.5 lg:px-1.5">
                layanan
              </h3>
            </TextBoxReveal>
            <TextBoxReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl  pb-1">
                Company Profile
              </h1>
            </TextBoxReveal>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 125 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full h-fit rounded-md px-5 py-7 flex my-5 justify-start items-start gap-5 border-purple-600 hover:bg-purple-50 border hover:shadow-md transition-colors duration-300 ease-in-out"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl">
                  Paket Company Profile
                </h1>
                <p className="p-0.5">
                  Layanan pembuatan website company profile yang informatif dan
                  dirancang untuk memperkuat citra perusahaan Anda. Cocok untuk
                  Anda yang ingin memiliki bisnis dan membutuhkan website yang
                  mudah diakses.
                </p>
                <ul className="my-2 grid grid-cols-1 sm:grid-cols-2 ">
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Hosting
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Domain
                    (my.id)
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis SSL
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Logo
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Maintenance
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Wordpress / Non
                    Wordpress
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Integrasi Media
                    Sosial
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Responsif
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> SEO Friendly
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Copywriting
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Mulai Dari 1 Halaman
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Mulai Dari 2x Revisi
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Design Premium
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Mulai Dari 1 Akun
                    Email
                  </li>
                </ul>
                <div className="p-0.5 w-full pt-5 flex flex-col sm:flex-row xl:flex-col justify-between items-baseline">
                  <div>
                    <h3>Harga Mulai Dari</h3>
                    <h1 className="text-3xl sm:text-4xl my-2">
                      <sup className="text-xl">Rp</sup> 750.000
                      <sub className="text-sm"> / Tahun</sub>
                    </h1>
                  </div>
                  <button className="self-end flex justify-start items-center gap-1 text-base sm:text-lg bg-purple-600 text-white px-3 py-1 rounded-md">
                    Selengkapnya
                    <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-10 mt-10 xl:mt-0 mb-10">
          <div className="w-full xl:w-1/2">
            <TextBoxReveal>
              <h3 className="overflow-hidden sm:text-xl px-0.5 lg:px-1.5">
                layanan
              </h3>
            </TextBoxReveal>
            <TextBoxReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl ">Portofolio</h1>
            </TextBoxReveal>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 125 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full h-fit rounded-md px-5 py-7 flex my-5 justify-start items-start gap-5 border-purple-600 hover:bg-purple-50 border hover:shadow-md transition-colors duration-300 ease-in-out"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl">
                  Paket Portofolio
                </h1>
                <p className="p-0.5">
                  Layanan Pembuatan website portofolio yang elegan dan
                  profesional, dirancang untuk menampilkan karya dan proyek Anda
                  secara optimal, membantu Anda untuk membuka peluang baru.
                </p>
                <ul className="my-2 grid grid-cols-1 sm:grid-cols-2 ">
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Hosting
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Domain
                    (my.id)
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis SSL
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Logo
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Maintenance
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Wordpress / Non
                    Wordpress
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Integrasi Media
                    Sosial
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Responsif
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> SEO Friendly
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Mulai Dari 1 Halaman
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Mulai Dari 2x Revisi
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Design Premium
                  </li>
                </ul>
                <div className="p-0.5 w-full pt-5 flex flex-col sm:flex-row xl:flex-col justify-between items-baseline">
                  <div>
                    <h3>Harga Mulai Dari</h3>
                    <h1 className="text-3xl sm:text-4xl my-2">
                      <sup className="text-xl">Rp</sup> 620.000
                      <sub className="text-sm"> / Tahun</sub>
                    </h1>
                  </div>
                  <button className="self-end flex justify-start items-center gap-1 text-base sm:text-lg bg-purple-600 text-white px-3 py-1 rounded-md">
                    Selengkapnya
                    <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full xl:w-1/2 xl:mt-[25%]">
            <TextBoxReveal>
              <h3 className="overflow-hidden sm:text-xl px-0.5 lg:px-1.5">
                layanan
              </h3>
            </TextBoxReveal>
            <TextBoxReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl ">Custom</h1>
            </TextBoxReveal>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 125 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full h-fit rounded-md px-5 py-7 flex my-5 justify-start items-start gap-5 border-purple-600 hover:bg-purple-50 border hover:shadow-md transition-colors duration-300 ease-in-out"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl">
                  Paket Custom
                </h1>
                <p className="p-0.5">
                  Layanan pembuatan website custom yang akan disesuaikan dengan
                  kebutuhan Anda. Mulai dari website e-commerce, website blog /
                  news hingga website sistem administrasi, layanan ini dirancang
                  untuk mencapai kebutuhan Anda.
                </p>
                <ul className="my-2 grid grid-cols-1 sm:grid-cols-2 ">
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Hosting
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis SSL
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Gratis Maintenance
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Custom Domain
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Custom Bahasa
                    Pemrograman
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Responsif
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> SEO Friendly
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Design Unik
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Custom Fitur
                  </li>
                </ul>
                <div className="p-0.5 w-full pt-5 flex flex-col sm:flex-row xl:flex-col justify-between items-baseline">
                  <div>
                    <h3>Harga Mulai Dari</h3>
                    <h1 className="text-3xl sm:text-4xl my-2">Harga Khusus</h1>
                  </div>
                  <button className="self-end flex justify-start items-center gap-1 text-base sm:text-lg bg-purple-600 text-white px-3 py-1 rounded-md">
                    Selengkapnya
                    <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 125 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full h-fit flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-helveticaLight font-bold">
          FAQ
        </h1>
        <h1 className="sm:text-xl lg:text-2xl text-gray-600">
          Pertanyaan seputar AceSolve
        </h1>
        <div className="flex flex-col gap-10 my-10 w-full max-w-[60rem]">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white text-gray-900"
            data-inactive-classes="text-gray-500"
            className="text-sm sm:text-base"
          >
            <h2
              id="accordion-flush-heading-1"
              onClick={() => (openFaq == 1 ? setOpenFaq(0) : setOpenFaq(1))}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-start rtl:text-right text-gray-800 border-b border-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>Bagaimana Proses Pemesanan Layanan Website?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-all duration-300 ease-in-out ${
                    openFaq == 1 ? "" : "rotate-180"
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className={`${
                openFaq == 1
                  ? "h-full sm:h-[19rem] opacity-100"
                  : "h-0 opacity-0"
              } overflow-hidden transition-all duration-300 ease-in-out`}
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="sm:px-3 border-b border-gray-400">
                <ul>
                  <li className="flex justify-start items-center my-1 gap-2 border-y py-2 hover:bg-purple-100 px-2">
                    <span className="bg-purple-600 rounded-sm p-0.5 px-1 text-white">
                      01/
                    </span>{" "}
                    Pesan Paket Layanan Website dan Konsultasi
                  </li>
                  <li className="flex justify-start items-center my-1 gap-2 border-y py-2 hover:bg-purple-100 px-2">
                    <span className="bg-purple-600 rounded-sm p-0.5 px-1 text-white">
                      02/
                    </span>{" "}
                    Pembayaran Layanan Website
                  </li>
                  <li className="flex justify-start items-center my-1 gap-2 border-y py-2 hover:bg-purple-100 px-2">
                    <span className="bg-purple-600 rounded-sm p-0.5 px-1 text-white">
                      03/
                    </span>{" "}
                    Kirim Informasi untuk Website
                  </li>
                  <li className="flex justify-start items-center my-1 gap-2 border-y py-2 hover:bg-purple-100 px-2">
                    <span className="bg-purple-600 rounded-sm p-0.5 px-1 text-white">
                      04/
                    </span>{" "}
                    Proses pengembangan Website dan Revisi
                  </li>
                  <li className="flex justify-start items-center my-1 gap-2 border-y py-2 hover:bg-purple-100 px-2">
                    <span className="bg-purple-600 rounded-sm p-0.5 px-1 text-white">
                      05/
                    </span>{" "}
                    Proses pengujian
                  </li>
                  <li className="flex justify-start items-center my-1 gap-2 border-y py-2 hover:bg-purple-100 px-2">
                    <span className="bg-purple-600 rounded-sm p-0.5 px-1 text-white">
                      06/
                    </span>{" "}
                    Publish Website
                  </li>
                </ul>
              </div>
            </div>
            <h2
              id="accordion-flush-heading-1"
              onClick={() => (openFaq == 2 ? setOpenFaq(0) : setOpenFaq(2))}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-start rtl:text-right text-gray-800 border-b border-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>Apa Perbedaan Wordpress Dengan Non-Wordpress?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-all duration-300 ease-in-out ${
                    openFaq == 2 ? "" : "rotate-180"
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className={`${
                openFaq == 2
                  ? "h-full lg:h-[16rem] opacity-100"
                  : "h-0 opacity-0"
              } overflow-hidden transition-all duration-300 ease-in-out`}
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="px-3 border-b border-gray-400 flex flex-col lg:flex-row gap-5 lg:gap-10 h-full py-3">
                <div className="w-full lg:w-1/2 h-full border border-purple-600 rounded-md p-5">
                  <h1 className="text-2xl ">Wordpress</h1>
                  <ul className="my-1 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col">
                    <li className="flex justify-start items-center gap-2">
                      <FaCheck className="text-purple-600" /> Durasi Pengerjaan
                      Lebih Cepat
                    </li>
                    <li className="flex justify-start items-center gap-2">
                      <FaCheck className="text-purple-600" /> Keamanan Standar
                    </li>
                    <li className="flex justify-start items-center gap-2">
                      <FaCheck className="text-purple-600" /> Memiliki Berbagai
                      Tema Design
                    </li>
                    <li className="flex justify-start items-center gap-2">
                      <FaCheck className="text-purple-600" /> Sudah memiliki
                      dukungan Yoast SEO
                    </li>
                    <li className="flex justify-start items-center gap-2">
                      <FaCheck className="text-purple-600" /> Memiliki Berbagai
                      Plug-in
                    </li>
                    <li className="flex justify-start items-center gap-2">
                      <FaCheck className="text-purple-600" /> Cocok untuk
                      website skala kecil hingga menengah
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 h-full border border-purple-600 rounded-md p-5">
                  <h1 className="text-2xl ">Non-Wordpress</h1>
                  <ul className="my-1 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col">
                    <li className="flex justify-start items-center gap-2">
                      <FaCheck className="text-purple-600" /> Kebutuhan / Fitur
                      Spesifik
                    </li>
                    <li className="flex justify-start items-center gap-2">
                      <FaCheck className="text-purple-600" /> Kustomisasi
                      Keamanan
                    </li>
                    <li className="flex justify-start items-center gap-2">
                      <FaCheck className="text-purple-600" /> Kustomisasi Design
                      / Animasi Rumit
                    </li>
                    <li className="flex justify-start items-center gap-2">
                      <FaCheck className="text-purple-600" /> Kustomisasi Bahasa
                      Pemrograman
                    </li>
                    <li className="flex justify-start items-center gap-2">
                      <FaCheck className="text-purple-600 w-6 h-6 sm:w-4.5 sm:h-4.5 md:w-6 md:h-6" />{" "}
                      Cocok untuk website skala tertutup (Private), skala
                      menengah hingga skala besar
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h2
              id="accordion-flush-heading-1"
              onClick={() => (openFaq == 3 ? setOpenFaq(0) : setOpenFaq(3))}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-start rtl:text-right text-gray-800 border-b border-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>
                  Apa Faktor Yang Mempengaruhi Harga Dan Durasi Pembuatan
                  Website?
                </span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-all duration-300 ease-in-out ${
                    openFaq == 3 ? "" : "rotate-180"
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className={`${
                openFaq == 3 ? "h-[13rem] opacity-100" : "h-0 opacity-0"
              } overflow-hidden transition-all duration-300 ease-in-out`}
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="sm:px-3 border-b border-gray-400">
                <ul>
                  <li className="flex justify-start items-center my-1 gap-2 border-y py-2 hover:bg-purple-100 px-2">
                    <span className="bg-purple-600 rounded-sm p-0.5 px-1 text-white">
                      01/
                    </span>{" "}
                    Design Website
                  </li>
                  <li className="flex justify-start items-center my-1 gap-2 border-y py-2 hover:bg-purple-100 px-2">
                    <span className="bg-purple-600 rounded-sm p-0.5 px-1 text-white">
                      02/
                    </span>{" "}
                    Jumlah Halaman
                  </li>
                  <li className="flex justify-start items-center my-1 gap-2 border-y py-2 hover:bg-purple-100 px-2">
                    <span className="bg-purple-600 rounded-sm p-0.5 px-1 text-white">
                      03/
                    </span>{" "}
                    Fitur Spesifik
                  </li>
                  <li className="flex justify-start items-center my-1 gap-2 border-y py-2 hover:bg-purple-100 px-2">
                    <span className="bg-purple-600 rounded-sm p-0.5 px-1 text-white">
                      04/
                    </span>{" "}
                    SEO Friendly
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default page;
