import React from "react";
import { motion } from "framer-motion";

const TrustedBySection = () => {
  return (
    <section className="w-full py-16 bg-white relative">
      <motion.img
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.07 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        src="/logo/LogoWhite.png"
        alt="Brand Logo"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 sm:h-60 w-auto opacity-[7%]"
      />
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-helveticaLight text-xl sm:text-2xl xl:text-3xl mb-10 text-center font-semibold"
        >
          Dipercaya Oleh
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 items-center">
          <motion.img
            variants={{
              hidden: { opacity: 0, x: 25 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="/companies/eurogold.webp"
            alt="EuroGold"
            width={698}
            height={269}
            className="mx-auto h-14 object-contain grayscale hover:grayscale-0 transition-color"
          />

          <motion.img
            variants={{
              hidden: { opacity: 0, x: 25 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            src="/companies/fome.webp"
            alt="FOME"
            width={500}
            height={500}
            className="mx-auto h-14 object-contain grayscale hover:grayscale-0 transition-color"
          />

          <motion.img
            variants={{
              hidden: { opacity: 0, x: 25 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            src="/companies/pakuwon.webp"
            alt="Pakuwon"
            width={1168}
            height={205}
            className="mx-auto h-10 object-contain grayscale hover:grayscale-0 transition-color"
          />

          <motion.img
            variants={{
              hidden: { opacity: 0, x: 25 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            src="/companies/binus.webp"
            alt="Binus University"
            width={2202}
            height={1355}
            className="mx-auto h-16 object-contain grayscale hover:grayscale-0 transition-color"
          />

          <motion.img
            variants={{
              hidden: { opacity: 0, x: 25 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            src="/companies/modelano.webp"
            alt="Modelano"
            width={823}
            height={127}
            className="mx-auto mt-2 h-6 object-contain grayscale hover:grayscale-0 transition-color"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
