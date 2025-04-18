import { Contact } from "@/components/Contact/Contact";
import Submit from "@/components/Submit/Submit";
import React from "react";

import { FaTwitter, FaInstagram, FaEnvelope, FaGlobe } from "react-icons/fa";
const page = () => {
  return (
    <div className=" text-white py-20 px-6 md:px-20 w-8/12 mx-auto pt-32">
      <div className="flex flex-col gap-6 mx-auto text-center">
        <h2 className="text-4xl font-bold  text-white">Get In Touch</h2>
        <p className="text-gray-400 ">
          Donec ultricies lobortis eros, nec auctor nisl semper ultricies.
          Aliquam sodales nulla dolor, sed vulputate sapien efficitur ut. Etiam
          tincidunt ligula ut hendrerit semper. Quisque luctus lectus non turpis
          bibendum posuere. Morbi tortor nibh
        </p>
        <div className="flex items-center text-white gap-8 justify-center mb-4">
          <FaGlobe className="text-xl hover:text-purple-500" />
          <FaTwitter className="text-xl hover:text-purple-500" />
          <FaInstagram className="text-xl hover:text-purple-500" />
          <FaEnvelope className="text-xl hover:text-purple-500" />
        </div>

        <Contact />
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Name"
            className="p-4 rounded-lg bg-[#1f1f1f] border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-lg bg-[#1f1f1f] border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />

          <textarea
            rows="6"
            placeholder="Message"
            className="p-4 rounded-lg bg-[#1f1f1f] border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />

          {/* <button
            type="submit"
            className="w-full md:w-fit px-8 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button> */}
          <Submit />
        </form>
      </div>
    </div>
  );
};

export default page;
