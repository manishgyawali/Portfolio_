import { Timeline } from "@/components/Packages/Timeline/timeline";
import React from "react";
const timelineData = [
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started my journey into web development with HTML, CSS, and JavaScript. I was amazed by how I could bring ideas to life using just code.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Got hands-on with React, Started learning Next.js and TypeScript. Built several client projects and my own design system using Tailwind CSS and shadcn/ui.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Images/ss4.png"
              alt="Client project"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/Images/ss.png"
              alt="Design system"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
        title: "2024",
        content: (
          <div>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Worked as a frontend developer intern at ARIBT for six months, where I contributed to real-world projects using React and Tailwind CSS. </p>
            <div className="grid ">
              <img
                src="/Images/aribt.png"
                alt="Client project"
                className="h-15 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
          
            </div>
          </div>
        ),
      },
      {
        title: "2025",
        content: (
          <div>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Launched my personal portfolio built with Next.js and started applying for frontend developer roles. Currently contributing to open-source UI components and working on freelance projects to sharpen my skills and build a solid foundation in frontend engineering.
            </p>
            {/* <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/portfolio-2025.png"
                alt="2025 portfolio"
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <img
                src="/images/freelance-work.png"
                alt="Freelance work"
                className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
            </div> */}
          </div>
        ),
      }
      
  ];
  
const page = () => {
  return (
    <div className="text-white py-20 px-6 md:px-20 pt-32 ">
      <div className="w-8/12 mx-auto"> <h1 className="text-4xl font-bold text-center border-b-4 pb-2 mb-4">
        EXPERIENCE
      </h1>
      <p className="text-center text-gray-400 mb-6">
        Here's a glimpse of the projects I've built — blending creativity, code,
        and problem-solving.
      </p></div>
     <div className="w-10/12 mx-auto">
     <Timeline data={timelineData} />{" "}
     </div>
    </div>
  );
};

export default page;
