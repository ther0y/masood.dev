import "./globals.css";

import { Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/navs";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masood - Developer",
  description: "Web developer, crafting apps and websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F8F8F8]">
      <body className={cn(geist.className, "min-h-screen text-gray-900")}>
        <div className="flex min-h-screen flex-col">
          <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
            {/* Header */}
            <header className="flex items-center justify-between">
              {/* Avatar */}
              <Link
                href="/"
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
              >
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image
                    src="/images/me.webp"
                    alt="Masood's profile picture"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              {/* Navigation */}
              <Nav />

              {/* Menu Button */}
              <button className="flex h-10 w-10 items-center justify-center opacity-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </header>

            {/* Main Content */}
            <main className="py-8">{children}</main>
          </div>

          {/* Footer */}
          <footer className="w-full py-8">
            <div className="mx-auto max-w-4xl px-4">
              <div className="flex justify-center gap-6">
                <a
                  href="https://twitter.com"
                  className="text-gray-500 transition-colors hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-500 transition-colors hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
              <p className="mt-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Masood. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
