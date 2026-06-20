import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Spooky Action Park";
const description =
  "A research and commerce campus for quantum technology in Austin, Texas. Coming soon.";

export const metadata: Metadata = {
  metadataBase: new URL("https://spookyactionpark.com"),
  title: {
    default: title,
    template: "%s · Spooky Action Park",
  },
  description,
  applicationName: title,
  keywords: [
    "quantum technology",
    "quantum computing",
    "research campus",
    "Austin",
    "Texas",
    "Spooky Action Park",
  ],
  openGraph: {
    title,
    description,
    siteName: title,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
