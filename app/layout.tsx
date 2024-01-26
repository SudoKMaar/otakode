import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://otakode.vercel.app"),
  title: {
    default: "OtaKode",
    template: "%s - OtaKode",
  },
  description:
    "OtaKode is the ultimate destination for anime fans. Whether you are looking for the latest anime news, reviews, recommendations, or community, Otakode has it all. Explore our extensive database of anime titles, genres, ratings, and more",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "OtaKode",
      },
    ],
  },
  verification: {
    google: "w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI",
    me: "KMaar",
  },
  keywords: [
    "Anime News",
    "OtaKode",
    "Abhishek KMaar",
    "Abhishek Kumar",
    "KMaar",
    "KMaar Miscellaneous Studio",
    "Trending Anime",
    "Latest Anime",
    "Anime Reviews",
    "Anime Recommendations",
    "Anime Community",
    "Anime Database",
    "Anime Titles",
    "Anime Genres",
    "Anime Ratings",
    "Top Anime",
    "New Anime Releases",
    "Anime Streaming",
    "Anime Updates",
    "Anime Series",
    "Anime Movies",
    "Popular Anime",
    "Anime Characters",
    "Anime Plot",
    "Anime Art",
    "Anime Culture",
    "Otaku Community",
    "Anime Fans",
    "Japanese Animation",
    "Manga Series",
    "Cosplay Ideas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#282b36]">
          <Hero />
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
