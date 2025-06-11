import Testimonials from "@/components/Packages/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen text-white p-6 font-sans py-20 px-6 md:px-20 pt-32">
      <div className="w-10/12 mx-auto">
        <h1 className="text-4xl font-bold text-center border-b-4 pb-2 mb-4">
          ABOUT <span className="text-purple-500">ME</span>
        </h1>
        <p className="text-center text-gray-400 mb-6 ">
          ALLOW ME TO INTRODUCE MYSELF.
        </p>

        <div className="flex  md:flex gap-5 md:gap-10 w-full mt-14 md:mt-20 items-center justify-center mb-10">
          {/* image */}
          <div className="relative w-6/12 mb-6 md:mb-0 md:mr-8">
            <div className="bg-white p-2 shadow-lg transform -rotate-6 w-fit">
              <img
                src="/Images/profile.jpg"
                alt="That's me"
                className=" w-72 h-48  md:w-60 md:h-48 object-cover"
              />
            </div>
          </div>
          {/* description */}
          <div className="text-gray-400 w-10/12 gap-4">
            <p>
              I'm obsessed with making things and even more obsessed with making
              things better. I've been in the business of creating since I hung
              my first painting on the fridge when I was 3. After graduating
              from the University of Kentucky, I've been actively involved in
              the web design community for the last 8 years. I've designed
              websites for small businesses, corporations, nonprofits, churches,
              musicians and more. I also started a design blog,{" "}
              <a href="#" className="text-purple-500 underline">
                Visual Swirl
              </a>
              , where I share inspiration, tutorials, and resources.
            </p>
            <p>
              My specialty is front-end web design and development, making pixel
              magic in photoshop and turning it into beautiful, semantic HTML &
              CSS. My interests, however, extend beyond the web and I love
              helping people with branding, print design and marketing strategy.
              I even love making designs move by creating professional{" "}
              <a href="#" className="text-purple-500 underline">
                motion graphics and video
              </a>
              .
            </p>
            <p>
              When I'm not designing, I'm probably hanging out with my wife,
              being entertained by our amazing 3 year old little girl, watching
              college basketball, playing golf or messing around on something
              inspired by Steve Jobs.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default page;
