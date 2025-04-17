import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaUserAlt,
  FaFolder,
  FaTools,
  FaBriefcase,
  FaPencilAlt,
  FaEnvelope,
} from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="fixed shadow-2xl w-5/12 mx-auto top-0 left-0 right-0 bg-[#1f1f1f] text-white rounded-2xl z-50 ">
      <div className="flex justify-around items-center py-4">
        <Link href="/">
          <button className="text-gray-300 hover:text-white text-xl">
            <FaHome />
          </button>
        </Link>

        <Link href="/About">
          <button className="text-gray-300 hover:text-white text-xl">
            <FaUserAlt />
          </button>
        </Link>

        <Link href="Projects">
          <button className="text-gray-300 hover:text-white text-xl">
            <FaFolder />
          </button>
        </Link>

        <Link href="/Skills">
          <button className="text-gray-300 hover:text-white text-xl">
            <FaTools />
          </button>
        </Link>

        <Link href="/Experience">
          <button className="text-gray-300 hover:text-white text-xl">
            <FaBriefcase />
          </button>
        </Link>

        <Link href="/Blog">
          <button className="text-gray-300 hover:text-white text-xl">
            <FaPencilAlt />
          </button>
        </Link>

        <Link href="/Contact">
          <button className="text-gray-300 hover:text-white text-xl">
            <FaEnvelope />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
