import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OtaKode",
  description:
    "OtaKode is the ultimate destination for anime fans. Whether you are looking for the latest anime news, reviews, recommendations, or community, Otakode has it all. Explore our extensive database of anime titles, genres, ratings, and more",
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
      </body>
    </html>
  );
}
