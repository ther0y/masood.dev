import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

import React from "react";

interface FloatingSquaresProps {
  variant?: "home" | "play";
}

const squares = [
  // Front layer (1.0 opacity) - Largest sizes
  {
    x: "15%",
    y: "10%",
    size: 8,
    rotate: 15,
    multiplier: 1.2,
    depth: 1.0,
    side: "left",
  },
  {
    x: "85%",
    y: "15%",
    size: 7,
    rotate: -15,
    multiplier: 1.2,
    depth: 1.0,
    side: "right",
  },

  // Middle layer (0.7 opacity) - Medium-large sizes
  {
    x: "25%",
    y: "25%",
    size: 6,
    rotate: 20,
    multiplier: 0.8,
    depth: 0.7,
    side: "left",
  },
  {
    x: "75%",
    y: "35%",
    size: 5,
    rotate: -20,
    multiplier: 0.8,
    depth: 0.7,
    side: "right",
  },
  {
    x: "10%",
    y: "45%",
    size: 4,
    rotate: 15,
    multiplier: 0.8,
    depth: 0.4,
    side: "left",
  },
  {
    x: "90%",
    y: "55%",
    size: 3,
    rotate: -15,
    multiplier: 0.8,
    depth: 0.4,
    side: "right",
  },

  // Back layer (mixed depths)
  {
    x: "20%",
    y: "65%",
    size: 7,
    rotate: 25,
    multiplier: 0.4,
    depth: 0.7,
    side: "left",
  },
  {
    x: "80%",
    y: "75%",
    size: 5,
    rotate: -25,
    multiplier: 0.4,
    depth: 0.4,
    side: "right",
  },
  {
    x: "30%",
    y: "70%",
    size: 3,
    rotate: 15,
    multiplier: 0.4,
    depth: 0.4,
    side: "left",
  },
  {
    x: "70%",
    y: "85%",
    size: 6,
    rotate: -15,
    multiplier: 0.4,
    depth: 0.7,
    side: "right",
  },

  // Extra background squares (mixed depths)
  {
    x: "5%",
    y: "80%",
    size: 4,
    rotate: 30,
    multiplier: 0.2,
    depth: 0.4,
    side: "left",
  },
  {
    x: "95%",
    y: "90%",
    size: 2,
    rotate: -30,
    multiplier: 0.2,
    depth: 0.2,
    side: "right",
  },
  {
    x: "35%",
    y: "95%",
    size: 5,
    rotate: 20,
    multiplier: 0.2,
    depth: 0.7,
    side: "left",
  },
  {
    x: "65%",
    y: "85%",
    size: 3,
    rotate: -20,
    multiplier: 0.2,
    depth: 0.4,
    side: "right",
  },
];

const cyberpunkColors = ["#adf1e0", "#8075ff", "#ff7171"];

// Define opacity levels based on depth and variant
const getOpacityByDepth = (depth: number, variant: "home" | "play") => {
  if (variant === "play") {
    // Lower opacity values for play variant
    if (depth === 1.0) return 0.5;
    if (depth === 0.7) return 0.35;
    if (depth === 0.4) return 0.2;
    return 0.1;
  } else {
    // Original opacity values for home variant
    if (depth === 1.0) return 1;
    if (depth === 0.7) return 0.7;
    if (depth === 0.4) return 0.4;
    return 0.2;
  }
};

// Define a custom hook to handle the transform logic
function useSquareTransform(
  springX: MotionValue<number>,
  springY: MotionValue<number>,
  multiplier: number
) {
  const x = useTransform(
    springX,
    (latest: number) => latest * -100 * multiplier
  );
  const y = useTransform(
    springY,
    (latest: number) => latest * -100 * multiplier
  );
  return { x, y };
}

// Square component to handle individual squares
function Square({
  square,
  springX,
  springY,
  variant,
  index,
}: {
  square: (typeof squares)[0];
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  variant: "home" | "play";
  index: number;
}) {
  const shapeClass = variant === "play" ? "rounded-full" : "rounded-lg";
  const colorClass =
    variant === "home"
      ? square.depth === 1.0
        ? "bg-gray-400"
        : square.depth === 0.7
        ? "bg-gray-300"
        : square.depth === 0.4
        ? "bg-gray-200"
        : "bg-gray-100"
      : "";

  const { x, y } = useSquareTransform(springX, springY, square.multiplier);

  return (
    <motion.div
      key={index}
      className={`absolute ${shapeClass} ${colorClass}`}
      style={{
        x,
        y,
        left: square.x,
        top: square.y,
        width: `${square.size * 4}px`,
        height: `${square.size * 4}px`,
        rotate: `${square.rotate}deg`,
        opacity: getOpacityByDepth(square.depth, variant),
        ...(variant === "play" && {
          backgroundColor: cyberpunkColors[index % cyberpunkColors.length],
        }),
      }}
    />
  );
}

export function FloatingSquares({ variant = "home" }: FloatingSquaresProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for smooth movement
  const config = { damping: 15, stiffness: 150, mass: 0.1 };

  // Create spring animations for each square
  const springX = useSpring(mouseX, config);
  const springY = useSpring(mouseY, config);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const bounds = containerRef.current.getBoundingClientRect();

      if (
        e.clientX >= bounds.left &&
        e.clientX <= bounds.right &&
        e.clientY >= bounds.top &&
        e.clientY <= bounds.bottom
      ) {
        const x = (e.clientX - bounds.left) / bounds.width - 0.5;
        const y = (e.clientY - bounds.top) / bounds.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      } else {
        mouseX.set(0);
        mouseY.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0">
      <div className="relative h-full w-full">
        {squares.map((square, index) => (
          <Square
            key={index}
            square={square}
            springX={springX}
            springY={springY}
            variant={variant}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
