import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/providers";

export const metadata: Metadata = {
  title: "Unstable Account Thirdweb Template",
  description: "Build on Unstable with Thirdweb's authentication and Unstable Account support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
