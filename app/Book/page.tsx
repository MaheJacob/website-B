"use client";

import Header from "@/components/Header";
import { InlineWidget } from "react-calendly";



const Book = () => {
  return (
    <>
      <div  className="w-full md:items center md:justify-center overflow-hidden antialiased bg-baki/[0.96] relative bg-black">
      <Header />
        <div className="text-4xl pb-5 md:text-6xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Book a meeting
        </div>

        <InlineWidget url="https://calendly.com/brandwebify/brand-strategy-and-consultation" />
      </div>
    </>
  );
};


export default Book