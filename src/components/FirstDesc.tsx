/* eslint-disable @next/next/no-img-element */
import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

function FirstDesc() {
  return (
    <FadeInWhenVisible className="mx-auto flex w-4/5 max-w-[1400px] items-center justify-between gap-16 rounded-3xl border-2 bg-[#F5F5F5] p-12">
      <div className="h-full space-y-4">
        <img src="enrich.svg" alt="enrich" className="h-10 w-10 " />
        <h1 className="text-4xl font-semibold">
          AI-enriched podcast summaries and insights
        </h1>
        <p className="text-xl text-[#93979f]">
          Lorem ipsum dolor sit amet, consectetur. Ut et convallis urna, a
          eleifend mi. Vestibulum a dolor id velit viverra
        </p>
      </div>
      <div className="h-[355px] w-4/5 origin-center rotate-6 overflow-hidden rounded-3xl bg-white p-4 shadow-2xl">
        <div className="flex flex-col items-center space-y-6">
          <img
            src="https://uploads-ssl.webflow.com/64388368a56ba5171874b3b2/6441f8cffdee3f7a0391e3c6_300x300bb.jpg"
            alt="lex"
            className="h-16 w-16 rounded-full object-cover"
          />
          <h4 className="w-3/4 text-center text-xl font-semibold">
            Sam Altman: OpenAI CEO on GPT-4, ChatGPT, and the Future of AI
          </h4>
          <div className="flex items-center justify-center space-x-4">
            <div className="rounded-3xl bg-[#FFE8F0] p-2">
              <p className="font-semibold text-[#FF549B]">Chapters</p>
            </div>
            <p className="text-md font-semibold text-[#93979f]">Summary</p>
            <p className="text-md font-semibold text-[#93979f]">Insights</p>
          </div>
          <div className="flex h-14 w-full items-center justify-between rounded-xl border-2 p-4 opacity-60">
            <div className="flex items-center space-x-6">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.78167 6.78296C8.44976 6.55666 8 6.79436 8 7.19607V12.8039C8 13.2056 8.44976 13.4433 8.78167 13.217L12.8941 10.4131C13.1852 10.2146 13.1852 9.78537 12.8941 9.58689L8.78167 6.78296Z"
                  fill="#000"
                ></path>
              </svg>
              <p className="text-xl font-semibold text-[#93979f]">
                Introduction
              </p>
            </div>
            <p className="text-xl text-[#93979f]">00:00</p>
          </div>
          <div className="flex h-14 w-full items-center justify-between rounded-xl border-2 bg-[#FFE8F0] p-4">
            <div className="flex items-center space-x-6">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.78167 6.78296C8.44976 6.55666 8 6.79436 8 7.19607V12.8039C8 13.2056 8.44976 13.4433 8.78167 13.217L12.8941 10.4131C13.1852 10.2146 13.1852 9.78537 12.8941 9.58689L8.78167 6.78296Z"
                  fill="#000"
                ></path>
              </svg>
              <p className="text-xl font-semibold">Introduction</p>
            </div>
            <p className="text-xl">00:00</p>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}

export default FirstDesc;
