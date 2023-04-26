/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { useEventListener } from "usehooks-ts";

function Stenobot() {
  const [blink, setBlink] = React.useState(false);

  React.useEffect(() => {
    const blinkInterval = setInterval(() => {
      setTimeout(() => setBlink(true), 500);
      setBlink(false);
    }, 4500); // 0.5s blink every 4.5s

    return () => clearInterval(blinkInterval);
  }, []);

  const onMouseMove = (e: MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById("anchor");
    const rect = anchor?.getBoundingClientRect();
    const anchorX = (rect?.left as number) + (rect?.width as number) / 2;
    const anchorY = (rect?.top as number) + (rect?.height as number) / 2;

    const angleDeg = angle(anchorX, anchorY, mouseX, mouseY);

    const leftEye = document.getElementById("left-eye");
    const rightEye = document.getElementById("right-eye");
    const eyes = [leftEye, rightEye];
    eyes.forEach((eye) => {
      if (!eye) return;
      eye.style.left = String(anchorX + Math.cos(angleDeg) * 20) + "px";
      eye.style.top = String(anchorY + Math.sin(angleDeg) * 20) + "px";
    });
  };

  const angle = (cx: number, cy: number, ex: number, ey: number) => {
    const dy = ey - cy;
    const dx = ex - cx;
    let theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    return theta;
  };

  useEventListener("mousemove", onMouseMove);

  return (
    <div
      id="anchor"
      className="relative z-10 h-[86px] w-[100px] bg-[url('/stenobot.png')] bg-contain bg-no-repeat"
    >
      <img
        src="https://uploads-ssl.webflow.com/64388368a56ba5171874b3b2/64388be5aa302248582c93f0_Blur.png"
        loading="lazy"
        alt="blur"
        className="z-20"
      />
      <div className="absolute left-8 top-[30px] z-30 flex  items-center space-x-3">
        <motion.div
          id="left-eye"
          layout
          animate={{
            height: blink ? "16px" : "2px",
            y: blink ? "0px" : "8px",
          }}
          className="w-[10px] origin-center rounded-full bg-[#fff]"
        />
        <motion.div
          id="right-eye"
          layout
          animate={{
            height: blink ? "16px" : "2px",
            y: blink ? "0px" : "8px",
          }}
          className="w-[10px] origin-center rounded-full bg-[#fff]"
        />
      </div>
    </div>
  );
}

export default Stenobot;
