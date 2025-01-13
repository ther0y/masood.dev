"use client";

import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { ParallaxContainer } from "./ParallaxContainer";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<"work" | "play">(
    pathname === "/play" ? "play" : "work"
  );
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const workButtonRef = useRef<HTMLAnchorElement>(null);
  const playButtonRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeButton =
      activeTab === "work" ? workButtonRef.current : playButtonRef.current;
    const container = containerRef.current;

    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setPillStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(pathname === "/play" ? "play" : "work");
  }, [pathname]);

  return (
    <nav
      ref={containerRef}
      className="relative flex gap-2 rounded-full bg-gray-100 p-1"
    >
      {/* Animated Background Pill */}
      <div
        className="absolute inset-y-1 left-0 rounded-full bg-white shadow-sm transition-all duration-200"
        style={{
          transform: `translateX(${pillStyle.left}px)`,
          width: pillStyle.width,
        }}
      />

      <ParallaxContainer multiplier={0.1} className="relative z-10">
        <Link
          ref={workButtonRef}
          href="/"
          className={cn(
            "block rounded-full px-6 py-2 transition-colors",
            activeTab === "work" ? "" : "hover:bg-white/50"
          )}
        >
          work
        </Link>
      </ParallaxContainer>

      <ParallaxContainer multiplier={0.1} className="relative z-10">
        <Link
          ref={playButtonRef}
          href="/play"
          className={cn(
            "block rounded-full px-6 py-2 transition-colors",
            activeTab === "play" ? "cyberpunk-text" : "hover:bg-white/50"
          )}
        >
          play
        </Link>
      </ParallaxContainer>
    </nav>
  );
}
