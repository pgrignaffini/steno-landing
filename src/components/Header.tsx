/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  const [blink, setBlink] = React.useState(false);

  React.useEffect(() => {
    const blinkInterval = setInterval(() => {
      setTimeout(() => setBlink(true), 500);
      setBlink(false);
    }, 4500); // 0.5s blink every 4.5s

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg">
      <div className="flex w-full items-center saturate-200">
        <div className="h-[2px] w-1/2 bg-gradient-to-r from-[#f10] via-[#ff00e7] via-50% to-[#00e5ff]" />
        <div className="h-[2px] w-1/2 bg-gradient-to-r from-[#00e5ff] via-[#0f3] via-50% to-[#fcad00]" />
      </div>
      <div className="mx-auto flex w-screen max-w-[1400px] items-center justify-between px-[120px] py-[16px]">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative z-10 h-[32px] w-[46px] bg-[url('/goggles.png')] bg-contain bg-no-repeat">
            <img
              src="https://uploads-ssl.webflow.com/64388368a56ba5171874b3b2/64388be5aa302248582c93f0_Blur.png"
              loading="lazy"
              alt="blur"
              className="z-20"
            />
            <div className="absolute left-3 top-[10px] z-30 flex  items-center space-x-[6px]">
              <motion.div
                layout
                animate={{
                  height: blink ? "11px" : "2px",
                  y: blink ? "0px" : "4px",
                }}
                className="h-[11px] w-[8px] origin-center rounded-full bg-[#fff]"
              />
              <motion.div
                layout
                animate={{
                  height: blink ? "11px" : "2px",
                  y: blink ? "0px" : "4px",
                }}
                className="h-[11px] w-[8px] origin-center rounded-full bg-[#fff]"
              />
            </div>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/64388368a56ba5171874b3b2/6441cd657814233f5529da1b_Vector.svg"
            loading="lazy"
            alt=""
            className="h-[24px]"
          />
        </Link>
        <button className="rounded-2xl bg-black px-[16px] py-[10px] font-semibold text-white ">
          Join beta
        </button>
      </div>
    </div>
  );
}

export default Header;
