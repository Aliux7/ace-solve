"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowUpRight, GoProjectTemplate } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import splitStringUsingRegex from "./utlis/splitStringUsingRegex";
import CountUp from "./components/ui/CountUp";
import { TextBoxReveal } from "./components/ui/TextBoxReveal";
import Link from "next/link";

export default function Home() {
  const controls = useAnimation();
  const firstLineHeading = splitStringUsingRegex("We Solve Your");
  const secondLineHeading = splitStringUsingRegex("Digital Challenges");
  const subHeading = splitStringUsingRegex(
    "Dari Ide ke Layar: Ciptakan Website Impian Anda"
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
    <motion.main
      className={`w-full min-h-screen flex flex-col gap-60 px-3 sm:px-6 lg:px-10 transition-all duration-300 ease-in-out`}
    >
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
              href="#"
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
              <FaWhatsapp className="fill-gray-600 stroke-1" /> Konsultasi
            </motion.a>
            <motion.a
              href="/template"
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
            </motion.a>
          </div>
        </div>
        <motion.img
          src="Mockup3.png"
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
          src="Mockup1.png"
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
      </section>
      <section className="relative w-full h-full flex flex-col justify-center items-start">
        <TextBoxReveal>
          <h1 className="font-helveticaLight text-4xl sm:text-[2.75rem] md:text-5xl lg:text-6xl xl:text-7xl pb-1 text-center sm:text-start">
            Mengapa Memilih AceSolve?
          </h1>
        </TextBoxReveal>
        <TextBoxReveal>
          <p className="text-sm lg:text-base xl:text-lg text-gray-500 md:px-1 md:py-2 lg:py-4 sm:w-full md:w-11/12 lg:w-4/5 xl:w-3/5 text-center sm:text-start">
            AceSolve berspesialisasi dalam pembuatan website yang disesuaikan
            dengan kebutuhan Anda. Kami menjamin setiap website tampil optimal,
            fungsional, dan sesuai dengan visi bisnis Anda.
          </p>
        </TextBoxReveal>
        <ul className="w-full my-5">
          <TextBoxReveal width="full">
            <li className="w-full border-y px-3 lg:px-5 py-5 md:py-7 flex flex-col-reverse sm:flex-row justify-start items-center gap-6 sm:gap-6 md:gap-14 lg:gap-20 xl:gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-5 flex-grow">
                <h1 className="hidden sm:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  01/
                </h1>
                <div className="flex flex-col gap-2 text-center sm:text-start">
                  <h1 className="text-3xl lg:text-4xl">Berpengalaman</h1>
                  <p className="text-gray-600 xl:w-3/4 text-sm lg:text-base">
                    Dengan pengalaman bertahun-tahun dalam pembuatan website,
                    AceSolve memastikan setiap proyek ditangani dengan baik dan
                    memberikan hasil yang maksimal untuk Anda.
                  </p>
                </div>
              </div>
              <img
                src="/icon/experience.png"
                className="w-14 h-14 md:w-20 md:h-20 "
              />
            </li>
          </TextBoxReveal>
          <TextBoxReveal width="full">
            <li className="w-full border-y px-3 lg:px-5 py-5 md:py-7 flex flex-col-reverse sm:flex-row justify-start items-center gap-6 sm:gap-6 md:gap-14 lg:gap-20 xl:gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-5 flex-grow">
                <h1 className="hidden sm:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  02/
                </h1>
                <div className="flex flex-col gap-2 text-center sm:text-start">
                  <h1 className="text-3xl lg:text-4xl">Harga Terjangkau</h1>
                  <p className="text-gray-600 xl:w-3/4 text-sm lg:text-base">
                    AceSolve menawarkan solusi pembuatan website berkualitas
                    dengan harga yang kompetitif, memastikan Anda mendapatkan
                    hasil maksimal sesuai budget Anda.
                  </p>
                </div>
              </div>
              <img
                src="/icon/price.png"
                className="w-14 h-14 md:w-20 md:h-20 "
              />
            </li>
          </TextBoxReveal>
          <TextBoxReveal width="full">
            <li className="w-full border-y px-3 lg:px-5 py-5 md:py-7 flex flex-col-reverse sm:flex-row justify-start items-center gap-6 sm:gap-6 md:gap-14 lg:gap-20 xl:gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-5 flex-grow">
                <h1 className="hidden sm:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  03/
                </h1>
                <div className="flex flex-col gap-2 text-center sm:text-start">
                  <h1 className="text-3xl lg:text-4xl">Terpercaya</h1>
                  <p className="text-gray-600 xl:w-3/4 text-sm lg:text-base">
                    AceSolve dikenal sebagai penyedia layanan yang dapat
                    diandalkan, dengan komitmen penuh terhadap kualitas dan
                    kepuasan klien di setiap proyek yang kami tangani.
                  </p>
                </div>
              </div>
              <img
                src="/icon/trust.png"
                className="w-14 h-14 md:w-20 md:h-20 "
              />
            </li>
          </TextBoxReveal>
          <TextBoxReveal width="full">
            <li className="w-full border-y px-3 lg:px-5 py-5 md:py-7 flex flex-col-reverse sm:flex-row justify-start items-center gap-6 sm:gap-6 md:gap-14 lg:gap-20 xl:gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-5 flex-grow">
                <h1 className="hidden sm:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  04/
                </h1>
                <div className="flex flex-col gap-2 text-center sm:text-start">
                  <h1 className="text-3xl lg:text-4xl">Garansi</h1>
                  <p className="text-gray-600 xl:w-3/4 text-sm lg:text-base">
                    AceSolve memberikan garansi kualitas pada setiap proyek
                    website, memastikan bahwa hasil akhir memenuhi ekspektasi
                    Anda dengan dukungan penuh setelah peluncuran.
                  </p>
                </div>
              </div>
              <img
                src="/icon/warranty.png"
                className="w-14 h-14 md:w-20 md:h-20 "
              />
            </li>
          </TextBoxReveal>
          <TextBoxReveal width="full">
            <li className="w-full border-y px-3 lg:px-5 py-5 md:py-7 flex flex-col-reverse sm:flex-row justify-start items-center gap-6 sm:gap-6 md:gap-14 lg:gap-20 xl:gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-5 flex-grow">
                <h1 className="hidden sm:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  05/
                </h1>
                <div className="flex flex-col gap-2 text-center sm:text-start">
                  <h1 className="text-3xl lg:text-4xl">Fleksibel</h1>
                  <p className="text-gray-600 xl:w-3/4 text-sm lg:text-base">
                    AceSolve menawarkan layanan custom yang dapat menyesuaikan
                    dengan kebutuhan Anda, memungkinkan fleksibilitas dalam
                    setiap aspek pembuatan website untuk menciptakan solusi yang
                    paling sesuai dengan visi dan tujuan bisnis Anda.
                  </p>
                </div>
              </div>
              <img
                src="/icon/customize.png"
                className="w-14 h-14 md:w-20 md:h-20 "
              />
            </li>
          </TextBoxReveal>
          <TextBoxReveal width="full">
            <li className="w-full border-y px-3 lg:px-5 py-5 md:py-7 flex flex-col-reverse sm:flex-row justify-start items-center gap-6 sm:gap-6 md:gap-14 lg:gap-20 xl:gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-5 flex-grow">
                <h1 className="hidden sm:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  06/
                </h1>
                <div className="flex flex-col gap-2 text-center sm:text-start">
                  <h1 className="text-3xl lg:text-4xl">Support</h1>
                  <p className="text-gray-600 xl:w-3/4 text-sm lg:text-base">
                    AceSolve menyediakan layanan dukungan 24/7, memastikan Anda
                    selalu mendapatkan bantuan kapan pun diperlukan, sehingga
                    website Anda tetap berfungsi dengan baik tanpa hambatan.
                  </p>
                </div>
              </div>
              <img
                src="/icon/support.png"
                className="w-14 h-14 md:w-20 md:h-20 "
              />
            </li>
          </TextBoxReveal>
        </ul>
      </section>
      <section className="relative w-full h-full min-h-screen flex flex-col justify-center items-start text-center sm:text-start">
        <TextBoxReveal width="100%">
          <h3 className="font-helveticaLight text-xl w-full">pilihan</h3>
        </TextBoxReveal>
        <TextBoxReveal width="100%">
          <h1 className="font-helveticaLight text-4xl sm:text-6xl lg:text-7xl pb-1">
            Layanan Website
          </h1>
        </TextBoxReveal>
        <ul className="w-full xl:min-h-[42.5rem] h-full xl:h-screen xl:max-h-[45rem] my-10 flex flex-col xl:flex-row gap-10 text-start">
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 125 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full h-full rounded-md px-5 py-7 flex justify-start items-start gap-5 border-purple-600 hover:bg-purple-50 border hover:shadow-md transition-colors duration-300 ease-in-out"
          >
            <div className="flex flex-col justify-between items-start h-full">
              <div>
                <h1 className="text-3xl sm:text-4xl">Landing Page</h1>
                <p className="p-0.5 text-sm sm:text-base">
                  Layanan landing page website yang dirancang khusus untuk
                  mempromosikan produk. Cocok untuk pemasaran digital atau iklan
                  online yang fokus pada satu pesan atau ajakan (call-to-action)
                  yang jelas, seperti mendaftar, atau melakukan pembelian.
                </p>
                <ul className="my-2 flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-col text-sm sm:text-base">
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
              </div>
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
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 125 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full h-full rounded-md px-5 py-7 flex justify-start items-start gap-5 xl:mt-10 border-purple-600 hover:bg-purple-50 border hover:shadow-md transition-colors duration-300 ease-in-out"
          >
            <div className="absolute top-0 right-5 -translate-y-1/2">
              <img src="/icon/fire.png" className="w-14 h-14" />
            </div>
            <div className="flex flex-col justify-between items-start h-full">
              <div className="">
                <h1 className="text-3xl sm:text-4xl">Company Profile</h1>
                <p className="p-0.5 text-sm sm:text-base">
                  Layanan pembuatan website company profile yang informatif dan
                  dirancang untuk memperkuat citra perusahaan Anda. Cocok untuk
                  Anda yang ingin memiliki bisnis dan membutuhkan website yang
                  mudah diakses.
                </p>
                <ul className="my-2 flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-col text-sm sm:text-base">
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
              </div>
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
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 125 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="relative w-full h-full rounded-md px-5 py-7 flex justify-start items-start gap-5 xl:mt-20 border-purple-600 hover:bg-purple-50 border hover:shadow-md transition-colors duration-300 ease-in-out"
          >
            <div className="flex flex-col justify-between items-start h-full">
              <div>
                <h1 className="text-3xl sm:text-4xl">Custom</h1>
                <p className="p-0.5 text-sm sm:text-base">
                  Layanan pembuatan website custom yang akan disesuaikan dengan
                  kebutuhan Anda. Mulai dari web e-commerce hingga sistem
                  administrasi, layanan ini dirancang untuk mencapai kebutuhan
                  Anda.
                </p>
                <ul className="my-2 flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-col text-sm sm:text-base">
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
              </div>
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
          </motion.li>
        </ul>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 125 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-full flex justify-center items-center mt-10 xl:mt-20"
        >
          <Link
            href={"/layanan"}
            className="flex justify-start items-center gap-1 text-xl text-purple-600 pl-4 px-3 py-1 rounded-md relative before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
          >
            Lihat Semua Layanan
            <GoArrowUpRight className="w-5 h-5 text-purple-600 stroke-1" />
          </Link>
        </motion.div>
      </section>
    </motion.main>
  );
}
