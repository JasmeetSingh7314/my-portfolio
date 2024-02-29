import { gsap } from "gsap";
import React from "react";
import { useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { technologies } from "../../utils/tech";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Technologies() {
  gsap.registerPlugin(ScrollTrigger);
  const component = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      t1.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 == 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 == 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);
  return (
    <section
      className="overflow-x-hidden  w-[93vw] md:w-[96vw] xl:w-[98vw] 2xl:w-[98vw] medium:w-[98vw] lg:-mx-96  mb-24 mt-24"
      ref={component}
    >
      <header>
        <h1 className="text-4xl flex justify-center font-bold mb-5 leading tracking-tighter sm:text-7xl ">
          <span className="text-violet-400 tracking-wide">What I Use:</span>
        </h1>
      </header>
      {technologies.map((element, key) => (
        <div
          key={key}
          className=" tech-row flex  items-center justify-center gap-5 -mx-20 mb-8"
        >
          {[...Array(15)].map((_, i) => (
            <React.Fragment key={i}>
              <h1
                className={`text-5xl lg:text-7xl xl:text-8xl font-extrabold uppercase tracking-tighter `}
                style={
                  key != 1
                    ? {
                        color: i === 7 ? `${element.color}` : "",
                        opacity: i === 7 ? "1" : "0.45",
                      }
                    : {
                        color: i === 7 ? `${element.color}` : "",
                        opacity: i === 7 ? "1" : "0.45",
                      }
                }
              >
                {" "}
                {element.name}
              </h1>
              <span className="text-xl xl:text-3xl opacity-45">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
}
