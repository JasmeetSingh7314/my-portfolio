"use client";
import Grid from "@/components/photos/Grid";
import handleCursor from "@/utils/cursor";
import Typewriter from "typewriter-effect";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { Image } from "@nextui-org/react";

export default function photoPage() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline();
      t1.fromTo(
        ".mobile-slab",
        {
          y: 400,
          opacity: 0,
        },
        {
          y: -50,
          opacity: 1,
          duration: 0.2,
        }
      );
      t1.fromTo(
        ".text_jab",
        {
          opacity: 0,
        },
        { y: -50, opacity: 1, duration: 0.2 }
      );
      t1.fromTo(
        ".photo_slab",
        {
          y: 400,
          opacity: 0,
        },
        {
          y: -50,
          opacity: 1,
          duration: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <main
      onMouseMove={handleCursor}
      className="flex flex-col h-full items-center gap-20 justify-center  md:p-8  sm:p-2  lg:p-24 "
    >
      <div className="mobile-slab  sm:photo_slab flex flex-col items-center justify-center mb-8">
        <span className="sm:text_jab sm:text-right md:my-10 sm:my-8  relative text-center ml-10  text-8xl sm:text-9xl  pr-32  sm:ml-12 pt-32 sm:pt-12 sm:pb-12 py-16 tracking-tighter  backdrop-blur-sm sm:bg-me-with-himalayas rounded-md sm:h-[500px] bg-opacity-65 bg-cover text-white sm:text-black w-[80vw] ">
          <Typewriter
            options={{
              strings: ["WildLife", "Birds", "Nature"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <Grid />
      </div>
    </main>
  );
}
