import { Construction } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-12 text-center shadow-sm">
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Construction className="h-12 w-12 text-gray-400" />
      </motion.div>
      <div className="space-y-2">
        <h2 className="cyberpunk-text text-2xl font-semibold">
          Under Construction
        </h2>
        <p className="text-gray-500">
          Building something fun! Check back soon for exciting projects and
          experiments.
        </p>
      </div>
    </div>
  );
}
