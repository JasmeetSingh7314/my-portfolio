"use client";
import Accordian from "@/components/projects/Accordian";
import handleCursor from "@/utils/cursor";

export default function ProjectsPage() {
  return (
    <main
      onMouseMove={handleCursor}
      className="flex flex-col md:p-8  sm:p-2  lg:p-16 xl:p-24 "
    >
      <span className=" text-6xl sm:text-8xl pb-12 tracking-tighter text-center">
        My Projects
      </span>
      <Accordian />
    </main>
  );
}
