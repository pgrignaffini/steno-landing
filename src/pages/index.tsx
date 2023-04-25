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
        <div className="fixed left-0 top-0 z-50 flex w-full items-center saturate-200">
          <div className="h-[2px] w-1/2 bg-gradient-to-r from-[#f10] via-[#ff00e7] via-50% to-[#00e5ff]" />
          <div className="h-[2px] w-1/2 bg-gradient-to-r from-[#00e5ff] via-[#0f3] via-50% to-[#fcad00]" />
        </div>
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
        <section className="mt-24 w-full space-y-16">
          <div className="mx-auto w-[650px] space-y-6 text-center">
            <h2 className="text-4xl font-semibold">Lorem ipsum dolor</h2>
            <p className="text-xl text-[#93979f]">
              Lorem ipsum dolor sit amet, consectetur. Ut et convallis urna, a
              eleifend mi. Vestibulum a dolor id velit viverra
            </p>
          </div>
          <FirstDesc />
          <FadeInWhenVisible className="mx-auto flex w-4/5 max-w-[1400px] items-center justify-between gap-36 p-12">
            <div className="h-[355px] w-2/3 origin-center -rotate-6 overflow-hidden rounded-3xl bg-white p-6 shadow-2xl">
              <div className="h-[240px] w-full rounded-3xl border-2 bg-[#F7F6F7]"></div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center rounded-xl border-2 p-2">
                  <p className="font-bold text-[#93979f]">All Podcasts</p>
                </div>
                <div className="flex items-center space-x-2 rounded-2xl bg-black p-2 pr-3">
                  <img
                    src="/search_icon.svg"
                    alt="search"
                    className="h-6 w-6"
                  />
                  <p className="font-semibold text-white">Search</p>
                </div>
              </div>
            </div>
            <div className="h-full space-y-4">
              <img src="search.svg" alt="enrich" className="h-10 w-10 " />
              <h1 className="text-4xl font-semibold">Search for anything </h1>
              <p className="text-xl text-[#93979f]">
                Easily find relevant brands, people, keywords, and products,
                broken down by digestible insights
              </p>
            </div>
          </FadeInWhenVisible>
        </section>
      </main>
    </>
  );
};

export default Home;
