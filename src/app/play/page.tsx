"use client";

import { Hero } from "@/components/Hero";
import React from "react";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function Play() {
  return (
    <div className="space-y-0 pt-10">
      <Hero variant="play" />

      {/* Play Items */}
      <div className="space-y-6 !:mt-4">
        <UnderConstruction />
      </div>
    </div>
  );
}
