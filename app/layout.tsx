import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/app/components/navbar";
import { Toaster } from "react-hot-toast";
import React from "react";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import TrpcContext from "@/context/trpc";
import { Providers } from "@/app/providers";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "black" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/taohao.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto pt-8 flex-grow">
              <TrpcContext>{children}</TrpcContext>
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link isExternal className="flex items-center gap-1 text-current">
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">@TaoHao</p>
              </Link>
            </footer>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
