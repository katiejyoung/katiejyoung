import type { Metadata } from "next";
import "./globals.css";

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
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
