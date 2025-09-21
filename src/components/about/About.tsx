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
              <span className=" words text-wrap  mt-6 mb-8  md:text-xl xl:text-lg 2xl:text-xl text-white/[0.76] sm:mb-12 text-urbanist">
                <span className="mb-8">
                  Hey, I’m Jasmeet, a developer passionate about building
                  innovative solutions at the intersection of{" "}
                  <span className="text-yellow-400">
                    Frontend Development, AI, and Web3.{" "}
                  </span>
                  <br />
                  <br />
                  Most recently, I worked at{" "}
                  <span className="text-green-400 font-bold">Growhut</span> on
                  their flagship product Surge—real-time collaboration software
                  used by hundreds of concurrent users. My contributions
                  included:
                  <br />
                  <br />
                  <ul className="list-disc list-inside space-y-2 text-white/[0.76] ml-4">
                    <li>
                      Built{" "}
                      <span className="text-yellow-400">call reactions</span>{" "}
                      with synchronized sound design, optimized animations, and
                      resilient performance even on poor networks (via audio
                      preloading and prewarming).
                    </li>
                    <li>
                      Implemented{" "}
                      <span className="text-yellow-400">
                        presence indicators
                      </span>{" "}
                      (like WhatsApp’s last seen/online) for improved real-time
                      awareness.
                    </li>
                    <li>
                      Developed{" "}
                      <span className="text-yellow-400">ephemeral chats</span>{" "}
                      for conferences and meetings using Zustand logic, enabling
                      temporary DMs and group conversations.
                    </li>
                    <li>
                      Integrated{" "}
                      <span className="text-yellow-400">
                        video backgrounds and blur effects
                      </span>{" "}
                      by combining optimized frontend logic with LiveKit
                      systems.
                    </li>
                    <li>
                      Contributed to{" "}
                      <span className="text-yellow-400">ShieldX</span> with a
                      template management system and multiple production-ready
                      features.
                    </li>
                  </ul>
                  <br />
                  Before that, I created{" "}
                  <span className="text-purple-400 font-bold">
                    Tutor.ai
                  </span>{" "}
                  and co-founded{" "}
                  <Link
                    href="www.playowl.xyz"
                    className="text-red-500 font-bold text-xl"
                  >
                    Owl
                  </Link>
                  . Tutor.ai is an AI-powered system built with Python (FastAPI)
                  and Node.js where AI acts as a teacher—generating lessons from
                  a learner’s weaknesses and helping track progress with
                  accuracy.
                  <br />
                  <br /> Owl is a blockchain-based gaming marketplace that won{" "}
                  <span className="text-yellow-400">
                    1st place at TezAsia2k23
                  </span>
                  , secured a <span className="text-yellow-400">grant</span>,
                  and was developed further to explore real-world adoption.
                  Together, these projects showcase my ability to blend{" "}
                  <span className="text-yellow-400">
                    AI, frontend, and blockchain
                  </span>{" "}
                  into impactful solutions.
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

              <br />
            </span>

            <div className="mt-12 space-y-12"></div>
          </div>
          <div
            aria-hidden="true"
            className=" lg:flex  hidden max-h-[668px]    lg:mt-0 mb-8 lg:px-48 lg:pb-12 xl:px-0  h-full"
          >
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </section>
  );
}
