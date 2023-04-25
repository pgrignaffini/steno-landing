import React from "react";
import { motion } from "framer-motion";
import PodcastTile from "./PodcastTile";

type PodcastCarouselProps = {
  reverse?: boolean;
};

function PodcastCarousel({ reverse = false }: PodcastCarouselProps) {
  return (
    <motion.div
      layoutScroll
      aria-label="podcast-carousel"
      className="flex items-center space-x-4"
      animate={{
        x: reverse ? ["-100%", "100%"] : ["100%", "-100%"],
      }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <PodcastTile key={index} />
      ))}
    </motion.div>
  );
}

export default PodcastCarousel;
