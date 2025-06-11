import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Awais Ali - SEO | SEM Specialist",
  description:
    "Helping businesses grow through targeted traffic, lead generation, and performance marketing.Marketing graduate from Hazara University, scaling brands with SEO, Google Ads, and Semantic SEO strategies.",
  keywords:
    "seo expert, digital marketing specialist, google ads expert, semantic seo, lead generation, wordpress seo, technical seo, seo expert islamabad, digital marketing agency pakistan",
  authors: [{ name: "Awais Ali" }],
  openGraph: {
    title: "Awais Ali - SEO | SEM Specialist",
    description:
      "Driving traffic, leads, and growth through expert SEO and Google Ads strategies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awais Ali - SEO | SEM Specialist",
    description:
      "Driving traffic, leads, and growth through expert SEO and Google Ads strategies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
