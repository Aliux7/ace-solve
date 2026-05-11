import React from "react";
import { TextBoxReveal } from "../../ui/TextBoxReveal";

const testimonials = [
  {
    quote:
      "Top notch service! Detail-UI. Definitely will use this service again.",
    author: "Eu***** C***sa",
    role: "FOME",
    avatar: "...",
  },
  {
    quote:
      "Aplikasi aman, sudah bisa didownload diplaystore tampilannya juga bagus",
    author: "Ze***s",
    role: "EuroGold",
    avatar: "...",
  },
  {
    quote: "Pengerjaan cepat, sangat professional. Fleksibel",
    author: "Am**** C****ty",
    role: "Modelano",
    avatar: "...",
  },
  {
    quote:
      "Untuk projects aman, ada beberapa fitur yang tadi estimasi pengerjaan 2 minggu selesai dibawah 5 hari. Untuk revisi juga sangat generous karena setiap fitur diijinin all you can revisi",
    author: "An**** G******i",
    role: "Dapu Gift Studio",
    avatar: "...",
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
      <div className="w-10 h-10 rounded-full bg-purple-100 flex-shrink-0 flex justify-center items-center uppercase">
        {testimonial.role.charAt(0)}
      </div>
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
          <h1 className="font-helveticaLight text-4xl sm:text-[2.75rem] md:text-5xl lg:text-6xl xl:text-7xl pb-1 text-center sm:text-start">
            Apa Kata Mereka?
          </h1>
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
