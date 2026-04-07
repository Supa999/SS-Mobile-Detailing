import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import StarRating from "../StarRating";

type ReviewType = {
  review: string;
  client: string;
  rating: number;
  car: string;
};

const reviews: ReviewType[] = [
  {
    review:
      "SS Mobile Detailing took amazing car of my car. It looks even better than when I first got it! I will definitely be booking them again",
    client: "Kevin S",
    rating: 5,
    car: "Tesla Model S",
  },
  { review: "This is the cleanest my car has ever been. There were marks that I thought would never come off. One of the best cleans my car has ever gotten", client: "Ashley S", rating: 5, car: "Tesla Model X" },
  { review: "They were punctual and took complete care of my car. They treated my car as if it was one of their own. Extremely happy with their service", client: "Island S", rating: 5, car: "Tesla Model 3" },
];

function renderReviews() {
  return reviews.map((reviewItem, index) => {
    return (
        <div
        key={index}
          className="translate-x-1 rounded-xl bg-card-color flex flex-col items-start justify-center gap-5 p-5 border-l-4 border-primary-color w-full"
        >
          <StarRating rating={reviewItem.rating} />
          <p className="text-white/70">{reviewItem.review}</p>
          <div className="-space-y-1">
            <p className="text-white text-lg font-bold">{reviewItem.client}</p>
            <p className="text-white/70">{reviewItem.car} Owner</p>
          </div>
        </div>
    );
  });
}

export default function Testimonials() {
  return (
    <section className="min-h-screen bg-bg-color py-20 px-8 space-y-16">
      <div className="space-y-2">
        <TextAnimate
          animation="slideRight"
          as="p"
          duration={0.8}
          className="text-primary-color font-thin text-lg tracking-widest uppercase"
        >
          The Proof
        </TextAnimate>
        <TextAnimate
          animation="slideRight"
          as="h2"
          duration={0.8}
          className="text-5xl text-white font-extrabold tracking-tighter"
        >
          Verified Shine
        </TextAnimate>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        {renderReviews()}
      </div>
    </section>
  );
}
