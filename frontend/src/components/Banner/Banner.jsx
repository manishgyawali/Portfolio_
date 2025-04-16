import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col pt-32 justify-center px-6  bg-black text-white ">
      {/* Heading */}
      <div className="flex flex-col gap-4 mb-8">
        {" "}
        <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold leading-tight">
          Transforming Your <br />
          Ideas into <span className="text-purple-500">Reality</span>
        </h1>
        {/* Subheading */}
        <p className="text-gray-300 text-lg w-10/12  ">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-10 mb-10">
        <div>
          <h2 className="text-4xl font-bold">+12</h2>
          <p className="text-gray-400 uppercase text-sm mt-2">
            Years of Experience
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">+46</h2>
          <p className="text-gray-400 uppercase text-sm mt-2">
            Projects Completed
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">+20</h2>
          <p className="text-gray-400 uppercase text-sm mt-2">
            Worldwide Clients
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-6">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-purple-700 transition">
          Let's Talk
        </button>
        <button className="text-purple-500 font-semibold  text-lg">
          My Work →
        </button>
      </div>
    </div>
  );
};

export default Banner;
