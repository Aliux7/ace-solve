import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio Website, Aplikasi Android & iOS | AceSolve",
  description:
    "Lihat 15+ portofolio karya terbaik AceSolve: EuroGold, Modelano, Binus University, Donebox, Fome, Wash24, dan lebih banyak proyek website, Android & iOS app.",
  alternates: {
    canonical: "https://www.acesolve.com/portofolio",
  },
  openGraph: {
    title: "Portofolio Website, Aplikasi Android & iOS | AceSolve",
    description:
      "15+ proyek website, Android & iOS app yang telah diselesaikan AceSolve — dari landing page, toko online, sistem administrasi, hingga aplikasi mobile di App Store & Play Store.",
    url: "https://www.acesolve.com/portofolio",
    images: [{ url: "/logo/LogoWhite.png", width: 1200, height: 630 }],
  },
};

export default function PortofolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://www.acesolve.com/portofolio",
            name: "Portofolio AceSolve",
            description:
              "Koleksi proyek website, aplikasi Android, dan aplikasi iOS yang telah diselesaikan AceSolve",
            url: "https://www.acesolve.com/portofolio",
            publisher: { "@id": "https://www.acesolve.com/#organization" },
            hasPart: [
              { "@type": "WebSite", name: "EuroGold", description: "Aplikasi mobile beli emas dan perak", url: "https://play.google.com/store/apps/details?id=com.acesolve.eurogold" },
              { "@type": "WebSite", name: "Donebox", description: "Website Daily Do All in One", url: "https://www.donebox.site/" },
              { "@type": "WebSite", name: "Eurosilver", description: "Website landing page toko silver", url: "https://eurosilver.co.id/" },
              { "@type": "WebSite", name: "Modelano", description: "Website voting gambar anak-anak", url: "https://www.modelanokidsvote.com/" },
              { "@type": "WebSite", name: "Dapugifts", description: "Website profile dan catalog giftset", url: "https://dapugiftstudio.com/" },
              { "@type": "WebSite", name: "Wash 24", description: "Website landing page laundry", url: "https://www.wash24laundry.com/" },
              { "@type": "WebSite", name: "BitLearn", description: "Website academy dan bootcamp", url: "https://bitlearn-academy.vercel.app/" },
              { "@type": "WebSite", name: "Admin Laundry", description: "Website internal laundry", url: "https://www.adminlaundry.com/" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
