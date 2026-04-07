import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import CTABtns from "../CTAButtons";

export default function Hero() {
  return (
    <section className="bg-[url('/hero-background.webp')] bg-cover bg-center h-screen bg-white">
      <section className="flex flex-col items-center justify-center gap-10 h-full bg-linear-to-r from-black/90 from-20% to-black/50 px-8">
        <section className="flex flex-col items-start gap-3 justify-center w-full">
          <div className="space-y-5">
            <TextAnimate
              animation="slideRight"
              as="p"
              className="text-primary-color text-md font-light"
              duration={0.8}
            >
              SS Mobile Detailing
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              as="h2"
              className="text-white text-6xl w-3/4 leading-15 font-medium tracking-tighter "
              duration={0.8}
            >
              Precision Details. Purpose Driven.
            </TextAnimate>
            <TextAnimate
              animation="slideRight"
              as="p"
              className="text-lg text-white/70 tracking-tightest leading-8 w-3/4"
              duration={0.8}
            >
              Mobile detailing by a student entrepreneur. Making your car shine to keep my future bright. 
            </TextAnimate>
          </div>
        </section>
        <CTABtns />
      </section>
    </section>
  );
}
