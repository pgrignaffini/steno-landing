/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";
import { useRef } from "react";
import { useInView } from "framer-motion";
import PodcastCarousel from "~/components/PodcastCarousel";
import { motion } from "framer-motion";
import FirstDesc from "~/components/FirstDesc";
import FadeInWhenVisible from "~/components/FadeInWhenVisible";
import SecondDesc from "~/components/SecondDesc";
import ChatBubbles from "~/components/ChatBubbles";
import Stenobot from "~/components/Stenobot";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

function Section({ children, className }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        className={`${className ? className : ""}`}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#fafafa] pb-6 text-[14px]">
        <Header />
        <Section
          aria-label="hero"
          className="flex h-[50vh] flex-col items-center justify-center space-y-8"
        >
          <h1 className="w-[650px] text-center text-[56px] font-semibold leading-[68px]">
            <span className="bg-[url('https://uploads-ssl.webflow.com/64388368a56ba5171874b3b2/6440aab6f3e5b6e72897f732_text-underline.svg')] bg-contain bg-[bottom] bg-no-repeat pb-4">
              Extract
            </span>{" "}
            insights from audio &amp; visual content
          </h1>
          <p className="text-[19px] text-[#93979f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="rounded-3xl bg-gradient-to-r from-[#f10] via-[#ff00e7] via-50% to-[#00e5ff] p-[2px]">
              <button className="rounded-3xl bg-white px-4 py-2 font-semibold text-black">
                Join beta
              </button>
            </div>
          </motion.div>
        </Section>
        <section className="space-y-6 overflow-x-hidden py-4">
          <PodcastCarousel />
          <PodcastCarousel reverse />
        </section>
        <section className="mt-32 w-full space-y-16">
          <div className="mx-auto w-[650px] space-y-6 text-center">
            <h2 className="text-4xl font-semibold">Lorem ipsum dolor</h2>
            <p className="text-xl text-[#93979f]">
              Lorem ipsum dolor sit amet, consectetur. Ut et convallis urna, a
              eleifend mi. Vestibulum a dolor id velit viverra
            </p>
          </div>
          <FirstDesc />
          <SecondDesc />
          <ChatBubbles />
        </section>
        <FadeInWhenVisible className="mt-32 flex w-full flex-col items-center justify-center space-y-8">
          <img
            src="sparkle.svg"
            alt="sparkle"
            className="h-[68px] w-[68px] -rotate-6"
          />
          <h1 className="text-4xl font-semibold">Growing business?</h1>
          <p className="text-[19px] text-[#93979f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <button className="rounded-2xl bg-black px-[16px] py-[10px] font-semibold text-white ">
              Join beta
            </button>
          </motion.div>
        </FadeInWhenVisible>

        <FadeInWhenVisible className="mx-auto mt-24 flex h-[455px] w-full flex-col items-center justify-center space-y-6 bg-[url('/bg-rainbow.svg')] bg-contain bg-center bg-no-repeat pt-16">
          <h1 className="text-4xl font-semibold">Get early access</h1>
          <p className="text-[19px] text-[#93979f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="rounded-3xl bg-gradient-to-r from-[#f10] via-[#ff00e7] via-50% to-[#00e5ff] p-[2px]">
              <button className="rounded-3xl bg-white px-4 py-2 font-semibold text-black">
                Join beta
              </button>
            </div>
          </motion.div>
        </FadeInWhenVisible>
        <div className="fixed bottom-4 right-4 z-50">
          <Stenobot />
        </div>
      </main>
    </>
  );
};

export default Home;
