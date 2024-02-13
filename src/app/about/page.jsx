"use client";
import Brain from "../../components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  // const experienceRef = useRef();
  // const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, {margin: "-100px"});

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Hello! I&apos;m Sanjay Nathwani, an aspiring full-stack web
              developer passionate about leveraging technology to create
              meaningful digital experiences. Equipped with foundational
              knowledge in HTML, CSS, and JavaScript, I&apos;m eager to embark
              on my journey into full-stack development. With a keen eye for
              design and a knack for problem-solving, I&apos;m committed to
              mastering both front-end and back-end technologies to build
              dynamic and user-friendly web applications.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Passion is the heartbeat of every line of code we write.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="85.000000pt"
                height="37.000000pt"
                viewBox="0 0 85.000000 37.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,37.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M68 345 c-68 -46 -73 -75 -23 -128 19 -20 35 -41 35 -47 0 -5 -15
                    -16 -34 -24 -40 -17 -53 -34 -32 -42 8 -3 34 6 59 20 50 30 59 32 51 12 -10
                    -26 17 -29 49 -5 20 15 32 18 35 11 5 -16 37 -15 54 0 43 41 47 42 41 4 -7
                    -42 4 -46 37 -11 27 28 48 32 56 10 9 -23 25 -18 61 17 l33 32 0 -32 c0 -17
                    -11 -52 -25 -78 -14 -26 -25 -55 -25 -65 0 -37 21 -18 49 44 15 34 35 68 45
                    76 14 12 16 12 11 -2 -11 -26 16 -30 48 -6 20 15 32 18 35 11 5 -17 28 -15 57
                    4 24 16 25 15 25 -5 0 -27 18 -27 47 1 22 21 23 21 23 2 0 -11 -18 -45 -40
                    -74 -41 -55 -47 -70 -30 -70 11 0 60 51 60 63 0 4 19 28 41 52 23 25 37 45 32
                    45 -5 0 -15 -6 -22 -12 -12 -11 -13 -9 -6 7 14 36 17 65 8 65 -5 0 -22 -14
                    -38 -30 -35 -37 -47 -38 -39 -5 8 33 0 32 -47 -6 -34 -27 -39 -28 -39 -12 0
                    33 -12 34 -49 6 -34 -25 -34 -24 8 20 64 67 37 75 -34 11 -12 -11 -31 -28 -44
                    -39 l-23 -20 7 53 c4 28 3 52 -1 52 -5 0 -29 -21 -55 -46 -44 -43 -47 -45 -54
                    -25 -8 25 -23 27 -53 6 -21 -16 -22 -15 -16 15 9 43 -11 39 -63 -12 -36 -36
                    -43 -39 -43 -22 0 34 -11 35 -49 7 -35 -26 -35 -25 7 18 23 25 42 48 42 52 0
                    16 -25 5 -70 -33 -51 -43 -60 -47 -60 -27 0 7 -14 29 -31 50 -33 40 -35 68 -6
                    73 38 5 78 64 44 64 -7 0 -29 -11 -49 -25z"
                  />
                  <path d="M522 318 c-17 -17 -15 -38 3 -38 16 0 38 34 28 44 -9 9 -18 7 -31 -6z" />
                </g>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git / GitHub
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Django
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* education container */}
          <div
            className="flex flex-col gap-12 justify-center pb-16"
            ref={educationRef}
          >
            <motion.h1
              initial={{ x: "-340px" }}
              animate={isEducationRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: 0 } : {}}
              className="flex flex-col gap-2"
            >
              {/* bachelor */}
              <div className="flex items-center p-4 border border-slate-600 rounded-md">
                <div className="flex items-center justify-center w-40">
                  <Image
                    src="/edu.png"
                    alt="education"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="font-semibold">2020-2024</p>
                  <h3 className="font-bold text-[20px] text-clip">
                    Bachelor in Computer Science
                  </h3>
                  <p>Rashtriya Raksha University (Gandhinagar)</p>
                </div>
              </div>

              {/* higher secondary */}
              <div className="flex items-center p-4 border border-slate-600 rounded-md">
                <div className="flex items-center justify-center w-40">
                  <Image
                    src="/edu.png"
                    alt="education"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="font-semibold">2019-2020</p>
                  <h3 className="font-bold text-[20px] text-clip">
                    Higher Secondary Certificate
                  </h3>
                  <p>Sarwa Mangal School (Vadodara)</p>
                </div>
              </div>

              {/* secondary school */}
              <div className="flex items-center p-4 border border-slate-600 rounded-md">
                <div className="flex items-center justify-center w-40">
                  <Image
                    src="/edu.png"
                    alt="education"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="font-semibold">2017-2018</p>
                  <h3 className="font-bold text-[20px] text-clip">
                    Secondary School Certificate
                  </h3>
                  <p>Sarwa Mangal School (Vadodara)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;


