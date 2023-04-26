/* eslint-disable @next/next/no-img-element */
import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Typewriter } from "react-simple-typewriter";

function SecondDesc() {
  return (
    <FadeInWhenVisible className="mx-auto flex w-4/5 max-w-[1400px] items-center justify-between gap-36 p-12">
      <div className="h-[355px] w-2/3 origin-center -rotate-6 overflow-hidden rounded-3xl bg-white p-6 shadow-2xl">
        <div className="h-[240px] w-full rounded-3xl border-2 bg-[#F7F6F7] p-4">
          <span className="text-xl">
            <Typewriter
              words={[
                "An example question?",
                "This is an example question?",
                "Another example question?",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center rounded-xl border-2 p-2">
            <p className="font-bold text-[#93979f]">All Podcasts</p>
          </div>
          <div className="flex items-center space-x-2 rounded-2xl bg-black p-2 pr-3">
            <img src="/search_icon.svg" alt="search" className="h-6 w-6" />
            <p className="font-semibold text-white">Search</p>
          </div>
        </div>
      </div>
      <div className="h-full space-y-4">
        <img src="search.svg" alt="enrich" className="h-10 w-10 " />
        <h1 className="text-4xl font-semibold">Search for anything </h1>
        <p className="text-xl text-[#93979f]">
          Easily find relevant brands, people, keywords, and products, broken
          down by digestible insights
        </p>
      </div>
    </FadeInWhenVisible>
  );
}

export default SecondDesc;
