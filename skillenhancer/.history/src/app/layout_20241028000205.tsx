import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

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
  title: "Skill Enhancer",
  description: "Generated by create next app ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Scholarship Opportunities - Skills Enhancer</title>
      <meta name="description" content="Unlock your potential with Skills Enhancer's scholarships. Apply now & boost your skills!"></meta>
      <meta name="keywords" content="scholarship, skills development, online courses, education, career growth"></meta>
      <meta property="og:title" content="Skills Enhancer Scholarship Program"></meta>
      <meta property="og:description" content="Empower your future with Skills Enhancer's scholarships. Learn, grow & succeed!"></meta>
      <meta property="og:url" content="[https://skill-enhancer.vercel.app/]"></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased wrapper`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}