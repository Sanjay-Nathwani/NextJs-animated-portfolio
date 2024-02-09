"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-[40%] lg:h-full lg:w-1/2 relative">
        <Image
          src="/hero1.png"
          alt="hero-img"
          className="object-contain"
          fill
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Designing Digital Destinies, One Pixel at a Time.
        </h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">
          Explore my digital canvas where creativity meets innovation. With an
          eye for aesthetics and mastery of code, my portfolio reflects a
          diverse collection of projects, showcasing a commitment to excellence.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
