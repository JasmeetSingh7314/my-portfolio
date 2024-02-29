"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { base_photos } from "@/utils/photo";
import PhotoCard from "./PhotoCard";
import shuffle from "@/utils/photo";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Grid() {
  const [photos, setPhotos] = useState<any[]>([]);
  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          scrub: 3,
        },
      });
      t1.fromTo(
        ".photo-card",
        {
          y: 200,
          opacity: 0.78,
        },
        {
          y: 120,
          opacity: 0.98,
          stagger: 1.45,
          ease: "sine.in",
          duration: 0.3,
        }
      );
    }, comp);
    // const randomized = shuffle(base_photos);
    // setPhotos(randomized);
    return () => ctx.revert();
  }, [photos]);

  return (
    <section className="  w-5/6 py-6 md:px-6  dark:text-gray-50">
      <div
        className="  container grid grid-cols-1 gap-4 gap-y-28 lg:gap-y-20  mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        ref={comp}
      >
        {base_photos.map((element, index) => (
          <PhotoCard
            key={index}
            index={index}
            alt={element.name}
            link={element.link}
          />
        ))}
      </div>
    </section>
  );
}
