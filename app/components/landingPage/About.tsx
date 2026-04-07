import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";
import RedCar from "@/public/red-car.webp";

export default function About() {
  return (
    <section className="min-h-screen bg-black py-20 px-8 space-y-5">
      <div className="flex items-center justify-center gap-5">
        <Image
          src={RedCar}
          alt="Shiny red car with metallic paint and a towel sitting on the trunk."
          className="w-1/2 -translate-y-5"
        />
        <Image
          src={RedCar}
          alt="Shiny red car with metallic paint and a towel sitting on the trunk."
          className="w-1/2 translate-y-5 "
        />
      </div>
      <div className="space-y-2 mt-30">
        <TextAnimate
          animation="slideRight"
          as="p"
          className="text-primary-color font-thin text-lg tracking-widest uppercase"
        >
          The Story
        </TextAnimate>
        <TextAnimate
          animation="slideRight"
          as="h2"
          className="text-5xl text-white font-extrabold tracking-tighter w-1/2"
        >
          Student Driven. Quality Obsessed.
        </TextAnimate>
      </div>
      <div className="space-y-10">
        <TextAnimate animate='slideRight' as='p' className='text-white/70 tracking-wide leading-8'>
          I&apos;ve always had a deep love for cars and an even deeper passion for restoring them to their full potential. Coming out of highschool, I started with my own car. Washing it every Sunday and making sure their isn&apos;t a spec of dust left.  
        </TextAnimate>
        <TextAnimate animate='slideRight' as='p' className='text-white/70 tracking-wide leading-8'>
          At Steele Shining Mobile Detailing, I will make sure your car looks and feels brand new. With a deep attention to detail and using top-end products, I will have your car looking better than when it first came off the lot.
        </TextAnimate>
      </div>
      <div className='flex items-center justify-start gap-16'>
        <p className='text-white text-2xl font-bold'>50+<span className="text-primary-color tracking-tight block text-lg">Cars Revived</span></p>
        <p className='text-white text-2xl font-bold'>5/5 <span className='text-primary-color font-bold tracking-tight block text-lg'>Rating</span></p>
      </div>
    </section>
  );
}
