import { qualities } from "@/utils/qualities";
import Lottie from "react-lottie";
import * as animationData from "../../../public/assets/lotties/hi.json";
import { Image, Link } from "@nextui-org/react";
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
                Hey, I’m Jasmeet—a developer passionate about building
                innovative solutions at the intersection of{" "}
                <span className="text-yellow-400">
                  Frontend Development, AI, and Web3.{" "}
                </span>
                <br />
                <br />
                I’m the creator of{" "}
                <span className="text-purple-400 font-bold">Tutor.ai</span>, an
                AI-powered platform that revolutionizes language learning by
                generating personalized lessons, quizzes, and gamified
                experiences.
                <br /> To bring it to life, I leveraged Python, Pydantic, and
                creative problem-solving (like integrating OpenRouter when
                OpenAI wasn’t an option).
                <br />
                <br />
                I’m also the co-founder of{" "}
                <Link
                  href="www.playowl.xyz"
                  className="text-red-500 font-bold text-xl"
                >
                  Owl
                </Link>
                , a blockchain-based gaming marketplace that solves real-world
                problems in the gaming industry. Our work on Owl won 1st place
                at TezAsia2k23 and secured a{" "}
                <span className="text-yellow-400">grant</span>, showcasing my
                ability to deliver impactful, decentralized solutions.
                <br />
                <br />
                When I’m not coding, you’ll find me exploring my love for
                wildlife photography or diving into topics like history and
                emerging tech.
                <br /> Let’s push the boundaries of what’s possible in the
                digital world together!
              </span>

              <br />
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
