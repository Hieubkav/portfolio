import type { Metadata } from "next";
import { Poppins, Rubik, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
// SEOProvider removed temporarily due to App Router build incompatibility
import { portfolioConfig } from "@/config/portfolio.config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});
const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: "600",
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: portfolioConfig.name,
    template: `%s - ${portfolioConfig.title}`,
  },
  description: portfolioConfig.description,

  // added new keywords for seo
  keywords: portfolioConfig.seo.keywords,
  authors: portfolioConfig.seo.authors,
  creator: portfolioConfig.name,
  applicationName: portfolioConfig.name,
  referrer: "origin-when-cross-origin",
  category: "portfolio",

  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: portfolioConfig.seo.url,
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [
      {
        url: "/avatar.webp",
        width: 1200,
        height: 1200,
        alt: portfolioConfig.name,
      },
    ],
    siteName: portfolioConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: ["/avatar.webp"],
    creator: portfolioConfig.seo.twitterHandle,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${poppins.variable} ${rubik.variable} ${beVietnam.variable}`}>
        {/* JSON-LD provider removed for build stability. */}
        <main
          className={cn(
            "flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 max-sm:pt-20 bg-smoke"
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
