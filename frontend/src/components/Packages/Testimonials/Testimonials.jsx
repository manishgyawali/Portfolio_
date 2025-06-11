"use client";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import Image from "next/image";
import { FaTwitter } from "react-icons/fa";

const testimonials = [
  {
    name: "Jane Doe",
    image: "/Images/client1.jpeg",
    text: "Working with Manish was a game-changer. His designs are clean and efficient!",
  },
  {
    name: "John Smith",
    image: "/Images/client3.jpeg",
    text: "Highly recommend Manish for frontend work. His UI/UX skills are next-level!",
  },
  {
    name: "Emily Rose",
    image: "/Images/client4.jpeg",
    text: "Manish delivered our project ahead of time with outstanding quality.",
  },
  {
    name: "Carlos Rivera",
    image: "/Images/client1.jpeg",
    text: "Professional, creative, and reliable — Manish exceeded expectations.",
  },
  {
    name: "Lina Park",
    image: "/Images/client5.jpeg",
    text: "Great communication and amazing results. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <div className="relative overflow-hidden bg-black py-10 ">
      <div className="animate-marquee flex w-max gap-6 px-4">
   {testimonials.concat(testimonials).map((t, index) => (
  <div
    key={index}
    className="relative flex  bg-[#111827] text-white rounded-2xl shadow-lg p-6 min-w-[300px] max-w-[300px] hover:scale-105 transition-transform duration-300"
  >
    {/* Twitter logo in top right */}


  <div>
      <div className="flex items-center gap-4 mb-4">
      <Image
        src={t.image}
        alt={t.name}
        width={64}
        height={64}
        className="rounded-full object-cover w-16 h-16"
      />
      <div>
        <div className="flex items-center gap-1">
          <h4 className="font-semibold">{t.name}</h4>
          {/* <Image
            src="/icons/verified.svg"
            alt="Verified"
            width={16}
            height={16}
          /> */}<RiVerifiedBadgeFill className="text-[#1da1f2]"/>
        </div>
        <p className="text-sm text-gray-400">@{t.name.toLowerCase().replace(/\s+/g, '')}</p>
      </div>
    </div>

    <p className="text-gray-400 text-sm italic">“{t.text}”</p>
  </div>   <FaTwitter className="text-[#1da1f2] text-3xl"/>
  </div>
))}

      </div>

      {/* Softer Gradient Overlays */}
      <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
    </div>
  );
}
