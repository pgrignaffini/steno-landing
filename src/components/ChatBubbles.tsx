/* eslint-disable @next/next/no-img-element */
import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { motion } from "framer-motion";

function ChatBubbles() {
  return (
    <FadeInWhenVisible className="mx-auto flex w-4/5 max-w-[1400px] items-center justify-between gap-16 rounded-3xl border-2 bg-[#F5F5F5] p-12">
      <div className="h-full w-1/2 space-y-4">
        <img src="bot.svg" alt="bot" className="h-10 w-10 " />
        <h1 className="text-4xl font-semibold">Ask Steno anything </h1>
        <p className="text-xl text-[#93979f]">
          What if you could ask Dr. Andrew Huberman about the ideal morning
          routine? Well, now you can.
        </p>
      </div>
      <div className="w-1/2 space-y-8">
        <div className="flex w-full justify-end">
          <div className="relative h-[95px] w-[340px] rounded-3xl bg-[#93979F] p-4">
            <img
              src="bubble2.svg"
              alt="bubble"
              style={{
                transform: "rotateX(0)rotateY(180deg)rotateZ(-27deg)",
              }}
              className=" absolute -bottom-4 right-6 w-12"
            />
            <span className="text-lg text-white">
              What&apos;s the first thing I should do in the morning?
            </span>
          </div>
        </div>
        <div className="flex w-full justify-start">
          <div className="relative h-[140px] w-[340px] rounded-3xl bg-[#299EFF] p-4">
            <img
              src="bubble.svg"
              alt="bubble"
              className="absolute -bottom-4 left-6 w-12 rotate-[-27deg] "
            />
            <span className="text-lg text-white">
              Try and get outside, ideally within the first five minutes of
              waking or maybe it&apos;s 15 minutes, but certainly within the
              first hour after waking.
            </span>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex w-fit space-x-3 rounded-3xl bg-white p-4">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  initial={{ scale: 1, backgroundColor: "#F5F5F5" }}
                  animate={{ scale: 1.5, backgroundColor: "#93979F" }}
                  transition={{
                    delay: i * 0.2,
                    duration: 2,
                    ease: [0.075, 0.82, 0.165, 1],
                    repeat: Infinity,
                  }}
                  key={i}
                  className="h-2 w-2 rounded-full"
                ></motion.div>
              ))}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}

export default ChatBubbles;
