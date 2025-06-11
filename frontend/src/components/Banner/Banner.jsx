"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Banner = () => {
  return (
    <div className="flex flex-col pt-32 justify-center px-6 bg-black text-white overflow-hidden">
      {/* Heading */}
      <motion.div
        className="flex flex-col gap-4 mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
      >
        <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold leading-tight">
          Transforming Your <br />
          Ideas into <span className="text-purple-500">Reality</span>
        </h1>

        {/* Subheading */}
        <motion.p
          className="text-gray-300 text-lg w-10/12"
          variants={fadeUp}
          custom={2}
        >
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </motion.p>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="flex flex-wrap gap-10 mb-10"
        initial="hidden"
        animate="visible"
      >
        {[
          { num: "+12", label: "Years of Experience" },
          { num: "+46", label: "Projects Completed" },
          { num: "+20", label: "Worldwide Clients" },
        ].map((stat, index) => (
          <motion.div key={index} variants={fadeUp} custom={index + 3}>
            <h2 className="text-4xl font-bold">{stat.num}</h2>
            <p className="text-gray-400 uppercase text-sm mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap gap-6"
        initial="hidden"
        animate="visible"
      >
        <motion.button
          className="bg-purple-600 text-white px-6 py-3 cursor-pointer rounded-2xl font-semibold hover:bg-purple-700 "
          variants={fadeUp}
          custom={7}
        >
          Let's Talk
        </motion.button>
        <motion.button
          className="text-purple-500 font-semibold text-lg cursor-pointer"
          variants={fadeUp}
          custom={7}
        >
          My Work →
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Banner;
