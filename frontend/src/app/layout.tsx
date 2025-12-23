import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "스타터 키트",
  description: "Next.js + Spring Boot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
