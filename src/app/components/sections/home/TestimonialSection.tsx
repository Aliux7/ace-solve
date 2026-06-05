import React from "react";
import { TextBoxReveal } from "../../ui/TextBoxReveal";
import BinusLogo from "@/../public/companies/short_icon/Binus.webp"
import BitLearnLogo from "@/../public/companies/short_icon/BitLearn.webp"
import DapuLogo from "@/../public/companies/short_icon/Dapu.ico"
import EuroGoldsLogo from "@/../public/companies/short_icon/EuroGold.webp"
import FomeLogo from "@/../public/companies/short_icon/Fome.webp"
import ModelanoLogo from "@/../public/companies/short_icon/Modelano.ico"
import Wash24Logo from "@/../public/companies/short_icon/Wash24.webp"
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Top notch service! Detail-UI. Definitely will use this service again.",
    author: "Eu***** C***sa",
    role: "FOME",
    avatar: FomeLogo,
  },
  {
    quote:
      "Aplikasi aman, sudah bisa didownload diplaystore tampilannya juga bagus",
    author: "Ze***s",
    role: "EuroGold",
    avatar: EuroGoldsLogo,
  },
  {
    quote: "Pengerjaan cepat, sangat professional. Fleksibel",
    author: "Am**** C****ty",
    role: "Modelano",
    avatar: ModelanoLogo,
  },
  {
    quote:
      "Untuk projects aman, ada beberapa fitur yang tadi estimasi pengerjaan 2 minggu selesai dibawah 5 hari. Untuk revisi juga sangat generous karena setiap fitur diijinin all you can revisi",
    author: "An**** G******i",
    role: "Dapu Gift Studio",
    avatar: DapuLogo,
  },
  {
    quote: "Fitur sangat user friendly, gampang dimengerti dan pengerjaan cepat. Semua mantap dari website internal sampai website untuk mahasiswa dan dosen",
    author: "K*****",
    role: "Binus University",
    avatar: BinusLogo,
  },
  {
    quote: "Pengerajaan cepat, fleksibel juga. Awalnya ingin buat landing page buat bootcamp terus nambah jadi website courses juga, hasilnya bagus dan cepat.",
    author: "S*********s Cl****t",
    role: "BitLearn",
    avatar: BitLearnLogo,
  },
  {
    quote: "Website internal sangat customable, dapat digunakan karyawan dengan mudah. Fiturnya custom sesuai keperluan usaha saya.",
    author: "K**** Yu***o",
    role: "Wash24",
    avatar: Wash24Logo,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="flex-shrink-0 w-[380px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-600 flex flex-col gap-4 mx-4 transition-colors duration-700 ease-in-out">
    <div className="text-purple-600 text-4xl font-serif leading-none italic">
      “
    </div>
    <p className="text-gray-700 leading-relaxed text-md flex-grow">
      {testimonial.quote}
    </p>
    <div className="flex items-center gap-3">
      <Image
        src={testimonial.avatar}
        alt={testimonial.role}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full border border-purple-100 flex-shrink-0 flex justify-center items-center uppercase object-cover"
      />
      <div className="min-w-0">
        <h4 className="font-bold text-gray-900 text-sm truncate"> 
          {testimonial.role}
        </h4>
        <p className="text-xs text-gray-500 truncate">{testimonial.author}</p>
      </div>
    </div>
  </div>
);

export const TestimonialSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="flex flex-col gap-10">
        <TextBoxReveal>
          <h2 className="font-helveticaLight text-4xl sm:text-[2.75rem] md:text-5xl lg:text-6xl xl:text-7xl pb-1 text-center sm:text-start">
            Apa Kata Mereka?
          </h2>
        </TextBoxReveal>

        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`top-${i}`} testimonial={t} />
            ))}
          </div>
        </div>

        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex w-max animate-marquee-right group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`bottom-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
