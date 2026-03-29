import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikhil Kotta — Software Engineer",
  description: "Software engineer with 3 years of experience in full-stack development, cloud computing, and fintech at Fiserv. AWS Certified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
