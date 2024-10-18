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
      <section className="relative w-full min-h-screen h-full flex flex-col justify-start items-start">
        <div className="flex gap-10">
          <div className="w-1/2">
            <TextBoxReveal>
              <h3 className="overflow-hidden text-xl px-1.5">layanan</h3>
            </TextBoxReveal>
            <TextBoxReveal>
              <h1 className="text-6xl pb-1">Landing Page</h1>
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
                <h1 className="text-4xl">Paket Landing Page</h1>
                <p className="p-0.5">
                  Layanan landing page website yang dirancang khusus untuk
                  mempromosikan produk, mengumpulkan data pengguna, atau
                  mendorong konversi. Cocok untuk pemasaran digital atau iklan
                  online yang fokus pada satu pesan atau ajakan (call-to-action)
                  yang jelas, seperti mengisi formulir, mendaftar, atau
                  melakukan pembelian.
                </p>
                <ul className="my-2 grid grid-cols-2 ">
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
                <div className="p-0.5 w-full pt-5 flex justify-between items-end">
                  <div>
                    <h3>Harga Mulai Dari</h3>
                    <h1 className="text-4xl my-2">
                      <sup className="text-xl">Rp</sup> 680.000
                      <sub className="text-sm"> / Tahun</sub>
                    </h1>
                  </div>
                  <button className="flex justify-start items-center gap-1 text-lg bg-purple-600 text-white px-3 py-1 rounded-md">
                    Pesan Sekarang
                    <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-1/2 mt-[25%]">
            <TextBoxReveal>
              <h3 className="overflow-hidden text-xl px-1.5">layanan</h3>
            </TextBoxReveal>
            <TextBoxReveal>
              <h1 className="text-6xl">Company Profile</h1>
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
                <h1 className="text-4xl">Paket Company Profile</h1>
                <p className="p-0.5">
                  Layanan pembuatan website company profile yang informatif dan
                  dirancang untuk memperkuat citra perusahaan Anda. Cocok untuk
                  Anda yang ingin memiliki bisnis dan membutuhkan website yang
                  mudah diakses.
                </p>
                <ul className="my-2 grid grid-cols-2 ">
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
                <div className="p-0.5 w-full pt-5 flex justify-between items-end">
                  <div>
                    <h3>Harga Mulai Dari</h3>
                    <h1 className="text-4xl my-2">
                      <sup className="text-xl">Rp</sup> 750.000
                      <sub className="text-sm"> / Tahun</sub>
                    </h1>
                  </div>
                  <button className="flex justify-start items-center gap-1 text-lg bg-purple-600 text-white px-3 py-1 rounded-md">
                    Pesan Sekarang
                    <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex gap-10 mb-10">
          <div className="w-1/2">
            <TextBoxReveal>
              <h3 className="overflow-hidden text-xl px-1.5">layanan</h3>
            </TextBoxReveal>
            <TextBoxReveal>
              <h1 className="text-6xl">Portofolio</h1>
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
                <h1 className="text-4xl">Paket Portofolio</h1>
                <p className="p-0.5">
                  Layanan Pembuatan website portofolio yang elegan dan
                  profesional, dirancang untuk menampilkan karya dan proyek Anda
                  secara optimal, membantu Anda untuk membuka peluang baru.
                </p>
                <ul className="my-2 grid grid-cols-2 ">
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
                <div className="p-0.5 w-full pt-5 flex justify-between items-end">
                  <div>
                    <h3>Harga Mulai Dari</h3>
                    <h1 className="text-4xl my-2">
                      <sup className="text-xl">Rp</sup> 620.000
                      <sub className="text-sm"> / Tahun</sub>
                    </h1>
                  </div>
                  <button className="flex justify-start items-center gap-1 text-lg bg-purple-600 text-white px-3 py-1 rounded-md">
                    Pesan Sekarang
                    <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-1/2 mt-[25%]">
            <TextBoxReveal>
              <h3 className="overflow-hidden text-xl px-1.5">layanan</h3>
            </TextBoxReveal>
            <TextBoxReveal>
              <h1 className="text-6xl">Custom</h1>
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
                <h1 className="text-4xl">Paket Custom</h1>
                <p className="p-0.5">
                  Layanan pembuatan website custom yang akan disesuaikan dengan
                  kebutuhan Anda. Mulai dari website e-commerce, website blog /
                  news hingga website sistem administrasi, layanan ini dirancang
                  untuk mencapai kebutuhan Anda.
                </p>
                <ul className="my-2 grid grid-cols-2 ">
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
                <div className="p-0.5 w-full pt-5 flex justify-between items-end">
                  <div>
                    <h3>Harga Mulai Dari</h3>
                    <h1 className="text-4xl my-2">Harga Khusus</h1>
                  </div>
                  <button className="flex justify-start items-center gap-1 text-lg bg-purple-600 text-white px-3 py-1 rounded-md">
                    Pesan Sekarang
                    <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen h-full flex flex-col justify-center items-center">
        <h1 className="text-6xl font-helveticaLight font-bold">FAQ</h1>
        <h1 className="text-2xl text-gray-600">Pertanyaan seputar AceSolve</h1>
        <div className="flex flex-col gap-10 my-10 w-full px-40">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>What is Flowbite?</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
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
              className=""
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{" "}
                  <a
                    href="/docs/getting-started/introduction/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    get started
                  </a>{" "}
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
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
              id="accordion-flush-body-2"
              className="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the{" "}
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Figma design system
                  </a>{" "}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <span>
                  What are the differences between Flowbite and Tailwind UI?
                </span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
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
              id="accordion-flush-body-3"
              className="hidden"
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default page;
