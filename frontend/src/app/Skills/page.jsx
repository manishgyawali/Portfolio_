"use client";
import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaNodeJs,
  FaDatabase,
  FaFire,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import { SiCanva, SiTypescript, SiMongodb } from "react-icons/si";

// 🎯 Skill Sections (titles, icons & descriptions only)
const skills = [
  {
    title: "Frontend Development",
    icon: <FaTools className="text-5xl text-purple-500 mx-auto mb-4" />,
    desc: "Developing blazing fast web applications for seamless user interaction.",
  },
  {
    title: "Responsive & Backend",
    icon: <FaDatabase className="text-5xl text-purple-500 mx-auto mb-4" />,
    desc: "Mobile-first, responsive design layout for all devices is a top priority.",
  },
  {
    title: "Learning & Growth",
    icon: <FaGraduationCap className="text-5xl text-purple-500 mx-auto mb-4" />,
    desc: "Constantly continues to learn new technologies and keeping up-to-date with the freshest trends.",
  },
];

// 🎯 All Tools (separated from skills)
const allTools = [
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaJsSquare className="text-yellow-500" />, name: "JavaScript" },
  { icon: <FaReact className="text-blue-400" />, name: "React" },
  { icon: <FaReact className="text-gray-800" />, name: "Next.js" },

  { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
  { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },

  { icon: <FaFigma className="text-pink-500" />, name: "Figma" },
  { icon: <SiCanva className="text-indigo-500" />, name: "Canva" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <FaFire className="text-red-500" />, name: "Firebase" },
  { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
];

const Page = () => {
  return (
    <div className="bg-black text-white py-20 px-6 pt-32 md:px-20 text-center">
          <div className="w-8/12 mx-auto">
        <h1 className="text-4xl font-bold text-center border-b-4 pb-2 mb-4">
          SKILLS
        </h1>
        </div>
      {/* Skill Descriptions */}
      <div className="grid md:grid-cols-3 gap-10 mt-16 mb-20">
        {skills.map((skill, index) => (
          <div key={index}>
            {skill.icon}
            <p className="text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </div>

      {/* All Tools Displayed Together */}
      <div className="grid grid-cols-6 w-10/12 mx-auto justify-center gap-6">
        {allTools.map((tool, index) => (
          <div
            key={index}
            className="w-24 h-24 flex items-center justify-center rounded-full shadow-md bg-gray-100 hover:scale-110 transition transform animate-bounce"
            style={{
              animationDuration: "3s",
              animationDelay: `${index * 0.2}s`,
              animationIterationCount: "infinite",
            }}
            title={tool.name}
          >
            {/* Set icon size here */}
            <div className="text-7xl">{tool.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
