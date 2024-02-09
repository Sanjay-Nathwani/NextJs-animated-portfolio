"use client";

import {motion,useScroll,useTransform} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Elite Cart",
    desc: "A feature-rich online shopping platform that offers a seamless and user-friendly shopping experience. Built on the powerful combination of MongoDB, Express.js, React, and Node.js, it provides the foundation for a dynamic and responsive e-commerce application.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://elite-cart.onrender.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "RoomRover (Booking App)",
    desc: "Experience seamless hotel booking with our MERN stack web app. Our intuitive platform offers a user-friendly interface, robust search functionality, and secure payment processing, ensuring a hassle-free experience for travelers. With real-time updates and responsive design, planning your next getaway has never been easier.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://mern-booking-app-1nmb.onrender.com/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Blog App",
    desc: "Discover the power of our MERN stack blog application. Engage with dynamic content creation, intuitive navigation, and personalized user experiences. With seamless integration of MongoDB, Express.js, React, and Node.js, publishing and sharing your stories has never been more efficient and enjoyable.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://mern-blog-app-4dio.onrender.com/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Fun_ToDo",
    desc: "Unlock productivity with our Django-based ToDo application. Seamlessly manage tasks, set priorities, and track progress with our intuitive interface. Backed by Django's robust framework, our app offers reliability, scalability, and effortless task organization, empowering you to accomplish more with ease.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://django-multiuser-todo.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-85px)] flex items-center justify-center text-8xl text-center">
          My Works
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
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} `}
                key={item.id}
              >
                <div className="flex flex-col gap-5 text-white">
                  <h1 className="text-xl font-bold md:text-3xl lg:text-5xl xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative w-72 h-56 md:w-96 md:h-60 lg:w-[500px] lg:h-[300px] xl:w-[540px] xl:h-[340px]">
                    <Image
                      src={item.img}
                      alt="project.img"
                      fill
                      className="rounded-xl"
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-3 md:text-md lg:p-5 lg:text-lg bg-white text-gray-600 font-semibold rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-8 items-center justify-center text-center">
        <h1 className="text-7xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;