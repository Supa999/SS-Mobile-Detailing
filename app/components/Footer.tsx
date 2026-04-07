import Link from "next/link";
import InstagramSVG from "../svg/InstagramSVG";
import FacebookSVG from "../svg/FacebookSVG";
import { FileChartColumn } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-8 bg-card-color">
      <h1 className="text-white text-2xl font-bold tracking-tighter uppercase text-center">
        SS Mobile Detailing
      </h1>
      <p className="text-white/50">
        &copy;{new Date().getFullYear()} Steele Standing Mobile Detailing.{" "}
      </p>
      <p className="text-white/50 text-xl font-bold tracking-tighter mt-5">
        Socials
      </p>
      <div className="flex items-center justify-center gap-5 mt-3">
        <a href='https://www.instagram.com/_ss_auto_detailing_/' target='_blank' rel='noopener noreferrer'>
          <InstagramSVG className="size-12 text-primary-color" />
        </a>
        <a href='https://www.facebook.com/profile.php?id=61561737745249' rel='noopener noreferrer'>
          <FacebookSVG className="size-12 text-primary-color" />
        </a>
      </div>
    </footer>
  );
}
