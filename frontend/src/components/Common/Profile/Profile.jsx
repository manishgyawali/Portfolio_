import React from "react";
import { FaTwitter, FaInstagram, FaEnvelope, FaGlobe } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="hidden md:flex fixed top-[54%] left-12 transform -translate-y-1/2 z-50">
      <div className="bg-[#1c1c1e] w-[280px] lg:w-[450px]  py-6 flex flex-col gap-6 items-center rounded-3xl shadow-lg">
        <img
          src="/Images/profile.jpg"
          alt="Profile"
          className="w-60 h-60 object-cover rounded-lg"
        />
        <div className="flex flex-col gap-1">
          {" "}
          <h1 className="text-2xl text-white font-bold  text-center">
            MANISH GYAWALI
          </h1>
          <p className=" text-gray-400  text-center">
            Product Designer & Developer
          </p>
          <p className="text-sm text-gray-400  text-center">Butwal, Nepal</p>
        </div>
        <div className="flex text-white gap-8">
          <FaGlobe className="text-xl hover:text-purple-500" />
          <FaTwitter className="text-xl hover:text-purple-500" />
          <FaInstagram className="text-xl hover:text-purple-500" />
          <FaEnvelope className="text-xl hover:text-purple-500" />
        </div>
        <div className="text-center w-7/12 ">
          <button className="w-full px-2 py-2 bg-purple-700 text-lg rounded-xl text-white">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
