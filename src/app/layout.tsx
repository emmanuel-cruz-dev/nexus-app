import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";
import ContextProvider from "@/context/GlobalContext";
import "./globals.css";
import "@radix-ui/themes/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus App",
  description:
    "App de notas y tareas creada con Next.js donde los usuarios pueden guardar, editar y organizar su contenido personal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider>
          <Theme appearance="dark">
            <Navbar />
            {children}
          </Theme>
        </ContextProvider>
      </body>
    </html>
  );
}
