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

const skills = [
  {
    title: "Frontend Development",
    icon: <FaTools className="text-4xl text-cyan-600 mx-auto mb-4" />,
    desc: "Developing blazing fast web applications for seamless user interaction.",
    tools: [
      { icon: <FaJsSquare />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaFigma />, name: "Figma" },
      { icon: <SiCanva />, name: "Canva" },
    ],
  },
  {
    title: "Responsive & Backend",
    icon: <FaDatabase className="text-4xl text-cyan-600 mx-auto mb-4" />,
    desc: "Mobile-first, responsive design layout for all devices is a top priority.",
    tools: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaFire />, name: "Firebase" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  },
  {
    title: "Learning & Growth",
    icon: <FaGraduationCap className="text-4xl text-cyan-600 mx-auto mb-4" />,
    desc: "Constantly continues to learn new technologies and keeping up-to-date with the freshest trends.",
    tools: [
      // { icon: <FaRedux />, name: "Redux" },
      { icon: <SiTypescript />, name: "TypeScript" },
    ],
  },
];

const page = () => {
  return (
    <section className="bg-black text-white py-20 px-6 pt-32 md:px-20 text-center">
      <h2 className="text-4xl font-bold mb-12 ">SKILLS</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div key={index}>
            {skill.icon}
            <p className="text-gray-600 mb-6">{skill.desc}</p>
            <div className="flex flex-wrap justify-center gap-6 text-5xl text-gray-700">
              {skill.tools.map((tool, i) => (
                <div
                  key={i}
                  className="w-16 h-16 flex items-center justify-center rounded-full shadow-md bg-gray-100 hover:scale-110 transition"
                  title={tool.name}
                >
                  {tool.icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
