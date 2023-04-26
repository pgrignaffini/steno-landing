import React from "react";
import { motion } from "framer-motion";

type FadeInWhenVisibleProps = {
  children: React.ReactNode;
  className?: string;
};

function FadeInWhenVisible({ children, className }: FadeInWhenVisibleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: "easeOut",
        type: "spring",
        delay: 0.2,
      }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
