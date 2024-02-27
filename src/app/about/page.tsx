"use client";
import About from "@/components/about/About";
import Education from "@/components/about/Education";
import TechStack from "@/components/about/TechStack";
import Technologies from "@/components/about/Technologies";
import handleCursor from "@/utils/cursor";

export default function AboutPage() {
  return (
    <main
      onMouseMove={handleCursor}
      className="flex flex-col items-center justify-center p-6 md:p-2 lg:px-16 xl:px-48"
    >
      <About />
      <Technologies />
      <TechStack />
      <Education />
    </main>
  );
}