// to include experience section use the below code

// {
//   /* EXPERIENCE CONTAINER */
// }
// <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
//   {/* EXPERIENCE TITLE */}
//   <motion.h1
//     initial={{ x: "-340px" }}
//     animate={isExperienceRefInView ? { x: "0" } : {}}
//     transition={{ delay: 0.2 }}
//     className="font-bold text-2xl"
//   >
//     EXPERIENCE
//   </motion.h1>
//   {/* EXPERIENCE LIST */}
//   <motion.div
//     initial={{ x: "-300px" }}
//     animate={isExperienceRefInView ? { x: "0" } : {}}
//     className=""
//   >
//     {/* EXPERIENCE LIST ITEM */}
//     <div className="flex justify-between h-48">
//       {/* LEFT */}
//       <div className="w-1/3 ">
//         {/* JOB TITLE */}
//         <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
//           Senior JavaScript Engineer
//         </div>
//         {/* JOB DESC */}
//         <div className="p-3 text-sm italic">
//           I led web development, offering expertise in JavaScript frameworks.{" "}
//         </div>
//         {/* JOB DATE */}
//         <div className="p-3 text-red-400 text-sm font-semibold">
//           2024 - Present
//         </div>
//         {/* JOB COMPANY */}
//         <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
//           Apple
//         </div>
//       </div>
//       {/* CENTER */}
//       <div className="w-1/6 flex justify-center">
//         {/* LINE */}
//         <div className="w-1 h-full bg-gray-600 rounded relative">
//           {/* LINE CIRCLE */}
//           <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//         </div>
//       </div>
//       {/* RIGHT */}
//       <div className="w-1/3 "></div>
//     </div>
//     {/* EXPERIENCE LIST ITEM */}
//     <div className="flex justify-between h-48">
//       {/* LEFT */}
//       <div className="w-1/3 "></div>
//       {/* CENTER */}
//       <div className="w-1/6 flex justify-center">
//         {/* LINE */}
//         <div className="w-1 h-full bg-gray-600 rounded relative">
//           {/* LINE CIRCLE */}
//           <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//         </div>
//       </div>
//       {/* RIGHT */}
//       <div className="w-1/3 ">
//         {/* JOB TITLE */}
//         <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
//           Senior React Developer
//         </div>
//         {/* JOB DESC */}
//         <div className="p-3 text-sm italic">
//           I spearheaded React-based application development, leveraging advanced
//           skills.{" "}
//         </div>
//         {/* JOB DATE */}
//         <div className="p-3 text-red-400 text-sm font-semibold">
//           2019 - 2024{" "}
//         </div>
//         {/* JOB COMPANY */}
//         <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
//           Microsoft
//         </div>
//       </div>
//     </div>
//     {/* EXPERIENCE LIST ITEM */}
//     <div className="flex justify-between h-48">
//       {/* LEFT */}
//       <div className="w-1/3 ">
//         {/* JOB TITLE */}
//         <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
//           Freelancer{" "}
//         </div>
//         {/* JOB DESC */}
//         <div className="p-3 text-sm italic">
//           I provided web solutions, applying a range of technologies to address
//           client requirements.{" "}
//         </div>
//         {/* JOB DATE */}
//         <div className="p-3 text-red-400 text-sm font-semibold">
//           2010 - 2019{" "}
//         </div>
//       </div>
//       {/* CENTER */}
//       <div className="w-1/6 flex justify-center">
//         {/* LINE */}
//         <div className="w-1 h-full bg-gray-600 rounded relative">
//           {/* LINE CIRCLE */}
//           <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//         </div>
//       </div>
//       {/* RIGHT */}
//       <div className="w-1/3 "></div>
//     </div>
//   </motion.div>
// </div>;
