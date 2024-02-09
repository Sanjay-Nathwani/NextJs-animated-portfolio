"use client";

import {motion} from "framer-motion";
import { useState,useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {

    const text = "Say Hello";

    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      setError(false);
      setSuccess(false);

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY,
        )
        .then(
          (result) => {
            setSuccess(true);
            form.current.reset();
          },
          (error) => {
            setError(true);
          }
        );
    };

    return (
      <motion.div
        className="h-full overflow-scroll"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row py-5 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* text container */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl mb-3">
            <div>
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              😎
            </div>
          </div>

          {/* form container */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="min-h-1/2 lg:h-full lg:w-1/2 bg-purple-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
          >
            <span>Dear Sanjay,</span>
            <textarea
              rows={6}
              className="resize-none bg-transparent border-b-2 border-b-black outline-none"
              name="user_message"
              required
            />
            <span>My mail address is:</span>
            <input
              name="user_email"
              type="text"
              className="bg-transparent border-b-2 border-b-black outline-none"
              required
            />
            <span>Regards</span>
            <button className="bg-purple-400 rounded font-semibold text-gray-600 p-4">
              Send
            </button>
            {success && (
              <span className="text-green-600 font-semibold">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold">
                Something went wrong!
              </span>
            )}
          </form>
        </div>
      </motion.div>
    );
}

export default ContactPage;