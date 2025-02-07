"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SiEpicgames } from "react-icons/si";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="relative">
      {/* Header */}
      <header className="w-full h-[72px] p-[1.25rem] md:p-[1.5rem] flex items-center justify-between">
        <Link href="/">
          <SiEpicgames className="text-white w-6 h-6" />
        </Link>
      </header>

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default RootLayout;
