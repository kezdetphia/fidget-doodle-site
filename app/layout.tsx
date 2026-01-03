import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fidget Doodle — Neon Focus Drawing App",
  description:
    "Fidget Doodle is a pitch-black, neon-bright fidget drawing app for calm focus, sensory relief, and mindful doodling on iPhone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
