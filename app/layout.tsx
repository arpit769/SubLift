import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  verification: {
    google: "Hq4XdXriSFiBdeg-sx6jsPDN8bVkkl3terWre7OrdhQ",
  },
  title: {
    default: "SubLift - Organic Subreddit Growth",
    template: "%s | SubLift",
  },
  description:
    "Apply for realistic subreddit growth strategy, pay securely, and track progress from a client dashboard.",
  openGraph: {
    title: "SubLift - Organic Subreddit Growth",
    description:
      "Strategy-led subreddit growth services for teams building durable communities.",
    type: "website",
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
