import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ParallaxContainerProps {
  children: React.ReactNode;
  multiplier?: number;
  className?: string;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
  };
}

export function ParallaxContainer({
  children,
  multiplier = 1,
  className = "",
  springConfig = { damping: 20, stiffness: 200, mass: 0.2 },
}: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create spring animations
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

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

  const x = useTransform(springX, (latest) => latest * -20 * multiplier);
  const y = useTransform(springY, (latest) => latest * -20 * multiplier);

  return (
    <div ref={containerRef} className={className}>
      <motion.div style={{ x, y }}>{children}</motion.div>
    </div>
  );
}
