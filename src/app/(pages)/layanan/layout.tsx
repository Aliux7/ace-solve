import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Pembuatan Website, Aplikasi Android & iOS Profesional | AceSolve",
  description:
    "Jasa pembuatan landing page mulai Rp1 juta, company profile Rp1,5 juta, toko online Rp3,5 juta, administrasi Rp5 juta, dan custom Android & iOS app. Gratis hosting, domain, & SSL.",
  alternates: {
    canonical: "https://www.acesolve.com/layanan",
  },
  openGraph: {
    title: "Layanan Pembuatan Website, Aplikasi Android & iOS | AceSolve",
    description:
      "6 paket layanan website & mobile app profesional. Landing page, company profile, toko online, administrasi, custom Android & iOS app. Gratis hosting, domain & SSL.",
    url: "https://www.acesolve.com/layanan",
    images: [{ url: "/logo/LogoWhite.png", width: 1200, height: 630 }],
  },
};

export default function LayananLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Bagaimana proses pemesanan layanan website AceSolve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Proses pemesanan: (1) Pesan paket dan konsultasi gratis via WhatsApp, (2) Pembayaran layanan, (3) Kirim informasi dan konten website, (4) Proses pengembangan dan revisi, (5) Pengujian website, (6) Publish website.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah website AceSolve bisa dibuka di HP?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, semua website yang dibuat AceSolve bersifat responsive dan optimal di perangkat mobile, tablet, maupun desktop.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apa faktor yang mempengaruhi harga dan durasi pembuatan website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Faktor yang mempengaruhi harga dan durasi antara lain: desain website, jumlah halaman, fitur spesifik yang dibutuhkan, dan optimasi SEO.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah AceSolve bisa membuat aplikasi Android atau iOS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, AceSolve melayani pembuatan aplikasi Android maupun iOS, serta website profesional. Tersedia paket Toko Online App mulai Rp25.000.000 dan Custom App (Android & iOS) dengan harga khusus sesuai kebutuhan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa harga jasa pembuatan website AceSolve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Harga layanan AceSolve mulai dari Rp750.000 untuk website portofolio, Rp1.000.000 untuk landing page, Rp1.500.000 untuk company profile, Rp3.500.000 untuk toko online, dan Rp5.000.000 untuk website administrasi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah tersedia konsultasi gratis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, AceSolve menyediakan konsultasi gratis untuk membantu menentukan solusi terbaik sesuai kebutuhan bisnis Anda. Hubungi via WhatsApp +6285173135780.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Layanan Website & Aplikasi AceSolve",
              description:
                "Paket layanan pembuatan website dan aplikasi profesional",
              url: "https://www.acesolve.com/layanan",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Service",
                    name: "Landing Page",
                    description:
                      "Website landing page untuk pemasaran digital, fokus pada satu pesan atau ajakan tindakan yang jelas. Mulai 1 halaman, 5x revisi, SEO friendly.",
                    provider: { "@id": "https://www.acesolve.com/#organization" },
                    offers: {
                      "@type": "Offer",
                      price: "1000000",
                      priceCurrency: "IDR",
                      priceSpecification: { "@type": "UnitPriceSpecification", price: "1000000", priceCurrency: "IDR", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitText: "project" } },
                    },
                    serviceType: "Web Development",
                    areaServed: "Indonesia",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Service",
                    name: "Company Profile Website",
                    description:
                      "Website company profile informatif untuk memperkuat citra perusahaan. Mulai 2 halaman, 1 akun email, SEO friendly.",
                    provider: { "@id": "https://www.acesolve.com/#organization" },
                    offers: {
                      "@type": "Offer",
                      price: "1500000",
                      priceCurrency: "IDR",
                    },
                    serviceType: "Web Development",
                    areaServed: "Indonesia",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "Service",
                    name: "Website Portofolio",
                    description:
                      "Website portofolio elegan dan profesional untuk menampilkan karya dan proyek.",
                    provider: { "@id": "https://www.acesolve.com/#organization" },
                    offers: {
                      "@type": "Offer",
                      price: "750000",
                      priceCurrency: "IDR",
                    },
                    serviceType: "Web Development",
                    areaServed: "Indonesia",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  item: {
                    "@type": "Service",
                    name: "Toko Online Website",
                    description:
                      "Website toko online dengan fitur keranjang belanja, checkout, dan payment gateway optional.",
                    provider: { "@id": "https://www.acesolve.com/#organization" },
                    offers: {
                      "@type": "Offer",
                      price: "3500000",
                      priceCurrency: "IDR",
                    },
                    serviceType: "E-commerce Development",
                    areaServed: "Indonesia",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  item: {
                    "@type": "Service",
                    name: "Website Administrasi",
                    description:
                      "Website administrasi dengan login multi-role, dashboard multi-cabang, dan fitur custom (absensi, laporan kas, tracking order).",
                    provider: { "@id": "https://www.acesolve.com/#organization" },
                    offers: {
                      "@type": "Offer",
                      price: "5000000",
                      priceCurrency: "IDR",
                    },
                    serviceType: "Web Application Development",
                    areaServed: "Indonesia",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  item: {
                    "@type": "Service",
                    name: "Aplikasi Toko Online (Android & iOS)",
                    description:
                      "Aplikasi toko online Android & iOS dengan katalog produk, checkout otomatis, payment gateway, tracking order, dan admin dashboard.",
                    provider: { "@id": "https://www.acesolve.com/#organization" },
                    offers: {
                      "@type": "Offer",
                      price: "25000000",
                      priceCurrency: "IDR",
                    },
                    serviceType: "Mobile App Development",
                    areaServed: "Indonesia",
                  },
                },
              ],
            },
          ]),
        }}
      />
      {children}
    </>
  );
}
