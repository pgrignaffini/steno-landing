/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function PodcastTile() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex shrink-0 items-center space-x-4 rounded-3xl bg-white px-5 py-4 shadow-xl"
      >
        <img
          src="https://uploads-ssl.webflow.com/64388368a56ba5171874b3b2/6440b69297b7b78af0be4e93_All%20In.png"
          loading="lazy"
          className="h-16 rounded-lg"
          alt="All-In Podcast"
        />
        <div>
          <h4 className="text-xl font-semibold">All-In Podcast</h4>
          <p className="text-lg  text-[#93979f]">1,293 episodes transcribed</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PodcastTile;
