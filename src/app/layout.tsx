import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website, Aplikasi Android & iOS Professional | AceSolve",
  description:
    "AceSolve menyediakan jasa pembuatan website, aplikasi Android, dan aplikasi iOS profesional — landing page, company profile, toko online, hingga custom mobile app — mulai dari Rp750.000.",
  metadataBase: new URL("https://www.acesolve.com"),
  alternates: {
    canonical: "https://www.acesolve.com",
  },
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan aplikasi android",
    "jasa pembuatan aplikasi ios",
    "jasa pembuatan aplikasi mobile",
    "web development Indonesia",
    "jasa website profesional",
    "jasa website Jakarta",
    "jasa website Surabaya",
    "company profile website",
    "landing page website",
    "toko online website",
    "AceSolve",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@acesolvetech",
    creator: "@acesolvetech",
    title: "AceSolve — Jasa Pembuatan Website, Aplikasi Android & iOS Profesional",
    description:
      "Landing page, company profile, toko online, hingga custom Android & iOS app. Mulai dari Rp750.000. Gratis hosting, domain, & SSL.",
    images: ["/logo/LogoWhite.png"],
  },
  openGraph: {
    type: "website",
    url: "https://www.acesolve.com",
    siteName: "AceSolve",
    title: "AceSolve — Jasa Pembuatan Website, Aplikasi Android & iOS Profesional",
    description:
      "Landing page, company profile, toko online, hingga custom Android & iOS app. Mulai dari Rp750.000. Gratis hosting, domain, & SSL.",
    images: [
      {
        url: "/logo/LogoWhite.png",
        width: 1200,
        height: 630,
        alt: "AceSolve — Jasa Pembuatan Website, Aplikasi Android & iOS Profesional",
      },
    ],
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.acesolve.com/#organization",
                name: "AceSolve",
                url: "https://www.acesolve.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.acesolve.com/logo/LogoWhite.png",
                  width: 133,
                  height: 120,
                },
                description:
                  "AceSolve adalah jasa pembuatan website, aplikasi Android, dan aplikasi iOS profesional di Jakarta dan Surabaya. Spesialisasi landing page, company profile, toko online, administrasi, dan custom mobile app.",
                telephone: "+6285173135780",
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+6285173135780",
                    contactType: "customer service",
                    availableLanguage: ["Indonesian", "English"],
                    hoursAvailable: "Mo-Su 00:00-23:59",
                  },
                ],
                sameAs: [
                  "https://www.instagram.com/acesolvetech/",
                  "https://api.whatsapp.com/send?phone=6285173135780",
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Layanan Website & Aplikasi",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page", description: "Website landing page mulai Rp1.000.000" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Company Profile", description: "Website company profile mulai Rp1.500.000" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Toko Online", description: "Website toko online mulai Rp3.500.000" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Administrasi", description: "Website administrasi mulai Rp5.000.000" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Mobile App (Android & iOS)", description: "Aplikasi Android & iOS custom sesuai kebutuhan bisnis" } },
                  ],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.acesolve.com/#jakarta",
                name: "AceSolve Jakarta",
                image: "https://www.acesolve.com/logo/LogoWhite.png",
                url: "https://www.acesolve.com",
                telephone: "+6285173135780",
                priceRange: "Rp750.000 - Rp25.000.000+",
                openingHours: "Mo-Su 00:00-23:59",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "No. 19 E, Jl. Setia Budi Timur, Kuningan, Setia Budi",
                  addressLocality: "Jakarta Selatan",
                  addressRegion: "DKI Jakarta",
                  postalCode: "12910",
                  addressCountry: "ID",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -6.2085313,
                  longitude: 106.8280840,
                },
                parentOrganization: { "@id": "https://www.acesolve.com/#organization" },
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.acesolve.com/#surabaya",
                name: "AceSolve Surabaya",
                image: "https://www.acesolve.com/logo/LogoWhite.png",
                url: "https://www.acesolve.com",
                telephone: "+6285173135780",
                priceRange: "Rp750.000 - Rp25.000.000+",
                openingHours: "Mo-Su 00:00-23:59",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "De Victory, Jl. Satelit Utara VI, Tanjungsari, Kec. Sukomanunggal",
                  addressLocality: "Surabaya",
                  addressRegion: "Jawa Timur",
                  postalCode: "60187",
                  addressCountry: "ID",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -7.2633279,
                  longitude: 112.6910811,
                },
                parentOrganization: { "@id": "https://www.acesolve.com/#organization" },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.acesolve.com/#website",
                url: "https://www.acesolve.com",
                name: "AceSolve",
                description: "Jasa pembuatan website, aplikasi Android, dan aplikasi iOS profesional di Indonesia",
                publisher: { "@id": "https://www.acesolve.com/#organization" },
                inLanguage: "id-ID",
              },
            ]),
          }}
        />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4150342971914296');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4150342971914296&ev=PageView&noscript=1"
          />
        </noscript>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo/LogoWhite.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-helveticaRoman bg-white text-gray-800 flex flex-col justify-start items-center`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
