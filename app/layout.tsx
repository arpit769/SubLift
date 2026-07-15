import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://growmysub.com"),

  verification: {
    google: "Hq4XdXriSFiBdeg-sx6jsPDN8bVkkl3terWre7OrdhQ",
  },

  title: {
    default: "GrowMySub - Organic Subreddit Growth",
    template: "%s | GrowMySub",
  },

  description:
    "Learn how to grow a subreddit with proven community growth strategies. Discover subreddit promotion, engagement tips, moderation best practices, and organic Reddit growth methods.",

  alternates: {
    canonical: "https://growmysub.com",
  },

  openGraph: {
    title: "GrowMySub - Organic Subreddit Growth",
    description:
      "Learn how to grow a subreddit with proven community growth strategies. Discover subreddit promotion, engagement tips, moderation best practices, and organic Reddit growth methods.",
    type: "website",
    siteName: "GrowMySub",
    url: "https://growmysub.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
