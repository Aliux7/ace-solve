import React from "react";
import { TextBoxReveal } from "../../ui/TextBoxReveal";

const WhyUsSection = () => {
  return (
    <section className="relative w-full h-full flex flex-col justify-center items-start">
      <TextBoxReveal>
        <h1 className="font-helveticaLight text-4xl sm:text-[2.75rem] md:text-5xl lg:text-6xl xl:text-7xl pb-1 text-center sm:text-start">
          Mengapa Memilih AceSolve?
        </h1>
      </TextBoxReveal>
      <TextBoxReveal>
        <p className="text-sm lg:text-base xl:text-lg text-gray-500 md:px-1 md:py-2 lg:py-4 sm:w-full md:w-11/12 lg:w-4/5 xl:w-3/5 text-center sm:text-start">
          AceSolve berspesialisasi dalam{" "}
          <span className="font-bold">
            jasa pembuatan website, aplikasi, dan optimasi SEO
          </span>{" "}
          yang disesuaikan dengan kebutuhan Anda. Kami memastikan setiap solusi
          digital tampil optimal, fungsional, dan selaras dengan visi bisnis
          Anda.
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
            <img src="/icon/price.png" className="w-14 h-14 md:w-20 md:h-20 " />
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
            <img src="/icon/trust.png" className="w-14 h-14 md:w-20 md:h-20 " />
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
                  website, memastikan bahwa hasil akhir memenuhi ekspektasi Anda
                  dengan dukungan penuh setelah peluncuran.
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
                  dengan kebutuhan Anda, memungkinkan fleksibilitas dalam setiap
                  aspek pembuatan website untuk menciptakan solusi yang paling
                  sesuai dengan visi dan tujuan bisnis Anda.
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
  );
};

export default WhyUsSection;
