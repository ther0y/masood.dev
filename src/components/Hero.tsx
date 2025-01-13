import { FloatingSquares } from "./FloatingSquares";
import { MapPin } from "lucide-react";
import React from "react";

interface HeroProps {
  variant?: "home" | "play";
}

export function Hero({ variant = "home" }: HeroProps) {
  if (variant === "play") {
    return (
      <section className="relative min-h-[20vh] overflow-hidden py-20">
        <FloatingSquares variant="play" />

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <h1 className="cyberpunk-text font-semibold text-7xl tracking-tighter">
                hi, i&apos;m masood
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <MapPin className="h-5 w-5 bg-clip-text text-transparent [color:#ff7171]" />
              <span>tehran, iran</span>
            </div>
            <p className="mx-auto max-w-lg text-gray-500">
              Currently shaping digital solutions at{" "}
              <a
                href="https://globalworkandtravel.com"
                className="px-1 text-gray-900 underline"
                target="_blank"
              >
                global work & travel
              </a>
              , a leading gap year travel company, inspiring youth to travel the
              world!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[20vh] overflow-hidden py-20">
      <FloatingSquares variant="home" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            <h1 className="black-gradient-h1 font-semibold text-7xl tracking-tighter">
              hi, i&apos;m masood
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <MapPin className="h-5 w-5" />
            <span>tehran, iran</span>
          </div>
          <p className="mx-auto max-w-lg text-gray-500">
            Currently shaping digital solutions at{" "}
            <a
              href="https://globalworkandtravel.com"
              className="px-1 text-gray-900 underline"
              target="_blank"
            >
              global work & travel
            </a>
            , a leading gap year travel company, inspiring youth to travel the
            world!
          </p>
        </div>
      </div>
    </section>
  );
}
