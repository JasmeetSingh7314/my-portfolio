import { qualities } from "@/utils/qualities";
import Lottie from "react-lottie";
import * as animationData from "../../../public/assets/lotties/hi.json";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function About() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline();
      t1.fromTo(
        ".about-section",
        {
          y: 400,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        }
      );
     
    });
    return () => ctx.revert();
  }, []);
  return (
    <section id="about" className="  lg:about-section dark:text-gray-100">
      <div className="container max-w-xl p-2 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">
            About Me
          </h2>
          <p className="max-w-3xl mx-auto mt-4 md:text-xl text-center dark:text-gray-400">
            Friendly . Curious . Opportunistic
          </p>
        </div>
        <div className="grid lg:gap-8 xl:grid-cols-2 xl:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-widest mb-10 sm:text-4xl dark:text-gray-50">
              Background
            </h3>
            <span className=" words text-wrap  mt-6 mb-8  md:text-xl xl:text-lg 2xl:text-xl text-white/[0.76] sm:mb-12 text-urbanist">
              <span className="mb-8">
                Hey, I am Jasmeet! I grew up in the beautiful city of Delhi and
                love all things creative. From the humid forests to the vibrant
                city streets, my surroundings have always fueled my passion for
                creativeness and coding. <br />
              </span>
              As a self-taught developer, I found my calling in blending
              artistic flair with technical skill.
              <br /> My journey has led me to specialize in{" "}
              <span className="text-yellow-400/[0.98] mx-2 text-2xl">
                front-end development{" "}
              </span>
              , where I craft interactive experiences that are not just
              functional, but also visually stunning. <br /> When I am not
              coding, you will find me exploring various topics ranging from
              History to Wildlife. I love wildlife and am a secret amateur
              photographer myself check out my work{" "}
              <a href="/photos" className="italic text-gray-200">
                here.{" "}
              </a>
              <br />
              <span className="mt-6">
                Join me as I continue to push the boundaries of what is possible
                in the digital world!
              </span>
            </span>

            <div className="mt-12 space-y-12"></div>
          </div>
          <div
            aria-hidden="true"
            className=" lg:flex  hidden    lg:mt-0 mb-8 lg:px-48 lg:pb-12 xl:px-0  h-full"
          >
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </section>
  );
}
