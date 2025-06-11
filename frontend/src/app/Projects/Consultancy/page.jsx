"use client";
import React from "react";
import { ContainerScroll } from "./../../../components/Packages/ScrollAnimation/container-scroll-animation";
import { Features } from "@/components/Packages/Features/Features";
import {
  SkeletonOne,
  SkeletonTwo,
} from "@/components/Packages/Features/Features";

const consultancyFeatures = [
  {
    title: "Easy Room Booking",
    description: "Users can book rooms in just a few clicks.",
    skeleton: <SkeletonOne />,
    className:
      "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
  },
  {
    title: "Admin Dashboard",
    description: "Manage listings, users and more from the dashboard.",
    skeleton: <SkeletonTwo />,
    className: "col-span-1 lg:col-span-3 border-b dark:border-neutral-800",
  },
];
export default function Page() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              GIES <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Consultancy Website
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/Images/ss.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      {/* <Features
        featureData={consultancyFeatures}
        heading="Features of Consultancy Website"
        subtext="This project comes with features that simplify the consultancy process."
      /> */}
    </div>
  );
}
