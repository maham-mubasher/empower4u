"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{x: 50}} animate={{ x: 0, transition: { duration: 2 } }}
    >
      {children}
    </motion.div>
  );
}