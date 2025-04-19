"use client";
import React from "react";
import { ContainerScroll } from './../../../components/Packages/ScrollAnimation/container-scroll-animation';
import { Features } from "@/components/Packages/Features/Features";

export default function Page() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
           GIES  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
             Consultancy Website
              </span>
            </h1>
          </>
        }>
        <img
          src={`/Images/ss.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <Features />
    </div>
  );
}
