import type { Metadata } from "next";
import "@core/styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "../core/providers";
import { cn } from "@core/libraries";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Starter",
  description: "Create by @nikkoabucejo",
};

const Root: Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn("Hello World", font.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default Root;
