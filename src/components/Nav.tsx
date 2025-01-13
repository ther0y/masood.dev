import Link from "next/link";
import { ParallaxContainer } from "./ParallaxContainer";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  return (
    <ParallaxContainer multiplier={0.5}>
      <nav className="flex items-center justify-center">
        <div className="relative flex items-center gap-4 rounded-full bg-gray-100/50 p-1.5">
          <div
            className="absolute h-7 rounded-full bg-white transition-all duration-200"
            style={{
              width: "3.5rem",
              transform: `translateX(${
                pathname === "/play" ? "4.5rem" : "0.25rem"
              })`,
            }}
          />
          <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/"
              className={`rounded-full px-4 py-1 text-sm transition-colors ${
                pathname === "/" ? "font-medium text-gray-800" : "text-gray-600"
              }`}
            >
              work
            </Link>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/play"
              className={`rounded-full px-4 py-1 text-sm transition-colors ${
                pathname === "/play"
                  ? "font-medium text-gray-800"
                  : "text-gray-600"
              }`}
            >
              play
            </Link>
          </motion.div>
        </div>
      </nav>
    </ParallaxContainer>
  );
}
