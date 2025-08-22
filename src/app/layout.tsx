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
  title: "Jasa Pembuatan Website Dan Aplikasi Professional | AceSolve",
  description:
    "Kami menyediakan jasa pembuatan website dan aplikasi profesional dengan kualitas terbaik untuk perusahaan dan bisnis Anda.",
  metadataBase: new URL("https://acesolve.com"),

  twitter: {
    card: "summary_large_image",
    site: "acesolve.com",
    creator: "@acesolve",
    title: "AceSolve - Jasa Pembuatan Website & Aplikasi",
    description:
      "Solusi terbaik untuk pembuatan website & aplikasi profesional bagi bisnis Anda.",
    images: ["/logo/LogoWhite.png"],
  },
  openGraph: {
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AceSolve",
              url: "https://www.acesolve.com",
              logo: "https://www.acesolve.com/logo/LogoWhite.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+6285173135780",
                  contactType: "customer service",
                  availableLanguage: ["Indonesian", "English"],
                },
              ],
              sameAs: ["https://www.instagram.com/acesolvetech/"],
            }),
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
        <title>
          Jasa Pembuatan Website Perusahaan dan Aplikasi Profesional
        </title>
        <meta
          name="description"
          content="Dapatkan layanan pembuatan website dan aplikasi berkualitas tinggi untuk bisnis Anda."
        />
        <meta
          name="keywords"
          content="jasa pembuatan website, jasa aplikasi, web development, aceSolve"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Jasa Pembuatan Website & Aplikasi - AceSolve"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jasa pembuatan website dan aplikasi profesional dengan kualitas terbaik."
        />
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
