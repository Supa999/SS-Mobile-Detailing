import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Header() {
  return (
    <header className="flex fixed top-0 left-0 w-full h-26 items-center justify-between bg-black p-4 z-50">
      <div className='flex-1/2'>
        <TextAnimate
          animation="slideRight"
          as="h1"
          className="text-white text-shadow-2xs text-shadow-primary-color text-4xl flex-1/2 font-bold"
        >
          SS Mobile Detailing
        </TextAnimate>
      </div>
      <div className='flex-1/2 flex items-center justify-center'>
        <button className='text-3xl font-bold p-2 bg-linear-to-r from-red-300 to-primary-color rounded-lg text-black shadow-[0_0_15px_4px_#FF0000]'>
          Book Now
        </button>
      </div>
    </header>
  );
}
