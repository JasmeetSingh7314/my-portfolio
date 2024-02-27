import { useEffect } from "react";
import Lottie from "react-lottie";
import gsap from "gsap";

import { Button } from "@nextui-org/button";

import * as animationData from "../../public/assets/lotties/banner_lottie.json";
import Link from "next/link";
import textToChar from "@/utils/textToChar";
import Typewriter from "typewriter-effect";
import { roles } from "@/utils/qualities";

export default function Banner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    let cxt = gsap.context(() => {
      let t1 = gsap.timeline();

      t1.fromTo(
        ".banner",
        {
          y: 200,
          rotateY: -5,
          scale: 1,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          rotateY: 0,
          opacity: 1,
          stagger: 0.1,
        }
      );
      t1.fromTo(
        ".hi",
        {
          x: -20,
          rotateY: -5,
          scale: 0.5,
          opacity: 0.1,
        },
        {
          x: 0,
          scale: 1,
          rotateY: 0,
          opacity: 1,
        }
      );
      t1.fromTo(
        ".letter",
        {
          x: -20,
          rotateY: -5,
          scale: 0.5,
          opacity: 0,
        },
        {
          x: 0,
          scale: 1,
          rotateY: 0,
          opacity: 1,
          stagger: 0.1,
        }
      );

      t1.fromTo(
        ".button",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 0.98,
          stagger: 0.2,
          duration: 0.9,
        }
      );
    });
    return () => cxt.revert();
  }, []);

  const charArray = textToChar("Jasmeet Singh");

  return (
    <section className=" banner w-full xl:px-48 sm:px-2 xs:px-2 dark:text-gray-100 ">
      <div className="container flex sm:flex-col  justify-center px-2 py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl  font-bold leading-0 sm:text-6xl">
            <span className="hi dark:text-violet-400">Hi!</span>
            <br />I am
            <span className="flex justify-center">
              {charArray.map((element, index) => (
                <p key={index} className="letter">
                  {element}
                </p>
              ))}
            </span>
          </h1>
          <span className="  mt-6 mb-8  text-3xl sm:mb-12 uppercase font-extrabold text-transparent bg-gradient-to-tr from-indigo-500  to-indigo-100 bg-clip-text text-urbanist">
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <br className="hidden md:inline lg:hidden" />
          <div className=" button flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link href="/about">
              <Button
                variant="shadow"
                className="px-8 py-3 text-lg font-semibold rounded-lg dark:bg-violet-400 dark:text-gray-900"
              >
                About
              </Button>
            </Link>
            <Link
              href="/assets/Resume.pdf"
              target="_blank"
              download="Jasmeet_Software_Developer"
            >
              <Button
                variant="shadow"
                className=" px-8    py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Download CV
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:flex  hidden items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          {/* <Image src={logo}  alt="banner_img" /> */}
          <Lottie options={defaultOptions} height={400} />
        </div>
      </div>
    </section>
  );
}
