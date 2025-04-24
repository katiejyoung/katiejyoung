import type { Metadata } from "next";
import { Inter, Knewave, Bricolage_Grotesque } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const knewave = Knewave({ subsets: ['latin'], weight: '400', variable: '--font-knewave' });
const bricolage_grotesque = Bricolage_Grotesque({ subsets: ['latin'], weight: '400', variable: '--font-bricolage-grotesque'  });

export const metadata: Metadata = {
  title: "Katie Young, Software Engineer",
  description: "Full-stack software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${knewave.variable} ${bricolage_grotesque.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
