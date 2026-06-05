import React from "react";
import { TextBoxReveal } from "../../ui/TextBoxReveal";
import { motion } from "framer-motion";

const OurTeam = () => {
  return (
    <section className="relative w-full h-full flex justify-center items-center">
      <div className="relative aspect-square lg:max-h-[600px] lg:h-[80vh] sm:max-w-[65vw] overflow-hidden">
        <motion.img
          variants={{
            hidden: { opacity: 0, x: 25 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="/profile.webp"
          alt="Portofolio"
          className="object-cover w-full h-full rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-white via-white/10 to-transparent pointer-events-none" />
      </div>
      <div className="absolute bottom-0 left-0 p-5 sm:relative flex flex-col justify-center items-start sm:-ml-20 z-10">
        <TextBoxReveal>
          <h2 className="font-helveticaLight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-1 text-center sm:text-start">
            Meet Our Founder
          </h2>
        </TextBoxReveal>
        <TextBoxReveal>
          <p className="font-helveticaLight text-sm sm:text-base md:text-lg xl:text-xl pb-1 text-start text-balance">
            Berpengalaman, Solusi Terstruktur, Hasil Berkualitas
          </p>
        </TextBoxReveal>
      </div>
    </section>
  );
};

export default OurTeam;
