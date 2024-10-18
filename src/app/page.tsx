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

export default function Home() {
  const controls = useAnimation();
  const locomotiveScroll = new LocomotiveScroll();
  const firstLineHeading = splitStringUsingRegex("We Solve Your");
  const secondLineHeading = splitStringUsingRegex("Digital Challenges");
  const subHeading = splitStringUsingRegex(
    "Dari Ide ke Layar: Ciptakan Website Impian Anda"
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
    <motion.main
      className={`w-full min-h-screen flex flex-col gap-60 px-10 transition-all duration-300 ease-in-out`}
    >
      <section className="relative w-full min-h-screen lg:max-h-screen h-full flex justify-start items-center gap-24">
        <motion.img
          src="Mockup1.png"
          variants={{
            hidden: { opacity: 0, x: 25 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 2, delay: 1 }}
          className="max-h-[100vh] h-auto w-auto max-w-[45vw] object-cover rounded-md"
        />
        <div className="flex flex-col gap-2 font-helveticaLight">
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
            className="text-7xl"
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
            className="text-2xl px-1"
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
          <div className="flex justify-start items-center gap-5 my-1">
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
              className="flex justify-center items-center gap-2 border-b font-semibold relative py-1 px-3 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
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
              className="flex justify-center items-center gap-2 border-b font-semibold relative py-1 px-5 before:content-[''] before:w-full before:h-[1.5px] before:absolute before:left-0 before:bottom-0 before:bg-purple-500 before:transition-transform before:ease-in-out before:duration-[500ms] before:scale-x-0 before:scale-y-100 before:origin-right hover:before:scale-x-100 hover:before:origin-left"
            >
              <GoProjectTemplate className="fill-gray-600 stroke-1" /> Pesan
            </motion.a>
          </div>
        </div>
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
            <h1 className="text-5xl">
              <CountUp from={0} to={35} />
              <span className="text-purple-600">+</span>
            </h1>
            <h1 className="text-sm">Projects Terselesaikan</h1>
          </motion.div>
        </div>
      </section>
      <section className="relative w-full h-full flex flex-col justify-center items-start">
        <TextBoxReveal>
          <h1 className="font-helveticaLight text-7xl pb-1">
            Mengapa Memilih AceSolve?
          </h1>
        </TextBoxReveal>
        <TextBoxReveal>
          <p className="text-lg text-gray-500 px-1 py-4">
            AceSolve berspesialisasi dalam pembuatan website yang disesuaikan
            dengan kebutuhan Anda. <br /> Kami menjamin setiap website tampil
            optimal, fungsional, dan sesuai dengan visi bisnis Anda.
          </p>
        </TextBoxReveal>
        <ul className="w-full my-5">
          <TextBoxReveal width="full">
            <li className="w-full border-y px-5 py-7 flex justify-start items-center gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex justify-start items-center gap-5 flex-grow">
                <h1 className="text-6xl">01/</h1>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">Berpengalaman</h1>
                  <p className="text-gray-600">
                    Dengan pengalaman bertahun-tahun dalam pembuatan website,
                    AceSolve memastikan setiap proyek <br /> ditangani dengan
                    baik dan memberikan hasil yang maksimal untuk Anda.
                  </p>
                </div>
              </div>
              <img src="/icon/experience.png" className="w-20 h-20 " />
            </li>
          </TextBoxReveal>
          <TextBoxReveal width="full">
            <li className="w-full border-y px-5 py-7 flex justify-start items-center gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex justify-start items-center gap-5 flex-grow">
                <h1 className="text-6xl">02/</h1>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">Harga Terjangkau</h1>
                  <p className="text-gray-600">
                    AceSolve menawarkan solusi pembuatan website berkualitas
                    dengan harga yang kompetitif,
                    <br /> memastikan Anda mendapatkan hasil maksimal sesuai
                    budget Anda.
                  </p>
                </div>
              </div>
              <img src="/icon/price.png" className="w-20 h-20 " />
            </li>
          </TextBoxReveal>
          <TextBoxReveal width="full">
            <li className="w-full border-y px-5 py-7 flex justify-start items-center gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex justify-start items-center gap-5 flex-grow">
                <h1 className="text-6xl">03/</h1>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">Terpercaya</h1>
                  <p className="text-gray-600">
                    AceSolve dikenal sebagai penyedia layanan yang dapat
                    diandalkan, dengan komitmen penuh terhadap <br /> kualitas
                    dan kepuasan klien di setiap proyek yang kami tangani.
                  </p>
                </div>
              </div>
              <img src="/icon/trust.png" className="w-20 h-20 " />
            </li>
          </TextBoxReveal>
          <TextBoxReveal width="full">
            <li className="w-full border-y px-5 py-7 flex justify-start items-center gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex justify-start items-center gap-5 flex-grow">
                <h1 className="text-6xl">04/</h1>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">Garansi</h1>
                  <p className="text-gray-600">
                    AceSolve memberikan garansi kualitas pada setiap proyek
                    website, memastikan bahwa hasil akhir <br />
                    memenuhi ekspektasi Anda dengan dukungan penuh setelah
                    peluncuran.
                  </p>
                </div>
              </div>
              <img src="/icon/warranty.png" className="w-20 h-20 " />
            </li>
          </TextBoxReveal>
          <TextBoxReveal width="full">
            <li className="w-full border-y px-5 py-7 flex justify-start items-center gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex justify-start items-center gap-5 flex-grow">
                <h1 className="text-6xl">05/</h1>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">Fleksibel</h1>
                  <p className="text-gray-600">
                    AceSolve menawarkan layanan custom yang dapat menyesuaikan
                    dengan kebutuhan Anda, memungkinkan fleksibilitas dalam{" "}
                    <br /> setiap aspek pembuatan website untuk menciptakan
                    solusi yang paling sesuai dengan visi dan tujuan bisnis
                    Anda.
                  </p>
                </div>
              </div>
              <img src="/icon/customize.png" className="w-20 h-20 " />
            </li>
          </TextBoxReveal>
          <TextBoxReveal width="full">
            <li className="w-full border-y px-5 py-7 flex justify-start items-center gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex justify-start items-center gap-5 flex-grow">
                <h1 className="text-6xl">06/</h1>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">Support</h1>
                  <p className="text-gray-600">
                    AceSolve menyediakan layanan dukungan 24/7, memastikan Anda
                    selalu mendapatkan bantuan <br /> kapan pun diperlukan,
                    sehingga website Anda tetap berfungsi dengan baik tanpa
                    hambatan.
                  </p>
                </div>
              </div>
              <img src="/icon/support.png" className="w-20 h-20 " />
            </li>
          </TextBoxReveal>
        </ul>
      </section>
      <section className="relative w-full h-full min-h-screen flex flex-col justify-center items-start">
        <TextBoxReveal>
          <h3 className="font-helveticaLight text-xl">pilihan</h3>
        </TextBoxReveal>
        <TextBoxReveal>
          <h1 className="font-helveticaLight text-7xl pb-1">Layanan Website</h1>
        </TextBoxReveal>
        <ul className="w-full h-[42.5rem] my-10 flex gap-10">
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
                <h1 className="text-4xl">Landing Page</h1>
                <p className="p-0.5">
                  Layanan landing page website yang dirancang khusus untuk
                  mempromosikan produk. Cocok untuk pemasaran digital atau iklan
                  online yang fokus pada satu pesan atau ajakan (call-to-action)
                  yang jelas, seperti mendaftar, atau melakukan pembelian.
                </p>
                <ul className="my-2">
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
              <div className="p-0.5 w-full pt-5 flex justify-between items-end">
                <div>
                  <h3>Harga Mulai Dari</h3>
                  <h1 className="text-4xl my-2">
                    <sup className="text-xl">Rp</sup> 680.000
                    <sub className="text-sm"> / Tahun</sub>
                  </h1>
                </div>
                <button className="flex justify-start items-center gap-1 text-lg bg-purple-600 text-white px-3 py-1 rounded-md">
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
            className="relative w-full h-full rounded-md px-5 py-7 flex justify-start items-start gap-5 mt-10 border-purple-600 hover:bg-purple-50 border hover:shadow-md transition-colors duration-300 ease-in-out"
          >
            <div className="absolute top-0 right-5 -translate-y-1/2">
              <img src="/icon/fire.png" className="w-14 h-14" />
            </div>
            <div className="flex flex-col justify-between items-start h-full">
              <div className="">
                <h1 className="text-4xl">Company Profile</h1>
                <p className="p-0.5">
                  Layanan pembuatan website company profile yang informatif dan
                  dirancang untuk memperkuat citra perusahaan Anda. Cocok untuk
                  Anda yang ingin memiliki bisnis dan membutuhkan website yang
                  mudah diakses.
                </p>
                <ul className="my-2">
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
              <div className="p-0.5 w-full pt-5 flex justify-between items-end">
                <div>
                  <h3>Harga Mulai Dari</h3>
                  <h1 className="text-4xl my-2">
                    <sup className="text-xl">Rp</sup> 750.000
                    <sub className="text-sm"> / Tahun</sub>
                  </h1>
                </div>
                <button className="flex justify-start items-center gap-1 text-lg bg-purple-600 text-white px-3 py-1 rounded-md">
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
            className="relative w-full h-full rounded-md px-5 py-7 flex justify-start items-start gap-5 mt-20 border-purple-600 hover:bg-purple-50 border hover:shadow-md transition-colors duration-300 ease-in-out"
          >
            <div className="flex flex-col justify-between items-start h-full">
              <div>
                <h1 className="text-4xl">Custom</h1>
                <p className="p-0.5">
                  Layanan pembuatan website custom yang akan disesuaikan dengan
                  kebutuhan Anda. Mulai dari web e-commerce hingga sistem
                  administrasi, layanan ini dirancang untuk mencapai kebutuhan
                  Anda.
                </p>
                <ul className="my-2">
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
              <div className="p-0.5 w-full pt-5 flex justify-between items-end">
                <div>
                  <h3>Harga Mulai Dari</h3>
                  <h1 className="text-4xl my-2">Harga Khusus</h1>
                </div>
                <button className="flex justify-start items-center gap-1 text-lg bg-purple-600 text-white px-3 py-1 rounded-md">
                  Selengkapnya
                  <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                </button>
              </div>
            </div>
          </motion.li>
        </ul>
      </section>
    </motion.main>
  );
}
