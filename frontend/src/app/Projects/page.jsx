"use client";
import React, { useState } from "react";
import { HoverEffect } from "@/components/Packages/Cards/card-hover-effect";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["ALL", "MERN", "REACT", "NEXTJS", "JAVASCRIPT"];

const items = [
  {
    title: "Room Rental System",
    description: "A system to manage room rentals with an easy-to-use interface.",
    link: "/projects/room-rental",
    image: "/Images/ss1.png",
    tech: "MERN",
  },
  {
    title: "Gies Consultancy Site",
    description: "A consultancy website created with Next.js for modern businesses.",
    link: "/projects/consultancy",
    image: "/Images/ss.png",
    tech: "NEXTJS",
  },
  {
    title: "Portfolio",
    description: "A modern portfolio to showcase skills and projects.",
    link: "/projects/portfolio",
    image: "/Images/ss3.png",
    tech: "JAVASCRIPT",
  },
  {
    title: "Education-Website",
    description: "A responsive website designed for educational purposes.",
    link: "/projects/edu",
    image: "/Images/ss2.png",
    tech: "REACT",
  },
  {
    title: "ARIBT Website Redesign",
    description: "An app to display weather forecasts for multiple locations.",
    link: "/projects/weather",
    image: "/Images/ss4.png",
    tech: "NEXTJS",
  },
  {
    title: "Admin Dashboard",
    description: "An intuitive admin dashboard built using React.",
    link: "/projects/dashboard",
    image: "/Images/ss1.png",
    tech: "REACT",
  },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredItems =
    activeTab === "ALL"
      ? items
      : items.filter((item) => item.tech === activeTab);

  return (
    <div className="text-white py-20 px-6 md:px-20 pt-32">
      <div className="w-8/12 mx-auto">
        <h1 className="text-4xl font-bold text-center border-b-4 pb-2 mb-4">
          PROJECTS
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Here's a glimpse of the projects I've built — blending creativity,
          code, and problem-solving.
        </p>

        {/* ✅ TABS */}
        <div className="flex justify-center gap-4 pt-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Animated Filtered Projects */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <HoverEffect items={filteredItems} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Page;
