"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { GoArrowUpRight } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import { TextBoxReveal } from "./components/ui/TextBoxReveal";
import Link from "next/link";
import HeroSection from "./components/sections/home/HeroSection";
import TrustedBySection from "./components/sections/home/TrustedBySection";
import WhyUsSection from "./components/sections/home/WhyUsSection";
import OurTeam from "./components/sections/home/OurTeam";
import { TestimonialSection } from "./components/sections/home/TestimonialSection";

export default function Home() {
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

  return (
    <motion.main
      className={`w-full min-h-screen flex flex-col gap-60 px-3 sm:px-6 lg:px-10 transition-all duration-300 ease-in-out`}
    >
      <HeroSection />
      <TrustedBySection />
      <WhyUsSection />
      <OurTeam />
      <TestimonialSection />
      <section className="relative w-full h-full min-h-screen flex flex-col justify-center items-start text-center sm:text-start">
        <TextBoxReveal width="100%">
          <p className="font-helveticaLight text-xl w-full px-1">pilihan</p>
        </TextBoxReveal>
        <TextBoxReveal width="100%">
          <h2 className="font-helveticaLight text-4xl sm:text-6xl lg:text-7xl pb-1">
            Layanan Website
          </h2>
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
                <h3 className="text-3xl sm:text-4xl">Landing Page</h3>
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
                    <FaCheck className="text-purple-600" /> Non Wordpress
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
                    <FaCheck className="text-purple-600" /> Mulai Dari 5x Revisi
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Design Premium
                  </li>
                </ul>
              </div>
              <div className="p-0.5 w-full pt-5 flex flex-col sm:flex-row xl:flex-col justify-between items-baseline">
                <div>
                  <h3>Harga Mulai Dari</h3>
                  <p className="text-3xl sm:text-4xl my-2 font-semibold">
                    <sup className="text-xl">Rp</sup> 1.000.000
                    <sub className="text-sm font-normal"> / Order</sub>
                  </p>
                </div>
                <Link
                  href="/layanan/#landing-page"
                  className="self-end flex justify-start items-center gap-1 text-base sm:text-lg bg-purple-600 text-white px-3 py-1 rounded-md"
                >
                  Selengkapnya
                  <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                </Link>
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
              <img src="/icon/fire.png" alt="" width={56} height={56} className="w-14 h-14" />
            </div>
            <div className="flex flex-col justify-between items-start h-full">
              <div className="">
                <h3 className="text-3xl sm:text-4xl">Company Profile</h3>
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
                    <FaCheck className="text-purple-600" /> Non Wordpress
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
                    <FaCheck className="text-purple-600" /> Mulai Dari 2 Halaman
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <FaCheck className="text-purple-600" /> Mulai Dari 5x Revisi
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
                  <p className="text-3xl sm:text-4xl my-2 font-semibold">
                    <sup className="text-xl">Rp</sup> 1.500.000
                    <sub className="text-sm font-normal"> / Order</sub>
                  </p>
                </div>
                <Link
                  href="/layanan/#company-profile"
                  className="self-end flex justify-start items-center gap-1 text-base sm:text-lg bg-purple-600 text-white px-3 py-1 rounded-md"
                >
                  Selengkapnya
                  <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                </Link>
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
                <h3 className="text-3xl sm:text-4xl">Custom</h3>
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
                  <p className="text-3xl sm:text-4xl my-2 font-semibold">Harga Khusus</p>
                </div>
                <Link
                  href="/layanan/#custom-page"
                  className="self-end flex justify-start items-center gap-1 text-base sm:text-lg bg-purple-600 text-white px-3 py-1 rounded-md"
                >
                  Selengkapnya
                  <GoArrowUpRight className="w-5 h-5 text-white stroke-1" />
                </Link>
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
      <section className="relative w-full h-full min-h-screen flex flex-col justify-center items-start text-center sm:text-start">
        <TextBoxReveal width="100%">
          <p className="font-helveticaLight text-xl w-full px-1">Tersedia</p>
        </TextBoxReveal>
        <TextBoxReveal width="100%">
          <h2 className="font-helveticaLight text-4xl sm:text-6xl lg:text-7xl pb-1">
            Lokasi Cabang
          </h2>
        </TextBoxReveal>
        <div className="mt-5 w-full">
          <TextBoxReveal width="full">
            <div className="w-full border-y px-3 lg:px-5 py-5 md:py-7 flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-6 md:gap-14 lg:gap-20 xl:gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex flex-col sm:flex-row justify-start items-start gap-5 h-[300px] flex-1 w-full sm:w-auto">
                <p className="hidden sm:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl" aria-hidden="true">
                  01/
                </p>
                <div className="flex flex-col gap-2 text-center sm:text-start justify-between w-full h-full">
                  <h3 className="text-3xl lg:text-4xl">AceSolve Jakarta</h3>
                  <div className="flex flex-col lg:flex-row justify-between items-center sm:items-start lg:items-center gap-5 w-full flex-wrap">
                    <div className="flex flex-col text-gray-600">
                      <span className="text-nowrap">
                        No. 19 E, Jl. Setia Budi Timur, Kuningan, Setia Budi
                      </span>
                      <span className="text-nowrap">
                        Kecamatan Setiabudi, Kota Jakarta Selatan
                      </span>
                      <span className="text-nowrap">Ibukota Jakarta 12910</span>
                    </div>
                    <div className="flex flex-col text-gray-600">
                      <span className="text-nowrap">24 Jam</span>
                      <span className="text-nowrap">+62 8517-3135-780</span>
                      <span className="text-nowrap">www.acesolve.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <iframe
                name="AceSolve Jakarta"
                className="w-full lg:w-[450px] xl:w-[550px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4175249023806!2d106.82808399999999!3d-6.208531300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f578613bb2cb%3A0x6e79e2887a98722b!2sJASA%20WEBSITE%20%26%20APLIKASI%20JAKARTA%20-%20ACESOLVE!5e0!3m2!1sen!2sid!4v1755516125601!5m2!1sen!2sid"
                height="300"
                loading="lazy"
              ></iframe>
            </div>
          </TextBoxReveal>
          <TextBoxReveal width="full">
            <div className="w-full border-y px-3 lg:px-5 py-5 md:py-7 flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-6 md:gap-14 lg:gap-20 xl:gap-32 hover:border-y-purple-300 hover:bg-purple-100 transition-all duration-300 ease-in-out">
              <div className="flex flex-col sm:flex-row justify-start items-start gap-5 h-[300px] flex-1 w-full sm:w-auto">
                <p className="hidden sm:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl" aria-hidden="true">
                  02/
                </p>
                <div className="flex flex-col gap-2 text-center sm:text-start justify-between w-full h-full">
                  <h3 className="text-3xl lg:text-4xl">AceSolve Surabaya</h3>
                  <div className="flex flex-col lg:flex-row justify-between items-center sm:items-start lg:items-center gap-5 w-full flex-wrap">
                    <div className="flex flex-col text-gray-600">
                      <span className="text-nowrap">
                        De Victory, Jl. Satelit Utara VI, Tanjungsari
                      </span>
                      <span className="text-nowrap">
                        Kec. Sukomanunggal, Surabaya
                      </span>
                      <span className="text-nowrap"> Jawa Timur 60187</span>
                    </div>
                    <div className="flex flex-col text-gray-600">
                      <span className="text-nowrap">24 Jam</span>
                      <span className="text-nowrap">+62 8517-3135-780</span>
                      <span className="text-nowrap">www.acesolve.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <iframe
                name="AceSolve Surabaya"
                className="w-full lg:w-[450px] xl:w-[550px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8022904495733!2d112.69108109999999!3d-7.2633279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ffa92de8b515%3A0x255e339c291d8e36!2sJASA%20WEBSITE%20%26%20APLIKASI%20SURABAYA%20-%20ACESOLVE!5e0!3m2!1sen!2sid!4v1755517206391!5m2!1sen!2sid"
                height="300"
                loading="lazy"
              ></iframe>
            </div>
          </TextBoxReveal>
        </div>
      </section>
    </motion.main>
  );
}
