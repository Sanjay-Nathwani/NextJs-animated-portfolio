"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({children}) => {

    const pathname = usePathname();

    return (
      <AnimatePresence mode="wait">
        <div
          key={pathname}
          className="w-screen h-full bg-gradient-to-b from-blue-100 to-green-200"
        >
          <motion.div
            className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
            animate={{ height: "0vh" }}
            exit={{ height: "140vh" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="fixed top-0 bottom-0 left-0 right-0 m-auto text-white text-8xl cursor-default z-50 w-fit h-fit"
            initial={{ opacity : 1 }}
            animate={{opacity: 0}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {pathname === "/" ? "Home" : pathname[1].toUpperCase()+pathname.substring(2)}
          </motion.div>
          <motion.div
            className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
            initial={{ height: "140vh" }}
            animate={{ height: "0vh", transition: { delay: 0.5 } }}
          />
          <div className="h-[85px]">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-85px)]">{children}</div>
        </div>
      </AnimatePresence>
    );
}

export default TransitionProvider;