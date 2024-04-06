import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipe page",
  description: "Recipe page for Simple Omelette Recipe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-eggshell ${inter.className}`}>{children}</body>
    </html>
  );
}
