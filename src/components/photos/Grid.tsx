"use client";
import React, { useEffect, useRef, useState } from "react";
import { base_photos } from "@/utils/photo";
import PhotoCard from "./PhotoCard";
import shuffle from "@/utils/photo";
import { gsap } from "gsap";

export default function Grid() {
  const [photos, setPhotos] = useState<any[]>([]);
  const comp = useRef(null);
  useEffect(() => {
    const randomized = shuffle(base_photos);
    setPhotos(randomized);

    let ctx = gsap.context(() => {
      let t2 = gsap.timeline({
        scrollTrigger: {
          start: "top",
          endTrigger: "Footer",
          scrub: 3,
        },
      });
      t2.fromTo(
        ".photo-card ",
        {
          y: 300,
          opacity: 0.6,
        },
        {
          y: 0,
          opacity: 0.98,
          stagger: 0.34,
          ease: "sine.in",
          duration: 0.56,
        }
      );
    }, comp);
    return () => ctx.revert();
  }, [photos]);

  return (
    <section className="  w-5/6 py-6 px-6  dark:text-gray-50">
      <div
        className="  container grid grid-cols-2 gap-4  mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        ref={comp}
      >
        {photos.map((element, index) => (
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
